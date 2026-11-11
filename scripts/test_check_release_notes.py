"""Tests for scripts/check_release_notes.py, the What's New gate.

The gate compares the bot's current modules and commands with a recorded
baseline. A feature can ship and never reach the page, so every new item has to
be declared by a data-release block or named in the page copy. Both halves are
pinned here: a new module or command fails without an entry, and a declared or
described one passes without noise.

    py -m unittest discover -s scripts -p "test_check_release_notes.py" -v
"""

from __future__ import annotations

import contextlib
import io
import json
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

SCRIPTS_DIR = Path(__file__).resolve().parent
SITE_ROOT = SCRIPTS_DIR.parent

sys.path.insert(0, str(SCRIPTS_DIR))

import check_release_notes as gate  # noqa: E402


def snapshot(modules=(), commands=()) -> gate.Snapshot:
    return gate.Snapshot(frozenset(modules), frozenset(commands))


def page(*entries: str) -> str:
    return "<!DOCTYPE html><html><body>" + "".join(entries) + "</body></html>"


def release(**data) -> str:
    return f"<article data-release='{json.dumps(data)}'>entry</article>"


class ReleaseDeclarationsTests(unittest.TestCase):
    """What the page says a release entry covers."""

    def test_block_is_read(self) -> None:
        found = gate.release_declarations(
            release(modules=["votemute"], commands=["/votemute"])
        )
        self.assertEqual(found.modules, frozenset({"votemute"}))
        self.assertEqual(found.commands, frozenset({"/votemute"}))
        self.assertEqual(found.problems, ())

    def test_example_inside_a_comment_is_ignored(self) -> None:
        source = (
            "<!-- data-release='{\"modules\": [\"hidden\"]}' -->"
            + release(modules=["votemute"])
        )
        found = gate.release_declarations(source)
        self.assertNotIn("hidden", found.modules)
        self.assertIn("votemute", found.modules)

    def test_malformed_json_is_reported(self) -> None:
        found = gate.release_declarations("<article data-release='{modules: nope}'>")
        self.assertTrue(any("not JSON" in problem for problem in found.problems), found.problems)

    def test_non_object_is_reported(self) -> None:
        found = gate.release_declarations("<article data-release='[\"votemute\"]'>")
        self.assertTrue(
            any("must be a JSON object" in problem for problem in found.problems),
            found.problems,
        )

    def test_bad_module_list_is_reported(self) -> None:
        found = gate.release_declarations(release(modules="votemute"))
        self.assertTrue(
            any("modules must be a list" in problem for problem in found.problems),
            found.problems,
        )

    def test_context_menu_label_is_read(self) -> None:
        found = gate.release_declarations(release(commands=["Right-click: Add Wizard"]))
        self.assertEqual(found.commands, frozenset({"Right-click: Add Wizard"}))
        self.assertEqual(found.problems, ())

    def test_escaped_json_in_a_double_quoted_attribute_is_read(self) -> None:
        source = (
            '<article data-release="{&quot;modules&quot;: [&quot;birthdays&quot;]}">'
            "</article>"
        )
        found = gate.release_declarations(source)
        self.assertEqual(found.modules, frozenset({"birthdays"}))
        self.assertEqual(found.problems, ())


class PageCommandTests(unittest.TestCase):
    """Command paths the page shows, resolved against the registry."""

    def test_citation_records_the_longest_known_prefix(self) -> None:
        known = frozenset({"/votemute", "/votemute start"})
        found = gate.page_command_paths("<code>/votemute start opens a card</code>", known)
        self.assertIn("/votemute start", found)
        self.assertNotIn("/votemute", found)

    def test_a_lone_group_is_still_a_command(self) -> None:
        known = frozenset({"/votemute"})
        found = gate.page_command_paths("<code>/votemute</code>", known)
        self.assertEqual(found, known)

    def test_tag_attributes_are_not_commands(self) -> None:
        found = gate.page_command_paths('<a href="/docs.html">Guide</a>', frozenset({"/docs"}))
        self.assertNotIn("/docs", found)

    def test_plain_prose_still_names_a_command(self) -> None:
        known = frozenset({"/stats digest"})
        self.assertIn("/stats digest", gate.page_command_paths("Run /stats digest weekly.", known))

    def test_script_body_is_not_page_copy(self) -> None:
        source = page("<script>const moduleKey = 'votemute';</script>")
        self.assertNotIn("votemute", gate.page_words(source))
        self.assertEqual(gate.page_command_paths(source, frozenset({"/votemute"})), frozenset())


class CoverageTests(unittest.TestCase):
    """Which additions the page covers."""

    def test_new_module_without_an_entry_is_reported(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known", "new"], ["/known"]),
            snapshot(["known"], ["/known"]),
            page("<p>Old features</p>"),
        )
        self.assertEqual(found.modules, ("new",))
        self.assertEqual(found.commands, ())
        self.assertFalse(found.ok)

    def test_new_module_declared_is_quiet(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known", "new"], ["/known"]),
            snapshot(["known"], ["/known"]),
            page(release(modules=["new"])),
        )
        self.assertEqual(found, gate.Coverage((), (), ()))

    def test_new_module_named_in_copy_is_quiet(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known", "votemute"], ["/known"]),
            snapshot(["known"], ["/known"]),
            page("<h2>Vote Mutes</h2>"),
        )
        self.assertEqual(found.modules, ())

    def test_new_command_without_an_entry_is_reported(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known", "/newcmd"]),
            snapshot(["known"], ["/known"]),
            page("<p>Old features</p>"),
        )
        self.assertEqual(found.commands, ("/newcmd",))
        self.assertFalse(found.ok)

    def test_new_command_shown_exactly_is_quiet(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known", "/votemute start"]),
            snapshot(["known"], ["/known"]),
            page("<code>/votemute start</code>"),
        )
        self.assertEqual(found.commands, ())

    def test_declared_root_covers_its_subcommands(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known", "/votemute start"]),
            snapshot(["known"], ["/known"]),
            page(release(commands=["/votemute"])),
        )
        self.assertEqual(found.commands, ())

    def test_a_shown_subcommand_does_not_cover_its_siblings(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known", "/votemute start", "/votemute settings"]),
            snapshot(["known"], ["/known", "/votemute start"]),
            page("<code>/votemute start</code>"),
        )
        self.assertEqual(found.commands, ("/votemute settings",))

    def test_a_declared_subcommand_does_not_cover_its_siblings(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known", "/votemute settings"]),
            snapshot(["known"], ["/known"]),
            page(release(commands=["/votemute start"])),
        )
        self.assertEqual(found.commands, ("/votemute settings",))

    def test_new_context_menu_without_an_entry_is_reported(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known", "Right-click: New App"]),
            snapshot(["known"], ["/known"]),
            page("<p>Old features</p>"),
        )
        self.assertEqual(found.commands, ("Right-click: New App",))

    def test_new_context_menu_named_exactly_is_quiet(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known", "Right-click: New App"]),
            snapshot(["known"], ["/known"]),
            page("<li>Right-click: New App</li>"),
        )
        self.assertEqual(found.commands, ())

    def test_new_context_menu_declared_exactly_is_quiet(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known", "Right-click: New App"]),
            snapshot(["known"], ["/known"]),
            page(release(commands=["Right-click: New App"])),
        )
        self.assertEqual(found.commands, ())

    def test_context_menu_suggestion_stays_whole(self) -> None:
        lines = gate.coverage_lines(gate.Coverage((), ("Right-click: New App",), ()))
        self.assertTrue(any('"Right-click: New App"' in line for line in lines), lines)

    def test_removed_items_are_not_reported(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known"], ["/known"]),
            snapshot(["known", "retired"], ["/known", "/retired"]),
            page("<p>Nothing new</p>"),
        )
        self.assertEqual(found, gate.Coverage((), (), ()))

    def test_unchanged_snapshot_is_quiet(self) -> None:
        current = snapshot(["known"], ["/known"])
        self.assertEqual(gate.find_uncovered(current, current, page()), gate.Coverage((), (), ()))

    def test_malformed_block_fails_even_when_the_copy_names_the_feature(self) -> None:
        found = gate.find_uncovered(
            snapshot(["known", "new"], ["/known"]),
            snapshot(["known"], ["/known"]),
            page("<p>new</p><article data-release='{oops}'>"),
        )
        self.assertEqual(found.modules, ())
        self.assertTrue(found.problems)
        self.assertFalse(found.ok)


class BaselineTests(unittest.TestCase):
    """The recorded snapshot, which has to be readable or the gate cannot run."""

    def test_round_trip(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "baseline.json"
            original = snapshot(["votemute"], ["/votemute", "/votemute start"])
            gate.write_snapshot(path, original)
            self.assertEqual(gate.load_snapshot(path), original)

    def test_missing_key_is_a_setup_error(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "baseline.json"
            path.write_text('{"modules": []}', encoding="utf-8")
            with self.assertRaises(gate.SetupError):
                gate.load_snapshot(path)

    def test_malformed_json_is_a_setup_error(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "baseline.json"
            path.write_text("{", encoding="utf-8")
            with self.assertRaises(gate.SetupError):
                gate.load_snapshot(path)

    def test_wrong_command_type_is_a_setup_error(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            path = Path(tmp) / "baseline.json"
            path.write_text('{"modules": [], "commands": "/known"}', encoding="utf-8")
            with self.assertRaises(gate.SetupError):
                gate.load_snapshot(path)

    def test_missing_bot_checkout_is_a_setup_error(self) -> None:
        with tempfile.TemporaryDirectory() as tmp:
            with self.assertRaises(gate.SetupError):
                gate.current_snapshot(Path(tmp))


class CliTests(unittest.TestCase):
    """The command line, where a baseline is read or written."""

    def setUp(self) -> None:
        self.temporary = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary.name)
        self.page_path = self.root / "whats-new.html"
        self.baseline_path = self.root / "baseline.json"
        self.page_path.write_text(page("<p>Old features</p>"), encoding="utf-8")
        gate.write_snapshot(self.baseline_path, snapshot(["known"], ["/known"]))

    def tearDown(self) -> None:
        self.temporary.cleanup()

    def run_gate(self, current: gate.Snapshot, *extra: str):
        output = io.StringIO()
        errors = io.StringIO()
        args = [
            "--bot",
            str(self.root / "bot"),
            "--page",
            str(self.page_path),
            "--baseline",
            str(self.baseline_path),
            *extra,
        ]
        with mock.patch.object(gate, "current_snapshot", return_value=current):
            with contextlib.redirect_stdout(output), contextlib.redirect_stderr(errors):
                code = gate.main(args)
        return code, output.getvalue(), errors.getvalue()

    def test_new_module_fails(self) -> None:
        code, output, _errors = self.run_gate(snapshot(["known", "new"], ["/known"]))
        self.assertEqual(code, 1)
        self.assertIn("new module", output)
        self.assertIn("new", output)

    def test_declared_module_passes(self) -> None:
        self.page_path.write_text(page(release(modules=["new"])), encoding="utf-8")
        code, output, _errors = self.run_gate(snapshot(["known", "new"], ["/known"]))
        self.assertEqual(code, 0)
        self.assertIn("OK", output)

    def test_new_command_fails_with_its_path(self) -> None:
        code, output, _errors = self.run_gate(
            snapshot(["known"], ["/known", "/votemute start"])
        )
        self.assertEqual(code, 1)
        self.assertIn("/votemute start", output)
        self.assertIn('"/votemute"', output)

    def test_missing_baseline_is_a_setup_error(self) -> None:
        self.baseline_path.unlink()
        code, _output, errors = self.run_gate(snapshot(["known"], ["/known"]))
        self.assertEqual(code, 2)
        self.assertIn("no baseline", errors)

    def test_missing_page_is_a_setup_error(self) -> None:
        self.page_path.unlink()
        code, _output, errors = self.run_gate(snapshot(["known"], ["/known"]))
        self.assertEqual(code, 2)
        self.assertIn("could not read", errors)

    def test_bad_baseline_is_a_setup_error(self) -> None:
        self.baseline_path.write_text("{", encoding="utf-8")
        code, _output, errors = self.run_gate(snapshot(["known"], ["/known"]))
        self.assertEqual(code, 2)
        self.assertIn("not valid JSON", errors)

    def test_update_refuses_an_uncovered_addition(self) -> None:
        code, _output, errors = self.run_gate(
            snapshot(["known", "new"], ["/known"]), "--update-baseline"
        )
        self.assertEqual(code, 1)
        self.assertIn("baseline not updated", errors)
        self.assertEqual(gate.load_snapshot(self.baseline_path), snapshot(["known"], ["/known"]))

    def test_update_writes_once_the_page_covers_everything(self) -> None:
        self.page_path.write_text(
            page(release(modules=["new"], commands=["/votemute"])), encoding="utf-8"
        )
        current = snapshot(["known", "new"], ["/known", "/votemute start"])
        code, output, _errors = self.run_gate(current, "--update-baseline")
        self.assertEqual(code, 0)
        self.assertIn("wrote", output)
        self.assertEqual(gate.load_snapshot(self.baseline_path), current)

    def test_bootstrap_writes_without_a_baseline(self) -> None:
        self.baseline_path.unlink()
        current = snapshot(["known", "new"], ["/known", "/votemute start"])
        code, output, _errors = self.run_gate(current, "--update-baseline")
        self.assertEqual(code, 0)
        self.assertIn("bootstrap", output)
        self.assertEqual(gate.load_snapshot(self.baseline_path), current)

    def test_malformed_page_blocks_an_update(self) -> None:
        self.page_path.write_text(
            page("<article data-release='{oops}'>"), encoding="utf-8"
        )
        code, _output, _errors = self.run_gate(
            snapshot(["known"], ["/known"]), "--update-baseline"
        )
        self.assertEqual(code, 1)
        self.assertEqual(gate.load_snapshot(self.baseline_path), snapshot(["known"], ["/known"]))

    def test_unchanged_bot_passes(self) -> None:
        code, output, _errors = self.run_gate(snapshot(["known"], ["/known"]))
        self.assertEqual(code, 0)
        self.assertIn("OK", output)


class RealPageTests(unittest.TestCase):
    """The repository's own What's New page has to satisfy the parser."""

    def test_real_page_has_no_malformed_release_blocks(self) -> None:
        source = (SITE_ROOT / "whats-new.html").read_text(encoding="utf-8")
        found = gate.release_declarations(source)
        self.assertEqual(found.problems, ())

    def test_real_page_declares_the_newest_features(self) -> None:
        source = (SITE_ROOT / "whats-new.html").read_text(encoding="utf-8")
        found = gate.release_declarations(source)
        self.assertLessEqual(
            {"custom_bot", "votemute", "config_health", "emoji_management"},
            found.modules,
        )


if __name__ == "__main__":
    unittest.main()
