import json
import pathlib

PATH = pathlib.Path(__file__).resolve().parent.parent / "docs-data.js"
text = PATH.read_text(encoding="utf-8")
start = text.index("[")
end = text.rindex("]")
docs = json.loads(text[start:end + 1])

text_commands = {
    "id": "text_commands",
    "icon": "ph-terminal-window",
    "title": "Text Commands",
    "subtitle": "Pick a prefix such as ! and commands that have a text form still work the old way, for the members and staff who still type.",
    "content": [
        {"type": "heading", "text": "What the Prefix Does"},
        {"type": "text", "text": "Every command SeanBot publishes as a slash command also has a text form when it is built as a hybrid command. Typing a prefix in front of the name runs that form: `!help` instead of `/help`, or `!lastmessage @member` instead of `/lastmessage`. The prefix is a setting for the whole server, not for one member or channel, and it applies to every hybrid command at once."},
        {"type": "list", "title": "How the Prefix Behaves", "items": [
            "The default is `!`, so text commands work in a new server with no setup.",
            "Changing the prefix adds one. SeanBot keeps accepting `!` as well, so old pinned instructions and habits keep working.",
            "Mentioning the bot always works whatever the prefix is, for example `@SeanBot help`.",
            "The text form takes plain arguments in the order the command expects, not slash syntax: `!lastmessage @member`, not `user:@member`.",
            "Slash commands keep working while a prefix is set. The prefix does not replace them.",
            "A command that does not answer usually has its module switched off, not a wrong prefix. Module switches apply to both forms."
        ]},
        {"type": "heading", "text": "Change the Prefix"},
        {"type": "list", "items": [
            "Run `/prefix` with no value to see the current prefix. Anyone in the server can do this.",
            "Run `/prefix new_prefix:?` to change it. You need Administrator or Manage Server.",
            "The value must be 1 to 5 visible characters with no spaces. `/`, `@`, `<`, `>` and backticks are refused because Discord uses them for mentions, channels and slash commands.",
            "Try `?help` afterwards. If the new prefix does not answer, check the command's module and the member's permissions before changing it again."
        ]},
        {"type": "callout", "variant": "note", "title": "A prefix is not a permission", "text": "Text commands check the same permissions as their slash versions, and a disabled module disables both. Setting a prefix for members does not give anyone a command they could not already use."},
        {"type": "heading", "text": "When to Set One"},
        {"type": "text", "text": "Slash commands are easier to discover and fill in, with autocomplete and a visible parameter list. A text prefix is for the members and staff who still type out of habit, or who are on a client where opening the slash menu is slow. If nobody asks for it, leaving the default alone costs nothing."},
        {"type": "commands", "title": "Text Command Setup", "items": [
            {"cmd": "/prefix", "desc": "Show this server's text command prefix."},
            {"cmd": "/prefix new_prefix:?", "desc": "Change the prefix. Administrator or Manage Server only."},
            {"cmd": "/help", "desc": "Open the command list. Also answers to `!help` and `@SeanBot help`."},
            {"cmd": "!help", "desc": "The text form of the same command, using the current prefix."}
        ]}
    ]
}

last_message_lookup = {
    "id": "last_message_lookup",
    "icon": "ph-clock-counter-clockwise",
    "title": "Last Message Lookup",
    "subtitle": "See when a member last spoke, without keeping a copy of what they said.",
    "content": [
        {"type": "heading", "text": "What It Records"},
        {"type": "text", "text": "SeanBot notes the newest message each member sends in the server and replaces that note with the next one. The record is a timestamp, the channel, the message link, and the member's name and avatar. Message text is never stored, so the lookup can say when someone last spoke but not what they said."},
        {"type": "list", "title": "What Is Kept", "items": [
            "The server, member, message and channel IDs, and the time of the newest message only.",
            "Nothing from older messages: the record moves forward each time the member posts.",
            "Bot accounts are skipped, and rows left by older builds that tracked them are removed.",
            "Records survive a restart and are deleted for a server when SeanBot leaves it."
        ]},
        {"type": "heading", "text": "Look Someone Up"},
        {"type": "list", "items": [
            "Open the dashboard's Last Message Lookup page. It opens with the most recent speakers.",
            "Type a display name, a username, or a Discord user ID into the search box. Matching current members are listed first, then tracked members who have left.",
            "Each row shows the relative time, the exact local time, and whether the person is still in the server.",
            "The Jump to message button appears only when you can view that channel. A link to a channel you cannot see is hidden rather than shown and refused.",
            "Run `/lastmessage user:@member` for one person. The reply gives the same time and a jump link, or says no message has been recorded yet."
        ]},
        {"type": "callout", "variant": "note", "title": "Tracking starts when the tracker starts", "text": "Only messages sent while SeanBot is running are recorded. A member who has not posted since the tracker was added has no row yet, and the page says so instead of guessing from old history."},
        {"type": "heading", "text": "Turn It On"},
        {"type": "list", "items": [
            "Last Message Lookup ships switched off. Turn it on in the Module Manager.",
            "The page lives under Analytics & Stats in the dashboard sidebar.",
            "To let moderators use it, grant Last Message Lookup in Server Access. Without that grant the page and the command are closed to them.",
            "Check the page once after enabling it so staff know what an empty record looks like."
        ]},
        {"type": "callout", "variant": "warning", "title": "This is not a message archive", "text": "The page answers only one question: when did this member last speak. If a report needs the words themselves, use Discord's own search or the server's audit logs before the messages are deleted."},
        {"type": "text", "text": "For a team-wide answer rather than one member, use the activity check in the Staff List guide."},
        {"type": "commands", "title": "Last Message Commands", "items": [
            {"cmd": "/lastmessage user:@member", "desc": "Show how long ago the member's newest recorded message was, with a jump link."},
            {"cmd": "!lastmessage @member", "desc": "The text form, using this server's prefix."}
        ]}
    ]
}

staff_list = {
    "id": "staff_list",
    "icon": "ph-identification-badge",
    "title": "Staff List",
    "subtitle": "A staff roster that keeps itself up to date: who is on duty, who is away, message goals, activity checks and a weekly report.",
    "content": [
        {"type": "heading", "text": "What the Staff List Does"},
        {"type": "text", "text": "Pick the roles that make someone staff, and the roster does the rest. Everyone holding one of those roles is grouped by their highest staff role, with their presence, highest role tag, duty and away tags, and their progress against the message goal that applies to them. Nothing has to be typed into a list message and edited by hand."},
        {"type": "list", "title": "What the Page Shows", "items": [
            "Staff Team: one block per staff role, highest role first. A member with two staff roles appears once, under the higher one.",
            "Presence: online, idle, do not disturb, and offline, read from Discord.",
            "Duty and away: who is on duty right now and who is away until which date.",
            "Message goals: each person is measured against their own goal, else their highest staff role's goal, else the server default.",
            "This week's report: messages, tickets closed, first replies, hours on duty, and ticket ratings, one row per staff member."
        ]},
        {"type": "heading", "text": "Goals and Counts"},
        {"type": "text", "text": "A goal is a number of messages in a daily, weekly, or monthly period. Counts come from messages sent in this server since the period started, and only counts are stored. Message content is never read into storage, rendered, or logged."},
        {"type": "list", "items": [
            "A personal goal beats a role goal, and a role goal beats the server default.",
            "Use /stafflist goals to see progress in Discord, or read the bars on the dashboard page.",
            "Goals are encouragement, not enforcement. Nothing removes a role or punishes a member for missing one."
        ]},
        {"type": "heading", "text": "Duty and Away"},
        {"type": "text", "text": "Duty is how the ticket system knows who to ping. /duty on adds the optional duty role and starts counting hours; /duty off removes the role and banks the time. /away days:7 marks a member away until a date, stops their pings, and takes them off duty. /away off brings them back immediately. Staff who are away cannot go on duty until they are back."},
        {"type": "heading", "text": "Activity Checks"},
        {"type": "text", "text": "stafflist check posts an I'm here button in the channel where you run it. stafflist check-results lists the staff who did not press it. An unanswered check is reported, never punished automatically: the list is a starting point for a conversation, not an infraction."},
        {"type": "heading", "text": "The Weekly Report"},
        {"type": "text", "text": "The report is posted to the summary channel every Monday at 09:00 UTC, and /stafflist report posts it on demand. Ticket ratings come from the 1 to 5 star prompt a member gets when their claimed ticket closes. Without a summary channel the Monday post has nowhere to go, but the report still shows on the dashboard page and from the command."},
        {"type": "heading", "text": "Set It Up"},
        {"type": "list", "items": [
            "Turn the Staff List module on. It ships switched off.",
            "Open the Staff List page and pick the staff roles in Team settings, then save.",
            "Set an optional default goal for everyone those roles cover.",
            "Run /stafflist settings summary_channel:#staff-log to choose where the Monday report goes, and duty_role:@On Duty if you want a visible duty role.",
            "Run /stafflist team once to confirm the roster and the role order.",
            "Add or remove role groups with /stafflist group-add and /stafflist group-remove if you want separate list messages in separate channels."
        ]},
        {"type": "callout", "variant": "tip", "title": "Give the report a home before Monday", "text": "Set the summary channel on the first day. Without one the Monday report has nowhere to post, and the first week is only visible on the dashboard."},
        {"type": "text", "text": "For planned time off with dates and a staff request, use the Staff Leave of Absence guide. /away is the quick version for a few days."},
        {"type": "commands", "title": "Staff List Commands", "items": [
            {"cmd": "/stafflist team", "desc": "Show the roster, grouped by staff role."},
            {"cmd": "/stafflist goals", "desc": "Show message goal progress for staff."},
            {"cmd": "/stafflist group-add key name description role channel", "desc": "Add a role group and the channel that holds its list message."},
            {"cmd": "/stafflist group-remove key", "desc": "Remove a role group."},
            {"cmd": "/stafflist settings duty_role summary_channel", "desc": "Set the optional duty role and the weekly report channel."},
            {"cmd": "/stafflist goal set period messages role", "desc": "Set a message goal for one role."},
            {"cmd": "/stafflist goal set period messages user", "desc": "Set a message goal for one person."},
            {"cmd": "/stafflist goal clear role", "desc": "Remove a role's goal."},
            {"cmd": "/stafflist goal clear user", "desc": "Remove a person's goal."},
            {"cmd": "/stafflist goal default period messages", "desc": "Set the goal for staff without a personal or role goal."},
            {"cmd": "/stafflist goal default-clear", "desc": "Remove the default goal."},
            {"cmd": "/duty state:on", "desc": "Go on duty. Adds the duty role and starts counting hours."},
            {"cmd": "/duty state:off", "desc": "Go off duty. Removes the duty role and banks the hours."},
            {"cmd": "/away days:7", "desc": "Mark yourself away for 1 to 90 days."},
            {"cmd": "/away off:true", "desc": "Come back now."},
            {"cmd": "/stafflist check", "desc": "Post an I'm here button for an activity check."},
            {"cmd": "/stafflist check-results", "desc": "List the staff who did not answer the latest check."},
            {"cmd": "/stafflist report", "desc": "Post the weekly staff report now."}
        ]}
    ]
}

ban_relay = {
    "id": "ban_relay",
    "icon": "ph-paper-plane-tilt",
    "title": "Ban Relay & Mod Feed",
    "subtitle": "When another bot bans someone, SeanBot DMs them how to appeal. Kicks and timeouts from other bots land in one feed, so your moderation record stays in one place.",
    "content": [
        {"type": "heading", "text": "What It Does"},
        {"type": "text", "text": "Ban Relay reads the server's audit log instead of talking to other bots, so it works with Carl-bot, MEE6, Dyno, a staff member's manual ban, or anything else that writes a ban entry. Two jobs run from that one stream: a ban gets an appeal DM to the banned member, and kicks and timeouts get a line in the mod feed."},
        {"type": "list", "title": "What Is Relayed", "items": [
            "Bans: the banned member receives the same appeal message SeanBot sends for its own bans, with the reason and the ways to appeal (the ban menu, /appeals submit, and the public appeals page).",
            "Blocked DMs: if the member has DMs closed, a notice goes to the feed channel so staff know the person was never told.",
            "Kicks and timeouts by other bots or staff are posted to the feed channel and saved for the dashboard.",
            "Mass bans are posted as one summary instead of a wall of individual notices.",
            "SeanBot's own bans and global punishments are skipped, because those already DM the member and write their own log."
        ]},
        {"type": "heading", "text": "The Mod Feed"},
        {"type": "text", "text": "Every ban, kick, timeout, and mass-ban notice is stored with the member, the executor, the reason, and the time. The Ban Relay page filters the feed by action type and counts each kind, so a kick from another bot and a timeout from a moderator sit in the same record. Point the feed channel at your existing mod log to keep one unified feed."},
        {"type": "heading", "text": "The Burst Guard"},
        {"type": "text", "text": "Four moderation actions in 30 seconds from the same account (ban, kick, unban, or timeout) count as a burst. Appeal DMs pause and one summary notice is posted instead, so a raid purge does not send hundreds of DMs to accounts that are already gone. The same threshold drives Server Security's alerts for those actions. Channel and role churn has its own stricter threshold that this setting cannot raise. Set the threshold to 0 to turn burst handling off."},
        {"type": "callout", "variant": "warning", "title": "The relay ships switched off", "text": "Ban Relay DMs people, so it is opt-in. The module being visible in the dashboard does not enable it: tick Enable Ban Relay on the page, or run /banrelay enable. Turning it off stops both the appeal DMs and the feed."},
        {"type": "heading", "text": "Set It Up"},
        {"type": "list", "items": [
            "Make sure SeanBot has View Audit Log. Without it there are no entries to read.",
            "Open Ban Relay and choose the feed channel. Your mod log channel is usually the right one.",
            "Tick Enable Ban Relay, and leave kick and timeout logging on unless member-event logging already covers them.",
            "Kick a test account with another bot and confirm the feed line appears.",
            "Check the mass-action threshold. The default of four actions per 30 seconds is deliberately low for a server where bans arrive one at a time.",
            "Decide whether you want appeal DMs at all. If you do not, leave the relay off and review appeals only through the Ban Appeals page."
        ]},
        {"type": "text", "text": "The appeal itself is reviewed on the Ban Appeals page. The Appeals & Suggestions guide covers that side, including review channels, notification roles, and approvals that unban."},
        {"type": "commands", "title": "Ban Relay Commands", "items": [
            {"cmd": "/banrelay show", "desc": "Show the relay status, feed channel, threshold, and logging switches."},
            {"cmd": "/banrelay enable", "desc": "Turn the appeal DM relay and the mod feed on."},
            {"cmd": "/banrelay disable", "desc": "Turn both off. SeanBot's own actions and logs are unaffected."},
            {"cmd": "/banrelay logchannel channel:#mod-log", "desc": "Set the feed channel."},
            {"cmd": "/banrelay logchannel", "desc": "Clear the feed channel."},
            {"cmd": "/banrelay masslimit limit:4", "desc": "Set the burst threshold in actions per 30 seconds. 0 turns burst handling off."},
            {"cmd": "/banrelay kicks enabled:true", "desc": "Log kicks by other bots and staff to the feed."},
            {"cmd": "/banrelay timeouts enabled:true", "desc": "Log timeouts by other bots and staff to the feed."}
        ]}
    ]
}

emoji_analytics = {
    "id": "emoji_analytics",
    "icon": "ph-chart-bar",
    "title": "Emoji Analytics",
    "subtitle": "See which emojis actually get used and which nobody touches, so you know what to delete.",
    "content": [
        {"type": "heading", "text": "What It Counts"},
        {"type": "text", "text": "Two separate counters feed the page, and they stay separate. Emojis counts custom emoji typed inside chat messages. Reactions counts reactions added to messages, whether the reaction is a server emoji or a standard one. The Users view adds both kinds together for each member, so it answers who uses expressions most rather than who reacts most."},
        {"type": "list", "title": "Counting Rules", "items": [
            "A plain Unicode emoji typed in a message is not in the Emojis ranking. Custom and external emoji written as emoji markup are.",
            "Each count is stored per member, per emoji, per day, and per kind.",
            "Channels muted in Log Config are left out. A channel muted for all logging is excluded from both counters; a channel muted only for reactions is excluded from the Reactions side.",
            "Messages posted before the tracker was running are not counted. The ranking starts with the first message it sees."
        ]},
        {"type": "heading", "text": "Reading the Page"},
        {"type": "text", "text": "Three view tabs sit above three range tabs. Emojis ranks typed emoji, Reactions ranks reactions, and Users ranks members by combined usage. Weekly covers the last 7 days, Monthly the last 30, and All Time everything stored. Each view draws a bar chart and a ranked card per entry, up to 15 places."},
        {"type": "heading", "text": "The Commands"},
        {"type": "text", "text": "The same numbers are available in Discord. /emojis reads the chat side, /reaction reads the reactions side, and each has a top15 and a top_users subcommand with a weekly, monthly, or all_time interval. These are hybrid commands, so the server's text prefix works too. Unlike the dashboard's Users view, the command user rankings keep the two kinds apart."},
        {"type": "callout", "variant": "note", "title": "Counts arrive in batches", "text": "New usage is written every 30 seconds, so the dashboard can be half a minute behind the last message. The commands cache their answer for 10 minutes, which is why a fresh reaction can take a while to change a command ranking."},
        {"type": "heading", "text": "Using It"},
        {"type": "list", "items": [
            "Open Emoji Analytics under Analytics & Stats. It is on by default, and Server Access can grant it to moderators who should see the rankings.",
            "Check the All Time view first so a quiet week does not read as an unused emoji set.",
            "Use the Emojis view to find what members actually type. A top slot is worth keeping and renaming around.",
            "Use the Users view to spot the members who carry the server's tone, and the Reactions view to see which reaction images land.",
            "To act on the bottom of the list, run /emoji suggest_purge days:30 to see what has not been used, then /emoji purge_dead days:30 to delete it. Both are covered in Emoji Management & Suggestions."
        ]},
        {"type": "commands", "title": "Emoji Analytics Commands", "items": [
            {"cmd": "/emojis top15 interval:weekly", "desc": "Top 15 custom emoji typed in chat. Also monthly and all_time."},
            {"cmd": "/emojis top_users interval:weekly", "desc": "Who types custom emoji the most."},
            {"cmd": "/reaction top15 interval:weekly", "desc": "Top 15 reactions added to messages, custom or standard."},
            {"cmd": "/reaction top_users interval:weekly", "desc": "Who reacts the most."}
        ]}
    ]
}

NEW = [text_commands, last_message_lookup, staff_list, ban_relay, emoji_analytics]
docs = [doc for doc in docs if doc["id"] not in {doc["id"] for doc in NEW}]


def insert_after(target_id, doc):
    index = next(i for i, item in enumerate(docs) if item["id"] == target_id)
    docs.insert(index + 1, doc)


insert_after("core", text_commands)
insert_after("logging", last_message_lookup)
insert_after("last_message_lookup", ban_relay)
insert_after("loa", staff_list)
insert_after("starboard", emoji_analytics)

body = json.dumps(docs, indent=4, ensure_ascii=False).replace("\n", "\r\n")
PATH.write_text(text[:start] + body + text[end + 1:], encoding="utf-8", newline="")
print("guides:", len(docs))
print("ids:", [doc["id"] for doc in NEW])
