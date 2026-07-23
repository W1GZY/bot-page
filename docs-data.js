// SeanBot Authentic Documentation Database
const docsData = [
    {
        "id": "quickstart",
        "icon": "ph-rocket",
        "title": "Quick Start Guide",
        "subtitle": "Empower your community with effortless, automated server management in under 60 seconds.",
        "content": [
            {
                "type": "heading",
                "text": "1. One-Click Authorization"
            },
            {
                "type": "text",
                "text": "Add SeanBot to your Discord community with optimized administrative permissions. Elevate SeanBot's role near the top of your role hierarchy to unlock real-time moderation and role assignment power."
            },
            {
                "type": "heading",
                "text": "2. Tailored Feature Modules"
            },
            {
                "type": "text",
                "text": "Toggle feature modules instantly with `/serveradmin module` or through your personalized Web Dashboard."
            },
            {
                "type": "callout",
                "icon": "\u26a1",
                "title": "Instant Audit Diagnostics",
                "text": "Run `/staff diagnose` anytime for an automated diagnostic sweep of bot channel permissions, role bindings, and command overrides."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/staff diagnose",
                        "desc": "Perform an automated audit sweep of Messaging, Moderation, and Voice permissions."
                    },
                    {
                        "cmd": "/prefix [symbol]",
                        "desc": "View or update custom legacy command prefix."
                    }
                ]
            }
        ]
    },
    {
        "id": "core",
        "icon": "ph-browser",
        "title": "Dashboard & Settings",
        "subtitle": "Blazing-fast cloud control workspace for instant server configuration.",
        "content": [
            {
                "type": "heading",
                "text": "Web Dashboard Workspace"
            },
            {
                "type": "text",
                "text": "Seamlessly configure server preferences, manage feature modules, and synchronize command registries in real time with security token authentication."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/dashboard",
                        "desc": "Generate an encrypted, single-use login link to access the Web Control Panel."
                    },
                    {
                        "cmd": "/reload_commands",
                        "desc": "Force immediate database synchronization for all active slash command registries."
                    }
                ]
            }
        ]
    },
    {
        "id": "prefix",
        "icon": "ph-hash",
        "title": "Custom Prefixes",
        "subtitle": "Flexible text command prefix customization tailored for your community.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Customize your text command prefix to prevent conflicts with legacy bots."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/prefix [new_prefix]",
                        "desc": "Inspect active server prefix or set a custom command trigger symbol."
                    }
                ]
            }
        ]
    },
    {
        "id": "w101",
        "icon": "ph-magic-wand",
        "title": "W101: Core Toolkit & Damage",
        "subtitle": "Precision hit calculators, multi-buff stack previews, gear scaling, and visual deck sharing.",
        "content": [
            {
                "type": "heading",
                "text": "Damage & Buff Calculation Engine"
            },
            {
                "type": "text",
                "text": "Eliminate math guesswork during high-stakes raids. Model multi-blade stacks, traps, auras, gear damage percentages, shadow pips, critical strikes, and pierce multipliers with exact numerical accuracy."
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
                        "desc": "Instantly dispatch a saved deck directly to a teammate via DM."
                    },
                    {
                        "cmd": "/decks export [deck]",
                        "desc": "Export a high-definition image card graphic of any saved deck."
                    },
                    {
                        "cmd": "/deck show [code]",
                        "desc": "Render a visual deck spread from a compact web share code."
                    },
                    {
                        "cmd": "/deck lookup [code]",
                        "desc": "Inspect card quantities and school breakdowns for any deck code."
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
                "text": "Track your Beastmoon Hunt & Monster Mayhem form tiers, estimate exact Lunari and Gold Thread upgrade requirements, and claim top ranks on server leaderboards."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/bm add",
                        "desc": "Launch the interactive Beastmoon Form Manager to log tier progress."
                    },
                    {
                        "cmd": "/bm quick_add [form] [school] [tier]",
                        "desc": "Update form tiers instantly with autocomplete."
                    },
                    {
                        "cmd": "/bm check",
                        "desc": "Inspect progress towards Tier 5 with exact Lunari and Idol costs."
                    },
                    {
                        "cmd": "/bm forms",
                        "desc": "Render your full Beastmoon form collection as a visual badge grid."
                    },
                    {
                        "cmd": "/bm leaderboard",
                        "desc": "View top Beastmoon players in your server or cross-server network."
                    },
                    {
                        "cmd": "/bm max",
                        "desc": "Display elite players who have achieved max Tier 5 form masteries."
                    },
                    {
                        "cmd": "/bm log_channel [channel]",
                        "desc": "Designate a channel for public Beastmoon level-up announcements."
                    },
                    {
                        "cmd": "/bm redeem [code]",
                        "desc": "Instantly sync Beastmoon form upgrades from the Web Dashboard."
                    },
                    {
                        "cmd": "/bm forms_alt [member]",
                        "desc": "Inspect another player's public Beastmoon form collection."
                    },
                    {
                        "cmd": "/bm user [member]",
                        "desc": "View complete Beastmoon statistics for a guild member."
                    }
                ]
            }
        ]
    },
    {
        "id": "pet_tome",
        "icon": "ph-book-bookmark",
        "title": "W101: Pet Tome Database",
        "subtitle": "Instant stats, talent pools, and hatching guides for over 1,000 Wizard101 pets.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Search the complete pet encyclopedia to inspect base stats, wow factors, hatching permissions, and talent pools."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/pet lookup [query]",
                        "desc": "Search for any pet by name to inspect stats, egg timer, and talents."
                    }
                ]
            }
        ]
    },
    {
        "id": "spells",
        "icon": "ph-book-open-text",
        "title": "W101: Spell Tome Database",
        "subtitle": "Complete spell database with pip costs, accuracy ratings, shadow pips, and card effects.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Query the master spell registry for damage ranges, shadow pip requirements, utility effects, and trained locations."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/spells lookup [spell_name]",
                        "desc": "Display high-res card art, pip costs, and secondary card effects."
                    },
                    {
                        "cmd": "/spells school [school_name]",
                        "desc": "Browse all spells belonging to a specific school of magic."
                    },
                    {
                        "cmd": "/spells search [keyword]",
                        "desc": "Search spells by card description text or keyword effect."
                    }
                ]
            }
        ]
    },
    {
        "id": "teamup_w101",
        "icon": "ph-users-four",
        "title": "W101: Dungeon Team-Ups",
        "subtitle": "Automated dungeon LFG lobbies with one-click signups and private voice spawning.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Eliminate waiting at dungeon gates. Post interactive Team-Up boards for Waterworks, Darkmoor, or Novus raids. Players join with one click, select their school, and get auto-created voice channels when full."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/teamup create",
                        "desc": "Open an interactive modal form to post a new dungeon Team-Up lobby."
                    },
                    {
                        "cmd": "/teamup quick [dungeon] [realm]",
                        "desc": "Instantly post a Team-Up request for a specific dungeon."
                    },
                    {
                        "cmd": "/teamup list",
                        "desc": "Display all open Team-Up lobbies actively looking for players."
                    },
                    {
                        "cmd": "/teamup edit [team_id]",
                        "desc": "Modify dungeon settings, realm, or required school slots."
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
        "title": "W101: Reagent & TC Values",
        "subtitle": "Real-time community trade valuations for reagents, snacks, and rare Treasure Cards.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Instant price checks for rare reagents (Agave Nectar, Flying Cuttlefish) and Empower TC equivalence."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/reagent price [reagent_name]",
                        "desc": "Check average gold and Empower TC trade value for a reagent."
                    },
                    {
                        "cmd": "/reagent list",
                        "desc": "Browse tracked Wizard101 reagents sorted by popularity."
                    },
                    {
                        "cmd": "/reagent search [keyword]",
                        "desc": "Search reagents by craft category or location."
                    },
                    {
                        "cmd": "/tc value [card_name]",
                        "desc": "Look up community trade values for rare Treasure Cards."
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
                        "cmd": "/strategy view [boss_name]",
                        "desc": "Display detailed strategy notes for a specific boss fight."
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
        "subtitle": "Interactive catalog for housing tapestries, teleports, and community bobbleheads.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Track house tapestry collections, locate community teleports, and complete housing collections."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/tapestry list",
                        "desc": "View all cataloged house tapestries and destination links."
                    },
                    {
                        "cmd": "/tapestry set [name] [status]",
                        "desc": "Toggle ownership or housing location status of a tapestry."
                    },
                    {
                        "cmd": "/tapestry search [location]",
                        "desc": "Find housing tapestries leading to specific worlds or dungeons."
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
        "subtitle": "Automated guild wizard profile verifications and missing roster audits.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Audit guild member wizard levels, main schools, and send automated DMs to unverified members."
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
                        "cmd": "/wizard verify [member]",
                        "desc": "Manually verify a member's wizard character credentials."
                    },
                    {
                        "cmd": "/wizard profile [member]",
                        "desc": "Inspect full wizard profile stats for a guild member."
                    }
                ]
            }
        ]
    },
    {
        "id": "antiraid",
        "icon": "ph-shield-warning",
        "title": "Anti-Raid & Security",
        "subtitle": "Next-generation raid protection, visual scam fingerprinting, and quarantine holding.",
        "content": [
            {
                "type": "heading",
                "text": "Enterprise Security Engine"
            },
            {
                "type": "text",
                "text": "Fortify your community against raid bots, malicious link bursts, and compromised accounts with intelligent heat scoring and visual image fingerprint matching."
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
                        "desc": "Register image attachments as instant visual scam blocks."
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
                        "desc": "Temporarily pause join detection during massive official events."
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
                        "cmd": "/warn preset [key]",
                        "desc": "Issue a warning using a saved moderation preset."
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
                "text": "Stream server audit events (message edits/deletions, role updates, voice activity, member joins) to isolated webhook channels."
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
        "title": "Staff Tools & Appeals",
        "subtitle": "Interactive ban appeal processing, warning presets, and community suggestion boards.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Provide banned users a fair, web-authenticated appeal process while streaming review cards to staff channels."
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
                        "desc": "Warn a user instantly using a saved preset key."
                    },
                    {
                        "cmd": "/appeals setup [channel]",
                        "desc": "Enable ban appeals and set staff review channel."
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
                    },
                    {
                        "cmd": "/brand set [key] [value]",
                        "desc": "Customize server branding headers on bot embeds."
                    },
                    {
                        "cmd": "/brand view",
                        "desc": "View active server embed branding configuration."
                    },
                    {
                        "cmd": "/brand clear",
                        "desc": "Reset embed branding back to SeanBot defaults."
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
                "text": "Give members a safe, private way to flag rule violations or harassment directly to moderators."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/report submit [user] [reason]",
                        "desc": "Submit a private rule violation report to staff."
                    },
                    {
                        "cmd": "Report User (Context Menu)",
                        "desc": "Right-click any user -> Apps -> Report User to submit report."
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
                "text": "Precision Event Reminders"
            },
            {
                "type": "text",
                "text": "Ensure your community never misses a raid or guild meeting. Schedule multi-interval alerts (24h, 1h, 15m) that ping designated roles automatically."
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
                        "cmd": "/timeping cancel [event_id]",
                        "desc": "Cancel an active event or scheduled alert."
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
                        "cmd": "/timeping auto-watch add [channel]",
                        "desc": "Auto-watch a specific channel for event posts."
                    },
                    {
                        "cmd": "/countdown create [title] [time]",
                        "desc": "Create a live dynamic countdown timer in chat."
                    },
                    {
                        "cmd": "/countdown list",
                        "desc": "List active countdown timers in the channel."
                    }
                ]
            }
        ]
    },
    {
        "id": "timezones",
        "icon": "ph-globe-stand",
        "title": "Timezones & World Clocks",
        "subtitle": "Seamless timezone detection, comparisons, and interactive community time maps.",
        "content": [
            {
                "type": "heading",
                "text": "Global Time Synchronization"
            },
            {
                "type": "text",
                "text": "Eliminate timezone math for international gaming groups. Members can detect or set their timezone to display local times and view live community time maps."
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
                "text": "Convert event times between timezones and generate Discord `<t:unix:F>` dynamic timestamp markdown tags that display in every member's local time."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/time convert [time] [from_tz] [to_tz]",
                        "desc": "Convert a specific time string from one timezone to another."
                    },
                    {
                        "cmd": "/time timestamp [time] [timezone]",
                        "desc": "Generate dynamic Discord timestamp markdown tags."
                    },
                    {
                        "cmd": "/time diff [time1] [time2]",
                        "desc": "Calculate exact time difference between two times."
                    }
                ]
            }
        ]
    },
    {
        "id": "calendar",
        "icon": "ph-calendar",
        "title": "Community Calendar",
        "subtitle": "Real-time auto-updating community event dashboard and schedule manager.",
        "content": [
            {
                "type": "heading",
                "text": "Live Event Dashboard"
            },
            {
                "type": "text",
                "text": "Publish a live, auto-updating community calendar directly in your server. Members can view monthly events, upcoming tournaments, and scheduled raids."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/calendar view",
                        "desc": "View current event calendar manually in chat."
                    },
                    {
                        "cmd": "/calendar set_channel [channel]",
                        "desc": "Set up live auto-updating event calendar dashboard."
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
        "title": "Advanced Raid Polls",
        "subtitle": "Interactive selection menus, dynamic waitlists, and automated roster promotions.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Coordinate multi-slot raids with interactive dropdown menus, main roster caps, and automated waitlist promotions."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
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
                "text": "Unite allied communities. Posting a Team-Up lobby automatically broadcasts synced proxy embeds to partner servers."
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
                "text": "Members join a generator voice channel and SeanBot instantly creates a private, custom voice channel for them with full owner controls."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/tempvc setup [category]",
                        "desc": "Set up Join-to-Create generator voice channel."
                    },
                    {
                        "cmd": "/tempvc claim",
                        "desc": "Claim ownership of an orphaned temporary voice channel."
                    },
                    {
                        "cmd": "/tempvc save [template]",
                        "desc": "Save your current temp channel setup as a template."
                    },
                    {
                        "cmd": "/tempvc load [template]",
                        "desc": "Create a new temp voice channel using a saved template."
                    },
                    {
                        "cmd": "/tempvc name [new_name]",
                        "desc": "Rename your active temporary voice channel."
                    },
                    {
                        "cmd": "/tempvc limit [count]",
                        "desc": "Set maximum member limit for your voice channel."
                    },
                    {
                        "cmd": "/tempvc lock",
                        "desc": "Lock temp channel to prevent new members joining."
                    },
                    {
                        "cmd": "/tempvc unlock",
                        "desc": "Unlock temp channel for everyone."
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
                "text": "Deploy interactive support panels where members click to open private ticket channels. Staff members can claim tickets, set priority levels, and post internal notes."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/ticket panel [name]",
                        "desc": "Deploy interactive support ticket panel."
                    },
                    {
                        "cmd": "/ticket setup_channel",
                        "desc": "Automatically create open-ticket channel with panel."
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
                        "desc": "Set priority level for active ticket (Low, Medium, High, Emergency)."
                    },
                    {
                        "cmd": "/ticket staffsay [msg]",
                        "desc": "Post private staff discussion note inside ticket."
                    },
                    {
                        "cmd": "/ticket close [reason]",
                        "desc": "Close ticket and save transcript archive."
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
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/activity setup [days]",
                        "desc": "Opt server into activity tracking and set inactivity threshold."
                    },
                    {
                        "cmd": "/activity status",
                        "desc": "View your current server activity ranking and score."
                    },
                    {
                        "cmd": "/activity refresh",
                        "desc": "Force immediate recalculation of active member roles."
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
                "text": "When a message receives star reactions (\u2b50), SeanBot posts a highlight embed to the starboard channel."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/starboard setup [channel]",
                        "desc": "Set target starboard showcase channel."
                    },
                    {
                        "cmd": "/starboard threshold [num]",
                        "desc": "Set required star reactions to trigger highlight."
                    },
                    {
                        "cmd": "/starboard channel",
                        "desc": "Inspect currently configured starboard channel."
                    },
                    {
                        "cmd": "/starboard stats server",
                        "desc": "View server-wide starboard statistics."
                    },
                    {
                        "cmd": "/starboard stats user [member]",
                        "desc": "View starboard statistics for a specific member."
                    }
                ]
            }
        ]
    },
    {
        "id": "emojis",
        "icon": "ph-smiley-sticker",
        "title": "Emoji Suite & Locks",
        "subtitle": "Track emoji usage, role-lock custom emojis, and manage chat cooldowns.",
        "content": [
            {
                "type": "heading",
                "text": "Overview"
            },
            {
                "type": "text",
                "text": "Track chat and reaction usage to purge unused emojis and restrict custom emojis to specific roles."
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
                "text": "Allow message authors or staff to ping users who reacted to an event announcement."
            },
            {
                "type": "commands",
                "title": "Commands Reference",
                "items": [
                    {
                        "cmd": "/reactionping menu",
                        "desc": "Open reaction ping management panel."
                    },
                    {
                        "cmd": "/reactionping type [method]",
                        "desc": "Set ping method to temp roles or direct mentions."
                    },
                    {
                        "cmd": "/reactionping roles",
                        "desc": "Manage roles permitted to trigger reaction pings."
                    },
                    {
                        "cmd": "/reactionping limits [max]",
                        "desc": "Adjust maximum user limit for reaction pings."
                    },
                    {
                        "cmd": "/reactionping authors",
                        "desc": "Configure author permission checks for reaction pings."
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
                "text": "Draft, design, preview, and output custom rich Discord embeds directly in chat."
            },
            {
                "type": "heading",
                "text": "Choosing What You Are Building"
            },
            {
                "type": "text",
                "text": "Start by deciding whether the embed is a one-time message, an automated trigger, or an interactive tool. Manual embeds are best for announcements, rules, and polished staff posts. Trigger embeds are best for welcome messages, leave logs, boost alerts, recurring posts, command responses, ban appeal cards, and suggestion cards. Ticket Creation Panel embeds are best when members should press a button to open a private support channel."
            },
            {
                "type": "list",
                "title": "Recommended Workflows",
                "items": [
                    "Announcement or rules post: write the content, add fields for sections, add link buttons only when users need to open external resources, then send manually.",
                    "Welcome or event automation: write with placeholders such as `{user_mention}`, `{guild_name}`, and `{member_count}`, then select the matching trigger in the publish step.",
                    "Ban appeal or suggestion workflow: configure the channel in Staff Tools first, design the embed, then select the Ban Appeal or Suggestion trigger so SeanBot posts to the managed staff channel.",
                    "Ticket panel: design the support message, add one or more non-link buttons in the Button Builder, select Ticket Creation Panel in the publish step, choose the ticket category, and deploy."
                ]
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
                    "Open Staff Tools first and set the private ban appeal review channel. The Embed Builder uses that channel automatically for appeal review cards.",
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
                    "Open Staff Tools first and set the suggestion channel. The Embed Builder will lock the Suggestion trigger to that managed channel.",
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
                    "Role picker: use buttons with role action presets when the goal is assigning roles, not opening tickets.",
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
                        "desc": "Clear automated mention reply for a user (Admin only)."
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
                        "cmd": "/remindme [time] [text]",
                        "desc": "Set a personal reminder with natural date parsing."
                    },
                    {
                        "cmd": "/reminders",
                        "desc": "View and cancel active personal reminders."
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
                        "cmd": "/translate [text] [to_lang]",
                        "desc": "Translate custom text into target language."
                    },
                    {
                        "cmd": "/translate channel [lang]",
                        "desc": "Enable automatic message translation in channel."
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
                "items": [
                    {
                        "cmd": "/threadwatch add [thread]",
                        "desc": "Add thread to auto-unarchive watch list."
                    },
                    {
                        "cmd": "/threadwatch list",
                        "desc": "View all actively monitored server threads."
                    },
                    {
                        "cmd": "/threadwatch remove [thread]",
                        "desc": "Remove thread from watch list."
                    },
                    {
                        "cmd": "/threadwatch setup",
                        "desc": "Configure thread watcher default intervals."
                    }
                ]
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
                    },
                    {
                        "cmd": "/voice claim",
                        "desc": "Claim ownership of an orphaned voice channel."
                    },
                    {
                        "cmd": "/voice kick [member]",
                        "desc": "Kick a member out of your temp voice channel."
                    },
                    {
                        "cmd": "/voice ban [member]",
                        "desc": "Ban a member from joining your voice channel."
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
                        "cmd": "/stats setup",
                        "desc": "Set up live counter channels (Total Members, Humans, Bots)."
                    },
                    {
                        "cmd": "/stats growth",
                        "desc": "Generate visual server member growth chart."
                    },
                    {
                        "cmd": "/stats channels",
                        "desc": "View status of all configured stat counter channels."
                    },
                    {
                        "cmd": "/stats refresh",
                        "desc": "Force immediate refresh of all live counter channel names."
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
                "text": "Connect multiple Discord servers into a unified real-time communications network."
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
                        "cmd": "/slap [user]",
                        "desc": "Slap a user with fun randomized items."
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
            },
            {
                "type": "heading",
                "text": "How do I grant permissions for Anti-Raid or Moderation?"
            },
            {
                "type": "text",
                "text": "Make sure SeanBot's role is placed high in the Server Settings role hierarchy."
            }
        ]
    }
];
