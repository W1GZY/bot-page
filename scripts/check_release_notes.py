"""Fail when a new bot module or command has no What's New entry.

`site_sync.py` reports the gap, but a report is easy to leave for later. This
gate compares the bot's current module keys and command paths with the snapshot
in `release_notes_baseline.json`. Anything new has to be named by a
`data-release` block on `whats-new.html`, or by the page copy for a module or an
exact command.

    data-release='{"modules": ["votemute"], "commands": ["/votemute"]}'

A slash command entry covers itself and its subcommands, so `/votemute` covers
`/votemute start` too. A right-click app has to be named exactly. `--update-baseline`
records the current bot only after the page covers every addition; with no
baseline yet it writes one directly, which is the bootstrap. Exit code is 1 for
an uncovered addition and 2 for a setup error.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
from dataclasses import dataclass
from datetime import date
from pathlib import Path

SCRIPTS_DIR = Path(__file__).resolve().parent
SITE_ROOT = SCRIPTS_DIR.parent
DEFAULT_BOT_REPO = SITE_ROOT.parent / "alert"
PAGE_PATH = SITE_ROOT / "whats-new.html"
BASELINE_PATH = SCRIPTS_DIR / "release_notes_baseline.json"

sys.path.insert(0, str(SCRIPTS_DIR))

from site_sync import module_keys, normalize_words, registered_commands  # noqa: E402

_COMMENT = re.compile(r"<!--.*?-->", re.DOTALL)
_SCRIPT_OR_STYLE = re.compile(r"<(script|style)\b.*?</\1\s*>", re.DOTALL | re.IGNORECASE)
_TAG = re.compile(r"<[^>]+>", re.DOTALL)
_DATA_RELEASE = re.compile(
    r"""data-release\s*=\s*(?P<quote>["'])(?P<body>.*?)(?P=quote)""",
    re.DOTALL,
)
_COMMAND = re.compile(r"/[a-z0-9][a-z0-9_]*(?: [a-z][a-z0-9_-]*){0,3}")


class SetupError(Exception):
    """A missing or unreadable input, rather than a release-note finding."""


@dataclass(frozen=True)
class Snapshot:
    """The module keys and command paths the bot had when the baseline was made."""

    modules: frozenset[str]
    commands: frozenset[str]


@dataclass(frozen=True)
class Declarations:
    """What the page's data-release blocks claim, and any malformed ones."""

    modules: frozenset[str]
    commands: frozenset[str]
    problems: tuple[str, ...]


@dataclass(frozen=True)
class Coverage:
    """Additions the page does not cover, plus malformed declarations."""

    modules: tuple[str, ...]
    commands: tuple[str, ...]
    problems: tuple[str, ...]

    @property
    def ok(self) -> bool:
        return not (self.modules or self.commands or self.problems)


def _read(path: Path, label: str) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError) as exc:
        raise SetupError(f"could not read {label} at {path}: {exc}") from exc


def _blank_comments(match: re.Match[str]) -> str:
    """Replace a comment with spaces, keeping every newline for line numbers."""
    return re.sub(r"[^\n]", " ", match.group(0))


def visible_text(page: str) -> str:
    """The page's readable text, with comments, scripts and tags removed."""
    without_comments = _COMMENT.sub(" ", page)
    without_code = _SCRIPT_OR_STYLE.sub(" ", without_comments)
    return _TAG.sub(" ", html.unescape(without_code))


def release_declarations(page: str) -> Declarations:
    """Every data-release block, ignoring examples written inside comments."""
    modules: set[str] = set()
    commands: set[str] = set()
    problems: list[str] = []
    markup = _COMMENT.sub(_blank_comments, page)

    for match in _DATA_RELEASE.finditer(markup):
        line = markup.count("\n", 0, match.start()) + 1
        raw = html.unescape(match.group("body"))
        try:
            data = json.loads(raw)
        except json.JSONDecodeError as exc:
            problems.append(f"line {line}: data-release is not JSON ({exc.msg})")
            continue
        if not isinstance(data, dict):
            problems.append(f"line {line}: data-release must be a JSON object")
            continue
        for key, target in (("modules", modules), ("commands", commands)):
            value = data.get(key, [])
            if not isinstance(value, list) or not all(
                isinstance(item, str) and item.strip() for item in value
            ):
                problems.append(f"line {line}: {key} must be a list of non-empty strings")
                continue
            target.update(item.strip() for item in value)

    return Declarations(frozenset(modules), frozenset(commands), tuple(problems))


def page_command_paths(page: str, known: frozenset[str]) -> frozenset[str]:
    """Every known command path the page shows.

    A citation may run into the sentence after it (`/votemute start opens a
    card`), so the longest prefix that is a registered command is the one
    recorded. The words after it are prose, not a subcommand.
    """
    found: set[str] = set()
    for match in _COMMAND.finditer(visible_text(page).lower()):
        words = match.group(0).split()
        for cut in range(len(words), 0, -1):
            candidate = " ".join(words[:cut])
            if candidate in known:
                found.add(candidate)
                break
    return frozenset(found)


def page_words(page: str) -> str:
    """Page text folded the way module keys are folded."""
    return normalize_words(visible_text(page))


def command_declared(command: str, declared: frozenset[str]) -> bool:
    """A declared slash command covers its subcommands; a label is exact."""
    return any(
        command == item or (item.startswith("/") and command.startswith(item + " "))
        for item in declared
    )


def find_uncovered(current: Snapshot, baseline: Snapshot, page: str) -> Coverage:
    """New modules and commands that the page neither names nor declares."""
    declarations = release_declarations(page)
    words = page_words(page)
    page_text = visible_text(page).lower()
    shown_commands = page_command_paths(page, current.commands)
    new_modules = sorted(current.modules - baseline.modules)
    new_commands = sorted(current.commands - baseline.commands)

    missing_modules = tuple(
        module
        for module in new_modules
        if module not in declarations.modules and normalize_words(module) not in words
    )
    missing_commands = tuple(
        command
        for command in new_commands
        if command not in shown_commands
        and not command_declared(command, declarations.commands)
        and command.lower() not in page_text
    )
    return Coverage(missing_modules, missing_commands, declarations.problems)


def command_roots(commands: tuple[str, ...]) -> list[str]:
    """One root per missing slash command; a right-click label stays whole."""
    return sorted(
        {command.split()[0] if command.startswith("/") else command for command in commands}
    )


def coverage_lines(coverage: Coverage) -> list[str]:
    """The findings and a ready-to-paste data-release block."""
    lines = [f"  {problem}" for problem in coverage.problems]
    if coverage.modules:
        lines.append(f"  {len(coverage.modules)} new module(s) with no What's New entry:")
        lines.extend(f"    {module}" for module in coverage.modules)
    if coverage.commands:
        lines.append(f"  {len(coverage.commands)} new command(s) with no What's New entry:")
        lines.extend(f"    {command}" for command in coverage.commands)

    suggestion: dict[str, list[str]] = {}
    if coverage.modules:
        suggestion["modules"] = list(coverage.modules)
    if coverage.commands:
        suggestion["commands"] = command_roots(coverage.commands)
    if suggestion:
        lines.append("  add a dated entry to whats-new.html with:")
        lines.append(f"    data-release='{json.dumps(suggestion)}'")
    return lines


def _print_coverage(coverage: Coverage) -> None:
    for line in coverage_lines(coverage):
        print(f"release-notes: {line}")


def load_snapshot(path: Path) -> Snapshot:
    """Read the recorded snapshot, naming the bad field rather than guessing."""
    try:
        data = json.loads(_read(path, "the baseline"))
    except json.JSONDecodeError as exc:
        raise SetupError(f"{path.name} is not valid JSON: {exc}") from exc
    if not isinstance(data, dict):
        raise SetupError(f"{path.name} must hold a JSON object")
    if "modules" not in data or "commands" not in data:
        raise SetupError(f"{path.name} needs both modules and commands")

    values: dict[str, tuple[str, ...]] = {}
    for key in ("modules", "commands"):
        raw = data[key]
        if not isinstance(raw, list) or not all(
            isinstance(item, str) and item.strip() for item in raw
        ):
            raise SetupError(f"{path.name} needs {key} as a list of non-empty strings")
        values[key] = tuple(item.strip() for item in raw)
    return Snapshot(frozenset(values["modules"]), frozenset(values["commands"]))


def current_snapshot(bot_repo: Path) -> Snapshot:
    """Read the bot's modules and commands without importing discord."""
    if not (bot_repo / "cogs").is_dir():
        raise SetupError(f"no bot cogs at {bot_repo} (pass --bot PATH)")
    try:
        modules = module_keys(bot_repo)
        commands = registered_commands(bot_repo)
    except Exception as exc:
        raise SetupError(f"could not read the bot at {bot_repo}: {exc}") from exc
    if not modules or not commands:
        raise SetupError(f"could not read modules or commands from {bot_repo}")
    return Snapshot(frozenset(modules), frozenset(commands))


def write_snapshot(path: Path, snapshot: Snapshot) -> None:
    payload = {
        "schema": 1,
        "generated_at": date.today().isoformat(),
        "modules": sorted(snapshot.modules),
        "commands": sorted(snapshot.commands),
    }
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(payload, indent=4) + "\n", encoding="utf-8", newline="\n"
    )


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--bot", type=Path, default=DEFAULT_BOT_REPO, help="path to the bot checkout")
    parser.add_argument("--page", type=Path, default=PAGE_PATH, help="the What's New page")
    parser.add_argument("--baseline", type=Path, default=BASELINE_PATH, help="the recorded snapshot")
    parser.add_argument(
        "--update-baseline",
        action="store_true",
        help="record the current bot once the page covers every addition",
    )
    args = parser.parse_args(argv)

    try:
        current = current_snapshot(args.bot.resolve())
        page = _read(args.page, "the What's New page")
    except SetupError as exc:
        print(f"release-notes: error - {exc}", file=sys.stderr)
        return 2

    baseline_exists = args.baseline.exists()
    if baseline_exists:
        try:
            baseline = load_snapshot(args.baseline)
        except SetupError as exc:
            print(f"release-notes: error - {exc}", file=sys.stderr)
            return 2
    else:
        baseline = Snapshot(frozenset(), frozenset())

    coverage = find_uncovered(current, baseline, page)
    if args.update_baseline:
        if coverage.problems or (baseline_exists and not coverage.ok):
            print("release-notes: baseline not updated; fix the page first", file=sys.stderr)
            _print_coverage(coverage)
            return 1
        write_snapshot(args.baseline, current)
        note = "" if baseline_exists else " (bootstrap)"
        print(
            f"release-notes: wrote {args.baseline} with {len(current.modules)} modules "
            f"and {len(current.commands)} commands{note}"
        )
        return 0

    if not baseline_exists:
        print(
            f"release-notes: error - no baseline at {args.baseline}; "
            "run --update-baseline once",
            file=sys.stderr,
        )
        return 2
    if not coverage.ok:
        print("release-notes: new bot features have no What's New entry")
        _print_coverage(coverage)
        return 1

    print(
        f"release-notes: OK - {len(current.modules)} modules and "
        f"{len(current.commands)} commands are covered by the baseline"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
