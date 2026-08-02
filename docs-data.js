// SeanBot documentation. Normalized by scripts/rebuild_docs_data.js.
const docsData = [
    {
        "id": "quickstart",
        "icon": "ph-rocket-launch",
        "title": "Quick Start: Set Up SeanBot",
        "subtitle": "A practical install checklist for permissions, modules, logging, security, staff access, and testing.",
        "content": [
            {
                "type": "heading",
                "text": "Before You Install"
            },
            {
                "type": "list",
                "items": [
                    "Use a Discord account with Manage Server. Server ownership or Administrator is recommended for the first setup.",
                    "Create a private staff channel for testing commands and a private log channel such as #seanbot-logs.",
                    "Keep Discord role hierarchy in mind: SeanBot can only manage members and roles below its highest role."
                ]
            },
            {
                "type": "heading",
                "text": "1. Invite and Place the Bot Role"
            },
            {
                "type": "list",
                "items": [
                    "Invite SeanBot from the official website and select the server you want to configure.",
                    "Open Server Settings > Roles and move the SeanBot role above every role it must assign, higher the better.",
                    "Giving the asked permissions from start to bot is the best practice. Do not remove permissions if you dont want the bot to break or give unexplainable errors."
                ]
            },
            {
                "type": "heading",
                "text": "2. Confirm the Installation"
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
                "type": "heading",
                "text": "3. Open the Dashboard and Control Access"
            },
            {
                "type": "list",
                "items": [
                    "Sign in with Discord, choose your server, and open Module Settings.",
                    "New servers start with optional modules disabled. Enable only the pages and features you intend to configure.",
                    "Open Server Access before inviting other staff into the dashboard. Role Hierarchy for dashboard is, Administrator: Full Access > Manage Server: Server Access Settings.",
                    "Use Dashboard Logs to confirm who changed settings, deleted records, approved requests, or performed dashboard actions."
                ]
            },
            {
                "type": "heading",
                "text": "4. Configure Logging First"
            },
            {
                "type": "list",
                "items": [
                    "Enable Logging in Module Settings, then open Log Config.",
                    "Choose All logs in one channel for the fastest setup, or Separate channels when moderation, security, member, voice, and staff logs must be isolated.",
                    "Enable moderation, security, staff workflows, public reports, ban appeals, emoji suggestions, tickets, and dashboard actions as needed.",
                    "Perform one harmless dashboard change and one test command, then verify both appear in the expected log channel."
                ]
            },
            {
                "type": "heading",
                "text": "5. Configure Security Safely"
            },
            {
                "type": "list",
                "items": [
                    "Enable Anti-Raid and open its dashboard page.",
                    "Choose trusted staff roles, safe domains, alert channels, and a quarantine role placed below SeanBot.",
                    "Start with Canary mode so detections are logged without automatically punishing members.",
                    "Run /antiraid audit and /antiraid simulate, review the output, then enable enforcement only after your trusted roles and thresholds are correct."
                ]
            },
            {
                "type": "heading",
                "text": "6. Prepare Staff Workflows"
            },
            {
                "type": "list",
                "items": [
                    "Confirm moderator roles have only the Discord permissions they need and remain below the server owner.",
                    "Configure warnings and moderation presets before staff begin issuing cases.",
                    "Create private review channels for ban appeals, public reports, community suggestions, emoji suggestions, tickets, and leave requests before enabling those modules.",
                    "Assign reviewer or support roles on each feature page and submit one test request from a non-staff account."
                ]
            },
            {
                "type": "heading",
                "text": "7. Add Optional Community Features"
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
                "type": "callout",
                "icon": "!",
                "title": "If a command does not appear",
                "text": "Check that its module is enabled, the command is allowed under Server Settings > Integrations, the user has the required role or Discord permission, and SeanBot can view the current channel. Discord may take a short time to refresh newly synchronized commands."
            }
        ]
    },
    {
        "id": "core",
        "icon": "ph-layout",
        "title": "Dashboard, Modules & Staff Access",
        "subtitle": "Understand module switches, delegated dashboard permissions, audit history, and command availability.",
        "content": [
            {
                "type": "heading",
                "text": "Module Settings"
            },
            {
                "type": "text",
                "text": "Optional features are controlled per server. Disabling a module hides its dashboard page and blocks its actions; it does not delete saved configuration. Re-enable the module to continue using the existing settings."
            },
            {
                "type": "list",
                "items": [
                    "Open Module Settings and enable the feature before attempting its setup commands.",
                    "Use search and Enabled Only to review the active configuration without enabling unrelated tools.",
                    "After disabling a scheduled feature, check its guide for any messages, channels, or roles that should be removed manually."
                ]
            },
            {
                "type": "heading",
                "text": "Server Access"
            },
            {
                "type": "text",
                "text": "Server Access delegates dashboard pages and individual actions to Manage Server roles. A role can receive read-only access to a page without receiving approval, deletion, or configuration actions."
            },
            {
                "type": "list",
                "items": [
                    "Keep full administrator access limited to server administrators.",
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
        "subtitle": "Damage calculators, multi-buff stack previews, gear scaling, and visual deck sharing.",
        "content": [
            {
                "type": "heading",
                "text": "Damage & Buff Calculator"
            },
            {
                "type": "text",
                "text": "Calculate expected damage for raids and regular combat. Multi-blade stacks, traps, auras, gear damage percentages, shadow pips, critical strikes, and pierce multipliers with exact numerical accuracy."
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
                        "cmd": "/statcap statcaps find",
                        "desc": "View statcap by level."
                    },
                    {
                        "cmd": "/statcap statcaps offschool",
                        "desc": "View statcap for offschooling."
                    },
                    {
                        "cmd": "/statcap statcaps main",
                        "desc": "View statcap for your main school."
                    },
                    
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
        "subtitle": "Form progression tracking, Lunari & Idol cost calculators, and global leaderboards.",
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
        "subtitle": "Record wins, losses, keys, hosted raids, school swaps, and wipe witnesses for server recap statistics.",
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
        "subtitle": "Automated dungeon LFG lobbies with one-click signups.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Eliminate waiting at dungeon gates. Post Team-Up boards for Waterworks, Darkmoor, or raids. Players join with one click, select their school, and get auto-created voice channels when full."
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
        "subtitle": "Curated boss cheat sheets, blade turn orders, and raid position guides.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Store and query boss cheat guides directly in Discord chat to execute flawless dungeon strategies."
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
                        "cmd": "/strategy pending",
                        "desc": "Review pending universal strategies."
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
                "text": "Track your own Wizard101 house tapestry and bobblehead collection with simple list and toggle commands."
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
        "icon": "ph-hat-wizard",
        "title": "W101: Wizard Roster Check",
        "subtitle": "Wizard profile channel setup, missing-list audits, and reminder DMs.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Configure wizard-post channels, publish missing-profile lists, and send DM reminders to members who still need wizard information."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/wizard missing-channel [channel]",
                        "desc": "Designate staff channel where missing profile audits publish."
                    },
                    {
                        "cmd": "/wizard missing-list",
                        "desc": "Generate a real-time list of unverified guild members."
                    },
                    {
                        "cmd": "/wizard check",
                        "desc": "Dispatch friendly automated DM reminders to unverified members."
                    },
                    {
                        "cmd": "/wizard channel [channel]",
                        "desc": "Set the channel where wizard profile posts are expected."
                    }
                ]
            }
        ]
    },
    {
        "id": "server_admin",
        "icon": "ph-wrench",
        "title": "Server Administration Helpers",
        "subtitle": "Manage modules, roles, channels, and bot messages without leaving Discord.",
        "content": [
            {
                "type": "heading",
                "text": "Before Using These Commands"
            },
            {
                "type": "list",
                "items": [
                    "Place SeanBot above every role it needs to create, edit, delete, add, or remove.",
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
        "subtitle": "Raid protection, scam detection, quarantine controls, and live risk scoring.",
        "content": [
            {
                "type": "heading",
                "text": "Security Engine"
            },
            {
                "type": "text",
                "text": "Protect your community against raid bots, scam links, suspicious webhooks, invite abuse, and fast message bursts. SeanBot tracks temporary heat scores, supports canary mode for log-only testing, and can use quarantine roles when the bot has the needed role permissions."
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
                    "Enable Anti-Raid in Module Settings.",
                    "Choose trusted roles, safe domains, alert channels, and a quarantine role below SeanBot.",
                    "Turn on Canary mode first so detections are logged without automatic punishment.",
                    "Run /antiraid audit and /antiraid simulate, review false positives, then enable enforcement.",
                    "Use burst levels, channel sensitivity, and role or channel multipliers only after the base setup behaves correctly."
                ]
            },
            {
                "type": "commands",
                "title": "Security Commands Reference",
                "items": [
                    {
                        "cmd": "/antiraid dashboard",
                        "desc": "Display live threat indicators, burst levels, and active security rules."
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
                        "cmd": "/antiraid register_scam [image]",
                        "desc": "Register image attachments as visual scam blocks."
                    },
                    {
                        "cmd": "/antiraid unregister_scam [hash]",
                        "desc": "Remove an image hash from the visual scam blocker."
                    },
                    {
                        "cmd": "/antiraid scam_list",
                        "desc": "Inspect all active visual scam fingerprints on your server."
                    },
                    {
                        "cmd": "/antiraid whitelist [role]",
                        "desc": "Grant trusted roles bypass immunity from security checks."
                    },
                    {
                        "cmd": "/antiraid quarantine [user]",
                        "desc": "Isolate a suspect user into restricted quarantine holding."
                    },
                    {
                        "cmd": "/antiraid unquarantine [user]",
                        "desc": "Release a user from quarantine and restore original roles."
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
                        "cmd": "/antiraid multiplier_channel [channel]",
                        "desc": "Configure risk score multipliers for high-exposure channels."
                    },
                    {
                        "cmd": "/antiraid multiplier_role [role]",
                        "desc": "Adjust threat sensitivity multipliers for unverified roles."
                    },
                    {
                        "cmd": "/antiraid burstlevel [level]",
                        "desc": "Set message frequency threshold for burst detection."
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
        "subtitle": "Robust staff enforcement suite respecting Discord role hierarchy constraints.",
        "content": [
            {
                "type": "heading",
                "text": "High-Efficiency Moderation Tools"
            },
            {
                "type": "text",
                "text": "Maintain order across large servers with rapid enforcement actions, shadowbans, bulk message purges, and automated transcript exports."
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
                        "cmd": "/archive_get [id]",
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
        "subtitle": "Infraction tracking, active penalty point calculations, and automatic escalations.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Track member infractions, log warning histories, calculate active penalty points, and set automatic punishment thresholds."
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
        "subtitle": "Asynchronous audit event logging to external webhooks without latency impact.",
        "content": [
            {
                "type": "heading",
                "text": "High-Speed Event Logging"
            },
            {
                "type": "text",
                "text": "Stream server audit events (message edits/deletions, role updates, voice activity, member joins) to Discord log channels. Log Config can route everything into one all-logs channel for simple setup, or split categories into separate webhook channels for busy servers. Ban appeal, suggestion, and public report staff actions are handled by the Staff Workflows logging category."
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
                        "cmd": "/quarantine user [member]",
                        "desc": "Jail a member and safely back up their original roles."
                    },
                    {
                        "cmd": "/quarantine remove [member]",
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
        "subtitle": "Review ban appeals and server suggestions from their own dashboard pages.",
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
        "id": "reports",
        "icon": "ph-flag",
        "title": "Member Reports",
        "subtitle": "Discreet, single-click report submissions for moderation review.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Give members a safe way to flag rule violations or harassment directly to moderators. Public Vote Reports can post a review card in your chosen staff channel, ping selected roles, track weighted approve/decline votes, protect selected roles from public voting, and log staff actions through Log Config under Staff Workflows. Members can create vote reports from the message context menu, with `/report` plus a message link, or with the optional dashboard-configured report emoji shortcut."
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
                        "desc": "Right-click any user -> Apps -> Report User to submit a private user report to staff."
                    },
                    {
                        "cmd": "Vote Report (Message Context Menu)",
                        "desc": "Right-click or long-press a message -> Apps -> Vote Report to open the public vote report reason form."
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
        "subtitle": "Automated role pings, Discord event synchronization, and dynamic countdown timers.",
        "content": [
            {
                "type": "heading",
                "text": "Event Reminders"
            },
            {
                "type": "text",
                "text": "Keep raids, guild meetings, and community events on time. Admins can schedule reminders, link Discord Scheduled Events, or let SeanBot watch selected channels for event times. Members join reminder lists by reacting with the configured emoji."
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
                    "Enable TimePing in Module Settings and make sure SeanBot can read messages, add reactions, manage events if using Discord Scheduled Events, and mention the roles you want pinged.",
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
        "subtitle": "Timezone detection, comparisons, and interactive community time maps.",
        "content": [
            {
                "type": "heading",
                "text": "Global Time Synchronization"
            },
            {
                "type": "text",
                "text": "Eliminate timezone math for international gaming groups. Members can detect, set, view, compare, or clear their timezone, then use live community time maps and local-time conversions across the server."
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
                        "desc": "Automatically detect your timezone by entering local time."
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
        "subtitle": "Convert times across timezones and generate dynamic Discord timestamp tags.",
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
                        "desc": "Right-click a message and use Apps > Convert Time to get an ephemeral conversion."
                    },
                    {
                        "cmd": "Message Context Menu: Convert Time (DM)",
                        "desc": "Right-click a message and use Apps > Convert Time (DM) to receive the conversion privately."
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
        "id": "raids",
        "icon": "ph-swords",
        "title": "Raid & Event Organizer",
        "subtitle": "Multi-role raid builder with localized times and strategy signups.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Schedule gaming events with role signup embeds, localized event times, and strategy requirements."
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
        "title": "Polls & Raid Rosters",
        "subtitle": "Quick reaction polls for simple votes, plus advanced raid roster polls with waitlists.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Use /poll create or the dashboard simple poll form when you need an easy reaction vote. Use /raidpoll when you need raid slots, caps, waitlists, and roster automation."
            },
            {
                "type": "heading",
                "text": "Simple Reaction Polls"
            },
            {
                "type": "text",
                "text": "/poll create posts one embed with 2-20 answer choices and letter reactions. The question is shown as the embed title, members vote by reacting, and staff can use /poll close with the poll message ID to lock in final totals. You can also add an optional poll end time and turn the timestamps option on for automatic answer time conversion. The dashboard can create simple polls, preview them beside the form before posting, and save common polls as templates for later."
            },
            {
                "type": "heading",
                "text": "Poll Templates"
            },
            {
                "type": "text",
                "text": "On the Poll Manager page, write a question and answers, then save it as a template. Later, choose the template to refill the form. This is useful for weekly raids, meeting votes, event times, and repeated server questions."
            },
            {
                "type": "heading",
                "text": "Dates And Discord Timestamps"
            },
            {
                "type": "text",
                "text": "When you write a date or time in /poll create or in the dashboard simple poll form, SeanBot tries to turn it into a Discord timestamp. Discord then shows the time in each member's own local time. You can write dates like 29.07.2026 20:00, 2026-07-29 20:00, July 29 2026 8 PM, 29 July 20:00, tomorrow 8 PM, Friday 20:00, or Sunday 26 July 2026 18:00. SeanBot uses the poll creator's saved timezone, so set your timezone first before using poll end times or timed answer choices."
            },
            {
                "text": "Menu and both-mode raid polls support up to 23 raid slots per poll so Discord's dropdown remains valid. Reaction-only raid polls support up to 25 slots."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/poll create",
                        "desc": "Create a quick reaction poll with 2-20 answers, optional poll end time, and the timestamps option."
                    },
                    {
                        "cmd": "/poll close",
                        "desc": "Close a simple reaction poll and replace the embed with final vote totals."
                    },
                    {
                        "cmd": "/raidpoll",
                        "desc": "Open setup modal to build interactive multi-role raid signup boards."
                    }
                ]
            }
        ]
    },
    {
        "id": "teamup_fed",
        "icon": "ph-arrows-merge",
        "title": "Team-Up Federation Mesh",
        "subtitle": "Broadcast LFG dungeon lobbies across allied server networks with proxy threads.",
        "content": [
            {
                "type": "heading",
                "text": "Cross-Server Federation Mesh"
            },
            {
                "type": "text",
                "text": "Unite allied communities. When Broadcast Team-Ups to Mesh is enabled in the source server and receiving servers, posting a Team-Up lobby broadcasts synced proxy embeds to partner boards. When the team forms, SeanBot creates linked threads so the cross-server team chat stays connected."
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
        "subtitle": "Join-to-Create voice channels with complete owner customization controls.",
        "content": [
            {
                "type": "heading",
                "text": "Join-to-Create Voice Generator"
            },
            {
                "type": "text",
                "text": "Members join a generator voice channel and SeanBot creates a private, custom voice channel for them with full owner controls."
            },
            {
                "type": "heading",
                "text": "Beginner Setup"
            },
            {
                "type": "list",
                "items": [
                    "Enable Temporary Voice Channels in Module Settings.",
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
        "subtitle": "Private support tickets with claim controls, priority tags, and transcript archives.",
        "content": [
            {
                "type": "heading",
                "text": "Streamlined Support Workflows"
            },
            {
                "type": "text",
                "text": "Deploy interactive support panels where members click to open private ticket channels. Ticket channels are private as soon as they are created, staff members can claim tickets, assign tickets to another staff member or staff role from the dashboard, set priority levels, post internal notes, and close tickets from Discord or the dashboard with duplicate-close protection, transcript logging, optional transcript DMs, stored transcript fallback, and channel cleanup."
            },
            {
                "type": "heading",
                "text": "Beginner Setup"
            },
            {
                "type": "list",
                "items": [
                    "Enable Ticket System in Module Settings.",
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
                        "desc": "Automatically create a ticket category, panel channel, and default panel."
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
        "subtitle": "Track member engagement and automate Active/Inactive role assignments.",
        "content": [
            {
                "type": "heading",
                "text": "Automated Engagement Analytics"
            },
            {
                "type": "text",
                "text": "Monitor chat messages, voice attendance, reactions, and command activity to automatically reward active members."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Create active and inactive roles and place both below SeanBot.",
                    "Run /activity setup or use Server Counters > Activity Tracker Settings.",
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
        "subtitle": "Community-driven message pinning based on reaction thresholds.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "SeanBot automatically pins messages that receive a set number of reaction emojis."
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
        "title": "Starboard Engine",
        "subtitle": "Highlight top-reacted community messages in a starboard showcase channel.",
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
        "subtitle": "Collect emoji uploads, review them safely, track usage, and manage emoji access.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Members can upload an emoji suggestion with a name and reason. Staff review the same queue from Discord or Dashboard > Emoji Manager. Approving a suggestion creates the guild emoji, records the reviewer, logs the action, and can notify the submitter by direct message."
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
                    "Open Dashboard > Emoji Manager to add multiple reviewer roles, change the member cooldown, enable result DMs, or review the queue.",
                    "Members run /emoji suggest with a 2-32 character name, an image attachment, and an optional reason.",
                    "Reviewers use Approve and add or Reject on the Discord card, or review the same item in Emoji Manager. Rejections from Discord require a reason.",
                    "Use Log Config > Staff > Emoji Suggestion to route workflow events into your normal server logs. Dashboard changes are also recorded in Dashboard Logs."
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
        "subtitle": "Reaction statistics, animated emoji previews, and reactor pings.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Track community reaction activity, ping users who reacted to a message, and sweep bot reactions."
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
                    "Enable Reaction Pings in Module Settings.",
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
                    "Enable Sticky Messages in Module Settings.",
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
        "subtitle": "Interactive rich embed designer and template automation triggers.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Draft, design, preview, and publish custom rich Discord embeds from the dashboard. The builder supports saved templates, automation triggers, buttons, reaction roles, and emoji text fields."
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
                "icon": "!",
                "title": "Reaction Roles vs Button Roles",
                "text": "Button roles are best when you want a clear clickable panel with labels and button colors. Reaction roles are best when members should react with emojis below a message. Both require SeanBot's role to be above the roles it manages, and reaction roles also require Add Reactions."
            },
            {
                "type": "callout",
                "icon": "!",
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
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/embed builder",
                        "desc": "Deploy embed builder design dashboard."
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
        "subtitle": "Automated custom replies triggered when members mention you in chat.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Set custom text messages sent automatically when another member mentions you in chat."
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
                    "Administrators can clear an inappropriate reply with /admin clear.",
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
                        "cmd": "/admin clear [user]",
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
        "subtitle": "Right-click message reminders with natural language time parsing.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Right-click any message to set a reminder with natural date parsing."
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
                        "desc": "Right-click message -> Apps -> Remind Me."
                    }
                ]
            }
        ]
    },
    {
        "id": "translate_cog",
        "icon": "ph-translate",
        "title": "Message Translator",
        "subtitle": "Translate chat messages, text channels, or user posts into any language.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Translate messages across international gaming groups."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "Apps > Translate",
                        "desc": "Right-click a message and translate it from Discord's Apps menu."
                    },
                    {
                        "cmd": "Translate Message (Context Menu)",
                        "desc": "Right-click message -> Apps -> Translate Message."
                    }
                ]
            }
        ]
    },
    {
        "id": "thread_watcher",
        "icon": "ph-chats-teardrop",
        "title": "Thread Watcher Engine",
        "subtitle": "Keep critical forum threads and text threads unarchived automatically.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Monitors designated forum threads and prevents Discord from archiving them."
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
        "subtitle": "Member voice participation, unbroken session records, and heatmaps.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Rank members by voice dedication, track unbroken session records, and generate weekly graphs."
            },
            {
                "type": "heading",
                "text": "Setup & Verification"
            },
            {
                "type": "list",
                "items": [
                    "Enable Voice Analytics in Module Settings.",
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
        "title": "Server Live Counters",
        "subtitle": "Live voice counter channels and member growth charts.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Automatically generate live voice counter channels displaying server member counts."
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
        "subtitle": "Automatically re-assign designated roles to returning members.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Set a specific role automatically granted to users who rejoin within a 2-year window."
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
        "subtitle": "Connect multiple Discord servers together into a real-time network.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Connect multiple Discord servers into a shared network. A network can share forum threads, relay normal text channels, broadcast Team-Up requests, and show Beastmoon leaderboards across allied servers. Moderation-only tools such as tickets, ban appeals, public reports, and LOA stay local by default so private staff data is not leaked to partner servers."
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
        "subtitle": "Multi-player elemental and spirit school battle game.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Multiplayer Rock-Paper-Scissors style battle royales based on Wizard101 schools."
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
        "subtitle": "Cat facts, cute pictures, and fake Discord quote generators.",
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
        "subtitle": "System monitoring, hardware statistics, and general server tools.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "General utility commands providing bot latency metrics and RAM usage."
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
                        "cmd": "Apps > Report User",
                        "desc": "Open a private user report form."
                    },
                    {
                        "cmd": "Apps > Vote Report",
                        "desc": "Start a public vote report from a message."
                    },
                    {
                        "cmd": "Apps > Translate",
                        "desc": "Translate the selected message."
                    },
                    {
                        "cmd": "Apps > Remind Me",
                        "desc": "Create a reminder from a message."
                    },
                    {
                        "cmd": "Apps > Convert Time",
                        "desc": "Convert times found in the selected message."
                    },
                    {
                        "cmd": "Apps > Ping Reactors",
                        "desc": "Notify eligible members who reacted."
                    },
                    {
                        "cmd": "Apps > React with emoji",
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
        "subtitle": "Streamlined, automated staff & member leave management with Discord role sync.",
        "content": [
            {
                "type": "heading",
                "text": "Overview & Functionality"
            },
            {
                "type": "text",
                "text": "The Leave of Absence (LOA) module allows staff members and community users to request temporary leave. Requests can be submitted directly via `/loa request` or through the Web Dashboard, with automatic role assignment/removal for the configured leave role, custom review channels, configurable auto-approval thresholds, and dashboard role checkboxes for user/admin access."
            },
            {
                "type": "callout",
                "icon": "⚡",
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
    }
];
