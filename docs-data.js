// SeanBot documentation. Normalized by scripts/rebuild_docs_data.js.
const docsData = [
    {
        "id": "quickstart",
        "icon": "ph-rocket-launch",
        "title": "Install and set up",
        "subtitle": "Invite SeanBot, move its role up, and run one check. Most features work from the moment it joins.",
        "content": [
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Invite SeanBot from this site. In **Server Settings**, **Roles**, drag its role above every role it should manage.",
                    "Leave View Channel, Send Messages, Embed Links and Read Message History on in the channels where it works.",
                    "Run `/staff diagnose` in a private staff channel to check bot permissions there and in the server.",
                    "Sign in to the dashboard and open **Module Settings**. Switch off what this server will not use.",
                    "Pick a log channel in **Log Config**, then run one command and make one dashboard change to confirm both land."
                ]
            },
            {
                "type": "heading",
                "text": "Good to know"
            },
            {
                "type": "list",
                "items": [
                    "Most modules start on. Last Message tracking, Staff List and Verification start off.",
                    "**Server Access** decides which staff roles can see dashboard pages."
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "If the setup menu never arrives",
                "text": "SeanBot sends the setup menu by DM. If it does not arrive, run `/setup` in the server. You need Manage Server to open it."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "Check bot permissions in the current channel and server."
                    },
                    {
                        "cmd": "/serveradmin modules",
                        "desc": "See which feature modules are enabled for this server."
                    }
                ]
            }
        ]
    },
    {
        "id": "core",
        "icon": "ph-layout",
        "title": "Dashboard, Modules & Staff Access",
        "subtitle": "Where the module switches live, who can see a page, and what to check when a command will not answer.",
        "content": [
            {
                "type": "heading",
                "text": "Module settings"
            },
            {
                "type": "text",
                "text": "Each switch applies to one server. Most modules start on; Last Message tracking, Staff List and Verification start off. Turning one off hides its dashboard page and blocks its protected actions, but keeps its settings for later."
            },
            {
                "type": "list",
                "items": [
                    "Use **Enabled Only** for a short list of what is running.",
                    "After switching off something scheduled, check its guide for messages or roles worth cleaning up."
                ]
            },
            {
                "type": "heading",
                "text": "Server access"
            },
            {
                "type": "text",
                "text": "**Server Access** gives a role a dashboard page or a single action. A role can read a page without being allowed to change it."
            },
            {
                "type": "list",
                "items": [
                    "Keep full access for administrators.",
                    "Give support staff ticket actions, reviewers their queue, and event staff the calendar.",
                    "Test a delegated role with a real staff account before relying on it."
                ]
            },
            {
                "type": "heading",
                "text": "A missing command"
            },
            {
                "type": "list",
                "items": [
                    "Check the module switch.",
                    "Check **Server Settings**, **Integrations** for a channel or member restriction.",
                    "Run `/staff diagnose` to check bot permissions, and check role order separately."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "View or change the text-command prefix, for servers that still use one."
                    },
                    {
                        "cmd": "/staff diagnose",
                        "desc": "Check bot permissions in the current channel and server."
                    }
                ]
            }
        ]
    },
    {
        "id": "text_commands",
        "icon": "ph-terminal-window",
        "title": "Text Commands",
        "subtitle": "Members can use supported commands with a prefix, without opening the slash menu.",
        "content": [
            {
                "type": "heading",
                "text": "How it works"
            },
            {
                "type": "text",
                "text": "`!help` runs the same command as `/help`, with the same permissions. The default prefix is `!`, and changing it keeps `!` working so old instructions still make sense. Mentioning the bot always works: `@SeanBot help`."
            },
            {
                "type": "heading",
                "text": "Change it"
            },
            {
                "type": "steps",
                "items": [
                    "Run `/prefix` to see the current one.",
                    "Run `/prefix` with a new value, such as `?`, to add it. You need Administrator or Manage Server.",
                    "Keep it to 1 to 5 visible characters with no spaces. Discord reserves `/`, `@`, `<`, `>` and backticks."
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "A prefix is not a permission",
                "text": "Changing the prefix changes how people type a command, not who is allowed to use it. Discord permissions still decide that."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/prefix",
                        "desc": "Show this server's text command prefix."
                    },
                    {
                        "cmd": "/prefix new_prefix:?",
                        "desc": "Change the prefix. Administrator or Manage Server only."
                    },
                    {
                        "cmd": "/help",
                        "desc": "Open the command list. Also answers to `!help` and `@SeanBot help`."
                    },
                    {
                        "cmd": "!help",
                        "desc": "The text form of the same command, using the current prefix."
                    }
                ]
            }
        ]
    },
    {
        "id": "w101",
        "icon": "ph-magic-wand",
        "title": "Wizard101 Tools",
        "subtitle": "Work out how much damage a hit will do, and keep the guild's decks in one place.",
        "content": [
            {
                "type": "heading",
                "text": "Damage calculator"
            },
            {
                "type": "text",
                "text": "`/damage` handles blades, traps, auras, gear damage, shadow pips, criticals and pierce. Use it before a raid instead of arguing about the number afterwards."
            },
            {
                "type": "text",
                "text": "`/item` looks up gear, `/levelscale` shows an item at another level, and `/statcaps find` looks up a school's stat caps."
            },
            {
                "type": "heading",
                "text": "Decks"
            },
            {
                "type": "text",
                "text": "Save a deck with `/decks create`, find it again with `/decks browse` or `/decks search`, and share it with `/decks share` or an export code. `/deck show` opens a code someone sends you."
            },
            {
                "type": "text",
                "text": "Pets, spells, Team-Ups, tapestries, Beastmoon, Treasure Card values, boss strategies and raid recaps each have their own guide under **Wizard101**."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/damage",
                        "desc": "Open the damage assistant and work out a hit before the raid."
                    },
                    {
                        "cmd": "/item [name]",
                        "desc": "Look up a piece of gear and its stats, school requirement and drops."
                    },
                    {
                        "cmd": "/levelscale [item] [level]",
                        "desc": "See what a piece of gear's stats are at a lower level."
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
                    },
                    {
                        "cmd": "/decks create",
                        "desc": "Build a deck card by card. Needs the deck editor role."
                    },
                    {
                        "cmd": "/decks browse",
                        "desc": "Browse the decks other members saved on this server."
                    },
                    {
                        "cmd": "/decks search [query]",
                        "desc": "Search saved decks by school, the boss they answer, or the cards in them."
                    },
                    {
                        "cmd": "/decks share [deck] [user]",
                        "desc": "Send a saved deck to a teammate as a DM."
                    },
                    {
                        "cmd": "/decks export [deck]",
                        "desc": "Get a picture of a saved deck to post or share."
                    },
                    {
                        "cmd": "/deck show [code]",
                        "desc": "Open a deck from the code someone sent you."
                    },
                    {
                        "cmd": "/deck lookup [code]",
                        "desc": "Find a deck by the code someone gave you."
                    }
                ]
            }
        ]
    },
    {
        "id": "beastmoon",
        "icon": "ph-paw-print",
        "title": "W101: Beastmoon Hunt",
        "subtitle": "Track your Beastmoon forms and see how close the next tier is.",
        "content": [
            {
                "type": "text",
                "text": "SeanBot keeps your form tiers and estimates the Lunari and Idol cost to reach Tier 5. When you reach a new tier, it can announce it in a channel you choose."
            },
            {
                "type": "steps",
                "items": [
                    "Run `/bm log_channel` to pick the announcement channel.",
                    "Add a form with `/bm add`, or use `/bm quick_add` for a form, school and tier in one go.",
                    "Check `/bm stats` for progress or `/bm leaderboard` to compare with the server."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/bm stats",
                        "desc": "Browse every Beastmoon form with its spells and stats."
                    },
                    {
                        "cmd": "/bm add",
                        "desc": "Add a form you have, one step at a time."
                    },
                    {
                        "cmd": "/bm quick_add [form] [school] [tier]",
                        "desc": "Set a form's tier, with autocomplete."
                    },
                    {
                        "cmd": "/bm check",
                        "desc": "See how far you are from Tier 5, in Lunari and Idols."
                    },
                    {
                        "cmd": "/bm forms",
                        "desc": "Show your forms and the tiers you have unlocked."
                    },
                    {
                        "cmd": "/bm leaderboard",
                        "desc": "View top Beastmoon players in your server or cross-server network."
                    },
                    {
                        "cmd": "/bm max",
                        "desc": "List the players who have every form at Tier 5."
                    },
                    {
                        "cmd": "/bm log_channel [channel]",
                        "desc": "Pick the channel where level-ups get announced."
                    },
                    {
                        "cmd": "/bm redeem [code]",
                        "desc": "Pull in the upgrades you entered on the dashboard."
                    },
                    {
                        "cmd": "/bm forms_alt",
                        "desc": "Show the forms saved on your alt profile."
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
        "subtitle": "Save a raid's result after it ends, so the guild can look it up later.",
        "content": [
            {
                "type": "text",
                "text": "Log the result, the keys used, who hosted, any school swaps, and who saw the wipe. Together they make up the guild's raid and activity record."
            },
            {
                "type": "steps",
                "items": [
                    "Run `/w101 set_roster_channel` to pick the recap channel.",
                    "Make sure event staff can use the W101 commands there.",
                    "Record a test result and check it appears where you expect."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
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
        "subtitle": "Look up hatching details before you spend the snacks.",
        "content": [
            {
                "type": "text",
                "text": "`/pet lookup` takes a pet name and returns the hatching information SeanBot has for it."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/pet lookup [query]",
                        "desc": "Look up a pet by name."
                    }
                ]
            }
        ]
    },
    {
        "id": "spells",
        "icon": "ph-book-open-text",
        "title": "W101: Spell Tome Database",
        "subtitle": "Find a spell by name or school, with its card art.",
        "content": [
            {
                "type": "text",
                "text": "`/spell` searches the spell tome and returns every match. Card art is included where it is available, which helps when explaining a mechanic to a newer player."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/spell [query]",
                        "desc": "Find a spell by name, or pick a school from the list."
                    }
                ]
            }
        ]
    },
    {
        "id": "teamup_w101",
        "icon": "ph-users-four",
        "title": "W101: Dungeon Team-Ups",
        "subtitle": "A dungeon board that fills as people join, so nobody has to count who is coming.",
        "content": [
            {
                "type": "text",
                "text": "Post a Team-Up for Waterworks, Darkmoor or a raid. Members join with one press and pick their school; when the team is full, SeanBot makes a voice channel and tells everyone where to go."
            },
            {
                "type": "steps",
                "items": [
                    "Run `/teamup channel` for the board channel.",
                    "Run `/teamup role` for the role to ping about new teams.",
                    "Run `/teamup create`, or `/teamup quick` for the usual dungeon and player count."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/teamup create",
                        "desc": "Open a form to post a Team-Up for a dungeon."
                    },
                    {
                        "cmd": "/teamup quick [dungeon] [required players]",
                        "desc": "Post a Team-Up request for a specific dungeon."
                    },
                    {
                        "cmd": "/teamup list",
                        "desc": "List every Team-Up still looking for players."
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
                        "desc": "Set the channel where Team-Up boards are posted."
                    },
                    {
                        "cmd": "/teamup role [role]",
                        "desc": "Set the role pinged when a new run is posted."
                    }
                ]
            }
        ]
    },
    {
        "id": "value_reagent",
        "icon": "ph-coins",
        "title": "W101: Treasure Card Values",
        "subtitle": "Check what a Treasure Card is worth before you trade it away.",
        "content": [
            {
                "type": "text",
                "text": "`/value tc` looks up a Treasure Card in the community value list your server uses. It works on a partial name."
            },
            {
                "type": "commands",
                "title": "Commands",
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
        "subtitle": "Boss notes that live in Discord, so nobody alt-tabs to a wiki mid-run.",
        "content": [
            {
                "type": "text",
                "text": "Keep a cheat sheet for each boss: what it does, the blade order, where to stand, and the mistakes that end a run. Pull it up while the raid is forming."
            },
            {
                "type": "text",
                "text": "Add one with `/strategy add`, import a file with `/strategy import`, and check the list with `/strategy list`. Give event staff edit access and leave everyone else able to read."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/strategy list",
                        "desc": "List the boss guides this server has saved."
                    },
                    {
                        "cmd": "/strategy add [boss_name] [guide_text]",
                        "desc": "Save a boss cheat sheet: what it does, the order, where to stand."
                    },
                    {
                        "cmd": "/strategy import [json_file]",
                        "desc": "Import boss notes from a file."
                    },
                    {
                        "cmd": "/strategy delete [boss_name]",
                        "desc": "Delete a boss guide that is out of date."
                    }
                ]
            }
        ]
    },
    {
        "id": "tapestry",
        "icon": "ph-map-trifold",
        "title": "W101: House Tapestries",
        "subtitle": "A personal checklist for house tapestries and bobbleheads.",
        "content": [
            {
                "type": "text",
                "text": "`/tapestry list` shows your checklist, and `/tapestry set` ticks an item off. The bobblehead commands work the same way. It saves opening a spreadsheet every time a new decoration appears."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/tapestry list",
                        "desc": "Show your tapestry checklist."
                    },
                    {
                        "cmd": "/tapestry set [name] [status]",
                        "desc": "Tick a tapestry off, or untick it."
                    },
                    {
                        "cmd": "/bobblehead list",
                        "desc": "Show the bobbleheads on your list."
                    },
                    {
                        "cmd": "/bobblehead set [name] [status]",
                        "desc": "Tick a bobblehead off, or untick it."
                    }
                ]
            }
        ]
    },
    {
        "id": "wizard_info",
        "icon": "ph-user-list",
        "title": "W101: Wizard Registry",
        "subtitle": "All your members' wizards in one list, with a guild summary. VIP servers only.",
        "content": [
            {
                "type": "callout",
                "variant": "warning",
                "title": "VIP servers only",
                "text": "The Wizard Registry is switched on for VIP servers. Ask in Discord if you want it on yours."
            },
            {
                "type": "heading",
                "text": "What it holds"
            },
            {
                "type": "text",
                "text": "Members add their own wizard names, schools, levels, badges and guild join dates. The list also shows who is still in the guild, so it stays current without a moderator chasing people."
            },
            {
                "type": "text",
                "text": "One wizard per line is enough: `Sean IronStone death 170`. A line copied from the game also works. Anything SeanBot cannot read is reported back rather than dropped."
            },
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Open **Wizard Config** and turn on member self-service.",
                    "Pick a channel and press **Post panel**.",
                    "Run `/wizard unregistered` to see who has not added anything, and `/wizard remind` to DM them."
                ]
            },
            {
                "type": "heading",
                "text": "Claims and guild stats"
            },
            {
                "type": "text",
                "text": "`/wizard claim` lets a member take an unregistered wizard. Staff work the queue with `/wizard unassigned` and `/wizard assign`."
            },
            {
                "type": "text",
                "text": "`/wizard statspanel` keeps a live guild summary in a channel: members, the school split, and how many are at the level cap."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                    },
                    {
                        "cmd": "/wizard claim",
                        "desc": "Claim the unassigned wizards that are yours."
                    },
                    {
                        "cmd": "/wizard claimpanel [channel]",
                        "desc": "Post the panel members press to claim their own wizards."
                    },
                    {
                        "cmd": "/wizard claims",
                        "desc": "Review the wizard claims waiting on a moderator."
                    },
                    {
                        "cmd": "/wizard badges [channel] [badge]",
                        "desc": "Post who holds each guild badge, grouped by badge."
                    },
                    {
                        "cmd": "/wizard statspanel [channel]",
                        "desc": "Post or refresh a guild stats panel in a channel."
                    },
                    {
                        "cmd": "/wizard guildstats",
                        "desc": "Show the latest recruit report: how long members have been in the in-game guild, and the guild's wizards by school."
                    }
                ]
            }
        ]
    },
    {
        "id": "server_admin",
        "icon": "ph-wrench",
        "title": "Server Administration Helpers",
        "subtitle": "Roles, channels and messages handled from inside Discord.",
        "content": [
            {
                "type": "heading",
                "text": "Before you use these"
            },
            {
                "type": "list",
                "items": [
                    "Put SeanBot above every role it has to create, edit or delete.",
                    "The person running the command needs permission to manage the target role.",
                    "Keep logs on, so a change can be traced afterwards."
                ]
            },
            {
                "type": "heading",
                "text": "What you can do"
            },
            {
                "type": "text",
                "text": "`/serveradmin modules` shows what is on. `/serveradmin module` changes one. Commands also cover roles, member roles, bulk role changes, channels, moderator lists and posting a message as SeanBot. They are for quick fixes when opening the dashboard is slower than typing."
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
                        "desc": "Change a role's name, color, display style, or whether it can be mentioned."
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
                        "cmd": "/serveradmin bulkrole [action] [role] [source] [include_bots]",
                        "desc": "Preview, then add or remove one role for every member a filter names."
                    },
                    {
                        "cmd": "/serveradmin editchannel [channel]",
                        "desc": "Edit a text channel's name, topic, age-restricted setting, or slowmode."
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
        "id": "verification",
        "icon": "ph-seal-check",
        "title": "Verification",
        "subtitle": "Hold new members at the door until they prove they are real.",
        "content": [
            {
                "type": "callout",
                "variant": "tip",
                "title": "Only new members are held",
                "text": "Turning Verification on does not hold anyone who is already in the server. It applies to people who join after it is on, so you can set it up without locking out your community."
            },
            {
                "type": "text",
                "text": "New members stay in their current roles until they pass. Choose a button, a question or a picture code, then the roles that unlock the server and the number of tries."
            },
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Create a channel such as `#verify` that new members can see and SeanBot can post in.",
                    "Put the roles you want to grant below the SeanBot role.",
                    "Run `/verification setup` with the channel and method, then `/verification role add` for each role.",
                    "Run `/verification status` to confirm what is in use."
                ]
            },
            {
                "type": "heading",
                "text": "Good to know"
            },
            {
                "type": "list",
                "items": [
                    "A minimum account age and a profile picture requirement can turn away fresh or empty accounts. Both are off by default.",
                    "**Send new members to review** holds people for staff approval instead. Approve, deny, kick or ban with one button, from Discord or the dashboard.",
                    "Deny keeps the member in the server without the verification roles. It is not a kick.",
                    "If someone is stuck, ask them to run `/verification verify` or verify them by hand with `/verification member`."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/verification setup [channel] [method]",
                        "desc": "Turn the gate on, post prompts in that channel, and choose button, question or picture code."
                    },
                    {
                        "cmd": "/verification rules [min_age_days] [require_avatar] [attempts] [kick_minutes]",
                        "desc": "Set the account age floor, the avatar check, the attempt limit and the kick timer."
                    },
                    {
                        "cmd": "/verification question [question] [answers]",
                        "desc": "Set the question and the accepted answers, separated by a pipe character."
                    },
                    {
                        "cmd": "/verification role add [role]",
                        "desc": "Grant one more role when a member passes."
                    },
                    {
                        "cmd": "/verification role remove [role]",
                        "desc": "Stop granting a role on verification."
                    },
                    {
                        "cmd": "/verification role list",
                        "desc": "List the roles currently granted on verification."
                    },
                    {
                        "cmd": "/verification member [member]",
                        "desc": "Verify one member by hand, skipping the prompt."
                    },
                    {
                        "cmd": "/verification status",
                        "desc": "Show the settings the bot is using, including the review queue and log channels."
                    },
                    {
                        "cmd": "/verification disable",
                        "desc": "Turn the gate off without deleting its settings."
                    },
                    {
                        "cmd": "/verification verify",
                        "desc": "Get the verify button again, privately, for yourself."
                    }
                ]
            }
        ]
    },
    {
        "id": "antiraid",
        "icon": "ph-shield-warning",
        "title": "Anti-Raid & Server Risk Score",
        "subtitle": "Catch raids, scam links and suspicious webhooks before they reach your members.",
        "content": [
            {
                "type": "text",
                "text": "Anti-Raid starts on. It watches joins, mentions, invites, links and webhooks, and gives the server a risk score you can watch climb."
            },
            {
                "type": "heading",
                "text": "Tune it"
            },
            {
                "type": "steps",
                "items": [
                    "Pick trusted roles, safe domains and an alert channel.",
                    "Choose a quarantine role and place it below SeanBot.",
                    "Turn on **Canary** mode, which logs detections without punishing anyone.",
                    "Run `/antiraid audit` and `/antiraid simulate`, then raise enforcement when the output looks right."
                ]
            },
            {
                "type": "heading",
                "text": "When something gets through"
            },
            {
                "type": "text",
                "text": "`/antiraid pause` stops enforcement for a set number of minutes. `/antiraid unquarantine` releases a member you have checked, and `/antiraid threatlist` shows what is currently flagged."
            },
            {
                "type": "heading",
                "text": "Everyday filters and the Mind"
            },
            {
                "type": "text",
                "text": "Blocked words, caps floods, emoji floods and invite ads are all opt-in. The Mind is a rule-based learner, not AI: it remembers every catch and correction, forgets stale lessons over 30 days, and loosens only the filter that keeps misfiring. Check `/automod mind`, teach with `/automod teach`, pause tuning with `/automod learn off`, and clear lessons with `/automod forget`."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/antiraid dashboard",
                        "desc": "Display live threat indicators, multipliers, and active security rules."
                    },
                    {
                        "cmd": "/antiraid audit",
                        "desc": "Run a security check for risky role positions."
                    },
                    {
                        "cmd": "/antiraid canary [state]",
                        "desc": "Toggle Silent Canary Mode (log threats without taking action)."
                    },
                    {
                        "cmd": "/antiraid register_scam [image] [message]",
                        "desc": "Register scam images so they are blocked on sight: upload the files, or paste a message link and the bot remembers that picture, including later crops and screenshots of it."
                    },
                    {
                        "cmd": "/antiraid unregister_scam [hash]",
                        "desc": "Stop blocking an image that was registered by mistake."
                    },
                    {
                        "cmd": "/antiraid scam_list [recover] [days]",
                        "desc": "See the images being blocked, or rebuild the list from past catches."
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
                        "desc": "Put the anti-raid settings back to their defaults."
                    },
                    {
                        "cmd": "/antiraid multiplier [channel|role] [multiplier]",
                        "desc": "Set the risk multiplier for a busy channel or a role."
                    },
                    {
                        "cmd": "/antiraid channelsensitivity [channel]",
                        "desc": "Set how strictly one channel is watched."
                    },
                    {
                        "cmd": "/antiraid advanced",
                        "desc": "Choose what a risk score triggers, including automatic bans."
                    },
                    {
                        "cmd": "/automod status",
                        "desc": "Show which everyday filters are on, with learning totals."
                    },
                    {
                        "cmd": "/automod mind",
                        "desc": "Meet the Mind: mood, precision per filter, and most-corrected word."
                    },
                    {
                        "cmd": "/automod teach <kind> <value>",
                        "desc": "Fix a wrong AutoMod call: allow_word, block_word, allow_domain or false_positive."
                    },
                    {
                        "cmd": "/automod learn <on|off>",
                        "desc": "Stop the loosening, but keep recording lessons."
                    },
                    {
                        "cmd": "/automod forget",
                        "desc": "Clear every lesson. Your own filters stay."
                    }
                ]
            }
        ]
    },
    {
        "id": "moderation",
        "icon": "ph-gavel",
        "title": "Moderation",
        "subtitle": "Warnings, timeouts, kicks and bans, each with a reason and a line in the log.",
        "content": [
            {
                "type": "text",
                "text": "Every action takes a reason and leaves a record. Softban removes a member and their recent messages while leaving the door open; shadowban hides the account without a visible ban; `/lock` stops a channel while you clean up."
            },
            {
                "type": "heading",
                "text": "Before staff start"
            },
            {
                "type": "list",
                "items": [
                    "Put SeanBot above every role it has to moderate.",
                    "Give staff the permissions each action needs, not Administrator.",
                    "Turn on moderation logs and dashboard-action logs first."
                ]
            },
            {
                "type": "text",
                "text": "Discord will not let SeanBot act on a member above its own role. Check the role order, and use `/staff diagnose` to check its permissions."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/kick [member] [reason]",
                        "desc": "Kick a member, with a DM and a line in the audit log."
                    },
                    {
                        "cmd": "/ban [user] [reason]",
                        "desc": "Ban a member and DM them the appeal link."
                    },
                    {
                        "cmd": "/unban [user_id] [reason]",
                        "desc": "Unban a member by their Discord user ID."
                    },
                    {
                        "cmd": "/softban [user] [days]",
                        "desc": "Softban: ban, then unban, to clear recent messages."
                    },
                    {
                        "cmd": "/shadowban [user_id]",
                        "desc": "Ban a user ID before they ever join."
                    },
                    {
                        "cmd": "/nick [member] [nickname]",
                        "desc": "Change a member's nickname, or clear it."
                    },
                    {
                        "cmd": "/timeout [member] [duration]",
                        "desc": "Apply a timeout (1 minute to 28 days)."
                    },
                    {
                        "cmd": "/untimeout [member]",
                        "desc": "Take a timeout off."
                    },
                    {
                        "cmd": "/purgetimeout [duration]",
                        "desc": "Clear the recent messages of everyone in timeout."
                    },
                    {
                        "cmd": "/purge [amount]",
                        "desc": "Delete recent messages in this channel."
                    },
                    {
                        "cmd": "/lock [channel] [reason]",
                        "desc": "Lock a channel so only staff can talk."
                    },
                    {
                        "cmd": "/archive create [limit]",
                        "desc": "Save a transcript of the last messages in this channel."
                    },
                    {
                        "cmd": "/archive get [id]",
                        "desc": "Open a transcript you saved earlier."
                    },
                    {
                        "cmd": "/staff clean [amount]",
                        "desc": "Remove SeanBot's own messages from the recent ones."
                    },
                    {
                        "cmd": "/staff unlock [channel]",
                        "desc": "Unlock a channel."
                    },
                    {
                        "cmd": "/staff locked",
                        "desc": "List the locked channels, 50 at a time."
                    },
                    {
                        "cmd": "/staff slowmode [seconds]",
                        "desc": "Set the channel's slowmode."
                    },
                    {
                        "cmd": "/staff members [role]",
                        "desc": "List the members holding a role, 40 at a time."
                    },
                    {
                        "cmd": "/staff timeouts",
                        "desc": "List the members in timeout, 40 at a time."
                    }
                ]
            }
        ]
    },
    {
        "id": "warn_cog",
        "icon": "ph-warning-octagon",
        "title": "Warnings & Points",
        "subtitle": "Warnings with points, so a pattern is visible before it becomes a ban.",
        "content": [
            {
                "type": "text",
                "text": "Each warning keeps its reason, the staff member and the date. You can read the list back in a review instead of hunting through channel history."
            },
            {
                "type": "steps",
                "items": [
                    "Check that Warnings and Logging are on.",
                    "Use `/modpreset set` for the reasons staff use most, so the wording stays consistent.",
                    "Test `/warn add` on a staff account, check `/warn list`, then clear it."
                ]
            },
            {
                "type": "text",
                "text": "Escalation fires when points cross the thresholds you set. `/staff points` shows where a member stands, and `/staff logs` shows their history."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/warn add [member] [reason] [points]",
                        "desc": "Warn a member and add points."
                    },
                    {
                        "cmd": "/warn list [member]",
                        "desc": "Show a member's warnings and their points."
                    },
                    {
                        "cmd": "/warn clear [member]",
                        "desc": "Clear a member's warnings and points."
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
                        "cmd": "/staff points [user]",
                        "desc": "Show how many points a member has."
                    },
                    {
                        "cmd": "/staff logs [user]",
                        "desc": "Show everything staff have warned a member about."
                    }
                ]
            }
        ]
    },
    {
        "id": "votemute",
        "icon": "ph-hammer",
        "title": "Vote Mutes",
        "subtitle": "Let the server vote to time a member out, and set the numbers a vote runs on.",
        "content": [
            {
                "type": "text",
                "text": "A member starts a vote with the trigger emoji on a card, or with `/votemute start`. The bot posts a vote card and members add the vote emoji to sign. The target cannot sign their own card, and each member gets one signature. When the window closes, enough signatures time the target out."
            },
            {
                "type": "text",
                "text": "The number needed is the larger of the configured floor and the share of eligible members present. Eligible means online, not a bot, and allowed to vote. The mute length follows a ladder: a target with no recent vote mute gets the first rung, and repeat votes inside 24 hours move one rung up. Past the last rung the length stays there."
            },
            {
                "type": "text",
                "text": "Voter roles may sign, and an empty list lets everyone sign. Starter roles may open a vote, and an empty list lets everyone open one. Immune roles can never be the target, which is where staff roles belong. Cards, results and mutes can post to a log channel of their own."
            },
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Open **Vote Mutes** and switch the feature on.",
                    "Set the floor, the share of eligible members present, the vote window, the cooldown and the ladder.",
                    "Pick voter, starter and immune roles.",
                    "Run one vote on a staff account, then cancel it, before the server needs the feature."
                ]
            },
            {
                "type": "text",
                "text": "The dashboard saves the same settings document as `/votemute settings`, so either surface changes the other. A vote record names who signed and when; `/votemute audit` opens it privately, and `/votemute export` sends the same rows as a CSV file."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/votemute start [member] [mode] [reason]",
                        "desc": "Open a text or voice vote mute."
                    },
                    {
                        "cmd": "/votemute",
                        "desc": "Show open votes and when the next one may start."
                    },
                    {
                        "cmd": "/votemute cancel [member]",
                        "desc": "Cancel an open vote."
                    },
                    {
                        "cmd": "/votemute history [member]",
                        "desc": "Read recent vote mutes, newest first."
                    },
                    {
                        "cmd": "/votemute audit [vote_id]",
                        "desc": "Read a vote's ballot record privately."
                    },
                    {
                        "cmd": "/votemute export [query]",
                        "desc": "Send the vote audit as a private CSV file."
                    },
                    {
                        "cmd": "/votemute settings",
                        "desc": "Show every vote mute setting."
                    }
                ]
            }
        ]
    },
    {
        "id": "config_tools",
        "icon": "ph-heartbeat",
        "title": "Config Health, History & Server Safety",
        "subtitle": "Check broken references, keep a copy of the settings, change one role in bulk, and audit who holds Administrator.",
        "content": [
            {
                "type": "text",
                "text": "Four administrator pages keep the server's settings from drifting silently. All four are dashboard pages; none needs a command to open."
            },
            {
                "type": "heading",
                "text": "Config Health"
            },
            {
                "type": "text",
                "text": "Config Health reads every channel and role a feature points at, then lists the references that no longer resolve or that the bot cannot see. Each area has its own card: open the page that owns the setting, or repair the whole area at once. A repair points every broken reference in that area at one replacement channel or role. The bot records what each setting pointed at before it changes, so Config History can put that back."
            },
            {
                "type": "heading",
                "text": "Config History"
            },
            {
                "type": "text",
                "text": "Config History stores a copy of the whole settings document: every module's saved channels, roles and switches, and nothing about messages, logs or members. Give a copy a label before a bulk change. Restoring a copy shows what would change, one setting per row, before anything is written. A server keeps 20 snapshots; the oldest is dropped first. A Config Health repair writes its own undo record, which can be restored once."
            },
            {
                "type": "heading",
                "text": "Bulk Role Changes"
            },
            {
                "type": "text",
                "text": "Bulk Role Changes adds or removes one role for every member a filter names. Pick the role, an optional role that members must already hold, and whether bot accounts count. **Preview** shows exactly who would change; **Run it** is the only button that writes. One run changes at most 500 members and refuses outright when more match, so narrow the filter instead of running it twice. The plan is rebuilt at confirm time, a single failure does not stop the rest, and roles above the bot's own role are marked out of reach. Every run is recorded in the page's history and the server's log channel, with who ran it."
            },
            {
                "type": "heading",
                "text": "Permission Audit"
            },
            {
                "type": "text",
                "text": "Permission Audit reports who holds Administrator directly or through a role, what @everyone grants, and which roles sit out of reach. Findings are grouped by severity. Two fixes are offered where the bot can carry them out: move an Administrator role off its members, or remove a dangerous grant from @everyone. Each fix previews the change before it is applied, and the audit keeps a record of recent fixes."
            },
            {
                "type": "text",
                "text": "The four pages are administrator-only. Server Access cannot grant them to another role, because each one can change settings for the whole server. `/serveradmin bulkrole` opens the same preview for a bulk role change from Discord."
            }
        ]
    },
    {
        "id": "logging",
        "icon": "ph-file-text",
        "title": "Audit Logs & Quarantine, Server Logs",
        "subtitle": "Every edit, deletion, join, leave and moderation action, in the channel you choose.",
        "content": [
            {
                "type": "text",
                "text": "Forward everything to one channel, or split moderation, security, member, voice and staff events. The **Server Logs** page keeps a dated, searchable copy on the dashboard, so a moderator can read back last Tuesday without scrolling Discord."
            },
            {
                "type": "text",
                "text": "Soundboard sounds that are added, edited or deleted are logged with the person who changed them. Members who sign up for or leave a scheduled event are logged. So are changes to who can use an app command."
            },
            {
                "type": "heading",
                "text": "Logging changes are logged too"
            },
            {
                "type": "text",
                "text": "Turning a category off is recorded, with who did it and what moved. `/log reset` brings every event back on, and `/log status` shows what is on right now."
            },
            {
                "type": "heading",
                "text": "Quarantine"
            },
            {
                "type": "text",
                "text": "Quarantine is the step between a warning and a ban. The member gets a role that hides the server, and their old roles are saved for release. The **Quarantine** page creates the role, sets the timeout after capture, and lists everyone waiting for review."
            },
            {
                "type": "heading",
                "text": "Check it"
            },
            {
                "type": "text",
                "text": "Make one harmless dashboard change and run one test command. If nothing lands, check that the module is on and the channel is not muted in Log Config."
            },
            {
                "type": "heading",
                "text": "Follow one message or member"
            },
            {
                "type": "text",
                "text": "A watched message keeps its reaction events after it leaves Discord's cache, which is useful for a pinned announcement or a poll people react to for days. A watched member gets a post for each presence change, with the state before and after, the activity they were showing and a timestamp. Both lists are opt-in and saved, so a restart keeps them; a restart also reports the presence moves it slept through instead of adopting them silently."
            },
            {
                "type": "text",
                "text": "Automatic watching can follow a channel's newest pins and starboard posts, or every new member for a set number of days. Both automatic sources are off by default, so an upgrade never starts watching a server that did not ask."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/log watch_reaction [message]",
                        "desc": "Keep logging reactions on one message, even after it leaves the cache."
                    },
                    {
                        "cmd": "/log unwatch_reaction [message]",
                        "desc": "Stop watching one message for reaction logging."
                    },
                    {
                        "cmd": "/log watch_reaction_list",
                        "desc": "List the messages watched for reactions."
                    },
                    {
                        "cmd": "/log watch_reaction_auto [scope]",
                        "desc": "Follow pins, starboard posts, both, or turn automatic watching off."
                    },
                    {
                        "cmd": "/log watch_presence [member]",
                        "desc": "Log one member's presence changes."
                    },
                    {
                        "cmd": "/log unwatch_presence [member]",
                        "desc": "Stop logging one member's presence changes."
                    },
                    {
                        "cmd": "/log watch_presence_list",
                        "desc": "List the members watched for presence changes."
                    },
                    {
                        "cmd": "/log watch_presence_auto [scope] [days]",
                        "desc": "Follow new members for 1 to 30 days, or turn the rule off."
                    },
                    {
                        "cmd": "/log webhook [url] [type]",
                        "desc": "Set a webhook for audit events and send a test through it."
                    },
                    {
                        "cmd": "/log toggle [log_type]",
                        "desc": "Turn logging on or off for one event."
                    },
                    {
                        "cmd": "/log toggle_batch [type] [state]",
                        "desc": "Turn several event categories on or off together."
                    },
                    {
                        "cmd": "/log ignore_reaction_add [emoji]",
                        "desc": "Keep a reaction emoji out of the logs."
                    },
                    {
                        "cmd": "/log ignore_log_add [channel]",
                        "desc": "Leave a busy channel out of the logs."
                    },
                    {
                        "cmd": "/log status",
                        "desc": "See the webhooks, events and channel filters in use."
                    },
                    {
                        "cmd": "/log metrics",
                        "desc": "See how fast the log pipeline is keeping up."
                    },
                    {
                        "cmd": "/log reset",
                        "desc": "Put the logging settings back to their defaults."
                    }
                ]
            }
        ]
    },
    {
        "id": "last_message_lookup",
        "icon": "ph-clock-counter-clockwise",
        "title": "Last Message Lookup",
        "subtitle": "See when a member last spoke, without keeping a copy of what they said.",
        "content": [
            {
                "type": "text",
                "text": "SeanBot keeps only the newest message per member: a timestamp, the channel, a link, and the name and avatar. The text is never stored."
            },
            {
                "type": "heading",
                "text": "Look someone up"
            },
            {
                "type": "steps",
                "items": [
                    "Open **Last Message Lookup** in the dashboard.",
                    "Search by display name, username or user ID.",
                    "Read the relative time, the exact local time, and whether the person is still in the server."
                ]
            },
            {
                "type": "callout",
                "variant": "warning",
                "title": "Not a message archive",
                "text": "If a report needs the words, use Discord search or a transcript. This only records when the member last spoke."
            },
            {
                "type": "text",
                "text": "Turn it on in **Module Manager**. To let moderators open the page, grant it in **Server Access**. Only messages sent while the tracker is on are recorded."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/lastmessage user:@member",
                        "desc": "Show how long ago the member's newest recorded message was, with a jump link."
                    },
                    {
                        "cmd": "!lastmessage @member",
                        "desc": "The text form, using this server's prefix."
                    }
                ]
            }
        ]
    },
    {
        "id": "ban_relay",
        "icon": "ph-paper-plane-tilt",
        "title": "Ban Relay & Mod Feed",
        "subtitle": "When another bot bans someone, SeanBot tells them how to appeal and keeps the action in one feed.",
        "content": [
            {
                "type": "text",
                "text": "Ban Relay reads the audit log, so it works with Carl-bot, MEE6, Dyno, a manual ban, or anything else that writes an entry. It DMs the banned member the same appeal message SeanBot uses, and records the action in the mod feed."
            },
            {
                "type": "list",
                "items": [
                    "Kicks and timeouts from other bots land in the feed and are saved for the dashboard.",
                    "If the member has DMs closed, staff get a notice so they know the person was never told.",
                    "Four actions from one account in 30 seconds count as a burst: appeal DMs pause and one summary notice is posted instead."
                ]
            },
            {
                "type": "callout",
                "variant": "warning",
                "title": "Check the first ban",
                "text": "Ban Relay DMs the banned member. After you enable it, watch the first ban to make sure the message arrives and the action shows in the feed."
            },
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Give SeanBot View Audit Log.",
                    "Open **Ban Relay** and choose the feed channel.",
                    "Turn it on and leave kick and timeout logging on unless member logs already cover them."
                ]
            },
            {
                "type": "text",
                "text": "Review appeals on the **Ban Appeals** page. The Appeals & Suggestions guide has the rest."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/banrelay show",
                        "desc": "Show the relay status, feed channel, threshold, and logging switches."
                    },
                    {
                        "cmd": "/banrelay enable",
                        "desc": "Turn the appeal DM relay and the mod feed on."
                    },
                    {
                        "cmd": "/banrelay disable",
                        "desc": "Turn both off. SeanBot's own actions and logs are unaffected."
                    },
                    {
                        "cmd": "/banrelay logchannel channel:#mod-log",
                        "desc": "Set the feed channel."
                    },
                    {
                        "cmd": "/banrelay logchannel",
                        "desc": "Clear the feed channel."
                    },
                    {
                        "cmd": "/banrelay masslimit limit:4",
                        "desc": "Set the burst threshold in actions per 30 seconds. 0 turns burst handling off."
                    },
                    {
                        "cmd": "/banrelay kicks enabled:true",
                        "desc": "Log kicks by other bots and staff to the feed."
                    },
                    {
                        "cmd": "/banrelay timeouts enabled:true",
                        "desc": "Log timeouts by other bots and staff to the feed."
                    }
                ]
            }
        ]
    },
    {
        "id": "staff_tools",
        "icon": "ph-wrench",
        "title": "Appeals & Suggestions",
        "subtitle": "Ban appeals and suggestions each get a page of their own, instead of a thread nobody can find again.",
        "content": [
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Open **Ban Appeals** and pick the private review channel.",
                    "Add notification roles if a ping should go out when an appeal arrives.",
                    "Open **Suggestions** and pick where ideas are posted.",
                    "Send one test appeal and one test suggestion."
                ]
            },
            {
                "type": "text",
                "text": "Reviewers approve, deny or ask a question with buttons, and an approval can unban the member. Suggestion votes and staff answers stay on the page."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "File an appeal."
                    },
                    {
                        "cmd": "/appeals list",
                        "desc": "See the appeals waiting on staff."
                    },
                    {
                        "cmd": "/appeals view [id]",
                        "desc": "Open one appeal: what the member said, and their history."
                    },
                    {
                        "cmd": "/appeals close [id] [action]",
                        "desc": "Approve or deny an appeal. An approval unbans the member."
                    },
                    {
                        "cmd": "/suggestion setup [channel]",
                        "desc": "Pick the channel where suggestions are posted."
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
                        "desc": "Set a suggestion to Approved, Denied or In Progress."
                    }
                ]
            }
        ]
    },
    {
        "id": "invites",
        "icon": "ph-link-simple",
        "title": "Invite Links",
        "subtitle": "Create an invite, attach a reward, and see who came through it.",
        "content": [
            {
                "type": "steps",
                "items": [
                    "Turn on **Invite Links** in Module Settings.",
                    "Give SeanBot Manage Server, which it needs to list and track invites.",
                    "Open **Invite Links** to see every active invite, its uses and its expiry."
                ]
            },
            {
                "type": "heading",
                "text": "Perks"
            },
            {
                "type": "list",
                "items": [
                    "Up to ten reward roles below SeanBot, each removable after 1 to 365 days.",
                    "A welcome DM and a channel message for people who join through that link.",
                    "A nickname template, such as `[{invite}] {name}`."
                ]
            },
            {
                "type": "heading",
                "text": "Joins and alerts"
            },
            {
                "type": "text",
                "text": "Each invite shows joins for the last week, the previous week and the last 30 days. **Top Inviters** ranks members by tracked joins. Expiry alerts warn staff before a link dies, and join-spike guard can alert or revoke when one link suddenly floods the server."
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "No invites? Check Manage Server",
                "text": "Invite tracking needs Manage Server. Grant it, then refresh the page."
            },
            {
                "type": "commands",
                "title": "Commands",
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
            }
        ]
    },
    {
        "id": "reports",
        "icon": "ph-flag",
        "title": "Member Reports & Public Reports",
        "subtitle": "One press to report a message or a member, without telling the whole channel.",
        "content": [
            {
                "type": "heading",
                "text": "Member reports"
            },
            {
                "type": "text",
                "text": "A member flags a message or a person. Staff get the message, the author and the context; nobody in chat sees it happen."
            },
            {
                "type": "heading",
                "text": "Public vote reports"
            },
            {
                "type": "text",
                "text": "A review card goes to your staff channel with buttons to vote. You choose who may report, vote, review or force a decision, and the approve and decline thresholds."
            },
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Turn on **Public Reports** and choose the review and log channels.",
                    "Choose the roles for each part of the flow.",
                    "Set the thresholds under **Voting & Thresholds**.",
                    "Run one test report through to a decision."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/report [message_link] [reason]",
                        "desc": "Start a vote report from a message link and a reason."
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
                        "desc": "Pick where vote reports are posted for review."
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
                        "desc": "Show where reports go, who votes and who gets pinged."
                    }
                ]
            }
        ]
    },
    {
        "id": "timeping",
        "icon": "ph-clock-countdown",
        "title": "Event Reminders",
        "subtitle": "Event reminders that ping the right role at the right local time, with a sign-up on the same message.",
        "content": [
            {
                "type": "text",
                "text": "Raids, meetings and tournaments all start at a time somebody has to remember. Schedule a reminder by hand, link a Discord event, or let SeanBot watch a channel and read the events posted there."
            },
            {
                "type": "heading",
                "text": "Set the defaults"
            },
            {
                "type": "text",
                "text": "Set the server timezone, reminder intervals, ping target, DM reminders and cleanup time on the **TimePing** page."
            },
            {
                "type": "heading",
                "text": "Then schedule"
            },
            {
                "type": "text",
                "text": "`/timeping native` links a Discord event, `/timeping schedule` creates one, and `/timeping add` attaches a reminder to a message. `/timeping my-events` shows what is coming up."
            },
            {
                "type": "text",
                "text": "Auto-watch can pick up events in a channel without anyone running a command."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/timeping native [event]",
                        "desc": "Link a TimePing alert directly to a native Discord event."
                    },
                    {
                        "cmd": "/timeping schedule [title] [time] [role]",
                        "desc": "Schedule a ping for later, with your own text and images."
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
                        "desc": "Preview when each reminder will fire."
                    },
                    {
                        "cmd": "/timeping defaults set",
                        "desc": "Set the server's default alert settings."
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
                        "desc": "Set the watch emoji, timezone, reminder intervals, who may react, how often it repeats and who gets pinged."
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
        "subtitle": "Members set a timezone once, and every timestamp the bot posts shows in their own time.",
        "content": [
            {
                "type": "heading",
                "text": "For members"
            },
            {
                "type": "text",
                "text": "`/timezone set` saves a zone, `/timezone detect` works it out, and `/timezone compare` shows the same moment in two clocks. `/timezone map` shows who is where."
            },
            {
                "type": "heading",
                "text": "For staff"
            },
            {
                "type": "text",
                "text": "`/timezone suggest-set` suggests a zone and waits for the member to approve it. `/timezone admin-set` is the direct version."
            },
            {
                "type": "text",
                "text": "The dashboard shows coverage, active regions, an optional globe, and a panel members can use to set their own zone. Automatic timezone roles are optional."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "Open the admin view of the timezone map."
                    },
                    {
                        "cmd": "/timezone admin-set [user] [tz]",
                        "desc": "Set a member's timezone for them. Admin only."
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
        "title": "Time Converter",
        "subtitle": "Turn a time somebody typed into a timestamp every reader sees in their own time.",
        "content": [
            {
                "type": "text",
                "text": "Wrap a time in backticks, such as `8 PM EST`, and SeanBot replies with a Discord timestamp. Right-click a message and choose **Apps**, **Convert Time** for the same thing without the backticks."
            },
            {
                "type": "text",
                "text": "When Time Emoji Helpers are on, members can react to a message with a clock to convert a detected time. If a bare time needs the author's timezone and none is saved, SeanBot asks for setup instead of guessing."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "Turn a time somebody typed into a timestamp every reader sees in their own time."
                    }
                ]
            }
        ]
    },
    {
        "id": "events",
        "icon": "ph-hourglass-medium",
        "title": "Live Event Countdowns & Polls",
        "subtitle": "A voice channel whose name is the countdown, so the time left is visible without opening anything.",
        "content": [
            {
                "type": "text",
                "text": "SeanBot creates a channel named after the event and renames it as the clock runs down. About an hour after the end, the channel is removed. The same system can run a poll or a raid sign-up."
            },
            {
                "type": "steps",
                "items": [
                    "Run `/create`.",
                    "Choose a countdown, a poll or a raid sign-up.",
                    "Give it a short name, under 25 characters, and set the time."
                ]
            },
            {
                "type": "text",
                "text": "`/event extend` adds minutes, `/event cancel` stops one, and `/event refresh` forces every active countdown to update. Creating and cancelling need Manage Channels; a forced refresh needs Administrator."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "Delete event and poll history older than the number of days you set."
                    }
                ]
            }
        ]
    },
    {
        "id": "raids",
        "icon": "ph-sword",
        "title": "Raid & Event Organizer",
        "subtitle": "Plan a raid in one panel, post it, and let everyone claim a seat in their own timezone.",
        "content": [
            {
                "type": "text",
                "text": "Two kinds of signup live here. `/raid create` plans a raid: roles with a fixed number of seats, a waitlist when a role fills, a minimum to run, and a reminder before the start. `/raid wizard101 signup` is the class sheet: the roles are Tank, Healer, Damage and so on, and whoever reacts takes a slot."
            },
            {
                "type": "heading",
                "text": "Make a raid in one pass"
            },
            {
                "type": "steps",
                "items": [
                    "Run `/raid create`. The panel opens on **Details**, with the board drawn underneath - the same embed that will be posted.",
                    "Fill in what matters and skip the rest. A title, a date and one role are enough to publish.",
                    "On **Roster**, pick a size - 10, 20 or 40 player - and the roles arrive with their seats: `Tank x2 | Healer x4 | Damage x10 | Support x4`.",
                    "Press **Publish raid** to post it, or **Save draft** to finish later with `/raid drafts`."
                ]
            },
            {
                "type": "text",
                "text": "The preview is the board, not a summary of it. Every change redraws it, so there is nothing to picture and nothing to fix after posting."
            },
            {
                "type": "heading",
                "text": "The five sections"
            },
            {
                "type": "list",
                "items": [
                    "**Details** - name, description, date and time in your timezone, how long the raid runs, and a banner. Paste an image URL or type a built-in number, 1 to 3.",
                    "**Roster** - a size preset, roles and seats typed by hand, the minimum to run, and what a full role does.",
                    "**Signups** - Late, Tentative and Absent markers on or off, one role that must be held to sign up, and when signups close.",
                    "**Posting** - the channel, up to ten roles to ping, a discussion thread, and pinning the board.",
                    "**Reminders** - one automatic reminder, from 15 minutes to 2 hours before the start, pinging roles, `@everyone` or nobody."
                ]
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Nothing posts until you say so",
                "text": "The panel builds a raid; it does not announce one. **Publish raid** is the only button that posts, and **Cancel** closes without posting or saving a draft."
            },
            {
                "type": "heading",
                "text": "Signing up"
            },
            {
                "type": "text",
                "text": "A published board is a set of reactions: one per role, plus one per status you turned on. React with a role to take a seat, react with another role to move, remove your reaction to leave. While the board is locked, only the role you already hold can be dropped."
            },
            {
                "type": "list",
                "items": [
                    "**Waitlist when full** keeps taking names and moves the first person up when a seat opens, with a DM to tell them.",
                    "**Close a full role** refuses the reaction once the seats are gone, so that role never has a queue.",
                    "**Late**, **Tentative** and **Absent** describe a member without moving them: the seat stays, the marker tells the host what to expect."
                ]
            },
            {
                "type": "heading",
                "text": "Running it once it is live"
            },
            {
                "type": "list",
                "items": [
                    "`/raid list` shows every open board, `/raid my` shows the ones you are on.",
                    "`/raid edit <message_id>` reopens the editor with the board as it stands, or right-click the board and pick **Apps**, then **Edit signup**.",
                    "`/raid lock` and `/raid unlock` freeze and reopen a roster. `/raid cancel` takes it down.",
                    "`/raid history <message_id>` reads a board back, including one that has already ended."
                ]
            },
            {
                "type": "heading",
                "text": "Wizard101 sheets"
            },
            {
                "type": "text",
                "text": "The class sheet works differently: it is a list of slots people claim, not a plan with seat limits. `/raid wizard101 signup` asks what is running, the date, the duration and the host, and takes up to twelve roles in one field, comma-separated, where a pipe starts a group: `Tank: Bear, Ice | Healer: Life`."
            },
            {
                "type": "text",
                "text": "`/raid defaults raid:<raid> roles:<...>` saves the roles a sheet opens with, so a weekly run is one press. Finished rosters are posted to the channel named by `/raid roster-channel`."
            },
            {
                "type": "heading",
                "text": "Setting it up"
            },
            {
                "type": "steps",
                "items": [
                    "Choose the signup channel with `/raid channel`. Until one is set there is nowhere to post, and the bot says so where an administrator will read it.",
                    "Choose where finished rosters go with `/raid roster-channel`, or leave the channel out to clear it.",
                    "Run one short test raid before announcing a real one."
                ]
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "The old names still work",
                "text": "`/set_raid_channel`, `/set_raid_roster_channel` and `/raid_defaults` are the original names for these settings. The old and new commands do the same thing, so either one is safe to use."
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "When the panel feels slow",
                "text": "`/raid cache` shows what the bot is keeping in memory, how often it finds what it needs there, and how much room it is using. You do not need to tune it; the bot sets its own limit. Run it when a panel feels slow to see whether the bot had to look something up."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/raid create [copy]",
                        "desc": "Open the raid planner. Give a message ID to start from that board's settings."
                    },
                    {
                        "cmd": "/raid drafts",
                        "desc": "Reopen a saved draft, or delete one."
                    },
                    {
                        "cmd": "/raid list",
                        "desc": "Every open board in the server, with a jump link."
                    },
                    {
                        "cmd": "/raid my",
                        "desc": "The open boards you are signed up for."
                    },
                    {
                        "cmd": "/raid edit [msg_id]",
                        "desc": "Change anything on a posted board, with the board drawn as you go."
                    },
                    {
                        "cmd": "/raid cancel [msg_id]",
                        "desc": "Take a board down and clean up its reactions."
                    },
                    {
                        "cmd": "/raid lock [msg_id]",
                        "desc": "Freeze a roster so nobody new can join."
                    },
                    {
                        "cmd": "/raid unlock [msg_id]",
                        "desc": "Reopen a roster for new signups."
                    },
                    {
                        "cmd": "/raid history [msg_id]",
                        "desc": "Read one board back, including boards that have ended."
                    },
                    {
                        "cmd": "/raid wizard101 signup",
                        "desc": "Post a Wizard101 class sheet, a gold key run, or a custom event."
                    },
                    {
                        "cmd": "/raid wizard101 start [host]",
                        "desc": "Build a class sheet as a guided menu."
                    },
                    {
                        "cmd": "/raid channel [channel]",
                        "desc": "Where signup boards are posted."
                    },
                    {
                        "cmd": "/raid roster-channel [channel]",
                        "desc": "Where finished rosters go, or clear it."
                    },
                    {
                        "cmd": "/raid defaults [raid] [roles]",
                        "desc": "Set, show, or clear the roles a sheet opens with."
                    },
                    {
                        "cmd": "/raid attendance [msg_id]",
                        "desc": "Take attendance for a raid that has run - who turned up, who was late, who did not show."
                    },
                    {
                        "cmd": "/raid stats [member]",
                        "desc": "Who keeps turning up, worst first, with a rate once a member has three raids behind them."
                    },
                    {
                        "cmd": "/raid schedule",
                        "desc": "Set a raid up once and have its signup post every week, with a skip for the week the guild is off."
                    },
                    {
                        "cmd": "/raid cache",
                        "desc": "Entries, hit rates and the memory ceiling of the raid caches."
                    },
                    {
                        "cmd": "/set_raid_channel [channel]",
                        "desc": "The older name for /raid channel."
                    },
                    {
                        "cmd": "/set_raid_roster_channel [channel]",
                        "desc": "The older name for /raid roster-channel."
                    },
                    {
                        "cmd": "/raid_defaults",
                        "desc": "The older name for /raid defaults."
                    }
                ]
            }
        ]
    },
    {
        "id": "raidpolls",
        "icon": "ph-users-three",
        "title": "Sign-up Polls & Simple Polls",
        "subtitle": "Reaction polls for a quick vote, and sign-up polls with slots, caps and waitlists for anything that needs a roster.",
        "content": [
            {
                "type": "heading",
                "text": "Which one"
            },
            {
                "type": "text",
                "text": "`/poll create` is a simple reaction vote with 2 to 20 answers. `/raidpoll` is for sign-ups: named slots, caps, waitlists and a roster that updates as people join or leave."
            },
            {
                "type": "heading",
                "text": "Build the slots"
            },
            {
                "type": "text",
                "text": "**Add Slot** asks when, what and how many places. `Friday 20:00`, `tomorrow 18:00` and `2026-10-02 19:30` all work; leave the places blank for no cap. One form can build several nights: write `Fri, Sat, Sun 20:00` and all three slots are added."
            },
            {
                "type": "text",
                "text": "**Paste List** is faster when you already have a schedule. Each line is a time, a separator, the event name and an optional cap: `tomorrow 20:00 - Weekly Boss [8]`."
            },
            {
                "type": "heading",
                "text": "Signing up"
            },
            {
                "type": "text",
                "text": "Every poll has a **Sign Up** button. It opens a private menu, so one member signing up does not change what anyone else sees. Slots you already hold arrive ticked, and a tick saves immediately. A capped slot fills first come, first served; after that, new sign-ups join the waitlist and are promoted when someone leaves."
            },
            {
                "type": "heading",
                "text": "The roster"
            },
            {
                "type": "text",
                "text": "The poll message is the roster. Each slot shows its number, name, time and a count such as `[8/8]`, with the signed-up members beneath it. A long roster continues onto another embed in the same message."
            },
            {
                "type": "heading",
                "text": "Simple polls"
            },
            {
                "type": "text",
                "text": "`/poll create` posts one embed with numbered answers. Members vote by reacting, and `/poll close` posts the totals. An answer that starts with an emoji uses that emoji instead of its number."
            },
            {
                "type": "heading",
                "text": "Templates and repeats"
            },
            {
                "type": "text",
                "text": "Save a question and its answers as a template on the **Poll Manager** page. For a weekly schedule, `/raidpoll` starts from the last one posted and moves the dates on by whole weeks. A closed poll also carries **Repost** and **Finalize Roster**."
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Set your timezone first",
                "text": "Slot times are read through your saved timezone. Run `/timezone set`, or `/timezone detect`, before the first poll."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/poll create",
                        "desc": "Create a quick reaction poll with 2-20 answers, an optional poll end time, and the timestamps option. An answer that starts with an emoji is reacted with that emoji."
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
            }
        ]
    },
    {
        "id": "simple_poll_timestamps",
        "icon": "ph-clock-countdown",
        "title": "Simple Poll Timestamps",
        "subtitle": "How a simple poll shows its close time, and how to keep answers exactly as typed.",
        "content": [
            {
                "type": "text",
                "text": "A simple poll can show when it closes. It can also turn dates in the answers into times each member reads in their own timezone. One setting controls the date conversion."
            },
            {
                "type": "list",
                "items": [
                    "**The Ends line.** Fill in the optional close time and SeanBot posts an Ends line.",
                    "**Timestamps you typed.** Discord timestamp markup in an answer is left alone.",
                    "**Converted answers.** With timestamps on, dates in answers are rewritten using your saved timezone."
                ]
            },
            {
                "type": "text",
                "text": "Turn it off in `/poll create`, or choose **Leave answers exactly as typed** in the dashboard. Saved templates remember the choice. Closing a poll drops the Ends line but leaves the answers as they were."
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Timezone first",
                "text": "Every conversion uses the poll creator's saved timezone. Set yours before you post."
            }
        ]
    },
    {
        "id": "teamup_fed",
        "icon": "ph-arrows-merge",
        "title": "Team-Up Federation Mesh",
        "subtitle": "A dungeon lobby that reaches your partner servers, with the replies kept in one thread.",
        "content": [
            {
                "type": "text",
                "text": "Turn on **Broadcast Team-Ups to Mesh** in both servers, and a Team-Up posted in one appears on the partners' boards. When the team forms, the threads are linked, so everyone can talk without jumping between servers."
            },
            {
                "type": "text",
                "text": "It is the normal Team-Up flow with a wider room. `/teamup_federation` shows the current mesh and its links."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/teamup_federation",
                        "desc": "Choose which partners see your Team-Ups."
                    }
                ]
            }
        ]
    },
    {
        "id": "temp_vc",
        "icon": "ph-microphone",
        "title": "Temporary Voice Channels",
        "subtitle": "A join-to-create voice channel, with the creator holding the name, the limit and the lock.",
        "content": [
            {
                "type": "text",
                "text": "A member joins the channel you chose and gets a room of their own. They can rename it, set how many fit, lock it and hand it over. When the last person leaves, the room goes away."
            },
            {
                "type": "steps",
                "items": [
                    "Temporary Voice Channels is on by default.",
                    "Pick the voice channel members join when they want their own room.",
                    "Set it as the Join-To-Create channel on the **Temp Channels** page."
                ]
            },
            {
                "type": "text",
                "text": "`/vc claim` takes a room whose owner has left, and `/vc save` and `/vc load` keep its settings for next time."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/vc claim",
                        "desc": "Take over a temporary room whose owner left."
                    },
                    {
                        "cmd": "/vc save",
                        "desc": "Save this room's name, limit and lock as a template."
                    },
                    {
                        "cmd": "/vc load",
                        "desc": "Apply a template you saved."
                    }
                ]
            }
        ]
    },
    {
        "id": "tickets",
        "icon": "ph-ticket",
        "title": "Ticket System",
        "subtitle": "A support panel members press to open a ticket channel with staff. Still in beta.",
        "content": [
            {
                "type": "text",
                "text": "Staff can claim a ticket, hand it to someone else, set a priority, add notes and close it. Channel access depends on the panel's privacy settings and support roles."
            },
            {
                "type": "steps",
                "items": [
                    "Turn on the ticket system (it starts on).",
                    "On the **Tickets** page, choose the category for ticket channels.",
                    "Pick the support roles that should see and close tickets.",
                    "Post the panel in a channel members can see."
                ]
            },
            {
                "type": "text",
                "text": "`/ticket claim` shows who is handling it, and `/ticket priority` sets low, normal, high or critical. Closing attempts to generate a transcript; storage and delivery depend on settings. `/ticket staffsay` posts a note in the ticket channel with the staff member's name, visible to anyone with access."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "Post a reusable support ticket panel in a text channel."
                    },
                    {
                        "cmd": "/ticket setup_channel",
                        "desc": "Create the ticket category, panel channel and first panel."
                    },
                    {
                        "cmd": "/ticket claim",
                        "desc": "Claim ownership of a support ticket."
                    },
                    {
                        "cmd": "/ticket unclaim",
                        "desc": "Hand a ticket back to the staff queue."
                    },
                    {
                        "cmd": "/ticket priority [level]",
                        "desc": "Set the ticket's priority."
                    },
                    {
                        "cmd": "/ticket add [member]",
                        "desc": "Add a member to the ticket. Staff only."
                    },
                    {
                        "cmd": "/ticket remove [member]",
                        "desc": "Remove a member from the ticket. Staff only."
                    },
                    {
                        "cmd": "/ticket info",
                        "desc": "Show who opened the ticket, who has it, and its status, priority and tags."
                    },
                    {
                        "cmd": "/ticket staffsay [msg]",
                        "desc": "Post a note only staff can read. Staff only."
                    },
                    {
                        "cmd": "/ticket close [reason]",
                        "desc": "Close the ticket, save a transcript and clean up the channel."
                    }
                ]
            }
        ]
    },
    {
        "id": "applications",
        "icon": "ph-clipboard-text",
        "title": "Applications",
        "subtitle": "Members apply for a staff role, an event spot, or anything else. You approve or deny each request in one place.",
        "content": [
            {
                "type": "text",
                "text": "Use Applications when members need to ask for something, like a staff role, an event spot, or a guild team. Each form has its own questions and its own Apply button, so people always answer the right one."
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Say who the form is for",
                "text": "Members see the form's title and description before the questions. Both should say who can apply and what happens next, so nobody starts the wrong form."
            },
            {
                "type": "heading",
                "text": "Set up a form"
            },
            {
                "type": "steps",
                "items": [
                    "Turn on **Applications** in **Module Settings** if it is off.",
                    "Open **Applications** and press **New form**. A server can have up to 8 forms.",
                    "Give the form a title and description, then write 1 to 5 questions. Each question can be a short answer or a paragraph, and can be required.",
                    "Choose the panel channel, the review channel, the role to add on approval, and whether to send the applicant the outcome by DM. Save the form.",
                    "Press **Post panel**. The bot posts one message with this form's own Apply button. Posting again updates the same message."
                ]
            },
            {
                "type": "text",
                "text": "The panel channel is where members press Apply. The review channel is where each new application arrives with **Approve** and **Deny** buttons. Leave the review channel empty to review only from the dashboard. If you later move a form to a different panel channel, delete the old panel by hand: the bot posts a new one and cannot edit the message in the old channel."
            },
            {
                "type": "heading",
                "text": "What a member sees"
            },
            {
                "type": "steps",
                "items": [
                    "Press the form's **Apply** button in the panel channel.",
                    "Check the form title, description and number of questions, then press **Start application**.",
                    "Answer the questions and submit. The receipt names the form, so the member knows what was sent.",
                    "Wait for a decision. A member can have one pending application per form; another form is still open to them."
                ]
            },
            {
                "type": "heading",
                "text": "Review an application"
            },
            {
                "type": "text",
                "text": "Every submission appears in the **Pending queue** and, if the form has a review channel, as a message with **Approve** and **Deny** buttons. The reviewer can add an optional note, which is included in the applicant's DM. The decision is recorded once and cannot be undone: a second click from the dashboard or Discord says the application has already been reviewed."
            },
            {
                "type": "list",
                "items": [
                    "Approving adds the accept role if the form has one. Put that role below SeanBot's own role.",
                    "The applicant is sent the outcome by DM if the form has DMs on. If their DMs are closed, the decision still goes through and the dashboard records that the message was not sent.",
                    "**Recent decisions** keeps the history, and the form tabs filter both the queue and the totals.",
                    "Deleting a form keeps its past decisions but is refused while it still has pending applications. The last form cannot be deleted."
                ]
            },
            {
                "type": "heading",
                "text": "Who can do what"
            },
            {
                "type": "list",
                "items": [
                    "Answers never appear in the panel channel. They go to the review channel you choose and to the dashboard.",
                    "The Applications page opens for an Administrator or anyone with Manage Server. The review buttons in Discord ask for the same. Members never need the dashboard: the Apply button and the outcome DM are the whole member side.",
                    "There are no slash commands for Applications. Setup and review live on the dashboard and on the panel and review buttons.",
                    "Each form is edited from its own tab, so changing one form never changes another."
                ]
            }
        ]
    },
    {
        "id": "birthdays",
        "icon": "ph-cake",
        "title": "Birthdays",
        "subtitle": "Members save the month and day, and one post a day celebrates everyone whose birthday it is.",
        "content": [
            {
                "type": "text",
                "text": "Members save their own date with `/community birthday set` - month and day only, never a year. Nobody can set a date for someone else, and the year is not stored, so a birthday does not reveal an age."
            },
            {
                "type": "heading",
                "text": "Where celebrations post"
            },
            {
                "type": "steps",
                "items": [
                    "Turn on **Birthdays** in **Module Settings**.",
                    "Open **Birthdays** and choose the celebration channel, or run `/community birthday channel [channel]`. The channel command needs Administrator.",
                    "Give SeanBot Send Messages and Embed Links in that channel.",
                    "Run `/community birthday upcoming` to check the saved dates before the first celebration."
                ]
            },
            {
                "type": "text",
                "text": "The bot checks every configured server once per UTC day and posts one embed listing everyone whose birthday it is. Without a channel, celebrations are off and the saved dates are kept."
            },
            {
                "type": "heading",
                "text": "Coming up"
            },
            {
                "type": "text",
                "text": "`/community birthday upcoming` defaults to 14 days and accepts 1 to 60. The dashboard shows the next 30 days. February 29 is skipped in a year without a leap day instead of being moved to February 28."
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "The Embed Builder has a birthday trigger too",
                "text": "That trigger sends an embed you wrote. This module posts the built-in celebration. Use either or both; they do not conflict."
            },
            {
                "type": "list",
                "items": [
                    "A member can replace a saved date with `/community birthday set` or remove it with `/community birthday remove`.",
                    "Turning the module off stops the daily post but keeps the saved dates and channel. Switch it back on to resume.",
                    "The command's `days` window is capped at 60, so a request for a longer look is shortened rather than refused."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/community birthday set [month] [day]",
                        "desc": "Save your birthday, month and day only."
                    },
                    {
                        "cmd": "/community birthday remove",
                        "desc": "Forget your saved birthday."
                    },
                    {
                        "cmd": "/community birthday channel [channel]",
                        "desc": "Set where celebrations post, or check the current channel."
                    },
                    {
                        "cmd": "/community birthday upcoming [days]",
                        "desc": "List birthdays in the next 1 to 60 days."
                    }
                ]
            }
        ]
    },
    {
        "id": "introductions",
        "icon": "ph-hand-waving",
        "title": "Introductions",
        "subtitle": "Every hello in the intro channel gets its own thread and a short checklist for staff.",
        "content": [
            {
                "type": "text",
                "text": "Point SeanBot at a channel where new members introduce themselves. A top-level message in that channel starts a thread named after the member, with a reply that repeats your prompt and gives staff a short checklist."
            },
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Turn on **Introductions** in **Module Settings**.",
                    "Open **Introductions** and choose the channel, or run `/community intros setup [channel]`.",
                    "Add an optional prompt, up to 500 characters. Without one, the bot uses its own short prompt.",
                    "Give SeanBot Create Public Threads, Send Messages and Send Messages in Threads in that channel.",
                    "Post a test intro and confirm the thread and checklist arrive."
                ]
            },
            {
                "type": "text",
                "text": "Changing the prompt on its own leaves the channel alone. `/community intros view` shows the current setup; `/community intros disable` or the dashboard's **Turn off** button stops threading new intros and leaves the channel and its messages where they are."
            },
            {
                "type": "heading",
                "text": "What staff see"
            },
            {
                "type": "text",
                "text": "The thread holds the intro and the checklist, so welcomes stay together instead of scrolling away. The checklist asks staff to say hello, point the member at the rules and hand out any newcomer role. It does not add a role on its own."
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "Each top-level message gets a thread",
                "text": "Replies inside the thread stay there and do not start another. Messages from bots are ignored."
            },
            {
                "type": "list",
                "items": [
                    "Turning the module off stops new threads; existing threads stay.",
                    "The dashboard saves the channel and the prompt separately, so changing one does not wipe the other.",
                    "Setup, prompt and disable need Administrator; view is open to everyone.",
                    "Threads archive after seven days without activity, Discord's default window."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/community intros setup [channel] [prompt]",
                        "desc": "Choose the intro channel and an optional prompt."
                    },
                    {
                        "cmd": "/community intros prompt [text]",
                        "desc": "Change the prompt without touching the channel."
                    },
                    {
                        "cmd": "/community intros view",
                        "desc": "Show the current channel and prompt."
                    },
                    {
                        "cmd": "/community intros disable",
                        "desc": "Stop threading new introductions."
                    }
                ]
            }
        ]
    },
    {
        "id": "kudos",
        "icon": "ph-star",
        "title": "Kudos",
        "subtitle": "Members thank each other, with a small daily limit and a leaderboard that stays about people, not message counts.",
        "content": [
            {
                "type": "text",
                "text": "Kudos is a light reputation system. A member thanks someone with `/community kudos give`, optionally with a reason. SeanBot counts what each member received and gave; it does not store the messages around it."
            },
            {
                "type": "heading",
                "text": "How the limit works"
            },
            {
                "type": "list",
                "items": [
                    "Each member can give three kudos per UTC day. The count resets at midnight UTC, not in each member's timezone.",
                    "A member cannot thank themselves or a bot.",
                    "The reason is optional and capped at 200 characters; longer text is trimmed."
                ]
            },
            {
                "type": "text",
                "text": "`/community kudos stats` shows received and given totals for you or a member you name. `/community kudos leaderboard` shows the top ten by received, and the dashboard's **Kudos** page shows the same board."
            },
            {
                "type": "heading",
                "text": "What is stored"
            },
            {
                "type": "text",
                "text": "Only totals and the daily count behind the limit are kept. No message text, channel or reason history is stored, so the page can show who was thanked and how often without keeping the conversation."
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "There is nothing to configure",
                "text": "The limits are fixed. Turn the module off in **Module Settings** if the server stops using it; totals are kept and return with the module."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/community kudos give [member] [reason]",
                        "desc": "Thank a member, with an optional reason."
                    },
                    {
                        "cmd": "/community kudos stats [member]",
                        "desc": "Show received and given totals."
                    },
                    {
                        "cmd": "/community kudos leaderboard",
                        "desc": "Show the top ten members by kudos received."
                    }
                ]
            }
        ]
    },
    {
        "id": "selfroles",
        "icon": "ph-mask-happy",
        "title": "Self-Role Menus",
        "subtitle": "Reaction menus that let members claim and drop their own roles, without a moderator in the loop.",
        "content": [
            {
                "type": "text",
                "text": "A self-role menu is a posted message with one reaction per role. A member adds the reaction to claim the role and removes it to drop the role. Staff build the menu in Discord; the dashboard shows every menu and can delete one."
            },
            {
                "type": "heading",
                "text": "Build a menu"
            },
            {
                "type": "steps",
                "items": [
                    "Turn on **Self-Role Menus** in **Module Settings**.",
                    "Run `/community selfroles create [name]`, for example `games`.",
                    "Add each row with `/community selfroles add [menu] [emoji] [role]`. Repeat for every role in the menu.",
                    "Give SeanBot Send Messages and Add Reactions in the channel where the menu will live.",
                    "Post it with `/community selfroles post [menu] [channel]`.",
                    "React once as a member to confirm the role arrives, then remove the reaction and confirm it leaves."
                ]
            },
            {
                "type": "text",
                "text": "Menus hold up to 20 rows. A row's role must sit below SeanBot's highest role, and @everyone and bot-managed roles are refused. Adding an emoji that is already in the menu replaces that row, so one reaction maps to one role."
            },
            {
                "type": "heading",
                "text": "What members see"
            },
            {
                "type": "text",
                "text": "The posted embed lists each emoji and role. Members react to claim; removing the reaction drops the role. Custom emoji and keycap numbers are matched by identity, so a renamed emoji or a different keycap still works."
            },
            {
                "type": "heading",
                "text": "Change or remove a menu"
            },
            {
                "type": "list",
                "items": [
                    "`/community selfroles list` shows each menu, its rows and whether it is live. The create, add, remove, post and delete commands need Administrator; list is open to everyone.",
                    "`/community selfroles remove [menu] [emoji]` drops one row. `/community selfroles delete [menu]` deletes the menu; messages already posted stay but stop granting roles.",
                    "The dashboard's **Self-Role Menus** page lists menus with their rows and can delete one; it does not edit rows.",
                    "Use the Embed Builder's **Reaction Roles** for rich embeds with buttons or several roles from one choice. These menus act only on their own posted messages, so the two do not compete."
                ]
            },
            {
                "type": "callout",
                "variant": "warning",
                "title": "Role order matters",
                "text": "SeanBot needs Manage Roles, and its role must be above every role a menu hands out. Without that, reactions do nothing and the member gets no error."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/community selfroles create [name]",
                        "desc": "Start a new menu."
                    },
                    {
                        "cmd": "/community selfroles add [menu] [emoji] [role]",
                        "desc": "Add one emoji-to-role row."
                    },
                    {
                        "cmd": "/community selfroles remove [menu] [emoji]",
                        "desc": "Remove one row."
                    },
                    {
                        "cmd": "/community selfroles post [menu] [channel]",
                        "desc": "Post the menu as a reaction message."
                    },
                    {
                        "cmd": "/community selfroles list",
                        "desc": "Show every menu, its rows and whether it is live."
                    },
                    {
                        "cmd": "/community selfroles delete [menu]",
                        "desc": "Delete a menu. Posted messages stay."
                    }
                ]
            }
        ]
    },
    {
        "id": "activitytracker",
        "icon": "ph-chart-line-up",
        "title": "Member Activity",
        "subtitle": "Message and voice activity per member, with Active and Inactive roles handed out on a schedule.",
        "content": [
            {
                "type": "text",
                "text": "SeanBot counts messages, voice time, reactions and command use. On your schedule, members who pass the threshold get the Active role; the rest get Inactive."
            },
            {
                "type": "steps",
                "items": [
                    "Create an Active and an Inactive role, both below SeanBot.",
                    "Run `/activity setup` with the number of days to measure.",
                    "Pick a threshold that matches how busy the server normally is."
                ]
            },
            {
                "type": "text",
                "text": "`/activity disable` stops the role changes without deleting the counts."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/activity setup [days]",
                        "desc": "Turn activity tracking on and set the inactivity threshold."
                    },
                    {
                        "cmd": "/activity disable",
                        "desc": "Turn tracking off and take the Active and Inactive roles back."
                    }
                ]
            }
        ]
    },
    {
        "id": "autopin",
        "icon": "ph-push-pin",
        "title": "Auto-Pin",
        "subtitle": "Enough reactions, and the message gets pinned.",
        "content": [
            {
                "type": "text",
                "text": "Choose the emoji and the number. Once a message reaches the number, SeanBot pins it, so the best answer stays easy to find."
            },
            {
                "type": "steps",
                "items": [
                    "Turn on the module.",
                    "Set the default threshold and trigger emoji.",
                    "Exclude private, staff and high-volume channels."
                ]
            },
            {
                "type": "text",
                "text": "`/autopin channel_override` gives one channel a different threshold. `/autopin stats` shows what has been pinned and why."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/autopin toggle",
                        "desc": "Turn Auto-Pin on or off for the server."
                    },
                    {
                        "cmd": "/autopin set_threshold [num]",
                        "desc": "Set how many reactions a pin needs."
                    },
                    {
                        "cmd": "/autopin set_emoji [emoji]",
                        "desc": "Pick the emoji people react with to pin."
                    },
                    {
                        "cmd": "/autopin channel_override",
                        "desc": "Give one channel a different threshold."
                    },
                    {
                        "cmd": "/autopin toggle_channel",
                        "desc": "Turn Auto-Pin on or off in one channel."
                    },
                    {
                        "cmd": "/autopin settings",
                        "desc": "Show the settings and any per-channel overrides."
                    },
                    {
                        "cmd": "/autopin stats",
                        "desc": "See how many messages have been pinned."
                    }
                ]
            }
        ]
    },
    {
        "id": "starboard",
        "icon": "ph-star",
        "title": "Starboard",
        "subtitle": "A channel that keeps the messages your community liked most.",
        "content": [
            {
                "type": "text",
                "text": "When a message gets enough star reactions, SeanBot posts a highlight with a link back to the original. Edits and deletions follow, so the highlight does not outlive the message."
            },
            {
                "type": "steps",
                "items": [
                    "Run `/star set` and choose the channel.",
                    "Open `/star advanced` for a custom emoji, threshold or ignored channels.",
                    "Run `/star info` to confirm what is in use."
                ]
            },
            {
                "type": "text",
                "text": "`/star stats leaderboard` ranks members who have given the most stars."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/star set [channel]",
                        "desc": "Set the starboard channel and basic options."
                    },
                    {
                        "cmd": "/star advanced",
                        "desc": "Set the star threshold, how old a message may be, the colour and self-starring."
                    },
                    {
                        "cmd": "/star info",
                        "desc": "Show the starboard channel and its settings."
                    },
                    {
                        "cmd": "/star stats dashboard",
                        "desc": "Open server starboard statistics."
                    },
                    {
                        "cmd": "/star stats leaderboard",
                        "desc": "Rank members by stars given."
                    }
                ]
            }
        ]
    },
    {
        "id": "emoji_analytics",
        "icon": "ph-chart-bar",
        "title": "Emoji Analytics",
        "subtitle": "See which emoji people use, and which ones nobody has touched in a year.",
        "content": [
            {
                "type": "text",
                "text": "**Emojis** counts custom emoji typed in messages. **Reactions** counts reactions added to messages, server emoji or standard. **Users** combines both to rank members. Typed standard emoji are left out of the Emojis ranking, because there is nothing to delete."
            },
            {
                "type": "text",
                "text": "Weekly, Monthly and All Time sit above the rankings. Start with All Time, so a quiet week does not make the set look unused. Channels muted in **Log Config** are excluded."
            },
            {
                "type": "text",
                "text": "Counts follow the emoji id, not the name a message happened to carry. Renaming a custom emoji keeps its history in one row, and an emoji deleted from the server keeps the record it earned in the ranking."
            },
            {
                "type": "text",
                "text": "`/emojis top15` and `/reaction top15` show usage in Discord. Usage is normally written in 30-second batches, and cached command results can remain unchanged for up to 40 minutes."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/emojis top15 interval:weekly",
                        "desc": "Top 15 custom emoji typed in chat. Also monthly and all_time."
                    },
                    {
                        "cmd": "/emojis top_users interval:weekly",
                        "desc": "Who types custom emoji the most."
                    },
                    {
                        "cmd": "/reaction top15 interval:weekly",
                        "desc": "Top 15 reactions added to messages, custom or standard."
                    },
                    {
                        "cmd": "/reaction top_users interval:weekly",
                        "desc": "Who reacts the most."
                    }
                ]
            }
        ]
    },
    {
        "id": "emojis",
        "icon": "ph-smiley-sticker",
        "title": "Emoji Manager & Suggestions",
        "subtitle": "Members suggest an emoji, staff approve it, and usage gets counted so you know what to remove.",
        "content": [
            {
                "type": "text",
                "text": "A member uploads an image with a name and a reason. Staff review the queue from Discord or **Emoji Manager**, and approving it creates the emoji and logs who approved it. The same page is the library: every custom emoji, its all-time typed uses, its role locks and aliases, and the order the picker follows."
            },
            {
                "type": "steps",
                "items": [
                    "Give SeanBot Create Expressions and permission to attach files in the review channel.",
                    "Run `/emoji suggestion_setup` with the review channel and a reviewer role.",
                    "Open **Emoji Manager** to add reviewer roles or change the member cooldown."
                ]
            },
            {
                "type": "heading",
                "text": "Keep the library tidy"
            },
            {
                "type": "text",
                "text": "Drag a tile to set the order used on this page and by the emoji picker, or use the sort menu to rank by uses or name for a moment. A saved order is a preference, not a delete: an emoji outside it still appears after the ones you placed."
            },
            {
                "type": "text",
                "text": "Uploads can be PNG, JPEG, GIF or WebP, up to 256 KiB. A suggestion survives Discord's expired attachment link, so staff can still approve it days later."
            },
            {
                "type": "text",
                "text": "The **Never Used** section lists custom emojis with no recorded uses. It suggests, it does not delete. An emoji uploaded in the last seven days, locked to a role, named by an alias, managed by an app, or without a readable upload date is shown with a badge and cannot be ticked. Select the rest, confirm once, and the bot checks those same rules against the live server before it deletes anything. One pass deletes at most 50 emojis, a failed safety check deletes none, and the delete is permanent."
            },
            {
                "type": "text",
                "text": "Usage counts are kept by emoji id, so a rename does not reset an emoji's history and a stale page cannot make a used emoji look unused. `/emoji purge_dead` remains the Discord-side version for a quick clean-up, and `/emoji lock` controls who may use an emoji."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "Turn suggestions on or off and set who reviews them. Needs Manage Server."
                    },
                    {
                        "cmd": "/emoji suggestion_queue [status]",
                        "desc": "List suggestions by status. For expression managers and reviewer roles."
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
                        "desc": "Lock several emoji to a permission at once."
                    },
                    {
                        "cmd": "/emoji set_guild_cooldown",
                        "desc": "Set the server's reaction cooldown."
                    },
                    {
                        "cmd": "/emoji suggest_purge [days]",
                        "desc": "List the emoji nobody has used lately."
                    },
                    {
                        "cmd": "/emoji purge_dead [days]",
                        "desc": "Delete custom emoji unused for at least 7 days to free slots."
                    }
                ]
            }
        ]
    },
    {
        "id": "reactions",
        "icon": "ph-thumbs-up",
        "title": "Reactions & Pings",
        "subtitle": "Reaction counts, animated emoji previews, and a ping for everyone who reacted.",
        "content": [
            {
                "type": "text",
                "text": "Count reactions on a message, preview an animated emoji, ping the people who reacted, and sweep up stray bot reactions at the end."
            },
            {
                "type": "text",
                "text": "Turn on Emoji Analytics if you want history, and give SeanBot Read Message History and Add Reactions in the channels involved. Use a ping only when you want to notify people."
            },
            {
                "type": "text",
                "text": "`/react` posts an emoji from a link. `/reaction top15` and `/reaction top_users` show the rankings, and Reaction Pings covers the notification side."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/reaction top15 [interval]",
                        "desc": "Show top 15 most used reactions across Weekly/Monthly."
                    },
                    {
                        "cmd": "/reaction top_users",
                        "desc": "Rank the members who react most."
                    },
                    {
                        "cmd": "/react [emoji] [link]",
                        "desc": "React to target message with an animated custom emoji."
                    },
                    {
                        "cmd": "/autoping type [method]",
                        "desc": "Choose how a reaction ping reaches people."
                    },
                    {
                        "cmd": "/autoping roles",
                        "desc": "Choose which roles may send a reaction ping."
                    },
                    {
                        "cmd": "/autoping limits",
                        "desc": "Set how often a reaction ping may fire."
                    },
                    {
                        "cmd": "/autoping authors",
                        "desc": "Choose whether an author may ping their own reactors."
                    }
                ]
            }
        ]
    },
    {
        "id": "reaction_pings",
        "icon": "ph-bell-ringing",
        "title": "Reaction Roles & Pings",
        "subtitle": "Tell everyone who reacted that the thing they signed up for is about to start.",
        "content": [
            {
                "type": "text",
                "text": "For event announcements, raid signups, polls and giveaways, where reacting means \"remind me later\". Staff, or approved message authors, can ping the reactors when it matters."
            },
            {
                "type": "steps",
                "items": [
                    "Reaction Pings is on by default.",
                    "Choose **Direct Mentions** or **Temporary Role**. A temporary role is quieter and easier to clean up.",
                    "Keep the user cap sensible."
                ]
            },
            {
                "type": "heading",
                "text": "Reaction roles"
            },
            {
                "type": "text",
                "text": "Roles from a reaction are set up on the embed itself. Add an emoji-to-role mapping in the **Embed Builder**, publish, and members who react get the role; removing the reaction takes it away. Reaction Pings handles the notification side."
            },
            {
                "type": "commands",
                "title": "Commands",
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
        "subtitle": "One important message that stays near the bottom of a busy channel.",
        "content": [
            {
                "type": "text",
                "text": "After enough normal messages, SeanBot removes the old copy and posts a fresh one, so rules, forms and instructions do not disappear into the scroll."
            },
            {
                "type": "steps",
                "items": [
                    "Sticky Messages is on by default.",
                    "Pick a channel and write the message on the **Sticky Messages** page.",
                    "Use **Normal Message** for plain text or **Embed** for an announcement look."
                ]
            },
            {
                "type": "text",
                "text": "`/sticky pause` stops the reposting without deleting the message. `/sticky refresh` posts a clean copy immediately."
            },
            {
                "type": "commands",
                "title": "Commands",
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
        "title": "Embed Builder, Welcome & Farewell",
        "subtitle": "Build an embed with a live Discord preview, then send it once, attach it to an event, or turn it into a button panel.",
        "content": [
            {
                "type": "heading",
                "text": "Pick the job"
            },
            {
                "type": "list",
                "items": [
                    "**A one-time post** for rules, announcements and staff notices.",
                    "**An automated message** for welcomes, leaves, boosts, live streams or keyword replies. These use placeholders such as `{user_mention}` and `{member_count}`.",
                    "**A button panel** for roles, links, private replies or tickets."
                ]
            },
            {
                "type": "text",
                "text": "Restrictions can make an automation fire only in certain channels or for certain roles, and keyword replies have a cooldown so a busy channel cannot spam the same answer."
            },
            {
                "type": "heading",
                "text": "Triggers"
            },
            {
                "type": "text",
                "text": "Manual send, member join, member leave, server boost, anniversary, live stream, starboard milestone, keyword reply, custom command, scheduled post, ticket panel, ban appeal, suggestion and giveaway. The builder shows only the settings that apply to the trigger you chose."
            },
            {
                "type": "heading",
                "text": "Buttons"
            },
            {
                "type": "text",
                "text": "Every normal button has a style, an action and a value:"
            },
            {
                "type": "list",
                "items": [
                    "**Open Link** opens a URL.",
                    "**Toggle Role**, **Add Role** and **Remove Role** take a role ID, such as `role:123456789012345678`.",
                    "**Private Reply**, **Public Reply**, **DM** and **Embed Reply** send text, such as `msg:Thanks, a staff member will reply shortly.`",
                    "**Random Reply** picks between options separated by a pipe.",
                    "**Dismiss Message** removes the message for that member."
                ]
            },
            {
                "type": "text",
                "text": "A role button only works if the role sits below SeanBot. If it fails, the member gets a short error instead of a silent click."
            },
            {
                "type": "heading",
                "text": "Ticket panels"
            },
            {
                "type": "text",
                "text": "A **Ticket Creation Panel** is different: its buttons do not use action types. Primary, Secondary, Success and Danger open a ticket, and Link opens a URL. Do not use Link for a ticket button."
            },
            {
                "type": "heading",
                "text": "Welcome and farewell"
            },
            {
                "type": "text",
                "text": "Use **Member Join** for a welcome and **Member Leave** for a farewell. Both work as a normal message or an embed, and both can use member placeholders. A welcome can be sent by DM first and then posted in a channel."
            },
            {
                "type": "heading",
                "text": "Saving work"
            },
            {
                "type": "list",
                "items": [
                    "**Draft**: the browser keeps the current workspace and brings it back on the same device.",
                    "**Template**: saved to the server under a name, available on any device.",
                    "**Publish**: the only step that sends anything to Discord."
                ]
            },
            {
                "type": "text",
                "text": "Loading an embed from **Published Embeds** switches to replacement mode, with a choice between updating the original, updating every copy, or posting a new message. SeanBot only updates messages it posted."
            },
            {
                "type": "text",
                "text": "Mentions work in every text field. Write `<@USER_ID>` to ping a person, `<@&ROLE_ID>` for a role, and `<#CHANNEL_ID>` to link a channel without pinging. Placeholders such as `{user_mention}`, `{owner_mention}` and `{message_author}` can do it for you."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "role:ROLE_ID",
                        "desc": "Toggle Role: adds if missing, removes if present. List several IDs with spaces."
                    },
                    {
                        "cmd": "role_add:ROLE_ID",
                        "desc": "Add Role: only ever adds the role."
                    },
                    {
                        "cmd": "role_remove:ROLE_ID",
                        "desc": "Remove Role: only ever removes the role."
                    },
                    {
                        "cmd": "msg:TEXT",
                        "desc": "Private Reply: visible only to the person who clicked."
                    },
                    {
                        "cmd": "public_msg:TEXT",
                        "desc": "Public Reply: visible to everyone in the channel."
                    },
                    {
                        "cmd": "dm:TEXT",
                        "desc": "DM Reply: sends the clicker a direct message."
                    },
                    {
                        "cmd": "embed_reply:Title|Text",
                        "desc": "Private Embed Reply: ephemeral gold embed with a title and description."
                    },
                    {
                        "cmd": "random_msg:Option A|Option B|Option C",
                        "desc": "Random Reply: picks one option at random."
                    },
                    {
                        "cmd": "dismiss",
                        "desc": "Dismiss Message: removes the bot message when clicked."
                    },
                    {
                        "cmd": "role:YOUR_MEMBER_ROLE",
                        "desc": "Agree and Get Access: Toggle Role"
                    },
                    {
                        "cmd": "role_add:YOUR_ENTRY_ROLE",
                        "desc": "Enter Giveaway: Add Role"
                    },
                    {
                        "cmd": "random_msg:You won 100 Gold Coins!|Try again next time!|You found a rare gem!",
                        "desc": "Try Your Luck: Random Reply"
                    },
                    {
                        "cmd": "role_remove:YOUR_ENTRY_ROLE",
                        "desc": "Leave Giveaway: Remove Role"
                    },
                    {
                        "cmd": "dm:Please describe your issue and a staff member will reply shortly.",
                        "desc": "General Support: DM Reply"
                    },
                    {
                        "cmd": "embed_reply:Bug Report|Please tell us what happened, what you expected, and any error text.",
                        "desc": "Report a Bug: Private Embed Reply"
                    },
                    {
                        "cmd": "/embed builder",
                        "desc": "Open the embed builder."
                    },
                    {
                        "cmd": "/embed clone [template/msg]",
                        "desc": "Start from an existing message."
                    },
                    {
                        "cmd": "/embed load [template] [channel]",
                        "desc": "Post a template you saved."
                    },
                    {
                        "cmd": "/embed delete [template]",
                        "desc": "Delete a saved template."
                    },
                    {
                        "cmd": "/embed disable",
                        "desc": "Turn the embed builder off in a channel."
                    },
                    {
                        "cmd": "/embed list",
                        "desc": "See and manage your saved templates."
                    }
                ]
            }
        ]
    },
    {
        "id": "autoreply",
        "icon": "ph-chat-centered-text",
        "title": "Auto-Reply",
        "subtitle": "A reply in your own words whenever somebody mentions you.",
        "content": [
            {
                "type": "text",
                "text": "Each member writes their own reply. When someone mentions them, SeanBot sends it. They can pause it, change it or delete it whenever they like."
            },
            {
                "type": "text",
                "text": "`/r set` saves a reply, `/r toggle` pauses it, and `/r remove` deletes it. Administrators can clear an inappropriate reply with `/r admin clear`."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/r set [reply_message]",
                        "desc": "Write the reply somebody gets when they mention you."
                    },
                    {
                        "cmd": "/r remove",
                        "desc": "Delete your mention reply."
                    },
                    {
                        "cmd": "/r toggle [status]",
                        "desc": "Turn your mention reply on or off."
                    },
                    {
                        "cmd": "/r admin clear [user]",
                        "desc": "Clear a member's reply that should not be there."
                    }
                ]
            }
        ]
    },
    {
        "id": "reminders",
        "icon": "ph-bell",
        "title": "Remind Me",
        "subtitle": "Right-click a message and ask to be reminded about it later, in ordinary words.",
        "content": [
            {
                "type": "text",
                "text": "Right-click the message, choose **Apps**, **Remind Me**, and say when: `tomorrow morning`, `in two hours`, `tonight`. SeanBot sends the link back at that time, so the message does not get lost."
            },
            {
                "type": "text",
                "text": "`/reminders` lists the ones you have set, and you can cancel one from there."
            },
            {
                "type": "commands",
                "title": "Commands",
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
        "title": "Translation",
        "subtitle": "Translate a message from Discord's right-click menu.",
        "content": [
            {
                "type": "text",
                "text": "Right-click a message and choose **Apps**, **Translate**, to open the translation controls."
            },
            {
                "type": "text",
                "text": "The translation is private by default. Use **Share Public** to post it in the channel."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "Apps &gt; Translate",
                        "desc": "Right-click a message and translate it from Discord's Apps menu."
                    }
                ]
            }
        ]
    },
    {
        "id": "thread_watcher",
        "icon": "ph-chats-teardrop",
        "title": "Thread watcher",
        "subtitle": "Keep the threads you care about from being archived halfway through.",
        "content": [
            {
                "type": "text",
                "text": "A slow forum post or a long thread gets archived when nobody answers for a while, which locks it as though the conversation had ended. Thread watcher keeps the threads you name open, so the next reply can still land."
            }
        ]
    },
    {
        "id": "voicestats",
        "icon": "ph-waveform",
        "title": "Voice Analytics",
        "subtitle": "How long people spend in voice, the longest sessions, and when the server is busiest.",
        "content": [
            {
                "type": "text",
                "text": "SeanBot records time in voice per member, the longest unbroken sessions, and weekly graphs of when voice is busy and when it is empty. Voice Analytics is on by default wherever SeanBot can see who joins voice."
            },
            {
                "type": "text",
                "text": "Give it View Channel in the channels you want measured, and leave private channels out if your privacy policy says so. `/voice graph` shows one member, `/voice channels` shows room by room, and `/voice loyalty` ranks time in voice."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/voice loyalty",
                        "desc": "Rank members by unbroken time in voice."
                    },
                    {
                        "cmd": "/voice sessions",
                        "desc": "See the longest single voice sessions."
                    },
                    {
                        "cmd": "/voice channels",
                        "desc": "Show when each voice channel is busy."
                    },
                    {
                        "cmd": "/voice streaks",
                        "desc": "List the members who turn up in voice most often."
                    },
                    {
                        "cmd": "/voice graph [member]",
                        "desc": "Show a weekly voice activity chart."
                    }
                ]
            }
        ]
    },
    {
        "id": "stats",
        "icon": "ph-chart-line-up",
        "title": "Live Counters & Server Statistics",
        "subtitle": "Channel names that update on their own, and charts for the numbers behind them.",
        "content": [
            {
                "type": "text",
                "text": "Counters show member counts, boosts or anything else you have a number for, and update as the number changes. The dashboard adds charts for growth, messages, voice time and the channels people use."
            },
            {
                "type": "steps",
                "items": [
                    "`/counter setup` creates a counter channel.",
                    "`/stats overview` shows server statistics in Discord.",
                    "`/counter list` shows every counter and lets you remove one."
                ]
            },
            {
                "type": "text",
                "text": "Counters rename on Discord's schedule, so a change can take a few minutes to appear."
            },
            {
                "type": "text",
                "text": "`/stats digest` posts the week's activity summary: messages and voice time, how they compare with the week before, and the members who led each. It is a snapshot for the channel, not a scheduled report."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/counter setup",
                        "desc": "Set up a counter with a walking guide."
                    },
                    {
                        "cmd": "/stats growth",
                        "desc": "See the member growth chart."
                    },
                    {
                        "cmd": "/counter list",
                        "desc": "List the counters running here."
                    },
                    {
                        "cmd": "/stats overview",
                        "desc": "See this server's numbers."
                    },
                    {
                        "cmd": "/stats digest",
                        "desc": "Post the weekly activity summary with trends and top members."
                    }
                ]
            }
        ]
    },
    {
        "id": "custom_bot",
        "icon": "ph-robot",
        "title": "Custom Bot Manager",
        "subtitle": "Give the bot its own name and picture in one server, without changing it anywhere else.",
        "content": [
            {
                "type": "text",
                "text": "Custom Bot Manager changes how SeanBot appears in this server. The name and picture are per server: the bot keeps its own identity everywhere else, and its commands and permissions do not change."
            },
            {
                "type": "steps",
                "items": [
                    "Open **Custom Bot Manager** in the dashboard.",
                    "Type a nickname up to 32 characters. Leave it empty to use the bot's own name.",
                    "Paste a square image link for the server picture: PNG, JPEG, GIF or WebP, at least 128x128 and up to 512 KB.",
                    "Use **Reset name and picture** to put both back."
                ]
            },
            {
                "type": "text",
                "text": "The bot needs Change Nickname, and its role must sit above the members it should appear above. Discord limits picture changes, so save one you mean to keep. The activity line rotates on its own; there is no setting for it."
            }
        ]
    },
    {
        "id": "returning_roles",
        "icon": "ph-arrow-u-down-left",
        "title": "Returning Roles",
        "subtitle": "Give members a role when they come back after leaving.",
        "content": [
            {
                "type": "text",
                "text": "Choose one role for returning members. When someone leaves, SeanBot notes the date. If they come back while that record is still there, they get the role. Records older than two years are cleared once a month."
            },
            {
                "type": "steps",
                "items": [
                    "Create the role and put it below SeanBot.",
                    "Run `/returning_role set` with the role.",
                    "Check it with `/returning_role view`."
                ]
            },
            {
                "type": "text",
                "text": "`/returning_role clear` removes the setting. It does not remove the role from anyone."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/returning_role set [role]",
                        "desc": "Pick the role a returning member gets."
                    },
                    {
                        "cmd": "/returning_role view",
                        "desc": "Show the role a returning member gets."
                    },
                    {
                        "cmd": "/returning_role clear",
                        "desc": "Stop giving returning members a role."
                    }
                ]
            }
        ]
    },
    {
        "id": "federation",
        "icon": "ph-globe-hemisphere-west",
        "title": "Federation",
        "subtitle": "Link the servers you trust, so chosen channels and forums act like one place.",
        "content": [
            {
                "type": "text",
                "text": "A network shares forum threads, relays text channels, passes Team-Ups between boards, and can show a Beastmoon leaderboard across every server in it. Nothing is public: a network only exists between servers that agreed to join."
            },
            {
                "type": "steps",
                "items": [
                    "Pick one trusted server as the owner. Run `/thread network create` there and keep the code private.",
                    "In each partner, turn on Federation and run `/thread network join` with the code.",
                    "Choose the forum channel where shared threads should appear on the **Federation** page."
                ]
            },
            {
                "type": "text",
                "text": "For text channels, create a relay with `/relay create` and link a local channel in each server. Turn on **Broadcast Team-Ups to Mesh** where team-ups should be shared."
            },
            {
                "type": "text",
                "text": "The network owner controls what syncs: threads, replies, attachments, renames, locks, archives, pins, deletions and tags. `/thread network health` shows whether each link is working."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/thread network create [name]",
                        "desc": "Start a network."
                    },
                    {
                        "cmd": "/thread network join [token]",
                        "desc": "Join a network with its code."
                    },
                    {
                        "cmd": "/thread network info",
                        "desc": "See the network this server belongs to."
                    },
                    {
                        "cmd": "/thread network dashboard",
                        "desc": "Open the dashboard for every linked server."
                    },
                    {
                        "cmd": "/thread network health",
                        "desc": "Check whether each link is working."
                    },
                    {
                        "cmd": "/thread audit [thread_id]",
                        "desc": "Read a thread's recent replies and counts."
                    },
                    {
                        "cmd": "/relay create [name]",
                        "desc": "Start a relay between two channels."
                    },
                    {
                        "cmd": "/relay link [code]",
                        "desc": "Link a channel here to the network."
                    },
                    {
                        "cmd": "/identity set [name]",
                        "desc": "Name the network."
                    },
                    {
                        "cmd": "/identity view",
                        "desc": "Show the network's name and servers."
                    }
                ]
            }
        ]
    },
    {
        "id": "roshambo",
        "icon": "ph-fire",
        "title": "Roshambo Battle Royale",
        "subtitle": "School against school in voice chat, until one is left standing.",
        "content": [
            {
                "type": "text",
                "text": "A Wizard101 take on rock-paper-scissors. Members join a voice channel, pick a school, and duel through rounds until one school wins. Run `/duel` in the channel where people are waiting; the bot explains the rules and calls each round."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/duel",
                        "desc": "Open a lobby for a school duel."
                    }
                ]
            }
        ]
    },
    {
        "id": "fun",
        "icon": "ph-smiley",
        "title": "Cat Facts, Quote Maker & Slap",
        "subtitle": "Cat facts, cat pictures, quote cards from your own chat, and a slap for whoever has earned it.",
        "content": [
            {
                "type": "heading",
                "text": "Cats"
            },
            {
                "type": "text",
                "text": "`/cat fact` for a fact, `/cat image` or `/cat gif` for pictures, `/cat search` for a breed, and `/cat says` when a cat should say something specific."
            },
            {
                "type": "heading",
                "text": "Quotes and slaps"
            },
            {
                "type": "text",
                "text": "`/discquote` turns a message into a shareable quote card, with the author's name attached. `/slap user` takes a target; `/slap stats` shows the record."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "desc": "Make a picture of a cat saying what you type."
                    },
                    {
                        "cmd": "/discquote [user] [text]",
                        "desc": "Turn a message into a fake quote card."
                    },
                    {
                        "cmd": "/slap user [member]",
                        "desc": "Slap a member."
                    },
                    {
                        "cmd": "/slap stats",
                        "desc": "See your slap record."
                    },
                    {
                        "cmd": "/slap leaderboard",
                        "desc": "Rank the hardest slappers."
                    }
                ]
            }
        ]
    },
    {
        "id": "general_sys",
        "icon": "ph-cpu",
        "title": "System Diagnostics",
        "subtitle": "Server information, latency and memory, for when something feels slow or wrong.",
        "content": [
            {
                "type": "text",
                "text": "`/serverinfo` covers the basics and `/invite` gives you the bot's invite link. These need no setup."
            },
            {
                "type": "text",
                "text": "When a feature is broken, run `/staff diagnose` to check bot permissions in the current channel and server. Check role order separately."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/serverinfo",
                        "desc": "Show the server's members, roles and numbers."
                    },
                    {
                        "cmd": "/invite",
                        "desc": "Get SeanBot's invite link."
                    }
                ]
            }
        ]
    },
    {
        "id": "discord_apps",
        "icon": "ph-cursor-click",
        "title": "Right-Click Apps",
        "subtitle": "Use SeanBot from Discord's right-click menus, without finding a command first.",
        "content": [
            {
                "type": "text",
                "text": "Right-click a message or a member, choose **Apps**, then the SeanBot action. On mobile, press and hold the message, or open the member menu first."
            },
            {
                "type": "text",
                "text": "The same module, role, channel and permission checks apply as the slash versions. What you see depends on the modules your server has on and the permissions you hold."
            },
            {
                "type": "text",
                "text": "The list includes Report User, Vote Report, Translate, Remind Me, Convert Time, Ping Reactors, React with emojis, React with numbers, Report Scam, View ID and View Wizards."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                        "cmd": "Apps &gt; React w/ emojis",
                        "desc": "Pick emojis from your own message for the bot to react with."
                    },
                    {
                        "cmd": "Apps &gt; React w/ numbers",
                        "desc": "Add the number reactions a message names, so it can be voted on."
                    },
                    {
                        "cmd": "Apps &gt; Report Scam",
                        "desc": "File a scam post in the scam library."
                    },
                    {
                        "cmd": "Apps &gt; View ID",
                        "desc": "Copy a member's Discord ID."
                    },
                    {
                        "cmd": "Apps &gt; View Wizards",
                        "desc": "See a member's registered Wizard101 wizards."
                    }
                ]
            }
        ]
    },
    {
        "id": "faq",
        "icon": "ph-question",
        "title": "Frequently Asked Questions",
        "subtitle": "The quick fixes for the problems people ask about most.",
        "content": [
            {
                "type": "heading",
                "text": "Slash commands are not showing"
            },
            {
                "type": "text",
                "text": "SeanBot was probably added without the commands permission. Invite it again from this site."
            },
            {
                "type": "heading",
                "text": "A command says it is not available"
            },
            {
                "type": "text",
                "text": "Check the module switch, then **Server Settings**, **Integrations** for a channel restriction. `/staff diagnose` names a missing permission if there is one."
            },
            {
                "type": "heading",
                "text": "A feature cannot post in a channel"
            },
            {
                "type": "text",
                "text": "Give SeanBot View Channel and Send Messages there. A private channel it cannot see looks like a broken feature from the outside."
            },
            {
                "type": "heading",
                "text": "Role changes are failing"
            },
            {
                "type": "text",
                "text": "The role is above SeanBot's own role. Move the SeanBot role higher and try again."
            }
        ]
    },
    {
        "id": "loa",
        "icon": "ph-calendar-check",
        "title": "Staff Leave of Absence",
        "subtitle": "Staff file the dates they are away, someone approves it, and the leave role comes off when they are due back.",
        "content": [
            {
                "type": "text",
                "text": "Staff file a request with `/loa request` or from the dashboard. An approver signs it off, the leave role goes on, and it comes off on the return date without anyone remembering."
            },
            {
                "type": "text",
                "text": "Run `/loa setup` to choose the approval channel, the leave role, the maximum duration, and the roles allowed to file or approve. `/loa status` shows your own leave, and `/loa list` shows everyone who is out."
            },
            {
                "type": "text",
                "text": "Put the leave role below SeanBot and keep the approval channel private to staff."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/loa request",
                        "desc": "File a leave of absence with a start and end date."
                    },
                    {
                        "cmd": "/loa setup [approval_channel] [user_roles] [admin_roles] [leave_role] [max_duration] [auto_approval_hours]",
                        "desc": "Set the review channel, the leave role, who may file or approve, and when leave is auto-approved."
                    },
                    {
                        "cmd": "/loa config",
                        "desc": "Show the server's leave settings."
                    },
                    {
                        "cmd": "/loa status",
                        "desc": "See your leave, and extend or cancel it."
                    },
                    {
                        "cmd": "/loa list",
                        "desc": "Review everyone's leave across the server."
                    }
                ]
            }
        ]
    },
    {
        "id": "presence",
        "icon": "ph-pulse",
        "title": "Presence",
        "subtitle": "A live board, the server's quiet hours, the weeks behind them, and the members you watch.",
        "content": [
            {
                "type": "text",
                "text": "The Presence page has four tabs. **Right now** is the live board: members grouped by Online, Idle, Do Not Disturb and Offline, with the time each has spent in that state, what they are doing, the clients they are on, and their last recorded change. Filter by state, search by name or ID, and show bots when you need to see them."
            },
            {
                "type": "text",
                "text": "**Insights** adds the history behind the board: time online by hour in your own timezone, this week day by day, earlier weeks, the members who spend the most time online, what the server plays, and the split between desktop, mobile and web. **Play mix, week by week** compares the titles a week earned, so a change in what people play reads as a shape rather than one long table."
            },
            {
                "type": "text",
                "text": "**Week history** lists the weeks the bot has kept, newest first, with the current week marked. Jump to a month or load older weeks without leaving the page. A week is kept after it ends; the live board does not wait for that."
            },
            {
                "type": "text",
                "text": "The **best time for a weekly raid** hint reads the last four weeks of the busy-hours grid. It names a day only when that window holds four hours of tracked time; before that it says how much it has and how much it still needs, so one quiet evening cannot look like a pattern."
            },
            {
                "type": "callout",
                "variant": "note",
                "title": "Presence is stored, message text is not",
                "text": "SeanBot records when members are online, idle, in do not disturb or offline, and rolls those clocks into weeks. Bots are skipped, and no message content is stored. The page is administrator-only; Server Access cannot grant it to another role, the same rule that keeps Dashboard Logs to admins."
            },
            {
                "type": "heading",
                "text": "Watch one member"
            },
            {
                "type": "text",
                "text": "Watching a member posts each state change to the log channel with the previous state, the new one, the activity they were showing and a timestamp. It is opt-in: `/log watch_presence` adds one member, `/log unwatch_presence` removes them, and `/log watch_presence_list` shows the list. A watch list is capped and saved, so it survives a restart; a restart reports the move it slept through instead of adopting the new state silently."
            },
            {
                "type": "text",
                "text": "**New members** on the Watch list tab follows every joiner for a set number of days, from one to thirty. The same rule is set from Discord with `/log watch_presence_auto joiners [days]` or turned off with `/log watch_presence_auto off`. Automatic entries have their own cap of twenty-five and let the earliest deadline go first; naming an automatically watched member with `/log watch_presence` promotes them to a watch that lasts until you remove it."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/log watch_presence [member]",
                        "desc": "Log one member's presence changes."
                    },
                    {
                        "cmd": "/log unwatch_presence [member]",
                        "desc": "Stop logging one member's presence changes."
                    },
                    {
                        "cmd": "/log watch_presence_list",
                        "desc": "List the members watched for presence changes."
                    },
                    {
                        "cmd": "/log watch_presence_auto [scope] [days]",
                        "desc": "Follow new members for 1 to 30 days, or turn the rule off."
                    }
                ]
            }
        ]
    },
    {
        "id": "staff_list",
        "icon": "ph-identification-badge",
        "title": "Staff List",
        "subtitle": "A staff roster that updates itself, with goals, duty, time off and a weekly report.",
        "content": [
            {
                "type": "text",
                "text": "Pick the roles that make someone staff. Everyone holding one is grouped by their highest staff role. The page shows presence, duty and away tags, plus progress against a goal. A member with two staff roles appears once, under the higher one."
            },
            {
                "type": "heading",
                "text": "Goals and duty"
            },
            {
                "type": "text",
                "text": "A goal is a number of messages in a daily, weekly or monthly period. Only counts are stored; message content is never read. A personal goal beats a role goal, and a role goal beats the server default."
            },
            {
                "type": "text",
                "text": "`/stafflist goals` shows progress, and the dashboard shows the same bars. Goals are encouragement: nothing removes a role for missing one."
            },
            {
                "type": "text",
                "text": "`/duty on` adds the duty role and starts counting hours; `/duty off` removes it. `/away` marks a member away until a date and pauses their goals."
            },
            {
                "type": "heading",
                "text": "Activity and the report"
            },
            {
                "type": "text",
                "text": "`/stafflist check` posts an \"I'm here\" button. `/stafflist check-results` lists who did not press it. An unanswered check is reported, never punished automatically."
            },
            {
                "type": "text",
                "text": "The weekly report goes to your summary channel on Monday at 09:00 UTC, and `/stafflist report` posts one on demand. Set the summary channel before the first Monday."
            },
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "Turn the Staff List module on. It ships switched off.",
                    "Pick the staff roles under **Team settings** and save.",
                    "Set an optional default goal for everyone those roles cover."
                ]
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/stafflist team",
                        "desc": "Show the roster, grouped by staff role."
                    },
                    {
                        "cmd": "/stafflist goals",
                        "desc": "Show message goal progress for staff."
                    },
                    {
                        "cmd": "/stafflist group-add key name description role channel",
                        "desc": "Add a role group and the channel that holds its list message."
                    },
                    {
                        "cmd": "/stafflist group-remove key",
                        "desc": "Remove a role group."
                    },
                    {
                        "cmd": "/stafflist settings duty_role summary_channel",
                        "desc": "Set the optional duty role and the weekly report channel."
                    },
                    {
                        "cmd": "/stafflist goal set period messages role",
                        "desc": "Set a message goal for one role."
                    },
                    {
                        "cmd": "/stafflist goal set period messages user",
                        "desc": "Set a message goal for one person."
                    },
                    {
                        "cmd": "/stafflist goal clear role",
                        "desc": "Remove a role's goal."
                    },
                    {
                        "cmd": "/stafflist goal clear user",
                        "desc": "Remove a person's goal."
                    },
                    {
                        "cmd": "/stafflist goal default period messages",
                        "desc": "Set the goal for staff without a personal or role goal."
                    },
                    {
                        "cmd": "/stafflist goal default-clear",
                        "desc": "Remove the default goal."
                    },
                    {
                        "cmd": "/duty state:on",
                        "desc": "Go on duty. Adds the duty role and starts counting hours."
                    },
                    {
                        "cmd": "/duty state:off",
                        "desc": "Go off duty. Removes the duty role and banks the hours."
                    },
                    {
                        "cmd": "/away days:7",
                        "desc": "Mark yourself away for 1 to 90 days."
                    },
                    {
                        "cmd": "/away off:true",
                        "desc": "Come back now."
                    },
                    {
                        "cmd": "/stafflist check",
                        "desc": "Post an I'm here button for an activity check."
                    },
                    {
                        "cmd": "/stafflist check-results",
                        "desc": "List the staff who did not answer the latest check."
                    },
                    {
                        "cmd": "/stafflist report",
                        "desc": "Post the weekly staff report now."
                    }
                ]
            }
        ]
    },
    {
        "id": "global_enforcement",
        "icon": "ph-globe-hemisphere-west",
        "title": "Global Enforcement",
        "subtitle": "One timeout, kick or ban, applied to every server you manage.",
        "content": [
            {
                "type": "text",
                "text": "Apply one timeout, kick or ban across every linked server, or just the ones you choose. Each server records its own result."
            },
            {
                "type": "steps",
                "items": [
                    "Turn on Global Enforcement in **Module Settings**.",
                    "Create a network on the **Global Enforcement** page. It starts with the servers you manage.",
                    "Link more servers. Only servers where you have Administrator or Manage Server appear."
                ]
            },
            {
                "type": "text",
                "text": "Timeout, kick, ban, unban and remove timeout are supported. `/gpunish run` does the same from Discord, and `/gpunish history` shows what has been done."
            },
            {
                "type": "text",
                "text": "Approving a ban appeal mirrors the unban across the network, but only to servers where the member still has an active ban. A failed action is reported and does not stop the others."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/gpunish network create &lt;name&gt;",
                        "desc": "Start a network with this server."
                    },
                    {
                        "cmd": "/gpunish network add &lt;guild_id&gt;",
                        "desc": "Add a server where you are an administrator."
                    },
                    {
                        "cmd": "/gpunish network remove &lt;guild_id&gt;",
                        "desc": "Take a server out of the network."
                    },
                    {
                        "cmd": "/gpunish network list",
                        "desc": "List your networks, how many servers each has, and whether unbans are shared."
                    },
                    {
                        "cmd": "/gpunish run &lt;user&gt; &lt;timeout|kick|ban|unban|untimeout&gt; [duration_minutes] [scope] [reason]",
                        "desc": "Punish a member across the network, or on the servers you name."
                    },
                    {
                        "cmd": "/gpunish appealsync &lt;on|off&gt; [server_ids]",
                        "desc": "Choose whether an appeal unban reaches the whole network."
                    },
                    {
                        "cmd": "/gpunish history [limit]",
                        "desc": "See what was applied, and how each server answered."
                    }
                ]
            }
        ]
    },
    {
        "id": "antiping",
        "icon": "ph-at",
        "title": "Anti-Ping & Ghost Ping Alerts",
        "subtitle": "Stop mention floods, protect important roles, and enforce the ping rules you choose.",
        "content": [
            {
                "type": "text",
                "text": "Anti-Ping checks each message: how many members it mentions, how many roles, whether it uses `@everyone` or `@here`, and whether the same author keeps pinging the same people."
            },
            {
                "type": "text",
                "text": "A violation can be logged, DMed, deleted, timed out, kicked or banned. Staff and members at or above SeanBot's role are never punished. Protected roles and users can be added so a ping aimed at them counts even when the general limit would allow it."
            },
            {
                "type": "heading",
                "text": "Ghost pings"
            },
            {
                "type": "text",
                "text": "A ghost ping is a message that mentions someone and is deleted straight afterwards, so the notification arrives with nothing behind it. SeanBot records the mention and the author, and can leave it at a log or escalate it to the same actions as a normal ping rule."
            },
            {
                "type": "callout",
                "variant": "tip",
                "title": "Start gently",
                "text": "Turn it on with **Log only** first. Read the block reasons for a few days, then raise enforcement to delete or timeout."
            },
            {
                "type": "commands",
                "title": "Commands",
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
            }
        ]
    },
    {
        "id": "honeypot",
        "icon": "ph-magnet",
        "title": "Honeypot",
        "subtitle": "A decoy channel only a scam bot would post in. The moment one does, SeanBot acts.",
        "content": [
            {
                "type": "text",
                "text": "Scam bots scan servers for words like \"free nitro\" and post wherever they are allowed. A honeypot turns that against them: anyone who posts in a trap channel is treated as suspicious immediately."
            },
            {
                "type": "text",
                "text": "You can flag anyone, only new accounts, only accounts without a picture, or a combination. Enforcement can be quarantine, timeout, kick or ban; quarantine is the safer default because staff can undo it."
            },
            {
                "type": "steps",
                "items": [
                    "Honeypot is on by default.",
                    "Open the **Honeypot** page and place the trap.",
                    "Start with **Log only** so you can watch hits.",
                    "Press **Create Trap Channel** to make one and turn it on."
                ]
            },
            {
                "type": "callout",
                "variant": "warning",
                "title": "Real members can land in a trap too",
                "text": "Anyone who posts there is flagged. Tell staff which channels are traps, and keep them quiet."
            },
            {
                "type": "text",
                "text": "`/honeypot exempt` keeps a role or member out of the trap."
            },
            {
                "type": "commands",
                "title": "Commands",
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
        "subtitle": "Giveaways with real entries, winner checks, reminders and an archive summary.",
        "content": [
            {
                "type": "text",
                "text": "SeanBot runs the giveaway on its own entry button, so every entrant is recorded and staff can see the list. It ends on time, picks winners, rerolls cleanly, and posts a summary to the archive channel."
            },
            {
                "type": "text",
                "text": "`/giveaway start` takes the time, the number of winners, the prize and an optional channel. `/giveaway end` closes it early, `/giveaway reroll` picks again, and `/giveaway cancel` calls it off."
            },
            {
                "type": "text",
                "text": "New or flagged accounts can be blocked from entering, and announced winners are checked before a prize is handed over. Rerolls skip previous winners."
            },
            {
                "type": "text",
                "text": "Use the `/giveaway config` subcommands to set log, vetting and archive channels, reminders, button label and colour. `/giveaway config show` prints the current setup."
            },
            {
                "type": "text",
                "text": "If giveaways run on GiveawayBot or Carl-bot, the **Giveaway Feed** guide covers the record and the winner check."
            },
            {
                "type": "commands",
                "title": "Commands",
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
                    },
                    {
                        "cmd": "/giveaway config logchannel &lt;channel&gt;",
                        "desc": "Audit log for lifecycle events and summary messages."
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
            }
        ]
    },
    {
        "id": "giveaway_feed",
        "icon": "ph-robot",
        "title": "Giveaway Feed",
        "subtitle": "Keep a record of giveaways run on GiveawayBot or Carl-bot, so nothing disappears when the other bot deletes its message.",
        "content": [
            {
                "type": "text",
                "text": "SeanBot watches the other bot's public messages and records each giveaway as it is created, as entries come in, when it ends, and if it is rerolled or deleted. The other bot still runs the giveaway; SeanBot keeps the paper trail."
            },
            {
                "type": "text",
                "text": "You get the entry count and the winners, not the names of everyone who entered, because that list stays private to the other bot. For a full entrant list, run the giveaway natively with `/giveaway start`."
            },
            {
                "type": "text",
                "text": "Announced winners are checked for account age, quarantine history and any global enforcement record. The verdict goes to a vetting channel, so staff see it before the prize is handed over."
            },
            {
                "type": "heading",
                "text": "Set it up"
            },
            {
                "type": "steps",
                "items": [
                    "In **Module Settings**, turn on the GiveawayBot or Carl-bot card you use.",
                    "Run `/botsupport giveawaybot show` or `/botsupport carlbot show`.",
                    "Set the feed channel with `logchannel`, then a vetting channel with `vetchannel`.",
                    "Run a small test giveaway and confirm the created and ended events arrive."
                ]
            },
            {
                "type": "text",
                "text": "For a self-hosted bot, point SeanBot at the right account with `/botsupport giveawaybot botid` or `/botsupport carlbot botid`. The **Bot Support Feed** page lists everything tracked and lets you filter by status or bot."
            },
            {
                "type": "commands",
                "title": "Commands",
                "items": [
                    {
                        "cmd": "/botsupport giveawaybot show",
                        "desc": "Show what GiveawayBot support is watching and where it posts."
                    },
                    {
                        "cmd": "/botsupport giveawaybot enable",
                        "desc": "Start watching GiveawayBot in this server."
                    },
                    {
                        "cmd": "/botsupport giveawaybot disable",
                        "desc": "Stop watching GiveawayBot in this server."
                    },
                    {
                        "cmd": "/botsupport giveawaybot logchannel &lt;channel&gt;",
                        "desc": "Set the channel for giveaway lifecycle events."
                    },
                    {
                        "cmd": "/botsupport giveawaybot vetchannel &lt;channel&gt;",
                        "desc": "Set the channel for winner checks."
                    },
                    {
                        "cmd": "/botsupport giveawaybot vetting &lt;true|false&gt;",
                        "desc": "Turn automatic winner checks on or off."
                    },
                    {
                        "cmd": "/botsupport carlbot show",
                        "desc": "Show what Carl-bot support is watching and its parse drift."
                    },
                    {
                        "cmd": "/botsupport carlbot drift &lt;threshold&gt;",
                        "desc": "Set how many unreadable giveaway messages are worth an alert."
                    }
                ]
            }
        ]
    }
];
