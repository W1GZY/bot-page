// SeanBot documentation. Normalized by scripts/rebuild_docs_data.js.
const docsData = [
    {
        "id": "quickstart",
        "icon": "ph-rocket-launch",
        "title": "Install and set up",
        "subtitle": "Invite it, move its role to the top, choose your switches, turn logging on, then test in a private channel. Do these in order and nothing bites you later.",
        "content": [
            {
                "type": "heading",
                "text": "Before you invite it"
            },
            {
                "type": "list",
                "items": [
                    "Sign in with a Discord account that has Manage Server. Use the owner or an Administrator account for the first setup.",
                    "Make a private staff channel for testing commands, and a private log channel such as #seanbot-logs.",
                    "Write down which of your existing roles are administrators, moderators, support staff, event staff, and ordinary members.",
                    "Keep the role hierarchy in mind: SeanBot can only manage members and roles below its highest role."
                ]
            },
            {
                "type": "heading",
                "text": "1. Invite it and move its role up"
            },
            {
                "type": "list",
                "items": [
                    "Invite SeanBot from this site and pick the server you want to configure.",
                    "Open Server Settings &gt; Roles and drag the SeanBot role above every role it has to assign, remove, quarantine, mute, or manage.",
                    "Leave View Channel, Send Messages, Embed Links, Attach Files, Read Message History, and Use Application Commands alone in the channels where it is meant to work.",
                    "Add feature-specific permissions only where a feature needs them. Create Expressions is required for approved emoji suggestions, and Manage Roles for role automation."
                ]
            },
            {
                "type": "heading",
                "text": "2. Check it landed"
            },
            {
                "type": "commands",
                "title": "First Checks",
                "items": [
                    {
                        "cmd": "/dashboard",
                        "desc": "Open your server dashboard."
                    },
                    {
                        "cmd": "/serverinfo",
                        "desc": "Confirm SeanBot can read the server and member information."
                    },
                    {
                        "cmd": "/staff diagnose",
                        "desc": "Check role hierarchy, channel access, and important bot permissions."
                    },
                    {
                        "cmd": "/serveradmin modules",
                        "desc": "See which feature modules are enabled for this server."
                    }
                ]
            },
            {
                "type": "text",
                "text": "You will get a direct message the moment it joins. Set up SeanBot asks one question - what kind of server is this - and turns on the features that fit, Quick tour walks through what the bot does, and Open dashboard is a one-time sign-in link. If your direct messages are closed, the same menu is posted in the first channel SeanBot can write in."
            },
            {
                "type": "text",
                "text": "Nothing has to be turned on. Every optional feature already works when it joins, so setup is about switching off what this server does not want. Setup ends with an Access check that names anything genuinely wrong, such as a channel SeanBot cannot post in or a role placed below the member roles, so you fix those before a feature fails. Run /permissions any time for the same audit with more detail."
            },
            {
                "type": "heading",
                "text": "3. Sign in and hand out access"
            },
            {
                "type": "list",
                "items": [
                    "Sign in with Discord, choose your server, and open Module Settings.",
                    "A server that has never saved a module choice shows a getting-started card pointing at Module Settings, because every feature is on by default. Switching one off is a deliberate choice and is remembered from then on.",
                    "Open Server Access before you let other staff into the dashboard. Give each trusted role the pages and the single actions it needs, and no more than that.",
                    "Use Dashboard Logs to see who changed settings, deleted records, approved requests, or acted in the dashboard."
                ]
            },
            {
                "type": "heading",
                "text": "4. Set logging up first"
            },
            {
                "type": "list",
                "items": [
                    "Open Log Config: logging is on already, and it needs a channel to report into.",
                    "Choose All logs in one channel for the fastest start, or Separate channels when moderation, security, member, voice, and staff logs have to be kept apart.",
                    "Review the events you want logged: moderation, security, staff workflows, public reports, ban appeals, emoji suggestions, tickets, and dashboard actions.",
                    "Changes to the logging settings are always recorded, including the change that turns logging off, so nobody can alter the configuration without leaving a trace.",
                    "Make one harmless dashboard change and run one test command, then check both landed in the log channel you expected."
                ]
            },
            {
                "type": "heading",
                "text": "5. Tune security once you can watch it"
            },
            {
                "type": "list",
                "items": [
                    "Anti-Raid is on from the start, so open its dashboard page rather than switching it on.",
                    "Choose your trusted staff roles, safe domains, alert channels, and a quarantine role placed below SeanBot.",
                    "Start in Canary mode, where detections are logged without punishing anyone.",
                    "Run /antiraid audit and /antiraid simulate, read the output, and turn enforcement on only once your trusted roles and thresholds are right."
                ]
            },
            {
                "type": "heading",
                "text": "6. Set up your staff workflows"
            },
            {
                "type": "list",
                "items": [
                    "Confirm moderator roles have only the Discord permissions they need, and sit below the server owner.",
                    "Configure warnings and moderation presets before your staff start issuing cases.",
                    "Create the private review channels for ban appeals, public reports, community suggestions, emoji suggestions, tickets, and leave requests before you enable those modules.",
                    "Assign reviewer or support roles on each feature page, then submit one test request from a non-staff account."
                ]
            },
            {
                "type": "heading",
                "text": "7. Add the extras you want"
            },
            {
                "type": "list",
                "items": [
                    "Events and time: Timezones, TimePing, Calendar, Event Countdowns, Raid Polls, and Reminders.",
                    "Engagement: Starboard, AutoPin, Reaction Pings, Sticky Messages, Polls, Team-Ups, and Returning Roles.",
                    "Server tools: Temporary Voice Channels, Server Counters, Activity Tracking, Voice Analytics, Emoji Analytics, and Last Message tracking.",
                    "Content tools: Embed Builder, Emoji Manager, reactions, aliases, translation, and custom replies.",
                    "Cross-server tools: Federation thread networks, regular channel relays, identities, and federated Team-Ups.",
                    "Wizard101 tools: damage, items, decks, Beastmoon, pets, spell lookup, strategies, raid recap, tapestries, and Team-Ups."
                ]
            },
            {
                "type": "heading",
                "text": "8. Run the final check"
            },
            {
                "type": "list",
                "items": [
                    "Run /staff diagnose again now that everything is configured.",
                    "Test one member command, one moderator command, one dashboard change, one approval workflow, and one scheduled or automated feature.",
                    "Confirm the bot cannot manage roles above its own role, and that ordinary members cannot reach staff-only dashboard actions.",
                    "Check that the logs name the actor, the action, the target, and the result in plain language.",
                    "Review Module Settings and disable anything you are not using."
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "If a command does not appear",
                "text": "Check three things, in this order: the module is switched off, the command is disallowed under Server Settings &gt; Integrations, and the user has the role or Discord permission it needs. SeanBot also has to be able to view the channel you are typing in. Discord can take a short while to show newly synced commands."
            }
        ]
    },
    {
        "id": "core",
        "icon": "ph-layout",
        "title": "Dashboard, Modules & Staff Access",
        "subtitle": "What the switches and the dashboard permissions actually do, and what to check when a command is missing.",
        "content": [
            {
                "type": "heading",
                "text": "Module Settings"
            },
            {
                "type": "text",
                "text": "The switches are per server, and everything is on when the bot joins: a server nobody has configured is already running its modules. Turning one off hides its dashboard page and blocks its protected actions; it does not delete what you saved there. Turn it back on and your settings are still waiting. Last Message tracking is the one exception, a heavy lookup that stays off until you ask for it."
            },
            {
                "type": "list",
                "items": [
                    "Skim Module Settings once before you configure a feature, and switch off what this server does not want.",
                    "Use search and Enabled Only to review what is actually running.",
                    "After disabling a scheduled feature, check its guide for any messages, channels, or roles that should be removed manually."
                ]
            },
            {
                "type": "heading",
                "text": "Server Access"
            },
            {
                "type": "text",
                "text": "Server Access hands dashboard pages and single actions to Discord roles. You can give a role read-only access to a page without also handing it approval, deletion, or configuration."
            },
            {
                "type": "list",
                "items": [
                    "Keep full administrator access limited to server administrators.",
                    "Give support roles only ticket actions, reviewers only their queue actions, and event staff only event or scheduling controls.",
                    "Test delegated access with a non-administrator account before relying on it.",
                    "Review Dashboard Logs regularly and remove access when a staff role changes purpose."
                ]
            },
            {
                "type": "commands",
                "title": "Related Commands",
                "items": [
                    {
                        "cmd": "/dashboard",
                        "desc": "Open the dashboard for the current server."
                    },
                    {
                        "cmd": "/serveradmin modules",
                        "desc": "List the server module states."
                    },
                    {
                        "cmd": "/serveradmin module [module] [enabled]",
                        "desc": "Enable or disable one module from Discord."
                    },
                    {
                        "cmd": "/prefix [new_prefix]",
                        "desc": "View or change the optional legacy text-command prefix."
                    },
                    {
                        "cmd": "/staff diagnose",
                        "desc": "Check common permission, channel, and hierarchy problems."
                    }
                ]
            }
        ]
    },
    {
        "id": "w101",
        "icon": "ph-magic-wand",
        "title": "W101: Core Toolkit & Damage",
        "subtitle": "Damage calculation with buff stacking and gear scaling, plus deck images you can share.",
        "content": [
            {
                "type": "heading",
                "text": "Damage & Buff Calculator"
            },
            {
                "type": "text",
                "text": "Work out what a hit will land for before you commit to a raid or a normal fight. The calculation accounts for multi-blade stacks, traps, auras, gear damage percentages, shadow pips, critical strikes and pierce multipliers, and it rounds nothing off on the way."
            },
            {
                "type": "commands",
                "title": "Damage & Gear Commands",
                "items": [
                    {
                        "cmd": "/damage",
                        "desc": "Launch the interactive Damage Assistant modal to model damage outputs."
                    },
                    {
                        "cmd": "/item [name]",
                        "desc": "Search the complete gear database with stats, school requirements, and drops."
                    },
                    {
                        "cmd": "/levelscale [item] [level]",
                        "desc": "Calculate exact gear stat scaling across lower level tiers."
                    },
                    {
                        "cmd": "/statcaps find",
                        "desc": "View statcap by level."
                    },
                    {
                        "cmd": "/statcaps offschool",
                        "desc": "View statcap for offschooling."
                    },
                    {
                        "cmd": "/statcaps main",
                        "desc": "View statcap for your main school."
                    }
                ]
            },
            {
                "type": "heading",
                "text": "Visual Deck Building Suite"
            },
            {
                "type": "commands",
                "title": "Deck Building Commands",
                "items": [
                    {
                        "cmd": "/decks create",
                        "desc": "Draft a custom deck loadout with visual card slots (Keymaster role)."
                    },
                    {
                        "cmd": "/decks browse",
                        "desc": "Browse community-submitted decks saved in the server repository."
                    },
                    {
                        "cmd": "/decks search [query]",
                        "desc": "Search saved decks by school, boss counter, or card composition."
                    },
                    {
                        "cmd": "/decks share [deck] [user]",
                        "desc": "Send a saved deck directly to a teammate via DM."
                    },
                    {
                        "cmd": "/decks export [deck]",
                        "desc": "Export a high-definition image card graphic of any saved deck."
                    },
                    {
                        "cmd": "/deck show [code]",
                        "desc": "View a deck from another user or from a shared deck code."
                    },
                    {
                        "cmd": "/deck lookup [code]",
                        "desc": "View a deck from another user or from a shared deck code."
                    }
                ]
            }
        ]
    },
    {
        "id": "beastmoon",
        "icon": "ph-paw-print",
        "title": "W101: Beastmoon Suite",
        "subtitle": "Track form progress, price out Lunari and Idols, and compare against the global boards.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Track your Beastmoon Hunt and Monster Mayhem form tiers, estimate Lunari and Idol progress toward Tier 5, and post public tier-up announcements to a configured channel."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/bm stats",
                        "desc": "Open the Beastmoon form spell and stats browser."
                    },
                    {
                        "cmd": "/bm add",
                        "desc": "Launch the Beastmoon Form Add function for tier progress."
                    },
                    {
                        "cmd": "/bm quick_add [form] [school] [tier]",
                        "desc": "Update form tiers with autocomplete."
                    },
                    {
                        "cmd": "/bm check",
                        "desc": "Inspect progress towards Tier 5 with exact Lunari and Idol costs."
                    },
                    {
                        "cmd": "/bm forms",
                        "desc": "Show your saved Beastmoon forms and unlock tier chart."
                    },
                    {
                        "cmd": "/bm leaderboard",
                        "desc": "View top Beastmoon players in your server or cross-server network."
                    },
                    {
                        "cmd": "/bm max",
                        "desc": "Display players who have achieved max Tier 5 form masteries."
                    },
                    {
                        "cmd": "/bm log_channel [channel]",
                        "desc": "Designate a channel for public Beastmoon level-up announcements."
                    },
                    {
                        "cmd": "/bm redeem [code]",
                        "desc": "Sync Beastmoon form upgrades from the Web Dashboard."
                    },
                    {
                        "cmd": "/bm forms_alt",
                        "desc": "Show your saved alt-profile Beastmoon forms."
                    },
                    {
                        "cmd": "/bm user [member]",
                        "desc": "View another member's saved Beastmoon forms."
                    }
                ]
            }
        ]
    },
    {
        "id": "recap_tracker",
        "icon": "ph-notebook",
        "title": "W101 Raid & Activity Recap",
        "subtitle": "Log a raid after the fact: win or loss, keys used, who hosted, who swapped schools, and who saw the wipe happen.",
        "content": [
            {
                "type": "heading",
                "text": "Setup"
            },
            {
                "type": "list",
                "items": [
                    "Choose the roster or recap channel with /w101 set_roster_channel.",
                    "Confirm event staff can use the W101 tracking commands in that channel.",
                    "Record a test result and verify it appears in the intended recap or analytics view.",
                    "Use /w101 remove_roster_channel before deleting or replacing the configured channel."
                ]
            },
            {
                "type": "commands",
                "title": "Tracking Commands",
                "items": [
                    {
                        "cmd": "/w101 win",
                        "desc": "Record a win."
                    },
                    {
                        "cmd": "/w101 loss",
                        "desc": "Record a loss."
                    },
                    {
                        "cmd": "/w101 key_hosted",
                        "desc": "Record a hosted key."
                    },
                    {
                        "cmd": "/w101 raid_hosted",
                        "desc": "Record a hosted raid."
                    },
                    {
                        "cmd": "/w101 school_swap",
                        "desc": "Record a school swap."
                    },
                    {
                        "cmd": "/w101 wipe_witnessed",
                        "desc": "Record a witnessed wipe."
                    }
                ]
            }
        ]
    },
    {
        "id": "pet_tome",
        "icon": "ph-book-bookmark",
        "title": "W101: Pet Tome Database",
        "subtitle": "Wizard101 pet hatching details.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Look up hatching information for any pet."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/pet lookup [query]",
                        "desc": "Search for any pet by name to check info."
                    }
                ]
            }
        ]
    },
    {
        "id": "spells",
        "icon": "ph-book-open-text",
        "title": "W101: Spell Tome Database",
        "subtitle": "Spell card lookup by name or school from the bot's cached card-art registry.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Search the spell card registry by spell name or school folder. Results show available card art and school groupings from the bot's spell cache."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/spell [query]",
                        "desc": "Search for a spell card or choose a school list from autocomplete."
                    }
                ]
            }
        ]
    },
    {
        "id": "teamup_w101",
        "icon": "ph-users-four",
        "title": "W101: Dungeon Team-Ups",
        "subtitle": "A dungeon LFG post that people can join with one button.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Post a Team-Up board for Waterworks, Darkmoor or a raid, and let the team fill itself. Members join with one click, pick their school, and get a voice channel made for them once the team is full."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/teamup create",
                        "desc": "Open an form to post a new dungeon Team-Up lobby."
                    },
                    {
                        "cmd": "/teamup quick [dungeon] [required players]",
                        "desc": "Post a Team-Up request for a specific dungeon."
                    },
                    {
                        "cmd": "/teamup list",
                        "desc": "Display all open Team-Up lobbies actively looking for players."
                    },
                    {
                        "cmd": "/teamup edit",
                        "desc": "Edit your Team-Up request."
                    },
                    {
                        "cmd": "/teamup extend [minutes]",
                        "desc": "Add extra time to an active Team-Up countdown timer."
                    },
                    {
                        "cmd": "/teamup end [team_id]",
                        "desc": "Disband an active Team-Up lobby."
                    },
                    {
                        "cmd": "/teamup channel [channel]",
                        "desc": "Set dedicated text channel for Team-Up board postings."
                    },
                    {
                        "cmd": "/teamup role [role]",
                        "desc": "Set default role pinged when new dungeon runs are posted."
                    }
                ]
            }
        ]
    },
    {
        "id": "value_reagent",
        "icon": "ph-coins",
        "title": "W101: Treasure Card Values",
        "subtitle": "Treasure Card value lookups from the configured community values.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Look up Treasure Card values by name."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/value tc [query]",
                        "desc": "Look up the current listed value for a Treasure Card."
                    }
                ]
            }
        ]
    },
    {
        "id": "strategy",
        "icon": "ph-scroll",
        "title": "W101: Boss Strategies",
        "subtitle": "Boss cheat sheets, blade turn orders and position guides, written for the raids your guild actually runs.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Keep your boss cheat sheets in Discord and pull them up mid-run instead of alt-tabbing to a wiki."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/strategy list",
                        "desc": "List all saved boss strategy guides available in the server."
                    },
                    {
                        "cmd": "/strategy add [boss_name] [guide_text]",
                        "desc": "Save a new boss cheat guide or strategy sequence."
                    },
                    {
                        "cmd": "/strategy import [json_file]",
                        "desc": "Import strategy entries from a JSON file."
                    },
                    {
                        "cmd": "/strategy delete [boss_name]",
                        "desc": "Remove an outdated boss strategy guide."
                    }
                ]
            }
        ]
    },
    {
        "id": "tapestry",
        "icon": "ph-map-trifold",
        "title": "W101: House Tapestries",
        "subtitle": "Personal checklist for housing tapestries and bobbleheads.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Your own checklist of Wizard101 house tapestries and bobbleheads, ticked off with a command."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/tapestry list",
                        "desc": "View your saved tapestry checklist."
                    },
                    {
                        "cmd": "/tapestry set [name] [status]",
                        "desc": "Toggle whether a tapestry is marked collected."
                    },
                    {
                        "cmd": "/bobblehead list",
                        "desc": "List all saved housing bobbleheads."
                    },
                    {
                        "cmd": "/bobblehead set [name] [status]",
                        "desc": "Toggle ownership status of a housing bobblehead."
                    }
                ]
            }
        ]
    },
    {
        "id": "wizard_info",
        "icon": "ph-user-list",
        "title": "W101: Wizard Registry",
        "subtitle": "Members register their own wizards; staff work the exceptions.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "The registry keeps every member's Wizard101 wizards: name, school, level, and whether that wizard is still in your in-game guild. Members enter their own through a guided flow, so nobody has to collect wizard posts from a channel and paste them in."
            },
            {
                "type": "text",
                "text": "Bulk entry still works. One wizard per line as name, school, level, for example \"Sean IronStone death 170\". Separators, an optional Level prefix, and several wizards on one line are all accepted."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Open the Wizard Config page in the dashboard and switch member self-service on.",
                    "Choose the panel channel and press Post panel. Posting leaves that channel read-only for @everyone, so the panel stays something members press rather than chat under; clear the checkbox on the page to leave the channel open.",
                    "Ask members to press the panel, or to run /wizard setup themselves.",
                    "Use /wizard unregistered to see who has registered nothing, then /wizard remind to DM them.",
                    "Work the roster with /wizard unassigned, or paste a whole list as staff with /wizard register.",
                    "Once a month, paste your in-game guild roster on the Wizard Config page: levels move in place, and wizards that dropped out are flagged as removed in-game."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/wizard setup",
                        "desc": "Register, update, or remove your own wizards one step at a time."
                    },
                    {
                        "cmd": "/wizard list [member]",
                        "desc": "Show the wizards registered to a member."
                    },
                    {
                        "cmd": "/wizard all [school]",
                        "desc": "Show every member and their wizards, optionally filtered to one school."
                    },
                    {
                        "cmd": "/wizard register [member]",
                        "desc": "Register wizards for a member by pasting lines."
                    },
                    {
                        "cmd": "/wizard remove [name] [member]",
                        "desc": "Remove one of a member's wizards by name."
                    },
                    {
                        "cmd": "/wizard panel [channel]",
                        "desc": "Post the permanent panel members press to register."
                    },
                    {
                        "cmd": "/wizard unregistered [role]",
                        "desc": "List the members who have registered no wizards."
                    },
                    {
                        "cmd": "/wizard remind [role] [limit]",
                        "desc": "DM the members who still have no wizards registered."
                    },
                    {
                        "cmd": "/wizard unassigned",
                        "desc": "Show the wizards nobody is registered to, and assign them."
                    },
                    {
                        "cmd": "/wizard assign [wizard] [member]",
                        "desc": "Move one unassigned wizard onto the member it belongs to."
                    }
                ]
            },
            {
                "type": "callout",
                "variant": "tip",
                "text": "Staff can mark a wizard as gone from the in-game guild from /wizard unassigned, from /wizard list, or by right-clicking a member and choosing Apps &gt; Show Wizard Info. Nothing is deleted either way: the wizard keeps its place and is listed under the members who are no longer in the guild."
            }
        ]
    },
    {
        "id": "server_admin",
        "icon": "ph-wrench",
        "title": "Server Administration Helpers",
        "subtitle": "Modules, roles, channels and bot messages, handled from inside Discord.",
        "content": [
            {
                "type": "heading",
                "text": "Before you use these"
            },
            {
                "type": "list",
                "items": [
                    "Put SeanBot above every role it has to create, edit, delete, add, or remove.",
                    "The person running a role command must also be allowed to manage the target role.",
                    "Use Dashboard Logs and server logs to retain an audit trail for dashboard and Discord changes.",
                    "The say command suppresses mass mentions, but staff should still use it only in approved channels."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/serveradmin modules",
                        "desc": "List all optional module states."
                    },
                    {
                        "cmd": "/serveradmin module [module] [enabled]",
                        "desc": "Enable or disable a module."
                    },
                    {
                        "cmd": "/serveradmin addrole [name] [color]",
                        "desc": "Create a role below SeanBot."
                    },
                    {
                        "cmd": "/serveradmin editrole [role]",
                        "desc": "Change a role name, color, display, or mentionable state."
                    },
                    {
                        "cmd": "/serveradmin delrole [role]",
                        "desc": "Delete a manageable role."
                    },
                    {
                        "cmd": "/serveradmin memberrole [member] [role] [action]",
                        "desc": "Add, remove, or toggle a member role."
                    },
                    {
                        "cmd": "/serveradmin editchannel [channel]",
                        "desc": "Edit a text channel name, topic, NSFW state, or slowmode."
                    },
                    {
                        "cmd": "/serveradmin mods",
                        "desc": "List roles that currently have moderation permissions."
                    },
                    {
                        "cmd": "/serveradmin say [message]",
                        "desc": "Send a plain message through SeanBot."
                    }
                ]
            }
        ]
    },
    {
        "id": "antiraid",
        "icon": "ph-shield-warning",
        "title": "Anti-Raid & Security",
        "subtitle": "Raid protection, scam detection, quarantine, and a live risk score you can watch.",
        "content": [
            {
                "type": "heading",
                "text": "Security Engine"
            },
            {
                "type": "text",
                "text": "Raid bots, scam links, suspicious webhooks, invite abuse and message floods, watched as they arrive. Heat scores are temporary. Canary mode logs what it would have caught without punishing anyone, and a quarantine role can hold an account out of the way as long as the bot's role sits above it. Scam bots that hide in a voice channel's text chat are caught too: a first message there carrying two or more images counts as a hard detection, and the Threat Action Policies section decides what happens to it, quarantine by default."
            },
            {
                "type": "list",
                "title": "Dashboard Pages",
                "items": [
                    "Anti-Raid shows the main protection settings, trusted roles, safe domains, quarantine settings, and penalty timing.",
                    "The integrated Risk Score view shows live heat scores, saved channel multipliers, role multipliers, channel thresholds, and a reset control for active risk tracking."
                ]
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Anti-Raid is on by default, so the work here is tuning it rather than enabling it.",
                    "Choose trusted roles, safe domains, alert channels, and a quarantine role below SeanBot.",
                    "Turn on Canary mode first so detections are logged without automatic punishment.",
                    "Run /antiraid audit and /antiraid simulate, review false positives, then enable enforcement.",
                    "Use channel sensitivity and role or channel multipliers only after the base setup behaves correctly."
                ]
            },
            {
                "type": "commands",
                "title": "Security Commands Reference",
                "items": [
                    {
                        "cmd": "/antiraid dashboard",
                        "desc": "Display live threat indicators, multipliers, and active security rules."
                    },
                    {
                        "cmd": "/antiraid audit",
                        "desc": "Perform automated security audit to flag role hierarchy risks."
                    },
                    {
                        "cmd": "/antiraid canary [state]",
                        "desc": "Toggle Silent Canary Mode (log threats without taking action)."
                    },
                    {
                        "cmd": "/antiraid register_scam [image] [message]",
                        "desc": "Register scam images as visual blocks: upload the files, or pass a message link and the bot fingerprints the picture that is already posted, which keeps re-crops and re-renders of it matchable."
                    },
                    {
                        "cmd": "/antiraid unregister_scam [hash]",
                        "desc": "Remove an image hash from the visual scam blocker."
                    },
                    {
                        "cmd": "/antiraid scam_list [recover] [days]",
                        "desc": "Inspect active visual scam fingerprints, or rebuild the library by re-registering scam images Anti-Raid caught in the past."
                    },
                    {
                        "cmd": "/antiraid whitelist [role]",
                        "desc": "Grant trusted roles bypass immunity from security checks."
                    },
                    {
                        "cmd": "/antiraid quarantine [role] [enable]",
                        "desc": "Open the dedicated Quarantine setup."
                    },
                    {
                        "cmd": "/antiraid unquarantine [user]",
                        "desc": "Restore a quarantined user's saved roles."
                    },
                    {
                        "cmd": "/antiraid pause [minutes]",
                        "desc": "Temporarily pause join detection during large official events."
                    },
                    {
                        "cmd": "/antiraid simulate [level]",
                        "desc": "Simulate raid traffic to test automated response times."
                    },
                    {
                        "cmd": "/antiraid threatlist",
                        "desc": "Inspect accounts currently flagged with elevated heat scores."
                    },
                    {
                        "cmd": "/antiraid logs",
                        "desc": "View persistent audit trail logs of security enforcement actions."
                    },
                    {
                        "cmd": "/antiraid reset",
                        "desc": "Reset server anti-raid parameters back to default security levels."
                    },
                    {
                        "cmd": "/antiraid multiplier [channel|role] [multiplier]",
                        "desc": "Configure risk score multipliers for high-exposure channels or roles."
                    },
                    {
                        "cmd": "/antiraid channelsensitivity [channel]",
                        "desc": "Tweak security sensitivity on specific channels."
                    },
                    {
                        "cmd": "/antiraid advanced",
                        "desc": "Configure advanced heuristic triggers and automated bans."
                    }
                ]
            }
        ]
    },
    {
        "id": "moderation",
        "icon": "ph-gavel",
        "title": "Server Moderation",
        "subtitle": "The enforcement commands, which respect Discord's role hierarchy so staff cannot act on somebody above them by accident.",
        "content": [
            {
                "type": "heading",
                "text": "High-Efficiency Moderation Tools"
            },
            {
                "type": "text",
                "text": "Warnings, timeouts, kicks, bans, shadowbans, bulk message purges and transcripts, each one carrying its reason and leaving a log entry behind it."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Place SeanBot above every member and role it must moderate.",
                    "Give staff the specific Discord permissions required for each action instead of Administrator where possible.",
                    "Configure moderation and dashboard-action logs before staff begin using commands.",
                    "Test kick, timeout, purge, lock, and archive behavior in a private channel with a test role."
                ]
            },
            {
                "type": "commands",
                "title": "Enforcement Commands",
                "items": [
                    {
                        "cmd": "/kick [member] [reason]",
                        "desc": "Kick a member with DM notification and audit log tracking."
                    },
                    {
                        "cmd": "/ban [user] [reason]",
                        "desc": "Ban a user and dispatch an appeal guide link via DM."
                    },
                    {
                        "cmd": "/unban [user_id] [reason]",
                        "desc": "Revoke a ban using a numerical Discord User ID."
                    },
                    {
                        "cmd": "/softban [user] [days]",
                        "desc": "Ban and immediately unban to clear recent messages."
                    },
                    {
                        "cmd": "/shadowban [user_id]",
                        "desc": "Pre-emptively ban a user ID before they join the server."
                    },
                    {
                        "cmd": "/nick [member] [nickname]",
                        "desc": "Update or clear a member's server nickname."
                    },
                    {
                        "cmd": "/timeout [member] [duration]",
                        "desc": "Apply a timeout (1 minute to 28 days)."
                    },
                    {
                        "cmd": "/untimeout [member]",
                        "desc": "Remove an active timeout penalty."
                    },
                    {
                        "cmd": "/purgetimeout [duration]",
                        "desc": "Mass-clear messages sent by users currently in timeout."
                    },
                    {
                        "cmd": "/purge [amount]",
                        "desc": "Bulk delete messages in the active channel."
                    },
                    {
                        "cmd": "/lock [channel] [reason]",
                        "desc": "Lock a text channel to prevent non-staff messaging."
                    },
                    {
                        "cmd": "/archive [limit]",
                        "desc": "Export complete channel message logs to file archive."
                    },
                    {
                        "cmd": "/archive get [id]",
                        "desc": "Retrieve a previously archived channel transcript."
                    },
                    {
                        "cmd": "/staff clean [count]",
                        "desc": "Purge recent bot commands and responses."
                    },
                    {
                        "cmd": "/staff unlock [channel]",
                        "desc": "Re-open a locked channel for general messaging."
                    },
                    {
                        "cmd": "/staff locked",
                        "desc": "List all channels currently under staff lockdown."
                    },
                    {
                        "cmd": "/staff slowmode [seconds]",
                        "desc": "Adjust channel message cooldown slowmode."
                    },
                    {
                        "cmd": "/staff members [role]",
                        "desc": "List all members holding a specific role."
                    },
                    {
                        "cmd": "/staff timeouts",
                        "desc": "List all server members currently under active timeout."
                    }
                ]
            }
        ]
    },
    {
        "id": "warn_cog",
        "icon": "ph-warning-octagon",
        "title": "Warnings & Points",
        "subtitle": "Warnings with points attached, and escalations that fire on their own once the points stack up.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Every warning keeps its reason, the staff member who issued it and the date, so a case is something you can read back rather than a message buried in a channel."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Confirm the warnings database and Logging module are available.",
                    "Use /modpreset set to create consistent reasons for common staff actions.",
                    "Test /warn add on a test member, review /warn list, then clear the test warning.",
                    "Limit warning management to trusted moderator roles through Discord command permissions and dashboard access."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/warn add [member] [reason] [points]",
                        "desc": "Issue an official warning log with assigned penalty points."
                    },
                    {
                        "cmd": "/warn list [member]",
                        "desc": "Inspect a member's warning history and active points."
                    },
                    {
                        "cmd": "/warn clear [member]",
                        "desc": "Clear all warning logs and reset penalty points."
                    },
                    {
                        "cmd": "/modpreset set [key] [reason]",
                        "desc": "Save a reusable moderation reason."
                    },
                    {
                        "cmd": "/modpreset list",
                        "desc": "List saved moderation reasons."
                    },
                    {
                        "cmd": "/modpreset warn [member] [preset]",
                        "desc": "Warn a member with a saved reason."
                    },
                    {
                        "cmd": "/staff points [member]",
                        "desc": "Check total active moderation penalty points for a user."
                    },
                    {
                        "cmd": "/staff logs [member]",
                        "desc": "Inspect complete staff warning history logs for a user."
                    }
                ]
            }
        ]
    },
    {
        "id": "logging",
        "icon": "ph-file-text",
        "title": "Audit Logging & Jails",
        "subtitle": "Audit events go to your webhook after the fact, so a slow log endpoint cannot lag the bot.",
        "content": [
            {
                "type": "heading",
                "text": "High-Speed Event Logging"
            },
            {
                "type": "text",
                "text": "Message edits and deletions, role changes, voice activity, joins and leaves: every audit event lands in the log channel you point it at. Log Config can send the lot to one all-logs channel if that is all you want, or split the categories across separate webhook channels when the server is busy. Ban appeals, suggestions and public report actions are written by the Staff Workflows category."
            },
            {
                "type": "heading",
                "text": "Who Changed The Logging Settings"
            },
            {
                "type": "text",
                "text": "Every change to the logging configuration is recorded, whether it was made with a /log command or on this page. The entry says who made it and what actually moved: which events went off or came back on, where each category now reports, which channels were muted, and whether invite tracking, the deep-log archive, the integrity channel or the permission-health alerts changed. Webhook URLs are deliberately left out, because holding one is enough to post into the channel."
            },
            {
                "type": "text",
                "text": "The record is written even when the change was to turn logging off. Logging config is an always-on event: /log toggle, /log toggle_batch and the Event Toggles panels cannot switch it off, so silencing the log leaves an entry naming who silenced it and what they silenced. It is stored where no log channel is needed to hold it - the server's log archive, which the Server Logs page reads, and the change history kept for the server - so a server that never configured a destination still has the trail."
            },
            {
                "type": "text",
                "text": "A server that has gone quiet can see what happened and undo it. /log reset turns every event back on and records how many had been off, and /log status marks the always-on events inside their category, so the panel and the log channel agree about what is arriving."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/log webhook [url] [type]",
                        "desc": "Configure and test a webhook destination for audit events."
                    },
                    {
                        "cmd": "/log toggle [log_type]",
                        "desc": "Enable or disable logging for specific server events."
                    },
                    {
                        "cmd": "/log toggle_batch [type] [state]",
                        "desc": "Batch toggle multiple audit event categories at once."
                    },
                    {
                        "cmd": "/log ignore_reaction_add [emoji]",
                        "desc": "Ignore specific reaction emojis from audit logs."
                    },
                    {
                        "cmd": "/log ignore_log_add [channel]",
                        "desc": "Exclude high-traffic channels from audit logging."
                    },
                    {
                        "cmd": "/log status",
                        "desc": "Inspect active webhooks, enabled event types, and channel filters."
                    },
                    {
                        "cmd": "/log metrics",
                        "desc": "View audit event processing speed and throughput stats."
                    },
                    {
                        "cmd": "/log reset",
                        "desc": "Reset audit logging configurations back to server defaults."
                    },
                    {
                        "cmd": "/legacy_quarantine user [member] [duration]",
                        "desc": "Jail a member and safely back up their original roles."
                    },
                    {
                        "cmd": "/legacy_quarantine remove [member]",
                        "desc": "Release a jailed member and restore all saved roles."
                    }
                ]
            }
        ]
    },
    {
        "id": "staff_tools",
        "icon": "ph-wrench",
        "title": "Appeals & Suggestions",
        "subtitle": "Ban appeals and suggestions each get a dashboard page, instead of a channel thread nobody can find again.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Ban Appeals and Suggestions each have their own dashboard page. Admins choose the review channel on those pages and choose logging destinations in Log Config under Staff Workflows. Ban Appeals can also ping selected notification roles when a new appeal arrives. Ban notices offer the Discord appeal menu and `/appeals submit` command first, plus the public appeal dashboard at `https://dashboard-seanbo.vercel.app/appeals`. If Discord asks for app authorization or the menu cannot open, users can authorize through the website, choose a verified banned server, and submit directly to staff. Moderators only see the pages and buttons that admins allow in Server Access."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/modpreset set [key] [reason]",
                        "desc": "Save a reusable moderation warning shortcut."
                    },
                    {
                        "cmd": "/modpreset list",
                        "desc": "List all saved moderation reason presets."
                    },
                    {
                        "cmd": "/modpreset warn [user] [key]",
                        "desc": "Warn a user using a saved preset key."
                    },
                    {
                        "cmd": "/appeals setup [channel]",
                        "desc": "Enable ban appeals and set staff review channel."
                    },
                    {
                        "cmd": "/appeals notify_add_role [role]",
                        "desc": "Ping a role when a new ban appeal arrives."
                    },
                    {
                        "cmd": "/appeals notify_remove_role [role]",
                        "desc": "Stop pinging a role for new ban appeals."
                    },
                    {
                        "cmd": "/appeals notify_clear_roles",
                        "desc": "Clear all ban appeal notification roles."
                    },
                    {
                        "cmd": "/appeals submit [text]",
                        "desc": "Submit a ban appeal for staff evaluation."
                    },
                    {
                        "cmd": "/appeals list",
                        "desc": "View open ban appeals awaiting staff decision."
                    },
                    {
                        "cmd": "/appeals view [id]",
                        "desc": "Inspect appeal details, user statement, and history."
                    },
                    {
                        "cmd": "/appeals close [id] [action]",
                        "desc": "Approve or deny an appeal, triggering unbans."
                    },
                    {
                        "cmd": "/suggestion setup [channel]",
                        "desc": "Set channel where community suggestions publish."
                    },
                    {
                        "cmd": "/suggestion submit [title]",
                        "desc": "Submit a new suggestion for community voting."
                    },
                    {
                        "cmd": "/suggestion list",
                        "desc": "List active community suggestions."
                    },
                    {
                        "cmd": "/suggestion close [id] [status]",
                        "desc": "Mark a suggestion Approved, Denied, or In Progress."
                    }
                ]
            }
        ]
    },
    {
        "id": "invites",
        "icon": "ph-link-simple",
        "title": "Invite Links & Tracking",
        "subtitle": "Create an invite, attach a reward role, then see who actually joined through it.",
        "content": [
            {
                "type": "heading",
                "text": "Enable the Invites Module"
            },
            {
                "type": "list",
                "items": [
                    "Open the dashboard, go to Module Settings, and enable Invite Links.",
                    "Confirm SeanBot has the Manage Server permission. It is required to list and track invites.",
                    "Open the Invite Links page. Every active invite appears with its code, target channel, creator, usage count, and expiry.",
                    "Delegated staff access is configured on Server Access: the Invite Links card controls who may create, edit, revoke, and duplicate invites."
                ]
            },
            {
                "type": "heading",
                "text": "Creating Invites from the Dashboard"
            },
            {
                "type": "text",
                "text": "Use Create a new invite on the Invite Links page to generate a tracked invite. Choose the target channel, set a maximum use count (0-100), set an expiry (up to 7 days, or never), mark it as a unique invite, and optionally enable temporary membership so Discord removes joiners when they disconnect. Invites created here are attributed to the dashboard admin who made them, not to the bot, so invite logs stay accurate."
            },
            {
                "type": "heading",
                "text": "Join Perks per Invite"
            },
            {
                "type": "text",
                "text": "Each invite can carry its own perks, stored per invite code and applied automatically when a member joins through it."
            },
            {
                "type": "list",
                "items": [
                    "Reward roles: grant up to 10 roles below SeanBot's highest role, each optionally auto-removed after 1-365 days.",
                    "Welcome message: sent to the joiner by DM first, then posted in a channel you choose. Text tags work in both.",
                    "Nickname template: set the joiner's nickname, for example [{invite}] {name}.",
                    "Text tags: {name}, {user}, {inviter}, {inviter_name}, {server}, {invite}, {member_count}, and {date}. DMs do not render mentions, so prefer {name} and {inviter_name} there.",
                    "Edit or clear perks any time from the invite's row; emptying the perk fields removes the rule."
                ]
            },
            {
                "type": "heading",
                "text": "Analytics & Leaderboard"
            },
            {
                "type": "list",
                "items": [
                    "Each invite shows joins over the last 7 days, the previous 7 days, and the last 30 days, plus the most recent tracked join date.",
                    "The Top Inviters card ranks members by tracked joins; members with zero tracked joins are hidden.",
                    "Open an invite's member list to see exactly who joined through it and whether they are still in the server.",
                    "Joiner records and perk audits are kept for 90 days."
                ]
            },
            {
                "type": "heading",
                "text": "Expiry Alerts & Join-Spike Guard"
            },
            {
                "type": "list",
                "items": [
                    "Expiry alerts warn staff in the invite logs 12, 24, or 48 hours before an invite expires; set to Off to silence them.",
                    "Join-spike guard watches each invite for burst joins: Off, Alert only, or Alert + auto-revoke.",
                    "Choose the trigger sensitivity: 10 joins in 10 minutes (standard) or 25 joins in 10 minutes (high). Repeated alerts for the same invite are suppressed with a cooldown.",
                    "Auto-revoke deletes the invite and needs Manage Server; if the revoke fails, the alert says so and the invite stays active."
                ]
            },
            {
                "type": "heading",
                "text": "Managing Existing Invites"
            },
            {
                "type": "list",
                "items": [
                    "Search by code, channel, or creator, and sort by soonest expiry; expiring invites list before never-expiring ones.",
                    "Duplicate copies an invite together with its perks into a new invite with the same lifetime.",
                    "Revoke deletes the invite immediately and removes any stored perks.",
                    "The server's vanity URL is shown separately when one is set."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/invite",
                        "desc": "Get the bot's own invite link."
                    },
                    {
                        "cmd": "/server invite [code]",
                        "desc": "Show details about a Discord invite code or URL."
                    }
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "No invites listed?",
                "text": "Invite tracking needs the Manage Server permission. If the page reports it could not load invites, grant Manage Server to SeanBot and refresh."
            }
        ]
    },
    {
        "id": "reports",
        "icon": "ph-flag",
        "title": "Member Reports",
        "subtitle": "One click to report a message or a member, without anyone in chat seeing it happen.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "A report button that does not announce itself: the member flags a message or a person, and only staff see that it happened. Public Vote Reports can post a review card in your chosen staff channel, ping selected roles, track weighted approve/decline votes, protect selected roles from public voting, and log staff actions through Log Config under Staff Workflows. Members can create vote reports from the message context menu, with `/report` plus a message link, or with the optional dashboard-configured report emoji shortcut."
            },
            {
                "type": "list",
                "title": "Dashboard Controls",
                "items": [
                    "Choose the review channel, notification roles, report cooldown, auto-close time, and report emoji.",
                    "Pick starter roles, voter roles, protected roles, and roles blocked from using public reports.",
                    "Set fixed or percentage approve/decline thresholds.",
                    "Give trusted voter roles higher vote weight when needed.",
                    "Choose what happens when a report passes: close only, delete the message, timeout, kick, or ban if SeanBot has permission.",
                    "Set optional daily limits for the whole server or for each member."
                ]
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Enable Public Reports and choose the public review channel and log channel.",
                    "Choose which roles may start reports, vote, review, force a decision, or close a report.",
                    "Set approval and decline thresholds in Voting & Thresholds; use Access & Actions only for who may perform each action.",
                    "Submit a test report, vote, withdraw a vote, and confirm the status bar and dashboard detail view update.",
                    "Verify approval and decline actions are recorded in the configured staff logs."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/report [message_link] [reason]",
                        "desc": "Create a public vote report by pasting a Discord message link and adding a reason."
                    },
                    {
                        "cmd": "Report User (Context Menu)",
                        "desc": "Right-click any user -&gt; Apps -&gt; Report User to submit a private user report to staff."
                    },
                    {
                        "cmd": "Vote Report (Message Context Menu)",
                        "desc": "Right-click or long-press a message -&gt; Apps -&gt; Vote Report to open the public vote report reason form."
                    },
                    {
                        "cmd": "Report Emoji Shortcut",
                        "desc": "If enabled in the dashboard, react to a message with the chosen emoji to create a vote report with the default reaction reason."
                    },
                    {
                        "cmd": "/publicreport channel [channel]",
                        "desc": "Choose where public vote reports are posted for review."
                    },
                    {
                        "cmd": "/publicreport notify_add_role [role]",
                        "desc": "Ping a role when a new public report is created."
                    },
                    {
                        "cmd": "/publicreport notify_remove_role [role]",
                        "desc": "Stop pinging a role for new public reports."
                    },
                    {
                        "cmd": "/publicreport view_settings",
                        "desc": "Show public report channels, voting rules, and notification roles."
                    }
                ]
            }
        ]
    },
    {
        "id": "timeping",
        "icon": "ph-clock-countdown",
        "title": "TimePing & Event Pings",
        "subtitle": "Role pings and countdowns for events, kept in step with Discord's own scheduled events.",
        "content": [
            {
                "type": "heading",
                "text": "Event Reminders"
            },
            {
                "type": "text",
                "text": "Reminders for the things people have to be told about: raids, guild meetings, anything with a start time. Staff schedule them by hand, link a Discord Scheduled Event, or point the bot at a channel and let it read the event time out of the post. Members join a reminder list by reacting with the emoji you chose."
            },
            {
                "type": "text",
                "text": "The dashboard TimePing page manages server defaults, reminder interval templates, auto-watch channels, active TimePings, Discord Scheduled Event links, recurrence, role targets, allowed reactor roles, and Time Emoji Helper settings."
            },
            {
                "type": "heading",
                "text": "Dashboard Settings"
            },
            {
                "type": "text",
                "text": "Server defaults control the timezone, reminder intervals, who gets pinged, direct-message reminders, post-event cleanup time, custom reminder text, and how long notification messages stay visible."
            },
            {
                "type": "text",
                "text": "Auto-watch settings let admins pick a watched channel, default event title, timezone, signup emoji, ping target, reminder intervals, recurrence, repeat limits, allowed reactor roles, and cleanup timing. Active auto-watch channels and active TimePings can be removed from the dashboard."
            },
            {
                "type": "text",
                "text": "Time Emoji Helpers let admins choose the conversion emoji, decide who can use it, allow automatic or manual reactions, turn backtick timestamp replies on or off, and decide whether reaction results should be sent privately."
            },
            {
                "type": "heading",
                "text": "Step-by-Step Setup"
            },
            {
                "type": "list",
                "items": [
                    "TimePing is on by default; make sure SeanBot can read messages, add reactions, manage events if using Discord Scheduled Events, and mention the roles you want pinged.",
                    "Open the dashboard TimePing page and set Defaults first: timezone, reminder intervals, ping target, cleanup timing, and reminder text.",
                    "Create reusable interval templates if your server repeats the same reminders, such as 24h, 1h, and 10m before an event.",
                    "For a Discord Scheduled Event, use /timeping native or the dashboard event linker so members can join the event and still get SeanBot reminders.",
                    "For a normal announcement message, use /timeping add with the message link and event time, then tell members to react with the signup emoji.",
                    "For automatic event posts, add an Auto-Watch channel, choose the watched timezone and signup emoji, then test with one future event message.",
                    "Use /timeping simulate before important events to confirm the reminder schedule, then check Active TimePings in the dashboard."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/timeping native [event]",
                        "desc": "Link a TimePing alert directly to a native Discord event."
                    },
                    {
                        "cmd": "/timeping schedule [title] [time] [role]",
                        "desc": "Schedule a future role ping with custom text/images."
                    },
                    {
                        "cmd": "/timeping add [message] [time]",
                        "desc": "Attach an event reminder to a message and alert reactors."
                    },
                    {
                        "cmd": "/timeping my-events",
                        "desc": "View upcoming scheduled events you have joined."
                    },
                    {
                        "cmd": "/timeping server-events",
                        "desc": "List all active scheduled events in the server."
                    },
                    {
                        "cmd": "/timeping edit [event_id]",
                        "desc": "Open live edit panel for an active event."
                    },
                    {
                        "cmd": "/timeping remove [message_link]",
                        "desc": "Remove an active TimePing from a message or linked Discord event."
                    },
                    {
                        "cmd": "/timeping simulate [time]",
                        "desc": "Preview exact reminder firing times in advance."
                    },
                    {
                        "cmd": "/timeping defaults set",
                        "desc": "Update server-wide default alert preferences."
                    },
                    {
                        "cmd": "/timeping templates list",
                        "desc": "List saved reminder interval templates."
                    },
                    {
                        "cmd": "/timeping auto add [channel]",
                        "desc": "Auto-watch a specific channel for event posts."
                    },
                    {
                        "cmd": "/timeping auto settings [channel]",
                        "desc": "Configure the watched channel emoji, timezone, reminder intervals, allowed reactor roles, recurrence, and who gets pinged."
                    },
                    {
                        "cmd": "/timeping schedule",
                        "desc": "Schedule a timed ping through the guided command."
                    }
                ]
            }
        ]
    },
    {
        "id": "timezones",
        "icon": "ph-globe-stand",
        "title": "Timezones & World Clocks",
        "subtitle": "Members set a timezone, and staff get a map of where everyone actually is.",
        "content": [
            {
                "type": "heading",
                "text": "Global Time Synchronization"
            },
            {
                "type": "text",
                "text": "Nobody has to work out what 8 PM means for everybody else. A member sets a timezone once, or lets the bot detect it, and every poll close time, event reminder and timestamp printed afterwards arrives in their own local clock."
            },
            {
                "type": "text",
                "text": "Admins can suggest a timezone for another member with `/timezone suggest-set`. The member must approve the change with buttons before SeanBot saves it."
            },
            {
                "type": "text",
                "text": "The Timezone Analytics dashboard shows registered timezone coverage, active timezone groups, the optional 3D globe, the timezone setup panel deployer, and automatic timezone role controls."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/timezone detect",
                        "desc": "Work out your timezone from the local time you enter."
                    },
                    {
                        "cmd": "/timezone compare [user]",
                        "desc": "Compare your local time directly with another member."
                    },
                    {
                        "cmd": "/timezone map",
                        "desc": "Get a link to the interactive Community Timezone Map."
                    },
                    {
                        "cmd": "/timezone admin-map",
                        "desc": "Get administrative view of community timezone map."
                    },
                    {
                        "cmd": "/timezone admin-set [user] [tz]",
                        "desc": "Force set a member's local timezone (Admin only)."
                    },
                    {
                        "cmd": "/timezone set [tz]",
                        "desc": "Manually set your local timezone."
                    },
                    {
                        "cmd": "/timezone suggest-set [target] [timezone]",
                        "desc": "Suggest a timezone for another member; SeanBot only saves it if that member approves."
                    },
                    {
                        "cmd": "/timezone clear",
                        "desc": "Remove your saved timezone."
                    },
                    {
                        "cmd": "/timezone user [member]",
                        "desc": "View a member's local time and UTC offset."
                    }
                ]
            }
        ]
    },
    {
        "id": "time_converter",
        "icon": "ph-clock-user",
        "title": "Time & Timestamp Converter",
        "subtitle": "Turns a time somebody typed into a tag every reader sees in their own timezone.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "SeanBot can convert times mentioned in messages without guessing missing timezones. If a bare time needs the author's timezone and that timezone is not saved, SeanBot asks for setup instead of silently treating the time as UTC."
            },
            {
                "type": "text",
                "text": "When Time Emoji Helpers are enabled on the dashboard, SeanBot can add a configurable clock reaction to messages that contain a safely detected time. Members who are allowed by the dashboard permission setting can click that reaction to receive a private conversion in their saved timezone."
            },
            {
                "type": "text",
                "text": "For quick timestamp creation, wrap a time in backticks or a code block, such as `8 PM EST`. SeanBot replies with Discord timestamp markup that renders in each viewer's local Discord time. Bare wrapped times require the author's saved timezone."
            },
            {
                "type": "commands",
                "title": "Ways To Use It",
                "items": [
                    {
                        "cmd": "Message Context Menu: Convert Time",
                        "desc": "Right-click a message and use Apps &gt; Convert Time to get an ephemeral conversion."
                    },
                    {
                        "cmd": "Message Context Menu: Convert Time (DM)",
                        "desc": "Right-click a message and use Apps &gt; Convert Time (DM) to receive the conversion privately."
                    },
                    {
                        "cmd": "Clock reaction",
                        "desc": "Click the configured clock emoji on a message with a detected time to receive a private conversion."
                    },
                    {
                        "cmd": "`8 PM EST`",
                        "desc": "Wrap a time in backticks or a code block to have SeanBot reply with a Discord timestamp."
                    }
                ]
            }
        ]
    },
    {
        "id": "events",
        "icon": "ph-hourglass-medium",
        "title": "Live Event Countdowns & Polls",
        "subtitle": "Countdown channels for game updates, tournaments, raid nights and server events. They rename themselves as the clock runs down.",
        "content": [
            {
                "type": "heading",
                "text": "What It Does"
            },
            {
                "type": "text",
                "text": "SeanBot creates a voice channel whose name is the countdown, then renames it as the clock runs down, so members can see the time left without opening anything. The channel is removed about an hour after the event ends. The same system runs polls and raid sign-ups, with a fill bar showing how many spots are taken."
            },
            {
                "type": "heading",
                "text": "Creating One"
            },
            {
                "type": "list",
                "items": [
                    "Run /create. It asks whether you are making a countdown timer, a poll, or a raid sign-up.",
                    "Give it a short name. The name appears in the countdown channel, so keep it under 25 characters.",
                    "Set the time. For events, also set the duration in minutes; the default is 60.",
                    "For raid sign-ups, set the raid size to show how many spots there are. Leave it empty for a plain countdown.",
                    "Optionally pick a standard emoji to show in the channel name, such as a calendar or a trophy.",
                    "Already have a post describing the event? Run /create with that message link and the name and time are filled in for you."
                ]
            },
            {
                "type": "heading",
                "text": "While It Is Running"
            },
            {
                "type": "list",
                "items": [
                    "Run /event refresh if a countdown looks stuck. It forces every active event and poll to update right away.",
                    "Run /event cancel with the message link or the countdown channel when an event is called off.",
                    "Run /event extend to add minutes to a running timer.",
                    "Choose where new countdowns go with /event config event and /event config poll.",
                    "Run /event config clean to delete old event and poll records. It keeps the last 30 days unless you pass a different number."
                ]
            },
            {
                "type": "heading",
                "text": "Who Can Use It"
            },
            {
                "type": "list",
                "items": [
                    "Creating, cancelling, and extending need Manage Channels.",
                    "Cleaning old records and forcing a refresh need Administrator."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/create [message_link]",
                        "desc": "Start a new event countdown, poll, or raid sign-up."
                    },
                    {
                        "cmd": "/event refresh",
                        "desc": "Update every active event and poll immediately."
                    },
                    {
                        "cmd": "/event cancel [message_id]",
                        "desc": "Cancel a running event or poll."
                    },
                    {
                        "cmd": "/event extend [message_id] [minutes]",
                        "desc": "Add minutes to a running timer."
                    },
                    {
                        "cmd": "/event config event [category]",
                        "desc": "Set the default category for event countdown channels."
                    },
                    {
                        "cmd": "/event config poll [category]",
                        "desc": "Set the default category for poll countdown channels."
                    },
                    {
                        "cmd": "/event config clean [days]",
                        "desc": "Delete event and poll history older than the chosen number of days."
                    }
                ]
            }
        ]
    },
    {
        "id": "raids",
        "icon": "ph-sword",
        "title": "Raid & Event Organizer",
        "subtitle": "Build a raid, ping the roles that matter, and let people sign up in their own timezone.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Put an event up with a sign-up embed, ping the roles that need to know about it, and show every member the start time in their own timezone."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Choose the raid channel with /set_raid_channel.",
                    "Confirm event staff can create, edit, lock, and cancel raids.",
                    "Create a short test raid and verify signup controls, reminders, and logs before announcing a real event."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/set_raid_channel [channel]",
                        "desc": "Designate text channel where raid signup embeds publish."
                    },
                    {
                        "cmd": "/raid start [host]",
                        "desc": "Open modal form to build and publish a new raid signup."
                    },
                    {
                        "cmd": "/raid list",
                        "desc": "Display all active raid signups running in the server."
                    },
                    {
                        "cmd": "/raid my",
                        "desc": "View upcoming raid events you are signed up for."
                    },
                    {
                        "cmd": "/raid edit [msg_id]",
                        "desc": "Edit title, description, or time of an active raid."
                    },
                    {
                        "cmd": "/raid cancel [msg_id]",
                        "desc": "Cancel a raid event and clean up signup reactions."
                    },
                    {
                        "cmd": "/raid lock [msg_id]",
                        "desc": "Lock raid signups to freeze active rosters."
                    },
                    {
                        "cmd": "/raid unlock [msg_id]",
                        "desc": "Re-open raid signups for new players."
                    }
                ]
            }
        ]
    },
    {
        "id": "raidpolls",
        "icon": "ph-users-three",
        "title": "Polls & Event Rosters",
        "subtitle": "Simple reaction polls, and sign-up polls with slots, caps and waitlists for anything that needs a roster.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Use /poll create or the dashboard simple poll form when you need an easy reaction vote. Use /raidpoll when you need signup slots, caps, waitlists, and roster automation. Advanced polls are game-neutral: they work for Wizard101 raids and for any other game, activity, or community night. /raidpoll opens a guided wizard that builds the poll one piece at a time, with live feedback at every step before anything is posted. The wizard survives bot restarts: progress is saved as you go, running /raidpoll again offers to resume where you left off, and the buttons on an older wizard message keep working. Press Quick Form (experts) if you would rather fill the whole thing in at once."
            },
            {
                "type": "heading",
                "text": "Building Slots One At A Time"
            },
            {
                "type": "text",
                "text": "Add Slot on the wizard message opens a three-field form: When?, What?, and Spots (optional). Enter a time such as Friday 20:00, tomorrow 18:00 or 2026-10-02 19:30, any event name, and a cap; leave Spots empty for unlimited signups. There is no format to separate by hand, and a time SeanBot cannot read is refused with the shape it wanted instead of being accepted silently. Every slot is listed back with its time and cap, and Manage Slots edits or removes the one you choose, so a full week can be checked before it is posted."
            },
            {
                "type": "text",
                "text": "One form can build several nights. A raid that runs on three nights usually starts at the same hour each night, so name the nights and the clock once - Fri, Sat, Sun 20:00 - and all three slots are added together, sharing the name and cap you gave them. Different start times work the same way: Fri 20:00, Sat 21:00. Six nights is still one form, and the reply tells you how many slots landed."
            },
            {
                "type": "text",
                "text": "A time SeanBot cannot read never costs you the rest of the form. The entry is kept, the wizard says which part it could not read, and pressing Add Slot again opens with your name, cap and attempt already filled in, so only the time needs fixing. If you have a raid on the list already, Add Another Night on the Manage Slots panel copies its name, cap and time for you to change the one field that differs."
            },
            {
                "type": "text",
                "text": "Paste List opens the schedule box instead, one slot per line, for a schedule you already have written down. It is the fastest path once you know the format, and it is the same format the dashboard advanced poll form takes. Menu polls carry a sign-up button; reaction polls also add one reaction per slot."
            },
            {
                "type": "heading",
                "text": "Schedule Format For Pasted Lists"
            },
            {
                "type": "text",
                "text": "Each line is a time, a separator, the event name, and an optional cap in brackets: tomorrow 20:00 - Weekly Boss [8], Saturday 18:00 | Big Raid, Friday 21:00: Community Night [12], or 2026-12-20 15:00 ~ Endgame Run [6]. Separators can be a dash, pipe, tilde, semicolon, or a colon right after a clock time. Relative times such as tomorrow 20:00 or Friday 21:00 work as well as full dates, and a time in the past is reported as an error rather than scheduled."
            },
            {
                "type": "heading",
                "text": "Signing Up: What Members See"
            },
            {
                "type": "text",
                "text": "Every event poll message carries a Sign Up button. Pressing it opens a private menu built for the member who pressed it, so one member signing up never changes what anyone else is looking at. Each entry shows the slot name and its time in that member's own timezone, and says how full the slot is: spots free, full with a waitlist, or unlimited. A member who has never saved a timezone sees UTC and a pointer to /timezone set."
            },
            {
                "type": "text",
                "text": "The slots a member already holds arrive ticked, including waitlist places, and a tick saves straight away, so there is no Save button to forget. Untick a slot to drop out of it, or press Clear My Signups to leave everything at once. A ticked list means \"these are the slots I can attend\", so the menu always shows that member's complete current set."
            },
            {
                "type": "heading",
                "text": "Caps, Waitlists, And Promotions"
            },
            {
                "type": "text",
                "text": "A cap fills first come, first served. Once it is full, further signups join the waitlist and the member is told they are on it. When somebody leaves a capped slot, the next member on its waitlist is promoted automatically and SeanBot sends them a direct message naming the slot they are now in. Raising a slot cap does the same thing: the freed places go to the waitlist in order, and lifting a cap altogether lets everyone who was waiting in. Lowering a cap works in reverse - the members past the new limit move to the waitlist and are told, because a cap that does not move anyone is only a number - and they take the front of the queue, so they are the first back in if the cap rises again. If a promoted or moved member has their direct messages closed, the poll channel is used instead, because finding out where you stand is the whole point of the notice."
            },
            {
                "type": "heading",
                "text": "The Roster"
            },
            {
                "type": "text",
                "text": "The poll message is the roster. Each slot is listed with its number emoji, name, time, and a count such as [8/8] or [5] for an uncapped slot, with the signed-up members beneath it (up to twelve names, then a count) and the waitlist on its own line below that. The count is always exact, so a long member list never hides how full a slot really is."
            },
            {
                "type": "text",
                "text": "Large polls keep every slot. A roster too long for one embed continues onto further embeds in the same message, and a slot is never split between them. If a schedule is so large that even that cannot hold it, the last embed says how many slots are missing and points at the Sign Up menu, which always lists all of them."
            },
            {
                "type": "heading",
                "text": "Simple Reaction Polls"
            },
            {
                "type": "text",
                "text": "/poll create posts one embed with 2-20 answer choices and number reactions. The question is the embed title, members vote by reacting, and staff can close it with /poll close plus the poll message ID to lock in the final totals. You can add an optional poll end time, and date-like answer text is rewritten into Discord timestamps by default (the timestamps option turns that off). The dashboard can create simple polls, preview them beside the form, and save common polls as templates for later."
            },
            {
                "type": "heading",
                "text": "Poll Templates"
            },
            {
                "type": "text",
                "text": "On the Poll Manager page, write a question and its answers, then save them as a template. Later, choose the template to refill the form. This suits weekly raids, meeting votes, event times, and repeated server questions."
            },
            {
                "type": "heading",
                "text": "Dates And Discord Timestamps"
            },
            {
                "type": "text",
                "text": "In /poll create, in a slot you add, and in the dashboard forms, SeanBot turns a date or time into a Discord timestamp, which Discord renders in each reader's own local time. Write dates like 29.07.2026 20:00, 2026-07-29 20:00, July 29 2026 8 PM, 29 July 20:00, tomorrow 8 PM, Friday 20:00, or Sunday 26 July 2026 18:00. Conversion uses the creator's saved timezone, so set yours with /timezone set (or let /timezone detect work it out) before building a poll. The Simple Poll Timestamps guide covers exactly when timestamps appear, what happens when a poll closes, and how to turn conversion off."
            },
            {
                "type": "heading",
                "text": "Splitting Into Separate Polls"
            },
            {
                "type": "text",
                "text": "A schedule often covers more than one raid, and one long signup list is hard to read. On the review screen, Post as Separate Polls makes one poll per raid name instead: every Big Raid night becomes a poll of its own, with its own roster, its own caps, and its own banner. Post as One Combined Poll keeps the whole week on a single embed with one running numbering. The review lists what splitting would make before you choose it - the raid names, how many slots each holds, and whether each one has artwork - so the choice is made with the result in sight."
            },
            {
                "type": "text",
                "text": "Grouping follows the name you gave each slot, and only the name: spelling, capitals, and extra spaces do not matter, so Big Raid and big  raid are the same raid and land in one poll. Give slots names you actually use in the game and the polls come out the way you would have drawn them by hand. The dashboard advanced poll form offers the same choice, and groups by the same rule."
            },
            {
                "type": "heading",
                "text": "Per-Raid Banners"
            },
            {
                "type": "text",
                "text": "Raid Banners on the review screen is where separate polls get their artwork. It lists every raid in the schedule with how many slots it holds and which banner it will use, and picking one shows that banner so you can see what members will see before anything is posted. Set Banner URL takes any image link, Forget Choice drops your pick so the raid falls back to what the server normally uses, and Clear Choice removes the raid's remembered banner as well."
            },
            {
                "type": "text",
                "text": "A banner is chosen by how specific it is: the one you set for this poll wins, then the banner this server has used for that raid before, then the single banner typed for the whole poll, then the built-in preset art for that event name. A raid with none of those is posted without a banner rather than borrowing another game's artwork, and choosing no banner on purpose sticks: it is never quietly replaced by a preset."
            },
            {
                "type": "text",
                "text": "A banner you set is remembered for the server, keyed by the raid name, so next week's schedule arrives already dressed and setting it up is a one-time job per raid. Clearing one is remembered too, so a raid you deliberately left plain stays plain. Combined polls use the banner you gave the poll in the wizard, or a banner-free embed if you did not set one."
            },
            {
                "type": "heading",
                "text": "Slot Limits"
            },
            {
                "type": "text",
                "text": "An event poll holds up to 20 slots whatever its sign-up style, whether it uses the sign-up menu, reactions, or both. A simple reaction poll holds 2-20 answers. Extra lines pasted into a schedule are reported and truncated rather than dropped in silence."
            },
            {
                "type": "heading",
                "text": "Editing A Posted Poll"
            },
            {
                "type": "text",
                "text": "Admin Options on a live poll opens the panel that edits its title, its close time, and its schedule. A slot that keeps its time keeps its signups too, so renaming an event or changing a cap does not disturb the roster; a slot you delete takes its signups with it, so check the roster afterwards. Export Roster lists the members of a slot for copy-paste, Integrations turns a slot into a TimePing or voice countdown, and Clone Poll repeats the poll for next week. A closed poll's message carries Finalize Roster, Repost and Delete Poll, so its schedule can be repeated straight from the poll itself."
            },
            {
                "type": "heading",
                "text": "Posting The Same Schedule Again"
            },
            {
                "type": "text",
                "text": "A weekly schedule is nearly always last week's schedule with the dates moved on, so SeanBot remembers the last schedule a server posted and offers it back. Run /raidpoll and it asks Same as last time? before opening a fresh wizard: one button posts the whole thing again - title, close time, every slot, every cap, and the raid banners - and Start a fresh poll instead builds a new one. The offer is only made for a schedule posted in the last 90 days, so a schedule the server has moved on from cannot come back by accident."
            },
            {
                "type": "text",
                "text": "Dates move on by whole weeks, so every weekday, clock time and gap between slots is exactly as it was - a Friday-to-Sunday run stays a Friday-to-Sunday run instead of being torn apart by the first date that is already in the past. The review above the buttons shows which dates each choice would post, and warns how many of the original dates have gone if you choose to keep them. A schedule that went out as one poll per raid comes back the same way, and each raid's banner is looked up fresh, so a raid gets this week's artwork rather than last week's."
            },
            {
                "type": "text",
                "text": "Any poll can also be repeated from its own message. On a closed poll - the one people actually repeat - the message buttons offer Repost beside Finalize Roster and Delete Poll, with the same choice between next week's dates and the originals. Reposting makes that schedule the new same as last time, so the offer always moves you forward one week."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Set your own timezone first with /timezone set, or let SeanBot work it out with /timezone detect. Slot times, close times, and every member menu read from saved timezones.",
                    "Confirm SeanBot can Send Messages, Embed Links, and Add Reactions where polls are posted, and that everyone who posts polls has Manage Channels, which /raidpoll requires. Manage Messages lets SeanBot tidy the reaction fallback on a reaction poll.",
                    "Run /raidpoll, give the poll a title and a signups-close time, then press Add Slot once per event and post it with Review & Post. If one raid runs several nights on the same hour, put them in the one When box - `Fri, Sat, Sun 20:00` - and it adds all of them.",
                    "Name slots after the activity you actually run, then press Raid Banners on the review screen and give each raid its artwork once - the server remembers it for every later schedule.",
                    "Test the waitlist before you rely on it: cap one slot at 1, sign two members up, then have the first leave and watch the promotion notice arrive.",
                    "Next week, run /raidpoll and take the Same as last time? offer: it reuses the title, the close time, every slot, every cap and the raid banners, and moves the dates on by whole weeks. Keep Paste List for a schedule you have written down by hand."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/poll create",
                        "desc": "Create a quick reaction poll with 2-20 answers, an optional poll end time, and the timestamps option."
                    },
                    {
                        "cmd": "/poll close",
                        "desc": "Close a simple reaction poll and replace the embed with final vote totals (the Ends line is dropped; timestamps inside answers stay)."
                    },
                    {
                        "cmd": "/raidpoll",
                        "desc": "Open the guided wizard for an event poll: title, close time, and one slot at a time with caps and waitlists, for any game."
                    }
                ]
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Set your timezone first",
                "text": "Set your timezone before you build a poll. /raidpoll reads times like Friday 20:00 through your saved timezone, and each member sees their own version of every slot in the sign-up menu."
            }
        ]
    },
    {
        "id": "simple_poll_timestamps",
        "icon": "ph-clock-countdown",
        "title": "Simple Poll Timestamps",
        "subtitle": "Every place a timestamp can appear on a simple reaction poll, and what the timestamps option controls.",
        "content": [
            {
                "type": "heading",
                "text": "The Three Sources"
            },
            {
                "type": "text",
                "text": "A simple reaction poll, from /poll create or the dashboard simple poll form, can show a Discord timestamp in three places, and each behaves differently. Discord renders every timestamp in the reading member's own local time, so a poll written in one timezone reads correctly for everyone."
            },
            {
                "type": "list",
                "items": [
                    "The Ends line. Fill in the optional Poll Time / Close Time field, or the poll end time in /poll create, and SeanBot posts an Ends line under the answers: the full date and time plus a live countdown. This line always renders as a timestamp and ignores the timestamps option, because a close time you picked must be announced. Clear the Poll Time field if you want a poll with no end date at all.",
                    "Timestamps you typed yourself. If an answer already contains Discord timestamp markup, such as something copied from the Time Converter, SeanBot posts it untouched. The timestamps option and saved templates never alter or strip this markup, so anyone can paste a time they copied elsewhere.",
                    "Converted answers. With the timestamps option on, the default for new polls, SeanBot reads the poll creator's saved timezone and rewrites date-like answer text as timestamps: explicit forms such as 29.07.2026 20:00 or 2026-07-29 20:00, and natural forms such as tomorrow 8 PM or Friday 20:00 - Beastmoon practice. A time-and-label answer becomes a timestamp followed by its label, a date-only answer becomes a date-only timestamp, and text that does not look like a date is left alone."
                ]
            },
            {
                "type": "heading",
                "text": "Turning Conversion Off"
            },
            {
                "type": "text",
                "text": "Set the timestamps option to false in /poll create, or pick Leave answers exactly as typed in the dashboard's Timestamps dropdown, and answers are posted exactly as written. Saved templates remember this choice per template. Neither setting touches the other two sources: the Ends line from a Poll Time field always renders as a timestamp, and pasted timestamp markup is always passed through."
            },
            {
                "type": "heading",
                "text": "Closing A Poll"
            },
            {
                "type": "text",
                "text": "/poll close rebuilds the poll embed with final vote totals, which drops the Ends line, while converted timestamps inside answers survive closing because only the vote counts are added. The dashboard preview mirrors all of this live: the Ends line, the per-answer conversions, and a warning when you fill in a close time without having set a timezone."
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Timezone first",
                "text": "Every conversion uses the poll creator's saved timezone. Set yours with /timezone set, or /timezone detect to let SeanBot work it out. Without a saved timezone, answers are posted exactly as typed, and a poll with an end time or date-like answers is held back until you set one."
            }
        ]
    },
    {
        "id": "teamup_fed",
        "icon": "ph-arrows-merge",
        "title": "Team-Up Federation Mesh",
        "subtitle": "Push a dungeon lobby out to allied servers, with a proxy thread so the replies come back to you.",
        "content": [
            {
                "type": "heading",
                "text": "Cross-Server Federation Mesh"
            },
            {
                "type": "text",
                "text": "A dungeon lobby that reaches past your own server. With Broadcast Team-Ups to Mesh switched on in both servers, posting a Team-Up mirrors it onto your partners' boards, and once the team forms the threads are linked so the cross-server chat stays in one place."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/teamup_federation",
                        "desc": "Open Team-Up Federation control panel to toggle broadcast nodes."
                    }
                ]
            }
        ]
    },
    {
        "id": "temp_vc",
        "icon": "ph-microphone",
        "title": "Temporary Voice Channels",
        "subtitle": "A join-to-create voice channel, with the creator holding the controls for name, limit and lock.",
        "content": [
            {
                "type": "heading",
                "text": "Join-to-Create Voice Generator"
            },
            {
                "type": "text",
                "text": "A member joins your generator channel and gets a room of their own, with its name, its user limit and its lock in their hands."
            },
            {
                "type": "heading",
                "text": "Beginner Setup"
            },
            {
                "type": "list",
                "items": [
                    "Temporary Voice Channels is on by default, so what is left is choosing where members make their own rooms.",
                    "Create or choose a voice channel that members will join when they want their own room.",
                    "Open the dashboard Temp Channels page and set that channel as the Join-To-Create channel.",
                    "Set inactivity cleanup so empty rooms are removed automatically.",
                    "Optionally choose an owner role and max server channel limit.",
                    "Join the generator channel with a test account and confirm SeanBot creates, transfers, and deletes rooms correctly."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/vc claim",
                        "desc": "Claim ownership of an eligible temporary voice channel."
                    },
                    {
                        "cmd": "/vc save",
                        "desc": "Save the current temporary voice channel as a personal template."
                    },
                    {
                        "cmd": "/vc load",
                        "desc": "Load a saved temporary voice channel template."
                    }
                ]
            }
        ]
    },
    {
        "id": "tickets",
        "icon": "ph-ticket",
        "title": "Support Ticket System",
        "subtitle": "Private tickets, staff claiming, priority tags and archived transcripts. Still in beta.",
        "content": [
            {
                "type": "heading",
                "text": "Support Workflows"
            },
            {
                "type": "text",
                "text": "Members press a button and get a private channel with staff in it. A ticket is private the moment it exists, staff can claim it, hand it to another staff member or staff role from the dashboard, tag its priority and leave internal notes, and close it from Discord or the dashboard. Closing twice is blocked, and the transcript is logged, optionally sent to the opener by direct message, and stored even when the log channel no longer exists."
            },
            {
                "type": "heading",
                "text": "Beginner Setup"
            },
            {
                "type": "list",
                "items": [
                    "The ticket system is on by default, so start with where tickets should land.",
                    "Open the dashboard Tickets page and choose the category where ticket channels should be created.",
                    "Select support staff roles so the right staff can view, claim, assign, and close tickets.",
                    "Choose a ticket log channel for opens, closes, staff actions, and transcript links.",
                    "Create or edit a panel, set the button label and style, then deploy it to the channel where members should request help.",
                    "Open a test ticket, close it, and confirm the transcript is saved or delivered the way you expect."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/ticket help",
                        "desc": "Show the ticket command guide inside Discord."
                    },
                    {
                        "cmd": "/ticket create [reason]",
                        "desc": "Manually open a support ticket from the default panel."
                    },
                    {
                        "cmd": "/ticket panel [name]",
                        "desc": "Deploy a reusable support ticket panel to a text channel."
                    },
                    {
                        "cmd": "/ticket setup_channel",
                        "desc": "Create a ticket category, panel channel, and default panel."
                    },
                    {
                        "cmd": "/ticket claim",
                        "desc": "Claim ownership of a support ticket."
                    },
                    {
                        "cmd": "/ticket unclaim",
                        "desc": "Release ticket ownership back to queue."
                    },
                    {
                        "cmd": "/ticket priority [level]",
                        "desc": "Set priority level for active ticket (Low, Normal, High, Critical)."
                    },
                    {
                        "cmd": "/ticket add [member]",
                        "desc": "Staff-only: add another member to the current ticket channel."
                    },
                    {
                        "cmd": "/ticket remove [member]",
                        "desc": "Staff-only: remove a member from the current ticket channel."
                    },
                    {
                        "cmd": "/ticket info",
                        "desc": "Display creator, staff assignment, status, priority, panel, and tags."
                    },
                    {
                        "cmd": "/ticket staffsay [msg]",
                        "desc": "Staff-only: post an internal discussion note inside the ticket."
                    },
                    {
                        "cmd": "/ticket close [reason]",
                        "desc": "Close the ticket with duplicate-close protection, transcript logging, optional DM delivery, and channel cleanup."
                    }
                ]
            }
        ]
    },
    {
        "id": "activitytracker",
        "icon": "ph-chart-line-up",
        "title": "Activity Tracker",
        "subtitle": "Message and voice activity per member, with Active and Inactive roles handed out on a schedule.",
        "content": [
            {
                "type": "heading",
                "text": "Automated Engagement Analytics"
            },
            {
                "type": "text",
                "text": "Counts messages, voice time, reactions and command use per member, then hands out the Active and Inactive roles on the schedule you set."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Create active and inactive roles and place both below SeanBot.",
                    "Run /activity setup or use Server Counters &gt; Activity Tracker Settings.",
                    "Choose a threshold that matches how often your community normally participates.",
                    "Review the first role update cycle before enabling the feature for a large member base."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/activity setup [days]",
                        "desc": "Opt server into activity tracking and set inactivity threshold."
                    },
                    {
                        "cmd": "/activity disable",
                        "desc": "Disable activity tracking for server and clean up roles."
                    }
                ]
            }
        ]
    },
    {
        "id": "autopin",
        "icon": "ph-push-pin",
        "title": "Auto-Pin System",
        "subtitle": "Pins a message once enough people react to it.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Enough reactions and the message gets pinned. The count and the emoji are yours to set."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Enable the Engagement module.",
                    "Set the default reaction threshold and trigger emoji.",
                    "Exclude private, staff, or high-volume channels that should never auto-pin.",
                    "Add channel overrides only where a different threshold is genuinely needed.",
                    "Test with a staff message and remove the test pin afterward."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/autopin toggle",
                        "desc": "Enable or disable Auto-Pin system globally across server."
                    },
                    {
                        "cmd": "/autopin set_threshold [num]",
                        "desc": "Set default reactions required to auto-pin."
                    },
                    {
                        "cmd": "/autopin set_emoji [emoji]",
                        "desc": "Set emoji used to trigger community pins."
                    },
                    {
                        "cmd": "/autopin channel_override",
                        "desc": "Configure custom pin thresholds per channel."
                    },
                    {
                        "cmd": "/autopin toggle_channel",
                        "desc": "Toggle auto-pin functionality for a specific channel."
                    },
                    {
                        "cmd": "/autopin settings",
                        "desc": "Display current auto-pin configurations and overrides."
                    },
                    {
                        "cmd": "/autopin stats",
                        "desc": "View total messages pinned by community reactions."
                    }
                ]
            }
        ]
    },
    {
        "id": "starboard",
        "icon": "ph-star",
        "title": "Starboard",
        "subtitle": "A channel that collects whatever the community reacted to the most.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "When a message receives star reactions (⭐), SeanBot posts a highlight embed to the starboard channel."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/star set [channel]",
                        "desc": "Set the starboard channel and basic options."
                    },
                    {
                        "cmd": "/star advanced",
                        "desc": "Configure star threshold, age, color, and self-star rules."
                    },
                    {
                        "cmd": "/star info",
                        "desc": "View the active starboard channel and settings."
                    },
                    {
                        "cmd": "/star stats dashboard",
                        "desc": "Open server starboard statistics."
                    },
                    {
                        "cmd": "/star stats leaderboard",
                        "desc": "View the starboard member leaderboard."
                    }
                ]
            }
        ]
    },
    {
        "id": "emojis",
        "icon": "ph-smiley-sticker",
        "title": "Emoji Management & Suggestions",
        "subtitle": "Members submit emoji, staff approve them, and usage gets counted so you know what to delete.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Members can upload an emoji suggestion with a name and reason. Staff review the same queue from Discord or Dashboard &gt; Emoji Manager. Approving a suggestion creates the guild emoji, records the reviewer, logs the action, and can notify the submitter by direct message."
            },
            {
                "type": "heading",
                "text": "Emoji Suggestion Setup"
            },
            {
                "type": "list",
                "items": [
                    "Give SeanBot the Create Expressions permission and make sure it can Send Messages, Embed Links, and Attach Files in the review channel.",
                    "Run /emoji suggestion_setup and choose the staff review channel. You can also choose a dedicated activity log channel and reviewer role.",
                    "Open Dashboard &gt; Emoji Manager to add multiple reviewer roles, change the member cooldown, enable result DMs, or review the queue.",
                    "Members run /emoji suggest with a 2-32 character name, an image attachment, and an optional reason.",
                    "Reviewers use Approve and add or Reject on the Discord card, or review the same item in Emoji Manager. Rejections from Discord require a reason.",
                    "Use Log Config &gt; Staff &gt; Emoji Suggestion to route workflow events into your normal server logs. Dashboard changes are also recorded in Dashboard Logs."
                ]
            },
            {
                "type": "text",
                "text": "Uploads must be PNG, JPEG, GIF, or WebP and no larger than 256 KiB. SeanBot validates the actual file bytes and stores a durable copy so dashboard approval still works after Discord's temporary attachment link expires. Each member can have up to three suggestions awaiting review."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/emojis top15 [interval]",
                        "desc": "Show top 15 most typed emojis in chat."
                    },
                    {
                        "cmd": "/emojis top_users",
                        "desc": "Show which users type emojis the most."
                    },
                    {
                        "cmd": "/emoji suggest [name] [image] [reason]",
                        "desc": "Submit an emoji image for staff review. The reason is optional."
                    },
                    {
                        "cmd": "/emoji suggestion_setup [review_channel] [log_channel] [reviewer_role]",
                        "desc": "Enable or disable suggestions and configure the review workflow. Requires Manage Server."
                    },
                    {
                        "cmd": "/emoji suggestion_queue [status]",
                        "desc": "List pending, approved, rejected, or all suggestions. Available to expression managers and configured reviewer roles."
                    },
                    {
                        "cmd": "/emoji lock [emoji] [role]",
                        "desc": "Restrict a custom emoji to a specific role."
                    },
                    {
                        "cmd": "/emoji unlock [emoji] [role]",
                        "desc": "Remove role restrictions from an emoji."
                    },
                    {
                        "cmd": "/emoji react_lock_bulk",
                        "desc": "Bulk lock reactions to specific permissions."
                    },
                    {
                        "cmd": "/emoji set_guild_cooldown",
                        "desc": "Set server-wide emoji reaction cooldown."
                    },
                    {
                        "cmd": "/emoji suggest_purge [days]",
                        "desc": "See list of custom emojis not used recently."
                    },
                    {
                        "cmd": "/emoji purge_dead",
                        "desc": "Delete unused emojis to free up server slots."
                    }
                ]
            }
        ]
    },
    {
        "id": "reactions",
        "icon": "ph-thumbs-up",
        "title": "Reaction Suite & Pings",
        "subtitle": "Reaction counts, animated emoji previews, and a ping for whoever reacted.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Reaction counts for any message, animated emoji previews, and a ping to everyone who reacted. Stray bot reactions can be swept up as well."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Enable Emoji Analytics if you want historical reaction statistics.",
                    "Ensure SeanBot can Read Message History and Add Reactions in participating channels.",
                    "Use the reaction commands for statistics; use Reaction Pings only when you intend to notify reactors.",
                    "Configure ignored channels before collecting data from private areas."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/reaction top15 [interval]",
                        "desc": "Show top 15 most used reactions across Weekly/Monthly."
                    },
                    {
                        "cmd": "/reaction top_users",
                        "desc": "Display top reacting users in server."
                    },
                    {
                        "cmd": "/react [emoji] [link]",
                        "desc": "React to target message with an animated custom emoji."
                    },
                    {
                        "cmd": "/autoping type [method]",
                        "desc": "Configure automated reaction ping methods."
                    },
                    {
                        "cmd": "/autoping roles",
                        "desc": "Manage roles permitted to trigger reaction pings."
                    },
                    {
                        "cmd": "/autoping limits",
                        "desc": "Set rate limits for automated reaction pings."
                    },
                    {
                        "cmd": "/autoping authors",
                        "desc": "Configure author permission checks for reaction pings."
                    }
                ]
            }
        ]
    },
    {
        "id": "reaction_pings",
        "icon": "ph-bell-ringing",
        "title": "Reaction Pinger Config",
        "subtitle": "Configure reactor pings, role permissions, and safety author limits.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Reaction Pings lets staff, or approved message authors, notify everyone who reacted to a specific message. It is best for event announcements, raid signups, polls, giveaways, or any post where reacting means \"ping me when this starts.\" SeanBot can either send direct mentions or create a temporary role so the notification stays cleaner."
            },
            {
                "type": "heading",
                "text": "Beginner Setup"
            },
            {
                "type": "list",
                "items": [
                    "Reaction Pings is on by default, so the first choice is how a ping reaches people.",
                    "Open Reaction Pings in the dashboard and choose Direct Mentions or Temporary Role.",
                    "Keep the user cap reasonable so one message cannot ping too many people at once.",
                    "Add trusted staff roles that can ping reactors on any eligible message.",
                    "Decide whether regular message authors can ping reactors on their own messages, and keep their cap lower.",
                    "Test on a small message with a few reactions before using it on a large event post."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/autoping type [method]",
                        "desc": "Choose direct mentions or a temporary role."
                    },
                    {
                        "cmd": "/autoping roles",
                        "desc": "Choose staff roles allowed to ping reactors."
                    },
                    {
                        "cmd": "/autoping limits",
                        "desc": "Set reactor notification limits."
                    },
                    {
                        "cmd": "/autoping authors",
                        "desc": "Control whether message authors may ping their own reactors."
                    }
                ]
            }
        ]
    },
    {
        "id": "sticky_messages",
        "icon": "ph-push-pin",
        "title": "Sticky Messages",
        "subtitle": "Keep important channel messages visible during active chat.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Sticky Messages keeps one important message near the bottom of a busy channel. When enough normal messages are posted, SeanBot removes the old sticky and posts a fresh copy so rules, forms, reminders, or channel instructions stay visible without using Discord's pinned message panel."
            },
            {
                "type": "heading",
                "text": "Beginner Setup"
            },
            {
                "type": "list",
                "items": [
                    "Sticky Messages is on by default, so start by picking a channel and writing the message.",
                    "Open Sticky Messages in the dashboard, choose a channel, write the message, and save.",
                    "Use Normal Message for plain text or Embed for a cleaner announcement look.",
                    "Messages Before Repost controls how busy the channel must be before SeanBot moves the sticky back down.",
                    "Repost Delay gives people a few seconds to finish chatting before the sticky is posted again.",
                    "Allow Mentions is off by default so a sticky cannot accidentally ping everyone."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/sticky set",
                        "desc": "Create or update a sticky message in a channel."
                    },
                    {
                        "cmd": "/sticky list",
                        "desc": "Show sticky messages configured in this server."
                    },
                    {
                        "cmd": "/sticky refresh",
                        "desc": "Post the sticky message again right now."
                    },
                    {
                        "cmd": "/sticky pause",
                        "desc": "Pause a sticky message without deleting its settings."
                    },
                    {
                        "cmd": "/sticky resume",
                        "desc": "Turn a paused sticky message back on."
                    },
                    {
                        "cmd": "/sticky remove",
                        "desc": "Remove a sticky message from a channel."
                    }
                ]
            }
        ]
    },
    {
        "id": "embeds",
        "icon": "ph-layout",
        "title": "Visual Embed Builder",
        "subtitle": "A visual embed designer, plus template triggers for things like welcome messages.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Build a rich embed in the dashboard with a live Discord preview beside it, then publish it. An embed can be saved as a template, fired by a trigger such as a join or a keyword, or carried by buttons and reaction roles."
            },
            {
                "type": "heading",
                "text": "Choosing What You Are Building"
            },
            {
                "type": "text",
                "text": "Start by deciding whether the embed is a one-time message, an automated trigger, or an interactive tool. Manual embeds are best for announcements, rules, and polished staff posts. Trigger embeds are best for welcome messages, leave logs, boost alerts, anniversary posts, live stream alerts, starboard milestones, keyword replies, command responses, ban appeal cards, and suggestion cards. Ticket Creation Panel embeds are best when members should press a button to open a private support channel."
            },
            {
                "type": "list",
                "title": "Recommended Workflows",
                "items": [
                    "Announcement or rules post: write the content, add fields for sections, add link buttons only when users need to open external resources, then send manually.",
                    "Welcome or event automation: write with placeholders such as `{user_mention}`, `{guild_name}`, `{member_count}`, `{stream_title}`, `{star_count}`, or `{milestone_years}`, then select the matching trigger in the publish step.",
                    "Keyword reply: choose Keyword Reply, enter comma-separated phrases such as `rules, verify, support`, and use `{keyword}`, `{message_author}`, `{message_content}`, or `{message_link}` when the response should reference the matched message.",
                    "Ban appeal or suggestion workflow: configure the channel on the Ban Appeals or Suggestions dashboard page first, design the embed, then select the Ban Appeal or Suggestion trigger so SeanBot posts to the managed staff channel.",
                    "Ticket panel: design the support message, add one or more non-link buttons in the Button Builder, select Ticket Creation Panel in the publish step, choose the ticket category, and deploy."
                ]
            },
            {
                "type": "list",
                "title": "Supported automation triggers",
                "items": [
                    "Manual Send, Member Join, Member Leave, Server Boost, Anniversary, Live Stream, Starboard Milestone, Keyword Reply, Custom Command, Recurring Schedule, Ban Appeal, Suggestion, and Ticket Creation Panel.",
                    "Use channel and role restrictions when an automation should only react in specific areas or for specific roles.",
                    "Keyword replies include a cooldown to reduce repeated spam when a busy channel keeps mentioning the same phrase."
                ]
            },
            {
                "type": "list",
                "title": "Interactive button actions",
                "items": [
                    "Link buttons open a URL and do not need a custom action payload.",
                    "Role buttons can add, remove, or toggle the configured role.",
                    "Reply buttons can send private replies, public replies, DMs, embed replies, random replies, or dismiss/close the bot message.",
                    "Reaction Roles can be added in the dashboard for manual publishes. SeanBot adds the selected reactions to the posted message, gives the mapped role when a member reacts, and removes that role when the reaction is removed."
                ]
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Reaction Roles vs Button Roles",
                "text": "Button roles are best when you want a clear clickable panel with labels and button colors. Reaction roles are best when members should react with emojis below a message. Both require SeanBot's role to be above the roles it manages, and reaction roles also require Add Reactions."
            },
            {
                "type": "callout",
                "variant": "warning",
                "title": "Ticket Button Rule",
                "text": "For ticket panels, Primary, Secondary, Success, and Danger buttons open tickets automatically. Do not use Link style for ticket-opening buttons. You can set the label, style, emoji, and row; SeanBot generates the internal action IDs for you."
            },
            {
                "type": "heading",
                "text": "Creating a Ticket Panel Embed"
            },
            {
                "type": "list",
                "title": "Step-by-step",
                "items": [
                    "Open the dashboard Embed Builder and build the message members should see, such as Support, Appeals, Bug Reports, or Partner Requests.",
                    "Go to the Button Builder and add a button for each ticket path. Example labels: `Open Ticket`, `Report a Bug`, `Appeal Punishment`, or `Contact Staff`.",
                    "Use Primary for the main support action, Success for positive actions, Danger for urgent reports, and Secondary for lower-priority departments.",
                    "Leave the action payload as-is unless you are making a non-ticket interactive embed. Ticket panels ignore custom action payloads and generate persistent ticket button IDs automatically.",
                    "Go to Broadcast & Publish, select Ticket Creation Panel, choose the deploy channel and ticket category, set naming/max-open/cooldown options, then deploy."
                ]
            },
            {
                "type": "heading",
                "text": "Creating Ban Appeal Embeds"
            },
            {
                "type": "list",
                "title": "Recommended setup",
                "items": [
                    "Open the Ban Appeals dashboard page first and set the private ban appeal review channel. The Embed Builder uses that channel automatically for appeal review cards.",
                    "In the Embed Builder, choose the Ban Appeal trigger. Use Staff Review Card when staff should receive a structured appeal, or Applicant Guidelines when you want a member-facing instruction embed.",
                    "Use placeholders such as `{appeal_id}`, `{appeal_user_mention}`, `{appeal_reason}`, and `{appeal_status}` where the appeal data should appear.",
                    "Keep action buttons minimal on appeal embeds. Staff review controls are handled by the Staff Tools appeal workflow, while Link buttons are only useful for external policies or evidence forms."
                ]
            },
            {
                "type": "heading",
                "text": "Creating Suggestion Embeds"
            },
            {
                "type": "list",
                "title": "Recommended setup",
                "items": [
                    "Open the Suggestions dashboard page first and set the suggestion channel. The Embed Builder will lock the Suggestion trigger to that managed channel.",
                    "Choose the Suggestion trigger, then design a reusable card with a clear title, short details, status, and staff note field.",
                    "Use placeholders such as `{suggestion_id}`, `{suggestion_title}`, `{suggestion_details}`, `{suggestion_author_mention}`, `{suggestion_status}`, and `{suggestion_note}`.",
                    "Avoid duplicating voting controls manually. SeanBot's suggestion workflow handles the suggestion state; the embed should make the idea easy to read and moderate."
                ]
            },
            {
                "type": "heading",
                "text": "Common Embed Patterns"
            },
            {
                "type": "list",
                "title": "Useful examples",
                "items": [
                    "Support hub: title `Need help?`, description with expected response time, fields for rules before opening, buttons for `General Support`, `Bug Report`, and `Staff Contact`.",
                    "Ban appeal review card: title `Ban Appeal #{appeal_id}`, fields for member, reason, evidence, status, and a footer reminding staff to use the appeal workflow.",
                    "Suggestion card: title `{suggestion_title}`, description `{suggestion_details}`, fields for author, status, and staff note.",
                    "Rules message: one embed per rule category, fields for short sections, link buttons to external policy pages if needed.",
                    "Role picker: use buttons with role action presets when the goal is assigning roles through buttons, or use Reaction Roles when members should react with emoji instead.",
                    "Recurring reminder: keep the embed short, select Recurring in the publish step, and avoid buttons unless users need an action."
                ]
            },
            {
                "type": "heading",
                "text": "Role Buttons: Toggle, Add, or Remove"
            },
            {
                "type": "text",
                "text": "Whether a role button toggles or only adds is decided per button by the Action Type you choose in the Buttons step - not by Discord. Every button remembers its own behavior."
            },
            {
                "type": "list",
                "title": "Button action types",
                "items": [
                    "Toggle Role: adds the role if the member does not have it and removes it if they already do. Best for opt-in / opt-out choices such as ping roles.",
                    "Add Role: only ever adds the role; clicking again does nothing. Best for one-way sign-ups such as a contest-entered role.",
                    "Remove Role: only ever removes the role. Best for a leave-this-group button.",
                    "Role Menu Button: opens a small picker with checkboxes so members can take several roles from one button. Toggle-style.",
                    "Reaction Roles: added below the buttons; members react with an emoji to gain a role and un-react to lose it. Toggle-style by nature."
                ]
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Changing a button's behavior",
                "text": "Open the embed in the builder, go to Buttons, change that button's Action Type, then re-publish. Older embeds may show Custom Action ID in the dropdown even though the button still toggles or adds - the small action text on the button is the source of truth."
            },
            {
                "type": "heading",
                "text": "All Button Action Types and Their Payloads"
            },
            {
                "type": "text",
                "text": "Every button you add has two fields that decide what it does: the Action Type (what kind of behavior) and the small URL / Action Payload box below it (the exact instructions). This is the complete reference for every action type, the payload format, and what happens when someone clicks."
            },
            {
                "type": "commands",
                "title": "Quick Copy: Button Payloads",
                "items": [
                    {
                        "cmd": "role:ROLE_ID",
                        "desc": "Toggle Role - adds if missing, removes if present. List several IDs with spaces."
                    },
                    {
                        "cmd": "role_add:ROLE_ID",
                        "desc": "Add Role - only ever adds the role."
                    },
                    {
                        "cmd": "role_remove:ROLE_ID",
                        "desc": "Remove Role - only ever removes the role."
                    },
                    {
                        "cmd": "msg:TEXT",
                        "desc": "Private Reply - visible only to the person who clicked."
                    },
                    {
                        "cmd": "public_msg:TEXT",
                        "desc": "Public Reply - visible to everyone in the channel."
                    },
                    {
                        "cmd": "dm:TEXT",
                        "desc": "DM Reply - sends the clicker a direct message."
                    },
                    {
                        "cmd": "embed_reply:Title|Text",
                        "desc": "Private Embed Reply - ephemeral gold embed with a title and description."
                    },
                    {
                        "cmd": "random_msg:Option A|Option B|Option C",
                        "desc": "Random Reply - picks one option at random."
                    },
                    {
                        "cmd": "dismiss",
                        "desc": "Dismiss Message - removes the bot message when clicked."
                    }
                ]
            },
            {
                "type": "list",
                "title": "Action type reference",
                "items": [
                    "Open Link - payload: a URL, for example https://sean.bot.nu. The style automatically switches to Link Out and the button opens that page in the browser. No bot permissions needed and nothing is sent to the server.",
                    "Toggle Role - payload: role:ROLE_ID, for example role:123456789012345678. Adds the role if the member does not have it and removes it if they do. You can list several roles in one payload, for example role:111 222 333.",
                    "Add Role - payload: role_add:ROLE_ID. Only ever adds the role; clicking again does nothing. Several role IDs can be listed the same way.",
                    "Remove Role - payload: role_remove:ROLE_ID. Only ever removes the role. Several role IDs can be listed the same way.",
                    "Role Menu Button - no payload text needed. A panel appears under the button with Roles to give and Roles to remove checkboxes. SeanBot saves the choice and one click applies every checked role at once.",
                    "Private Reply - payload: msg:TEXT, for example msg:Thanks for clicking!. Shows the text only to the person who clicked.",
                    "Public Reply - payload: public_msg:TEXT. Posts the text in the channel where the button was clicked, visible to everyone.",
                    "DM Reply - payload: dm:TEXT. Sends the text to the clicker as a direct message. If their DMs are closed, they get a friendly notice instead of an error.",
                    "Private Embed Reply - payload: embed_reply:Title|Text, for example embed_reply:Server Guidelines|Thank you for reading. Shows a small gold embed with a title and description, only to the person who clicked.",
                    "Random Reply - payload: random_msg:Option A|Option B|Option C. Picks one of the options at random and shows it to the clicker. Great for fun giveaways or daily rewards.",
                    "Dismiss Message - payload: dismiss. Removes the bot's message entirely when clicked. Good for closing welcome screens or temporary notices.",
                    "Custom Action ID - payload: any ID string, for example btn_action. Only useful when another part of your setup listens for that exact ID; a plain custom ID does nothing by default and is meant for advanced integrations."
                ]
            },
            {
                "type": "callout",
                "variant": "warning",
                "title": "Ticket panel buttons are different",
                "text": "When the embed is a Ticket Creation Panel, buttons do not use action types or payloads at all - the button STYLE decides the behavior. Primary, Success, Danger, and Secondary buttons each open a ticket (use different styles or labels to make one ticket per department), while Link Out opens a URL instead. SeanBot generates the internal ticket action IDs for you, so ignore the Custom Action ID field on ticket panels and never use Link style for a ticket-opening button."
            },
            {
                "type": "heading",
                "text": "Setting Up a Button Step by Step"
            },
            {
                "type": "list",
                "title": "How to configure any button",
                "items": [
                    "In the Buttons step, add a button (or click an existing one to edit it).",
                    "Pick a style: Blurple, Grey, Green, Red, or Link Out. Link Out is only for Open Link buttons.",
                    "Choose the Action Type from the dropdown.",
                    "Fill in the URL / Action Payload box using the formats above, or pick from the Quick Action Presets & Role Picker dropdown right below it - it fills in ready-made payloads and lists every server role for the role actions.",
                    "Choose which row the button sits on. Each row holds up to five buttons.",
                    "Publish the embed, or re-publish an existing one to apply the change."
                ]
            },
            {
                "type": "callout",
                "variant": "warning",
                "title": "Role buttons and permissions",
                "text": "For any role button to work, SeanBot's role must be placed above the roles it manages in Server Settings &gt; Roles. If a role change fails, the clicker gets a message saying SeanBot lacks permission or role position."
            },
            {
                "type": "heading",
                "text": "Example Embed Recipes"
            },
            {
                "type": "text",
                "text": "Ready-made button layouts you can copy and adapt. In each recipe, replace the placeholder role IDs with your own roles using the Role Picker dropdown under the payload box."
            },
            {
                "type": "heading",
                "text": "Recipe 1: Rules Panel"
            },
            {
                "type": "text",
                "text": "A rules message every member should read. One button hands out the Member role once they agree, another opens the full rules page, and a close button hides the message when they are done."
            },
            {
                "type": "list",
                "title": "Buttons to add",
                "items": [
                    "Agree and Get Access - Primary style - Toggle Role - payload role:YOUR_MEMBER_ROLE. Grants the Member role the first time and does nothing if they already have it.",
                    "Read Full Rules - Secondary style - Open Link - payload the URL of your rules page or a pastebin.",
                    "Done Reading - Secondary style - Dismiss Message - payload dismiss. Removes the message so it does not clutter the channel."
                ]
            },
            {
                "type": "commands",
                "title": "Copy payloads for this recipe",
                "items": [
                    {
                        "cmd": "role:YOUR_MEMBER_ROLE",
                        "desc": "Agree and Get Access - Toggle Role"
                    },
                    {
                        "cmd": "dismiss",
                        "desc": "Done Reading - Dismiss Message"
                    }
                ]
            },
            {
                "type": "heading",
                "text": "Recipe 2: Giveaway"
            },
            {
                "type": "text",
                "text": "A fun event panel. Entering adds an entry role so staff can roll a winner at the end, a random button gives instant luck, and a leave button lets members back out anytime."
            },
            {
                "type": "list",
                "title": "Buttons to add",
                "items": [
                    "Enter Giveaway - Success style - Add Role - payload role_add:YOUR_ENTRY_ROLE. Only ever adds, so entering twice cannot create duplicates.",
                    "Try Your Luck - Primary style - Random Reply - payload random_msg:You won 100 Gold Coins!|Try again next time!|You found a rare gem!.",
                    "How to Enter - Secondary style - Private Reply - payload msg:React to this message with the giveaway emoji. Winners are picked when the giveaway ends.",
                    "Leave Giveaway - Secondary style - Remove Role - payload role_remove:YOUR_ENTRY_ROLE."
                ]
            },
            {
                "type": "commands",
                "title": "Copy payloads for this recipe",
                "items": [
                    {
                        "cmd": "role_add:YOUR_ENTRY_ROLE",
                        "desc": "Enter Giveaway - Add Role"
                    },
                    {
                        "cmd": "random_msg:You won 100 Gold Coins!|Try again next time!|You found a rare gem!",
                        "desc": "Try Your Luck - Random Reply"
                    },
                    {
                        "cmd": "role_remove:YOUR_ENTRY_ROLE",
                        "desc": "Leave Giveaway - Remove Role"
                    }
                ]
            },
            {
                "type": "heading",
                "text": "Recipe 3: Support Hub"
            },
            {
                "type": "text",
                "text": "A help panel that points members to the right team. As a Ticket Creation Panel, the colored buttons open a ticket channel each; as a normal embed, swap them for reply buttons instead."
            },
            {
                "type": "list",
                "title": "Buttons to add (ticket panel)",
                "items": [
                    "General Support - Primary style - opens a Support ticket. No payload needed on a ticket panel.",
                    "Report a Bug - Danger style - opens a Bug Report ticket.",
                    "Appeal a Punishment - Success style - opens an Appeal ticket.",
                    "Knowledge Base - Link Out style - Open Link - payload the URL of your help page or wiki."
                ]
            },
            {
                "type": "list",
                "title": "Buttons to add (normal embed instead)",
                "items": [
                    "General Support - Primary style - DM Reply - payload dm:Please describe your issue and a staff member will reply shortly.",
                    "Report a Bug - Danger style - Private Embed Reply - payload embed_reply:Bug Report|Please tell us what happened, what you expected, and any error text.",
                    "Appeal a Punishment - Success style - DM Reply - payload dm:Appeals are reviewed in order. Include your case ID if you have one.",
                    "Knowledge Base - Link Out style - Open Link - payload the URL of your help page or wiki."
                ]
            },
            {
                "type": "commands",
                "title": "Copy payloads for this recipe (normal embed)",
                "items": [
                    {
                        "cmd": "dm:Please describe your issue and a staff member will reply shortly.",
                        "desc": "General Support - DM Reply"
                    },
                    {
                        "cmd": "embed_reply:Bug Report|Please tell us what happened, what you expected, and any error text.",
                        "desc": "Report a Bug - Private Embed Reply"
                    }
                ]
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Making recipes your own",
                "text": "The styles and labels are suggestions - the important part is the payload. Pick the style that fits your look, write a label that makes sense for your server, and swap the role IDs and texts for your own. Use the Quick Action Presets dropdown to fill payloads without typing."
            },
            {
                "type": "heading",
                "text": "Viewing Embeds You Already Posted"
            },
            {
                "type": "text",
                "text": "Open the Embed Builder page and click Published Embeds in the top-right. A window lists everything SeanBot has posted for the server, newest first, showing the channel, sender, embed and button counts, and when it was posted."
            },
            {
                "type": "list",
                "title": "What you can do from the list",
                "items": [
                    "Jump to message opens the exact message in Discord.",
                    "Broadcasts show an N copies badge - those rows are the same embed posted in different channels.",
                    "Load into builder drops any embed back into the editor for editing.",
                    "Save as template saves any published embed as a reusable design, named Imported: &lt;title&gt;."
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "History starts at deployment",
                "text": "Publish history records embeds from the moment the feature was deployed. Older embeds are found with the trace tools below."
            },
            {
                "type": "heading",
                "text": "Tracing Old Embeds"
            },
            {
                "type": "text",
                "text": "In the Published Embeds window, the Trace old embeds toolbar reads recent messages in a channel and rebuilds embeds SeanBot posted there."
            },
            {
                "type": "list",
                "title": "Scan vs Import to history",
                "items": [
                    "Scan previews found embeds so you can load or save them.",
                    "Import to history writes them permanently into the Published Embeds list alongside new ones.",
                    "Imports are idempotent - running it again skips embeds already tracked, so duplicates never appear."
                ]
            },
            {
                "type": "text",
                "text": "The bot needs Read Message History in the channel, and only messages posted by SeanBot are picked up."
            },
            {
                "type": "heading",
                "text": "Editing and Replacing Posted Embeds"
            },
            {
                "type": "text",
                "text": "Load an embed into the builder and the publish step switches to replacement mode. A banner explains exactly what will happen before anything is changed."
            },
            {
                "type": "list",
                "title": "Replacement options",
                "items": [
                    "Update the original message: replaces the posted message in place; no duplicate is created. A confirmation popup always asks first.",
                    "Update all copies: if the embed was broadcast to several channels, update every copy across all channels in one click.",
                    "Post as a new message: keeps the old message untouched and sends a fresh one instead."
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "Safety",
                "text": "SeanBot only updates messages it posted itself. If the original was deleted, the update is skipped with a clear message and never reported as success."
            },
            {
                "type": "heading",
                "text": "Saving and Reusing Your Work"
            },
            {
                "type": "list",
                "title": "Four ways to keep an embed",
                "items": [
                    "Autosaved draft: the current workspace autosaves to your browser as you build and returns automatically; drafts are per-device.",
                    "Save as template: saves the design to the server under a name; templates appear in the template dropdown and load on any device.",
                    "Export / Import JSON: download the design as a file or load one back in, for backups and sharing.",
                    "Automation triggers: non-manual publishes such as join, boost, command, or recurring are saved as live triggers you can disable or delete in the Publish step."
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "Short version",
                "text": "Templates are reusable designs you load anytime; drafts are automatic per-device autosave; publishing actually sends to Discord; history is a record of what you sent."
            },
            {
                "type": "heading",
                "text": "Mentioning People in Your Embeds"
            },
            {
                "type": "text",
                "text": "You can ping anyone straight from the embed. Mentions work everywhere text appears: the title, description, field names and values, footer, or the message text above the embed. Discord renders them as normal clickable mentions and sends a notification, just like a mention in regular chat."
            },
            {
                "type": "list",
                "title": "Writing a mention by hand",
                "items": [
                    "Person: &lt;@USER_ID&gt;, for example &lt;@123456789012345678&gt;. This notifies that member.",
                    "Role: &lt;@&ROLE_ID&gt;. This notifies everyone who has that role.",
                    "Channel: &lt;#CHANNEL_ID&gt;. This links a channel without pinging anyone.",
                    "To get an ID: turn on Developer Mode in Discord (User Settings, Advanced, Developer Mode), then right-click the user, role, or channel and choose Copy User ID, Copy Role ID, or Copy Channel ID."
                ]
            },
            {
                "type": "list",
                "title": "Placeholders that mention for you",
                "items": [
                    "{user_mention}: the person the message is about. On automatic triggers like joins or keyword replies it becomes that member; on a manual send it points to SeanBot itself, so use it in triggers, not manual posts.",
                    "{owner_mention}: the server owner.",
                    "{message_author}: the author of the message that triggered a keyword reply.",
                    "{channel_mention}: links the target channel.",
                    "{applicant_mention} and {suggestion_author_mention}: the applicant or suggestion author on those workflows."
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "Good to know",
                "text": "A mention only pings when the person or role exists in the server. SeanBot sends embeds with mentions fully enabled, so &lt;@USER_ID&gt; really notifies that member, and @everyone or @here would also go through - use them sparingly."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/embed builder",
                        "desc": "Open the embed builder design dashboard."
                    },
                    {
                        "cmd": "/embed clone [template/msg]",
                        "desc": "Clone existing message into designer."
                    },
                    {
                        "cmd": "/embed load [template] [channel]",
                        "desc": "Retrieve and post saved embed template."
                    },
                    {
                        "cmd": "/embed delete [template]",
                        "desc": "Delete a saved embed template."
                    },
                    {
                        "cmd": "/embed disable",
                        "desc": "Disable embed builder for specific channels."
                    },
                    {
                        "cmd": "/embed list",
                        "desc": "View and manage saved custom embed templates."
                    }
                ]
            }
        ]
    },
    {
        "id": "autoreply",
        "icon": "ph-chat-centered-text",
        "title": "Auto Mention Replies",
        "subtitle": "Replies that fire when somebody mentions you, in your own words.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Each member writes their own reply, and it goes out whenever somebody mentions them. Pause it or delete it whenever you like."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Each member can use /r set to define their mention reply, then /r toggle to pause or resume it.",
                    "Use /r remove to delete the saved reply.",
                    "Administrators can clear an inappropriate reply with /r admin clear.",
                    "Use server rules and logging to prevent replies from being used for harassment or unwanted mentions."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/r set [reply_message]",
                        "desc": "Set automated mention reply message."
                    },
                    {
                        "cmd": "/r remove",
                        "desc": "Remove automated mention reply."
                    },
                    {
                        "cmd": "/r toggle [status]",
                        "desc": "Enable or disable automated mention reply."
                    },
                    {
                        "cmd": "/r admin clear [user]",
                        "desc": "Delete another member's saved reply."
                    }
                ]
            }
        ]
    },
    {
        "id": "reminders",
        "icon": "ph-bell",
        "title": "Personal Reminders",
        "subtitle": "Right-click a message to be reminded about it later. Times can be written the way you would say them out loud.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Right-click a message, say when, in words - tomorrow morning, in two hours - and the bot reminds you then."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/reminders",
                        "desc": "Open your reminder manager."
                    },
                    {
                        "cmd": "Remind Me (Context Menu)",
                        "desc": "Right-click message -&gt; Apps -&gt; Remind Me."
                    }
                ]
            }
        ]
    },
    {
        "id": "translate_cog",
        "icon": "ph-translate",
        "title": "Message Translator",
        "subtitle": "Translate a message, a whole channel, or everything one member posts.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Translation for the moment two members do not share a language: one message, a whole channel, or everything a single member posts."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "Apps &gt; Translate",
                        "desc": "Right-click a message and translate it from Discord's Apps menu."
                    },
                    {
                        "cmd": "Translate Message (Context Menu)",
                        "desc": "Right-click message -&gt; Apps -&gt; Translate Message."
                    }
                ]
            }
        ]
    },
    {
        "id": "thread_watcher",
        "icon": "ph-chats-teardrop",
        "title": "Thread watcher",
        "subtitle": "Keep critical forum threads and text threads unarchived automatically.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Keeps the threads you name from being archived, so a slow forum post does not get locked halfway through."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": []
            }
        ]
    },
    {
        "id": "voicestats",
        "icon": "ph-waveform",
        "title": "Voice Analytics",
        "subtitle": "How long each member spends in voice, session records, and a heatmap of when voice is busy.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "How long each member spends in voice, the longest unbroken sessions, and weekly graphs of when the server is busy and when it is empty."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Voice Analytics is on by default and measures voice activity wherever the bot can see it.",
                    "Confirm the bot can View Channels and observe voice state updates in the channels you want measured.",
                    "Exclude or restrict private channels according to your server privacy policy.",
                    "Allow enough activity to collect before expecting meaningful leaderboards, loyalty, streak, or graph results."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/voice loyalty",
                        "desc": "Rank members by unbroken voice attendance."
                    },
                    {
                        "cmd": "/voice sessions",
                        "desc": "View longest unbroken voice sessions recorded."
                    },
                    {
                        "cmd": "/voice channels",
                        "desc": "Display voice channel popularity heatmap."
                    },
                    {
                        "cmd": "/voice streaks",
                        "desc": "Display most consistent active voice members."
                    },
                    {
                        "cmd": "/voice graph [member]",
                        "desc": "Render historical weekly voice activity chart."
                    }
                ]
            }
        ]
    },
    {
        "id": "stats",
        "icon": "ph-chart-line-up",
        "title": "Live counters",
        "subtitle": "Counter channels that update themselves, plus member growth charts.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Voice channel names that update themselves: member counts, boosts, and anything else you have a number for."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/counter setup",
                        "desc": "Create counters from the guided setup."
                    },
                    {
                        "cmd": "/stats growth",
                        "desc": "Generate visual server member growth chart."
                    },
                    {
                        "cmd": "/counter list",
                        "desc": "List active server counter channels."
                    },
                    {
                        "cmd": "/stats overview",
                        "desc": "View current server statistics."
                    }
                ]
            }
        ]
    },
    {
        "id": "returning_roles",
        "icon": "ph-arrow-u-down-left",
        "title": "Returning Member Roles",
        "subtitle": "Hands back the roles you marked as returnable when a member rejoins.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Mark a role as returnable and somebody who leaves and comes back inside the window gets it handed back without a moderator being asked."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Create the returning-member role and place it below SeanBot.",
                    "Run /returning_role set with the role to assign when eligible members rejoin.",
                    "Use /returning_role view to confirm the saved role.",
                    "Test with a controlled account before relying on the automation."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/returning_role set [role]",
                        "desc": "Set role automatically restored when past members rejoin."
                    },
                    {
                        "cmd": "/returning_role view",
                        "desc": "View current returning member role setting."
                    },
                    {
                        "cmd": "/returning_role clear",
                        "desc": "Clear returning member role configuration."
                    }
                ]
            }
        ]
    },
    {
        "id": "federation",
        "icon": "ph-globe-hemisphere-west",
        "title": "Server Federation",
        "subtitle": "Links servers you trust so that chosen channels relay between them in real time.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Link the servers you already trust and let chosen channels run as one. A network can share forum threads, relay ordinary text channels, pass Team-Up requests between boards, and show Beastmoon leaderboards across every server in it. The private side stays private: tickets, ban appeals, public reports and leave requests are local unless you deliberately open them up."
            },
            {
                "type": "heading",
                "text": "Beginner Setup"
            },
            {
                "type": "text",
                "text": "Start in one server and run /thread network create. Copy the invite token and give it only to trusted server admins. In every partner server, run /thread network join with that token, then choose a forum channel in the dashboard Federation page. If you want only selected threads to cross-post, create a forum tag such as Global and set it as the Global Routing Tag. New threads with that tag will be copied to the other servers."
            },
            {
                "type": "text",
                "text": "For normal text channels, create a relay with /relay create or the dashboard, then link a local text channel in each server. For Team-Up requests, enable Broadcast Team-Ups to Mesh on the Federation page in every server that should send or receive them. Cross-server team chats use threads so the live team conversation can bridge back to the host."
            },
            {
                "type": "heading",
                "text": "Step-by-Step Setup"
            },
            {
                "type": "list",
                "items": [
                    "Pick one trusted server to be the network owner. Run /thread network create there and save the invite token somewhere private.",
                    "In each partner server, enable Federation in Module Settings and run /thread network join with the private token.",
                    "Open the dashboard Federation page in every server and choose a Federated Forum Channel. This is where incoming shared threads appear.",
                    "If only some forum posts should federate, create a forum tag such as Global and set it as the Global Routing Tag.",
                    "Use /thread network health or the dashboard health view to confirm every node is connected.",
                    "Create a test forum thread with the routing tag and confirm it appears in the partner servers before using it publicly.",
                    "For normal text relays, create the relay from one server, link the matching channel in each partner server, and test with a short message.",
                    "For Team-Up sharing, turn on Broadcast Team-Ups to Mesh in every server that should participate."
                ]
            },
            {
                "type": "heading",
                "text": "What Syncs"
            },
            {
                "type": "text",
                "text": "Thread networks can copy new forum threads, replies, attachments within Discord limits, thread renames, locks, archives, pins, deletions, slowmode, and matching forum tags. Network owners can turn each sync type on or off from the Federation page. Public directory, manual join approval, node permissions, identity verification, and network health tools help keep the mesh controlled."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/thread network create [name]",
                        "desc": "Create a new Thread network hub."
                    },
                    {
                        "cmd": "/thread network join [token]",
                        "desc": "Join a thread network using access token."
                    },
                    {
                        "cmd": "/thread network info",
                        "desc": "View details of current connected network hub."
                    },
                    {
                        "cmd": "/thread network dashboard",
                        "desc": "Open network dashboard for linked servers."
                    },
                    {
                        "cmd": "/thread network health",
                        "desc": "Check latency and status of linked servers."
                    },
                    {
                        "cmd": "/thread audit [thread_id]",
                        "desc": "Audit a thread showing recent replies and metrics."
                    },
                    {
                        "cmd": "/relay create [name]",
                        "desc": "Create a cross-server relay channel connection."
                    },
                    {
                        "cmd": "/relay link [code]",
                        "desc": "Link local channel to remote relay network."
                    },
                    {
                        "cmd": "/identity set [name]",
                        "desc": "Set global network identity name."
                    },
                    {
                        "cmd": "/identity view",
                        "desc": "View global network identity profile."
                    }
                ]
            }
        ]
    },
    {
        "id": "roshambo",
        "icon": "ph-fire",
        "title": "Roshambo Battle Royale",
        "subtitle": "A school-versus-school battle game for voice chat.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Rock-paper-scissors, Wizard101 style: schools battle it out in voice chat until one of them is left standing."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/duel",
                        "desc": "Open a lobby to host a Roshambo Battle Royale match."
                    }
                ]
            }
        ]
    },
    {
        "id": "fun",
        "icon": "ph-smiley",
        "title": "Cat Facts & Quotes",
        "subtitle": "Cat facts, cat pictures, and quote cards made from your own chat.",
        "content": [
            {
                "type": "heading",
                "text": "Cat Command Center"
            },
            {
                "type": "commands",
                "title": "Cat Commands",
                "items": [
                    {
                        "cmd": "/cat fact",
                        "desc": "Get a random cat fact."
                    },
                    {
                        "cmd": "/cat image",
                        "desc": "Get a random cat picture."
                    },
                    {
                        "cmd": "/cat gif",
                        "desc": "Get a random animated cat GIF."
                    },
                    {
                        "cmd": "/cat search [breed]",
                        "desc": "Search cat pictures by breed."
                    },
                    {
                        "cmd": "/cat says [text]",
                        "desc": "Generate image of cat saying custom text."
                    }
                ]
            },
            {
                "type": "heading",
                "text": "Discord Quotes & Slaps"
            },
            {
                "type": "commands",
                "title": "Fun Commands",
                "items": [
                    {
                        "cmd": "/discquote [user] [text]",
                        "desc": "Generate a realistic fake Discord quote screenshot."
                    },
                    {
                        "cmd": "/slap user [member]",
                        "desc": "Send a playful slap interaction to a member."
                    },
                    {
                        "cmd": "/slap stats",
                        "desc": "View your slap statistics and rank."
                    },
                    {
                        "cmd": "/slap leaderboard",
                        "desc": "View top slappers in the server."
                    }
                ]
            }
        ]
    },
    {
        "id": "general_sys",
        "icon": "ph-cpu",
        "title": "System Diagnostics",
        "subtitle": "Host stats for the machine the bot runs on, for when something feels slow.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Host numbers for the machine the bot runs on: latency, memory use, and whether it is keeping up."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "No module setup is required for basic server lookup commands.",
                    "Use /dashboard for configuration and /staff diagnose when a feature cannot access a channel or role.",
                    "Use /serveradmin helpers only after checking Discord role hierarchy and audit logging."
                ]
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/serverinfo",
                        "desc": "Display server statistics including member count and roles."
                    },
                    {
                        "cmd": "/ping",
                        "desc": "Check bot API latency in milliseconds."
                    },
                    {
                        "cmd": "/invite",
                        "desc": "Get official SeanBot server invite links."
                    },
                    {
                        "cmd": "/8ball [question]",
                        "desc": "Ask the Magic 8-Ball a question."
                    }
                ]
            }
        ]
    },
    {
        "id": "discord_apps",
        "icon": "ph-cursor-click",
        "title": "Right-Click Apps",
        "subtitle": "Use SeanBot directly from Discord message and member context menus.",
        "content": [
            {
                "type": "heading",
                "text": "How to Open an App"
            },
            {
                "type": "list",
                "items": [
                    "Right-click a message or member, choose Apps, then select the SeanBot action.",
                    "On mobile, press and hold the message or open the member menu before choosing Apps.",
                    "The same module, role, channel, and Discord permission checks used by slash commands still apply.",
                    "Available apps include reporting, warnings, reaction tools, translation, reminders, time conversion, timezone lookup, event creation, and Wizard information."
                ]
            },
            {
                "type": "commands",
                "title": "Common Apps",
                "items": [
                    {
                        "cmd": "Apps &gt; Report User",
                        "desc": "Open a private user report form."
                    },
                    {
                        "cmd": "Apps &gt; Vote Report",
                        "desc": "Start a public vote report from a message."
                    },
                    {
                        "cmd": "Apps &gt; Translate",
                        "desc": "Translate the selected message."
                    },
                    {
                        "cmd": "Apps &gt; Remind Me",
                        "desc": "Create a reminder from a message."
                    },
                    {
                        "cmd": "Apps &gt; Convert Time",
                        "desc": "Convert times found in the selected message."
                    },
                    {
                        "cmd": "Apps &gt; Ping Reactors",
                        "desc": "Notify eligible members who reacted."
                    },
                    {
                        "cmd": "Apps &gt; React with emoji",
                        "desc": "Add an emoji through SeanBot."
                    }
                ]
            }
        ]
    },
    {
        "id": "faq",
        "icon": "ph-question",
        "title": "Frequently Asked Questions",
        "subtitle": "Common troubleshooting questions and answers.",
        "content": [
            {
                "type": "heading",
                "text": "Why aren't slash commands displaying?"
            },
            {
                "type": "text",
                "text": "Ensure SeanBot was granted the `applications.commands` scope when invited."
            }
        ]
    },
    {
        "id": "loa",
        "icon": "ph-calendar-check",
        "title": "Leave of Absence (LOA)",
        "subtitle": "Leave requests with approval, and an automatic role change while somebody is away.",
        "content": [
            {
                "type": "heading",
                "text": "Overview & Functionality"
            },
            {
                "type": "text",
                "text": "Someone is going to be away for a while and the server should know. Staff and members file a request with `/loa request` or from the dashboard, an approver signs it off, and the leave role goes on and comes off by itself when they are due back. You choose the review channel, who may approve, and whether a short request can be auto-approved."
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "In-Discord Setup & Multi-Role Permissions",
                "text": "Use `/loa setup` to configure review channels, assign dedicated leave roles, define maximum leave durations, and set permitted user or admin role lists. In the dashboard, permitted user roles and permitted admin roles are selected with checkboxes instead of typed role IDs."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/loa request",
                        "desc": "Open the interactive modal to submit a new Leave of Absence request with start and end dates."
                    },
                    {
                        "cmd": "/loa setup [approval_channel] [user_roles] [admin_roles] [leave_role] [max_duration] [auto_approval_hours]",
                        "desc": "Configure LOA review channel, multi-role user/admin permissions, leave role, and auto-approval thresholds."
                    },
                    {
                        "cmd": "/loa config",
                        "desc": "Display an active summary embed of the server's LOA settings and permissions."
                    },
                    {
                        "cmd": "/loa status",
                        "desc": "View active or historical LOA requests with options to extend or cancel your leave."
                    },
                    {
                        "cmd": "/loa list",
                        "desc": "Admin command to review and manage all active and scheduled LOAs across the server."
                    }
                ]
            }
        ]
    },
    {
        "id": "global_enforcement",
        "icon": "ph-globe-hemisphere-west",
        "title": "Global enforcement",
        "subtitle": "Punish a member across every server you manage with one action, and let ban appeal approvals unban them everywhere at once.",
        "content": [
            {
                "type": "heading",
                "text": "What Global Enforcement Does"
            },
            {
                "type": "text",
                "text": "Global Enforcement turns the servers you administer into a punishment network. Instead of manually kicking, timing out, or banning a member server by server, you run one action against a scope (all linked servers or the exact servers you pick) and SeanBot applies it everywhere, recording per-server results for audit."
            },
            {
                "type": "heading",
                "text": "Who Can Use It (Server Access)"
            },
            {
                "type": "text",
                "text": "The permission model is built around your existing Discord access. To link a server to a network, to run a global action in it, or to mirror an appeal unban into it, the acting staff member must hold Administrator or Manage Server in that server. The dashboard only lists servers where that access exists, and the backend re-checks the live Discord permissions before every execution. Delegated staff can be added to a network for management convenience, but they still need Administrator or Manage Server in every target server to execute."
            },
            {
                "type": "heading",
                "text": "Creating a Network"
            },
            {
                "type": "list",
                "items": [
                    "Open Module Settings and enable Global Enforcement.",
                    "Open the Global Enforcement page and create a network. It starts with the servers you currently manage.",
                    "Link servers from the network settings card. Only servers where you have Administrator or Manage Server appear as options.",
                    "Optionally add delegated staff user IDs and choose defaults: the default punishment, timeout length, whether a reason is required, and whether the punished member receives a DM.",
                    "The Discord command /gpunish network create &lt;name&gt; creates a network starting with the current server, and /gpunish network add &lt;guild_id&gt; links more."
                ]
            },
            {
                "type": "heading",
                "text": "Running Global Actions"
            },
            {
                "type": "text",
                "text": "Actions supported: timeout, kick, ban, unban, and remove timeout. Scope is either all linked servers or the subset you check in the picker. Every action is written to the network history on the dashboard, and each affected server receives a Moderation log entry under the Global Punishment type (routed in Log Config)."
            },
            {
                "type": "commands",
                "title": "Global Enforcement Commands",
                "items": [
                    {
                        "cmd": "/gpunish network create &lt;name&gt;",
                        "desc": "Create a network starting with the current server."
                    },
                    {
                        "cmd": "/gpunish network add &lt;guild_id&gt;",
                        "desc": "Link another server where you have Administrator or Manage Server."
                    },
                    {
                        "cmd": "/gpunish network remove &lt;guild_id&gt;",
                        "desc": "Remove a server from your network."
                    },
                    {
                        "cmd": "/gpunish network list",
                        "desc": "List your networks with server counts and appeal sync state."
                    },
                    {
                        "cmd": "/gpunish run &lt;user&gt; &lt;timeout|kick|ban|unban|untimeout&gt; [duration_minutes] [scope] [reason]",
                        "desc": "Apply a punishment across the network (scope: all or comma-separated server IDs)."
                    },
                    {
                        "cmd": "/gpunish appealsync &lt;on|off&gt; [server_ids]",
                        "desc": "Toggle ban appeal unban sync and choose its server scope."
                    },
                    {
                        "cmd": "/gpunish history [limit]",
                        "desc": "Show recent global actions with per-server results."
                    }
                ]
            },
            {
                "type": "heading",
                "text": "Ban Appeal Integration"
            },
            {
                "type": "text",
                "text": "When staff approve a ban appeal in any network server, the approval is mirrored as an unban across the appeal sync scope: every linked server, or the exact subset you selected on the Global Enforcement page. This prevents a member from being freed in one server while staying banned in the rest of the network. Appeal review channels are still configured per server on the Ban Appeals page; Global Enforcement only controls where the approved unban is mirrored. Mirror events appear in the network history with the Ban appeal approval source and are logged in each affected server."
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "Safety first",
                "text": "SeanBot only mirrors an unban to servers where the user actually has an active ban. Failed actions (missing permissions, hierarchy conflicts, user not present) are reported per server in the action history instead of being silently skipped."
            }
        ]
    },
    {
        "id": "antiping",
        "icon": "ph-at",
        "title": "Anti-Ping",
        "subtitle": "Block mention floods, protect important roles and users, stop ghost pings, and enforce your own ping rules.",
        "content": [
            {
                "type": "heading",
                "text": "What Anti-Ping Protects"
            },
            {
                "type": "list",
                "items": [
                    "Per-message limits: maximum user mentions and maximum role mentions in a single message.",
                    "@everyone / @here blocking when you do not want mass notifications at all.",
                    "A per-author ping cooldown that stops members from repeatedly pinging the same people.",
                    "Protected roles and users that may never be pinged. Attempts are blocked, logged, and can DM the protected person.",
                    "Ghost ping protection: messages that mention users and are deleted within a short window are detected and can be actively punished, not just logged.",
                    "Exemptions for trusted roles, channels, and users, so automation and staff workflows are never caught."
                ]
            },
            {
                "type": "heading",
                "text": "How It Combines with Anti-Raid & Logging"
            },
            {
                "type": "text",
                "text": "Anti-Ping fills the gap between the two existing layers instead of duplicating them. Anti-Raid's mass-mention detector watches for floods and applies raid policies (quarantine, progressive timeouts) when many mentions arrive in a window. Logging records ghost pings and high mention volume passively. Anti-Ping adds the per-message rules staff actually configure: how many pings are allowed, who is protected, who is exempt, and what happens on violation. All three share the same Logging pipeline: Anti-Ping events are routed under the Security category (Anti-Ping log type) in Log Config, and Anti-Raid alerts stay in their own security channels."
            },
            {
                "type": "heading",
                "text": "Enforcement & Safety"
            },
            {
                "type": "text",
                "text": "Violations can be logged only, send the member a DM warning, delete the message, apply a timeout, kick, or ban. Staff and members whose highest role is at or above SeanBot's role are never punished, and neither is the bot itself; those attempts are reported in the log. Daily statistics on the dashboard show the reason breakdown, ghost ping counts, protected ping attempts, and the top offenders."
            },
            {
                "type": "commands",
                "title": "Anti-Ping Commands",
                "items": [
                    {
                        "cmd": "/antiping toggle &lt;on|off&gt;",
                        "desc": "Enable or disable Anti-Ping for the server."
                    },
                    {
                        "cmd": "/antiping status",
                        "desc": "Show the current limits, cooldown, and actions."
                    },
                    {
                        "cmd": "/antiping protect &lt;role|user&gt;",
                        "desc": "Protect a role or user from being pinged."
                    },
                    {
                        "cmd": "/antiping unprotect &lt;role|user&gt;",
                        "desc": "Remove protection from a role or user."
                    },
                    {
                        "cmd": "/antiping exempt &lt;role|channel|user&gt;",
                        "desc": "Exempt a role, channel, or user from all Anti-Ping rules."
                    },
                    {
                        "cmd": "/antiping unexempt &lt;role|channel|user&gt;",
                        "desc": "Remove an exemption."
                    }
                ]
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Start gently",
                "text": "Enable Anti-Ping with the Log only action first, review the block reasons on the dashboard for a few days, then raise enforcement to delete or timeout once the rules match your community."
            }
        ]
    },
    {
        "id": "honeypot",
        "icon": "ph-magnet",
        "title": "Honeypot channels",
        "subtitle": "Decoy trap text channels that flag malicious users before they reach your members.",
        "content": [
            {
                "type": "heading",
                "text": "What a Honeypot Does"
            },
            {
                "type": "text",
                "text": "Automated scam bots scan Discord servers for keywords like \"free nitro\" and \"giveaway\" to find victims. The Honeypot turns that behavior against them: staff mark one or more trap text channels, and anyone who posts a message in a trap channel is flagged and immediately acted on. Real members never interact with the traps, because honest users do not post in a random channel named after a free-Nitro giveaway."
            },
            {
                "type": "list",
                "title": "How It Works",
                "items": [
                    "Trap text channels: any message posted in the channel triggers the action immediately.",
                    "One-click deploy: the dashboard Deploy Trap Channel button or /honeypot deploy creates a ready-made trap channel and arms it in a single step.",
                    "Who to Flag: flag anyone, only new accounts, only members without a profile picture, or a combination.",
                    "Exemptions: roles and users can be excluded from detection at any time."
                ]
            },
            {
                "type": "heading",
                "text": "Enforcement & Safety"
            },
            {
                "type": "text",
                "text": "Any message in a trap channel triggers the chosen action immediately. There is no hit counter. Enforcement can be Quarantine (the recommended default, which isolates the member in a verification channel until they verify), a timeout, a kick, a ban, a DM warning, or log only. Triggering messages can be deleted automatically, and the Who to Flag mode can limit hits to new accounts, members without a profile picture, or both. Staff, exempt roles, and exempt users are never flagged, and members whose role is at or above SeanBot's role are never punished."
            },
            {
                "type": "heading",
                "text": "Beginner Setup"
            },
            {
                "type": "list",
                "items": [
                    "Honeypot is on by default, so open the dashboard Honeypot page and place the trap.",
                    "Start with the Log only action to watch hits before raising enforcement.",
                    "Click Deploy Trap Channel on the dashboard (or run /honeypot deploy) to create a trap channel instantly without leaving the page.",
                    "Keep trap channels visible to @everyone; that visibility is what attracts the bots. Place them somewhere out of the way.",
                    "Let it run for a few days and review the trigger breakdown on the dashboard.",
                    "Switch to Quarantine, timeout, or ban once you are comfortable with the results.",
                    "Set Who to Flag to Only new accounts to flag accounts under 30 days old.",
                    "Check Log Config and route the Honeypot log type (Security category) to a staff channel so every hit is recorded."
                ]
            },
            {
                "type": "callout",
                "variant": "warning",
                "title": "Real members posting in traps are flagged too",
                "text": "Anyone who posts in a trap channel is treated as suspicious. Use exemptions for bots you control and test accounts, and tell your staff which channels are traps so nobody gets caught by accident."
            },
            {
                "type": "commands",
                "title": "Honeypot Commands",
                "items": [
                    {
                        "cmd": "/honeypot toggle &lt;on|off&gt;",
                        "desc": "Enable or disable the Honeypot for the server."
                    },
                    {
                        "cmd": "/honeypot status",
                        "desc": "Show trap channels, action, and detection settings."
                    },
                    {
                        "cmd": "/honeypot add_channel [channel]",
                        "desc": "Mark a text channel as a trap."
                    },
                    {
                        "cmd": "/honeypot remove_channel [channel]",
                        "desc": "Unmark a trap text channel."
                    },
                    {
                        "cmd": "/honeypot deploy [name]",
                        "desc": "Create a trap channel and arm it as a honeypot in one step."
                    },
                    {
                        "cmd": "/honeypot exempt &lt;role|user&gt;",
                        "desc": "Exempt a role or user from all Honeypot rules."
                    },
                    {
                        "cmd": "/honeypot unexempt &lt;role|user&gt;",
                        "desc": "Remove an exemption."
                    }
                ]
            }
        ]
    },
    {
        "id": "giveaways",
        "icon": "ph-gift",
        "title": "Giveaways",
        "subtitle": "Host SeanBot-native giveaways with full entry tracking, winner vetting, reminders, and archive summaries, plus companion support for the open-source GiveawayBot.",
        "content": [
            {
                "type": "heading",
                "text": "Native Giveaways (Recommended)"
            },
            {
                "type": "text",
                "text": "SeanBot hosts giveaways on its own entry buttons, so every entrant is recorded and visible to moderators. Giveaways end on time, pick winners automatically, reroll cleanly, and post a permanent summary to your archive channel."
            },
            {
                "type": "heading",
                "text": "Core Commands"
            },
            {
                "type": "commands",
                "title": "Giveaway Commands",
                "items": [
                    {
                        "cmd": "/giveaway start &lt;time&gt; &lt;winners&gt; &lt;prize&gt; [description] [channel]",
                        "desc": "Start a giveaway. Time accepts 30s, 2h, 45m, 1d, or 2h30m."
                    },
                    {
                        "cmd": "/giveaway end &lt;id&gt;",
                        "desc": "End a giveaway early and pick winners now."
                    },
                    {
                        "cmd": "/giveaway reroll &lt;id&gt;",
                        "desc": "Pick new winners from the remaining entrants."
                    },
                    {
                        "cmd": "/giveaway cancel &lt;id&gt;",
                        "desc": "Cancel and delete a running giveaway."
                    },
                    {
                        "cmd": "/giveaway list",
                        "desc": "See every giveaway running in the server."
                    },
                    {
                        "cmd": "/giveaway entrants &lt;id&gt;",
                        "desc": "See exactly who entered a giveaway (moderators only)."
                    },
                    {
                        "cmd": "/giveaway embed",
                        "desc": "Design a custom giveaway embed from the preset or a saved template."
                    }
                ]
            },
            {
                "type": "heading",
                "text": "Safety: Entry & Winner Vetting"
            },
            {
                "type": "list",
                "items": [
                    "New or flagged accounts can be blocked from entering giveaways at all (minimum account age, quarantine sessions, Global Enforcement punishments).",
                    "Announced winners are run through SeanBot's safety stack and a ✅/⚠️/🚫 verdict is posted to the vetting channel.",
                    "Rerolls exclude the previous winners, and the reroll count is tracked on every giveaway summary."
                ]
            },
            {
                "type": "heading",
                "text": "Settings"
            },
            {
                "type": "commands",
                "title": "Giveaway Settings",
                "items": [
                    {
                        "cmd": "/giveaway config logchannel &lt;channel&gt;",
                        "desc": "Audit log for lifecycle events and 📊 summaries."
                    },
                    {
                        "cmd": "/giveaway config vetchannel &lt;channel&gt;",
                        "desc": "Channel for winner vetting reports."
                    },
                    {
                        "cmd": "/giveaway config archivechannel &lt;channel&gt;",
                        "desc": "Permanent record of every ended giveaway."
                    },
                    {
                        "cmd": "/giveaway config reminder &lt;minutes&gt;",
                        "desc": "Ping the log channel N minutes before giveaways end (0 = off)."
                    },
                    {
                        "cmd": "/giveaway config remindrole &lt;role&gt;",
                        "desc": "Role pinged by ending-soon reminders."
                    },
                    {
                        "cmd": "/giveaway config button &lt;emoji/text&gt;",
                        "desc": "Custom entry-button emoji or text."
                    },
                    {
                        "cmd": "/giveaway config color &lt;hex/name&gt;",
                        "desc": "Custom giveaway embed color."
                    },
                    {
                        "cmd": "/giveaway config show",
                        "desc": "Show every per-server giveaway setting."
                    }
                ]
            },
            {
                "type": "heading",
                "text": "GiveawayBot Companion Support"
            },
            {
                "type": "text",
                "text": "The botsupport module watches an installed GiveawayBot (official or self-hosted) and turns its public messages into an audit trail: created, ended, rerolled, and deleted giveaways, plus winner vetting. GiveawayBot keeps its entrant list private. For full entry tracking, use SeanBot's native giveaways."
            },
            {
                "type": "commands",
                "title": "Bot Support Commands",
                "items": [
                    {
                        "cmd": "/botsupport giveawaybot show",
                        "desc": "Show watcher status and configuration."
                    },
                    {
                        "cmd": "/botsupport giveawaybot enable | disable",
                        "desc": "Turn the GiveawayBot watcher on or off."
                    },
                    {
                        "cmd": "/botsupport giveawaybot logchannel &lt;channel&gt;",
                        "desc": "Where GiveawayBot lifecycle events are logged."
                    },
                    {
                        "cmd": "/botsupport giveawaybot botid &lt;id&gt;",
                        "desc": "Watch a custom GiveawayBot user ID."
                    }
                ]
            }
        ]
    }
];
