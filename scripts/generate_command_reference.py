"""Generate the public command reference directly from SeanBot's cog decorators."""

from __future__ import annotations

import argparse
import ast
import json
import re
from collections import OrderedDict
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class CommandDoc:
    name: str
    description: str
    badge: str
    kind: str
    source: str


CATEGORIES = OrderedDict(
    [
        ("general", ("1.0 General & Quick Access", "ph-house-line")),
        ("moderation", ("2.0 Moderation", "ph-shield-checkered")),
        ("security", ("3.0 Security & Logging", "ph-shield-warning")),
        ("workflows", ("4.0 Staff & Member Workflows", "ph-users-three")),
        ("community", ("5.0 Community & Events", "ph-calendar-dots")),
        ("time", ("6.0 Time & Scheduling", "ph-clock")),
        ("messages", ("7.0 Messages, Embeds & Reactions", "ph-chat-circle-text")),
        ("server", ("8.0 Voice, Counters & Server Tools", "ph-sliders-horizontal")),
        ("federation", ("9.0 Federation & Cross-Server Tools", "ph-globe-hemisphere-west")),
        ("wizard101", ("10.0 Wizard101 Toolkit", "ph-magic-wand")),
        ("fun", ("11.0 Fun", "ph-confetti")),
        ("advanced", ("12.0 Advanced Administration", "ph-wrench")),
        ("context", ("13.0 Right-Click Apps", "ph-cursor-click")),
    ]
)


PATH_CATEGORY_RULES = [
    ("federation", "federation"),
    ("thread_watcher", "federation"),
    ("federated_teamups", "federation"),
    ("antiraid", "security"),
    ("logging_voice_analytics", "server"),
    ("logging", "security"),
    ("moderation", "moderation"),
    ("warn_cog", "moderation"),
    ("seanbot_staff_tools", "workflows"),
    ("publicreport", "workflows"),
    ("report_cog", "workflows"),
    ("ticket", "workflows"),
    ("loa", "workflows"),
    ("calendar", "community"),
    ("raid", "community"),
    ("teamup", "community"),
    ("poll", "community"),
    ("activity_tracker", "community"),
    ("returning_role", "community"),
    ("timeping", "time"),
    ("timezone", "time"),
    ("time_converter", "time"),
    ("event_countdown", "time"),
    ("embed", "messages"),
    ("emoji", "messages"),
    ("reaction", "messages"),
    ("sticky", "messages"),
    ("reply_cog", "messages"),
    ("auto_pin", "messages"),
    ("starboard", "messages"),
    ("temp_channels", "server"),
    ("stats_cog", "server"),
    ("logging_voice_analytics", "server"),
    ("last_message", "server"),
    ("serverstats", "server"),
    ("damage", "wizard101"),
    ("deck", "wizard101"),
    ("beastmoon", "wizard101"),
    ("pet_tome", "wizard101"),
    ("spells", "wizard101"),
    ("items_cog", "wizard101"),
    ("level_scaler", "wizard101"),
    ("recap_tracker", "wizard101"),
    ("statcaps", "wizard101"),
    ("strategy", "wizard101"),
    ("tapestry", "wizard101"),
    ("value_reagent", "wizard101"),
    ("wizard_check", "wizard101"),
    ("wizardinfocog", "wizard101"),
    ("fact_cat", "fun"),
    ("slap", "fun"),
    ("roshambo", "fun"),
    ("discord_quote", "fun"),
    ("command_harvester", "advanced"),
    ("memory_guard", "advanced"),
    ("seanbot_admin", "advanced"),
]


PERMISSION_LABELS = OrderedDict(
    [
        ("administrator", "Administrator"),
        ("manage_guild", "Manage Server"),
        ("manage_roles", "Manage Roles"),
        ("manage_channels", "Manage Channels"),
        ("manage_messages", "Manage Messages"),
        ("manage_webhooks", "Manage Webhooks"),
        ("ban_members", "Ban Members"),
        ("kick_members", "Kick Members"),
        ("moderate_members", "Moderate Members"),
        ("manage_nicknames", "Manage Nicknames"),
        ("manage_expressions", "Manage Expressions"),
        ("manage_emojis_and_stickers", "Manage Expressions"),
    ]
)


PREFIX_PERMISSION_OVERRIDES = OrderedDict(
    [
        ("/emoji suggestion_queue", "Reviewer"),
        ("/emoji suggestion_setup", "Manage Server"),
        ("/timeping admin", "Administrator"),
        ("/timeping defaults", "Manage Server"),
        ("/timeping templates", "Manage Server"),
        ("/timeping auto", "Manage Channels"),
        ("/loa setup", "Administrator"),
        ("/loa config", "Administrator"),
        ("/loa list", "LOA Reviewer"),
        ("/appeals close", "Appeal Reviewer"),
        ("/appeals list", "Appeal Reviewer"),
        ("/appeals view", "Appeal Reviewer"),
        ("/appeals setup", "Manage Server"),
        ("/appeals disable", "Manage Server"),
        ("/appeals notify_", "Manage Server"),
        ("/suggestion close", "Suggestion Reviewer"),
        ("/suggestion list", "Suggestion Reviewer"),
        ("/suggestion setup", "Manage Server"),
        ("/ticket claim", "Ticket Staff"),
        ("/ticket unclaim", "Ticket Staff"),
        ("/ticket add", "Ticket Staff"),
        ("/ticket remove", "Ticket Staff"),
        ("/ticket priority", "Ticket Staff"),
        ("/ticket panel", "Ticket Administrator"),
        ("/ticket setup_channel", "Ticket Administrator"),
        ("/ticket staffsay", "Ticket Staff"),
        ("/publicreport", "Manage Server"),
        ("/antiraid", "Administrator"),
        ("/thread admin", "Network Administrator"),
        ("/thread mod", "Network Moderator"),
        ("/relay", "Network Manager"),
        ("/memory_cleanup", "Bot Owner"),
        ("/reload_commands", "Administrator"),
    ]
)


def call_name(node: ast.AST) -> str:
    if isinstance(node, ast.Name):
        return node.id
    if isinstance(node, ast.Attribute):
        return f"{call_name(node.value)}.{node.attr}".strip(".")
    return ""


def keyword_constant(call: ast.Call, key: str, default=None):
    for keyword in call.keywords:
        if keyword.arg == key and isinstance(keyword.value, ast.Constant):
            return keyword.value.value
    return default


def group_call_data(call: ast.Call) -> tuple[str, str | None] | None:
    if not call_name(call.func).endswith("app_commands.Group"):
        return None
    name = keyword_constant(call, "name")
    parent = None
    for keyword in call.keywords:
        if keyword.arg == "parent" and isinstance(keyword.value, ast.Name):
            parent = keyword.value.id
    return (str(name), parent) if name else None


def resolve_group(name: str, groups: dict[str, tuple[str, str | None]], seen=None) -> str:
    seen = set(seen or ())
    if name in seen or name not in groups:
        return ""
    seen.add(name)
    own, parent = groups[name]
    parent_name = resolve_group(parent, groups, seen) if parent else ""
    return f"{parent_name} {own}".strip()


def decorator_permission(decorators: list[ast.expr]) -> str:
    discovered: set[str] = set()
    owner_only = False
    for decorator in decorators:
        call = decorator if isinstance(decorator, ast.Call) else None
        name = call_name(call.func if call else decorator)
        if name.endswith("is_owner"):
            owner_only = True
        if not call or not any(
            name.endswith(suffix)
            for suffix in ("has_permissions", "default_permissions", "has_guild_permissions")
        ):
            continue
        for keyword in call.keywords:
            if isinstance(keyword.value, ast.Constant) and keyword.value.value is True:
                discovered.add(str(keyword.arg))
    if owner_only:
        return "Bot Owner"
    for permission, label in PERMISSION_LABELS.items():
        if permission in discovered:
            return label
    return "Everyone"


def clean_description(node: ast.FunctionDef | ast.AsyncFunctionDef, decorator: ast.Call) -> str:
    description = keyword_constant(decorator, "description")
    if not description:
        description = ast.get_docstring(node, clean=True) or ""
    description = re.sub(r"^(User|Staff|Admin(?:istrative)?|Utility) Command:\s*", "", str(description), flags=re.I)
    description = " ".join(description.split())
    if not description:
        description = f"Use the {node.name.replace('_', ' ')} command."
    return description[:260]


def category_for(path: Path) -> str:
    lowered = str(path).replace("\\", "/").lower()
    for needle, category in PATH_CATEGORY_RULES:
        if needle in lowered:
            return category
    return "general"


def class_group_prefix(node: ast.ClassDef) -> str:
    if any(call_name(base).endswith("commands.GroupCog") for base in node.bases):
        for keyword in node.keywords:
            if keyword.arg in {"group_name", "name"} and isinstance(keyword.value, ast.Constant):
                return str(keyword.value.value)
    if not any(call_name(base).endswith("app_commands.Group") for base in node.bases):
        return ""
    for item in node.body:
        if not isinstance(item, (ast.FunctionDef, ast.AsyncFunctionDef)) or item.name != "__init__":
            continue
        for child in ast.walk(item):
            if not isinstance(child, ast.Call):
                continue
            name = keyword_constant(child, "name")
            if name and (call_name(child.func).endswith("__init__") or call_name(child.func).endswith("super")):
                return str(name)
    return ""


def collect_commands(cogs_dir: Path) -> dict[str, list[CommandDoc]]:
    parsed: list[tuple[Path, ast.Module]] = []
    shared_groups: dict[str, tuple[str, str | None]] = {}
    for path in sorted(cogs_dir.rglob("*.py")):
        try:
            tree = ast.parse(path.read_text(encoding="utf-8-sig"))
        except (SyntaxError, UnicodeDecodeError):
            continue
        parsed.append((path, tree))
        for child in ast.walk(tree):
            if not isinstance(child, (ast.Assign, ast.AnnAssign)):
                continue
            value = child.value
            if not isinstance(value, ast.Call):
                continue
            group_data = group_call_data(value)
            if not group_data:
                continue
            targets = child.targets if isinstance(child, ast.Assign) else [child.target]
            for target in targets:
                if isinstance(target, ast.Name):
                    shared_groups.setdefault(target.id, group_data)

    by_category: dict[str, list[CommandDoc]] = {key: [] for key in CATEGORIES}
    seen: set[str] = set()
    for path, tree in parsed:
        groups = dict(shared_groups)
        for child in ast.walk(tree):
            if not isinstance(child, (ast.Assign, ast.AnnAssign)) or not isinstance(child.value, ast.Call):
                continue
            group_data = group_call_data(child.value)
            if not group_data:
                continue
            targets = child.targets if isinstance(child, ast.Assign) else [child.target]
            for target in targets:
                if isinstance(target, ast.Name):
                    groups[target.id] = group_data
        function_groups: dict[str, str] = {}
        class_prefixes: dict[str, str] = {}

        for child in ast.walk(tree):
            if isinstance(child, ast.ClassDef):
                prefix = class_group_prefix(child)
                if prefix:
                    class_prefixes[child.name] = prefix
            if not isinstance(child, (ast.FunctionDef, ast.AsyncFunctionDef)):
                continue
            for decorator in child.decorator_list:
                if not isinstance(decorator, ast.Call):
                    continue
                name = call_name(decorator.func)
                if name.endswith(("hybrid_group", "commands.group")):
                    function_groups[child.name] = str(keyword_constant(decorator, "name", child.name))

        for parent in ast.walk(tree):
            body = parent.body if isinstance(parent, (ast.Module, ast.ClassDef)) else []
            class_prefix = class_prefixes.get(parent.name, "") if isinstance(parent, ast.ClassDef) else ""
            for node in body:
                if not isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
                    continue
                for decorator in node.decorator_list:
                    if not isinstance(decorator, ast.Call):
                        continue
                    decorator_name = call_name(decorator.func)
                    leaf = decorator_name.rsplit(".", 1)[-1]
                    if leaf in {"group", "hybrid_group"}:
                        continue
                    if leaf not in {"command", "hybrid_command", "context_menu"}:
                        continue

                    command_name = str(keyword_constant(decorator, "name", node.name))
                    base = decorator_name.rsplit(".", 1)[0] if "." in decorator_name else ""
                    prefix = ""
                    if base in groups:
                        prefix = resolve_group(base, groups)
                    elif base in function_groups:
                        prefix = function_groups[base]
                    elif base in {"app_commands", "commands", ""}:
                        prefix = class_prefix
                    full_name = (
                        f"Right-click: {command_name}"
                        if leaf == "context_menu"
                        else "/" + " ".join(part for part in (prefix, command_name) if part).strip()
                    )
                    if full_name in seen:
                        break
                    seen.add(full_name)

                    badge = decorator_permission(node.decorator_list)
                    for command_prefix, override in PREFIX_PERMISSION_OVERRIDES.items():
                        if full_name.startswith(command_prefix):
                            badge = override
                            break
                    category = category_for(path)
                    if leaf == "context_menu":
                        category = "context"
                    by_category[category].append(
                        CommandDoc(
                            name=full_name,
                            description=clean_description(node, decorator),
                            badge=badge,
                            kind="public" if badge == "Everyone" else "perm",
                            source=str(path).replace("\\", "/"),
                        )
                    )
                    break

        # ContextMenu constructors do not use decorators, so collect their display names separately.
        for call in (node for node in ast.walk(tree) if isinstance(node, ast.Call)):
            if not call_name(call.func).endswith("ContextMenu"):
                continue
            menu_name = keyword_constant(call, "name")
            if not menu_name:
                continue
            full_name = f"Right-click: {menu_name}"
            if full_name in seen:
                continue
            seen.add(full_name)
            by_category["context"].append(
                CommandDoc(
                    name=full_name,
                    description="Open this app from Discord's Apps menu after right-clicking the relevant message or member.",
                    badge="Everyone",
                    kind="public",
                    source=str(path).replace("\\", "/"),
                )
            )

    for commands in by_category.values():
        commands.sort(key=lambda item: item.name.casefold())
    return by_category


def render_javascript(by_category: dict[str, list[CommandDoc]]) -> str:
    sections = []
    for index, (category, (title, icon)) in enumerate(CATEGORIES.items(), start=1):
        commands = by_category.get(category, [])
        if not commands:
            continue
        payload = {
            "id": category,
            "title": title,
            "icon": icon,
            "tocLabel": title,
            "commands": [
                {
                    "name": command.name,
                    "desc": command.description,
                    "badge": command.badge,
                    "type": command.kind,
                }
                for command in commands
            ],
        }
        sections.append(json.dumps(payload, ensure_ascii=False, indent=4))
    return (
        "// Generated by scripts/generate_command_reference.py from alert/cogs.\n"
        "// Edit command decorators or the generator mappings, then regenerate this file.\n"
        f"const commandsDatabase = [{','.join(sections)}];\n"
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--cogs", type=Path, default=Path(__file__).resolve().parents[2] / "alert" / "cogs")
    parser.add_argument("--output", type=Path, default=Path(__file__).resolve().parents[1] / "commands-data.js")
    args = parser.parse_args()
    by_category = collect_commands(args.cogs.resolve())
    output = render_javascript(by_category)
    args.output.write_text(output, encoding="utf-8", newline="\n")
    total = sum(len(items) for items in by_category.values())
    print(f"Wrote {total} command and app entries to {args.output}")


if __name__ == "__main__":
    main()
