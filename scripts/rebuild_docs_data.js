// Normalize and enrich docs-data.js while preserving feature-specific command references.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'docs-data.js');
const source = fs.readFileSync(dataPath, 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\n;globalThis.__docs = docsData;`, context);

const original = context.__docs;
const removedIds = new Set(['automod_filters', 'welcome_farewell', 'polls']);
const seen = new Set();
const docs = original.filter((doc) => {
    if (removedIds.has(doc.id) || seen.has(doc.id)) return false;
    seen.add(doc.id);
    return true;
});

function replaceDoc(id, replacement) {
    const index = docs.findIndex((doc) => doc.id === id);
    if (index >= 0) docs[index] = replacement;
    else docs.push(replacement);
}

function addBefore(id, beforeId, doc) {
    if (docs.some((item) => item.id === id)) return;
    const index = docs.findIndex((item) => item.id === beforeId);
    docs.splice(index >= 0 ? index : docs.length, 0, doc);
}

function insertSetup(id, title, items, text = '') {
    const doc = docs.find((item) => item.id === id);
    if (!doc || doc.content.some((item) => item.type === 'heading' && item.text === title)) return;
    const insertion = [{ type: 'heading', text: title }];
    if (text) insertion.push({ type: 'text', text });
    insertion.push({ type: 'list', items });
    const commandIndex = doc.content.findIndex((item) => item.type === 'commands');
    doc.content.splice(commandIndex >= 0 ? commandIndex : doc.content.length, 0, ...insertion);
}

replaceDoc('quickstart', {
    id: 'quickstart',
    icon: 'ph-rocket-launch',
    title: 'Quick Start: Set Up SeanBot from A to Z',
    subtitle: 'A practical first-install checklist for permissions, modules, logging, security, staff access, and testing.',
    content: [
        { type: 'heading', text: 'Before You Install' },
        { type: 'list', items: [
            'Use a Discord account with Manage Server. Server ownership or Administrator is recommended for the first setup.',
            'Create a private staff channel for testing commands and a private log channel such as #seanbot-logs.',
            'Decide which existing roles are administrators, moderators, support staff, event staff, and ordinary members.',
            'Keep Discord role hierarchy in mind: SeanBot can only manage members and roles below its highest role.'
        ] },
        { type: 'heading', text: '1. Invite and Place the Bot Role' },
        { type: 'list', items: [
            'Invite SeanBot from the official website and select the server you want to configure.',
            'Open Server Settings > Roles and move the SeanBot role above every role it must assign, remove, quarantine, mute, or manage.',
            'Do not remove View Channel, Send Messages, Embed Links, Attach Files, Read Message History, or Use Application Commands from channels where the bot is expected to work.',
            'Add feature-specific permissions only where needed. Create Expressions is required for approved emoji suggestions; Manage Roles is required for role automation.'
        ] },
        { type: 'heading', text: '2. Confirm the Installation' },
        { type: 'commands', title: 'First Checks', items: [
            { cmd: '/dashboard', desc: 'Open your server dashboard.' },
            { cmd: '/serverinfo', desc: 'Confirm SeanBot can read the server and member information.' },
            { cmd: '/staff diagnose', desc: 'Check role hierarchy, channel access, and important bot permissions.' },
            { cmd: '/serveradmin modules', desc: 'See which feature modules are enabled for this server.' }
        ] },
        { type: 'heading', text: '3. Open the Dashboard and Control Access' },
        { type: 'list', items: [
            'Sign in with Discord, choose your server, and open Module Settings.',
            'New servers start with optional modules disabled. Enable only the pages and features you intend to configure.',
            'Open Server Access before inviting other staff into the dashboard. Assign page access and individual actions to trusted roles using least privilege.',
            'Use Dashboard Logs to confirm who changed settings, deleted records, approved requests, or performed dashboard actions.'
        ] },
        { type: 'heading', text: '4. Configure Logging First' },
        { type: 'list', items: [
            'Enable Logging in Module Settings, then open Log Config.',
            'Choose All logs in one channel for the fastest setup, or Separate channels when moderation, security, member, voice, and staff logs must be isolated.',
            'Enable moderation, security, staff workflows, public reports, ban appeals, emoji suggestions, tickets, and dashboard actions as needed.',
            'Perform one harmless dashboard change and one test command, then verify both appear in the expected log channel.'
        ] },
        { type: 'heading', text: '5. Configure Security Safely' },
        { type: 'list', items: [
            'Enable Anti-Raid and open its dashboard page.',
            'Choose trusted staff roles, safe domains, alert channels, and a quarantine role placed below SeanBot.',
            'Start with Canary mode so detections are logged without automatically punishing members.',
            'Run /antiraid audit and /antiraid simulate, review the output, then enable enforcement only after your trusted roles and thresholds are correct.'
        ] },
        { type: 'heading', text: '6. Prepare Staff Workflows' },
        { type: 'list', items: [
            'Confirm moderator roles have only the Discord permissions they need and remain below the server owner.',
            'Configure warnings and moderation presets before staff begin issuing cases.',
            'Create private review channels for ban appeals, public reports, community suggestions, emoji suggestions, tickets, and leave requests before enabling those modules.',
            'Assign reviewer or support roles on each feature page and submit one test request from a non-staff account.'
        ] },
        { type: 'heading', text: '7. Add Optional Community Features' },
        { type: 'list', items: [
            'Events and time: Timezones, TimePing, Calendar, Event Countdowns, Raid Polls, and Reminders.',
            'Engagement: Starboard, AutoPin, Reaction Pings, Sticky Messages, Polls, Team-Ups, and Returning Roles.',
            'Server tools: Temporary Voice Channels, Server Counters, Activity Tracking, Voice Analytics, Emoji Analytics, and Last Message tracking.',
            'Content tools: Embed Builder, Emoji Manager, reactions, aliases, translation, and custom replies.',
            'Cross-server tools: Federation thread networks, regular channel relays, identities, and federated Team-Ups.',
            'Wizard101 tools: damage, items, decks, Beastmoon, pets, spell lookup, strategies, raid recap, tapestries, and Team-Ups.'
        ] },
        { type: 'heading', text: '8. Final Verification' },
        { type: 'list', items: [
            'Run /staff diagnose again after configuration.',
            'Test one member command, one moderator command, one dashboard change, one approval workflow, and one scheduled or automated feature.',
            'Verify the bot cannot manage roles above its own role and that ordinary members cannot access staff-only dashboard actions.',
            'Confirm logs identify the actor, action, target, and result in normal language.',
            'Review Module Settings and disable anything you are not using.'
        ] },
        { type: 'callout', icon: '!', title: 'If a command does not appear', text: 'Check that its module is enabled, the command is allowed under Server Settings > Integrations, the user has the required role or Discord permission, and SeanBot can view the current channel. Discord may take a short time to refresh newly synchronized commands.' }
    ]
});

replaceDoc('core', {
    id: 'core',
    icon: 'ph-layout',
    title: 'Dashboard, Modules & Staff Access',
    subtitle: 'Understand module switches, delegated dashboard permissions, audit history, and command availability.',
    content: [
        { type: 'heading', text: 'Module Settings' },
        { type: 'text', text: 'Optional features are controlled per server. Disabling a module hides its dashboard page and blocks its protected API actions; it does not delete saved configuration. Re-enable the module to continue using the existing settings.' },
        { type: 'list', items: [
            'Open Module Settings and enable the feature before attempting its setup commands.',
            'Use search and Enabled Only to review the active configuration without enabling unrelated tools.',
            'After disabling a scheduled feature, check its guide for any messages, channels, or roles that should be removed manually.'
        ] },
        { type: 'heading', text: 'Server Access' },
        { type: 'text', text: 'Server Access delegates dashboard pages and individual actions to Discord roles. A role can receive read-only access to a page without receiving approval, deletion, or configuration actions.' },
        { type: 'list', items: [
            'Keep full administrator access limited to server administrators.',
            'Give support roles only ticket actions, reviewers only their queue actions, and event staff only event or scheduling controls.',
            'Test delegated access with a non-administrator account before relying on it.',
            'Review Dashboard Logs regularly and remove access when a staff role changes purpose.'
        ] },
        { type: 'commands', title: 'Related Commands', items: [
            { cmd: '/dashboard', desc: 'Open the dashboard for the current server.' },
            { cmd: '/serveradmin modules', desc: 'List the server module states.' },
            { cmd: '/serveradmin module [module] [enabled]', desc: 'Enable or disable one module from Discord.' },
            { cmd: '/prefix [new_prefix]', desc: 'View or change the optional legacy text-command prefix.' },
            { cmd: '/staff diagnose', desc: 'Check common permission, channel, and hierarchy problems.' }
        ] }
    ]
});

addBefore('server_admin', 'antiraid', {
    id: 'server_admin',
    icon: 'ph-wrench',
    title: 'Server Administration Helpers',
    subtitle: 'Manage modules, roles, channels, and controlled bot messages without leaving Discord.',
    content: [
        { type: 'heading', text: 'Before Using These Commands' },
        { type: 'list', items: [
            'Place SeanBot above every role it needs to create, edit, delete, add, or remove.',
            'The person running a role command must also be allowed to manage the target role.',
            'Use Dashboard Logs and server logs to retain an audit trail for dashboard and Discord changes.',
            'The say command suppresses mass mentions, but staff should still use it only in approved channels.'
        ] },
        { type: 'commands', title: 'Commands', items: [
            { cmd: '/serveradmin modules', desc: 'List all optional module states.' },
            { cmd: '/serveradmin module [module] [enabled]', desc: 'Enable or disable a module.' },
            { cmd: '/serveradmin addrole [name] [color]', desc: 'Create a role below SeanBot.' },
            { cmd: '/serveradmin editrole [role]', desc: 'Change a role name, color, display, or mentionable state.' },
            { cmd: '/serveradmin delrole [role]', desc: 'Delete a manageable role.' },
            { cmd: '/serveradmin memberrole [member] [role] [action]', desc: 'Add, remove, or toggle a member role.' },
            { cmd: '/serveradmin editchannel [channel]', desc: 'Edit a text channel name, topic, NSFW state, or slowmode.' },
            { cmd: '/serveradmin mods', desc: 'List roles that currently have moderation permissions.' },
            { cmd: '/serveradmin say [message]', desc: 'Send a plain message through SeanBot.' }
        ] }
    ]
});

addBefore('recap_tracker', 'pet_tome', {
    id: 'recap_tracker',
    icon: 'ph-notebook',
    title: 'W101 Raid & Activity Recap',
    subtitle: 'Record wins, losses, keys, hosted raids, school swaps, and wipe witnesses for server recap statistics.',
    content: [
        { type: 'heading', text: 'Setup' },
        { type: 'list', items: [
            'Choose the roster or recap channel with /w101 set_roster_channel.',
            'Confirm event staff can use the W101 tracking commands in that channel.',
            'Record a test result and verify it appears in the intended recap or analytics view.',
            'Use /w101 remove_roster_channel before deleting or replacing the configured channel.'
        ] },
        { type: 'commands', title: 'Tracking Commands', items: [
            { cmd: '/w101 win', desc: 'Record a win.' },
            { cmd: '/w101 loss', desc: 'Record a loss.' },
            { cmd: '/w101 key_hosted', desc: 'Record a hosted key.' },
            { cmd: '/w101 raid_hosted', desc: 'Record a hosted raid.' },
            { cmd: '/w101 school_swap', desc: 'Record a school swap.' },
            { cmd: '/w101 wipe_witnessed', desc: 'Record a witnessed wipe.' }
        ] }
    ]
});

addBefore('discord_apps', 'faq', {
    id: 'discord_apps',
    icon: 'ph-cursor-click',
    title: 'Right-Click Apps',
    subtitle: 'Use SeanBot directly from Discord message and member context menus.',
    content: [
        { type: 'heading', text: 'How to Open an App' },
        { type: 'list', items: [
            'Right-click a message or member, choose Apps, then select the SeanBot action.',
            'On mobile, press and hold the message or open the member menu before choosing Apps.',
            'The same module, role, channel, and Discord permission checks used by slash commands still apply.',
            'Available apps include reporting, warnings, reaction tools, translation, reminders, time conversion, timezone lookup, event creation, and Wizard information.'
        ] },
        { type: 'commands', title: 'Common Apps', items: [
            { cmd: 'Apps > Report User', desc: 'Open a private user report form.' },
            { cmd: 'Apps > Vote Report', desc: 'Start a public vote report from a message.' },
            { cmd: 'Apps > Translate', desc: 'Translate the selected message.' },
            { cmd: 'Apps > Remind Me', desc: 'Create a reminder from a message.' },
            { cmd: 'Apps > Convert Time', desc: 'Convert times found in the selected message.' },
            { cmd: 'Apps > Ping Reactors', desc: 'Notify eligible members who reacted.' },
            { cmd: 'Apps > React with emoji', desc: 'Add an emoji through SeanBot.' }
        ] }
    ]
});

const setupEnhancements = {
    antiraid: ['Enable Anti-Raid in Module Settings.', 'Choose trusted roles, safe domains, alert channels, and a quarantine role below SeanBot.', 'Turn on Canary mode first so detections are logged without automatic punishment.', 'Run /antiraid audit and /antiraid simulate, review false positives, then enable enforcement.', 'Use burst levels, channel sensitivity, and role or channel multipliers only after the base setup behaves correctly.'],
    moderation: ['Place SeanBot above every member and role it must moderate.', 'Give staff the specific Discord permissions required for each action instead of Administrator where possible.', 'Configure moderation and dashboard-action logs before staff begin using commands.', 'Test kick, timeout, purge, lock, and archive behavior in a private channel with a test role.'],
    warn_cog: ['Confirm the warnings database and Logging module are available.', 'Use /modpreset set to create consistent reasons for common staff actions.', 'Test /warn add on a test member, review /warn list, then clear the test warning.', 'Limit warning management to trusted moderator roles through Discord command permissions and dashboard access.'],
    reports: ['Enable Public Reports and choose the public review channel and log channel.', 'Choose which roles may start reports, vote, review, force a decision, or close a report.', 'Set approval and decline thresholds in Voting & Thresholds; use Access & Actions only for who may perform each action.', 'Submit a test report, vote, withdraw a vote, and confirm the status bar and dashboard detail view update.', 'Verify approval and decline actions are recorded in the configured staff logs.'],
    calendar: ['Enable Events and choose the calendar channel with /calendar set_channel.', 'Confirm SeanBot can send embeds and read message history in that channel.', 'Create or schedule a test event, then use /calendar view to verify it appears.'],
    raids: ['Choose the raid channel with /set_raid_channel.', 'Confirm event staff can create, edit, lock, and cancel raids.', 'Create a short test raid and verify signup controls, reminders, and logs before announcing a real event.'],
    autopin: ['Enable the Engagement module.', 'Set the default reaction threshold and trigger emoji.', 'Exclude private, staff, or high-volume channels that should never auto-pin.', 'Add channel overrides only where a different threshold is genuinely needed.', 'Test with a staff message and remove the test pin afterward.'],
    reactions: ['Enable Emoji Analytics if you want historical reaction statistics.', 'Ensure SeanBot can Read Message History and Add Reactions in participating channels.', 'Use the reaction commands for statistics; use Reaction Pings only when you intend to notify reactors.', 'Configure ignored channels before collecting data from private areas.'],
    autoreply: ['Each member can use /r set to define their mention reply, then /r toggle to pause or resume it.', 'Use /r remove to delete the saved reply.', 'Administrators can clear an inappropriate reply with /admin clear.', 'Use server rules and logging to prevent replies from being used for harassment or unwanted mentions.'],
    voicestats: ['Enable Voice Analytics in Module Settings.', 'Confirm the bot can View Channels and observe voice state updates in the channels you want measured.', 'Exclude or restrict private channels according to your server privacy policy.', 'Allow enough activity to collect before expecting meaningful leaderboards, loyalty, streak, or graph results.'],
    returning_roles: ['Create the returning-member role and place it below SeanBot.', 'Run /returning_role set with the role to assign when eligible members rejoin.', 'Use /returning_role view to confirm the saved role.', 'Test with a controlled account before relying on the automation.'],
    activitytracker: ['Create active and inactive roles and place both below SeanBot.', 'Run /activity setup or use Server Counters > Activity Tracker Settings.', 'Choose a threshold that matches how often your community normally participates.', 'Review the first role update cycle before enabling the feature for a large member base.'],
    general_sys: ['No module setup is required for basic server lookup commands.', 'Use /dashboard for configuration and /staff diagnose when a feature cannot access a channel or role.', 'Use /serveradmin helpers only after checking Discord role hierarchy and audit logging.']
};

for (const [id, items] of Object.entries(setupEnhancements)) {
    insertSetup(id, 'Setup & Verification', items);
}

const commandReplacements = {
    '/warn preset [key]': [
        { cmd: '/modpreset set [key] [reason]', desc: 'Save a reusable moderation reason.' },
        { cmd: '/modpreset list', desc: 'List saved moderation reasons.' },
        { cmd: '/modpreset warn [member] [preset]', desc: 'Warn a member with a saved reason.' }
    ],
    '/brand set [key] [value]': [], '/brand view': [], '/brand clear': [],
    '/countdown create [title] [time]': [{ cmd: '/timeping schedule', desc: 'Schedule a timed ping through the guided command.' }],
    '/countdown list': [{ cmd: '/timeping my-events', desc: 'List timed events you created.' }],
    '/tempvc setup [category]': [],
    '/tempvc claim': [{ cmd: '/vc claim', desc: 'Claim ownership of an eligible temporary voice channel.' }],
    '/tempvc save [template]': [{ cmd: '/vc save', desc: 'Save the current temporary voice channel as a personal template.' }],
    '/tempvc load [template]': [{ cmd: '/vc load', desc: 'Load a saved temporary voice channel template.' }],
    '/tempvc name [new_name]': [], '/tempvc limit [count]': [], '/tempvc lock': [], '/tempvc unlock': [],
    '/activity status': [], '/activity refresh': [],
    '/starboard setup [channel]': [{ cmd: '/star set [channel]', desc: 'Set the starboard channel and basic options.' }],
    '/starboard threshold [num]': [{ cmd: '/star advanced', desc: 'Configure star threshold, age, color, and self-star rules.' }],
    '/starboard channel': [{ cmd: '/star info', desc: 'View the active starboard channel and settings.' }],
    '/starboard stats server': [{ cmd: '/star stats dashboard', desc: 'Open server starboard statistics.' }],
    '/starboard stats user [member]': [{ cmd: '/star stats leaderboard', desc: 'View the starboard member leaderboard.' }],
    '/reactionping menu': [],
    '/reactionping type [method]': [{ cmd: '/autoping type [method]', desc: 'Choose direct mentions or a temporary role.' }],
    '/reactionping roles': [{ cmd: '/autoping roles', desc: 'Choose staff roles allowed to ping reactors.' }],
    '/reactionping limits [max]': [{ cmd: '/autoping limits', desc: 'Set reactor notification limits.' }],
    '/reactionping authors': [{ cmd: '/autoping authors', desc: 'Control whether message authors may ping their own reactors.' }],
    '/r admin clear [user]': [{ cmd: '/admin clear [user]', desc: 'Delete another member\'s saved reply.' }],
    '/remindme [time] [text]': [{ cmd: '/reminders', desc: 'Open your reminder manager.' }],
    '/translate [text] [to_lang]': [{ cmd: 'Apps > Translate', desc: 'Right-click a message and translate it from Discord\'s Apps menu.' }],
    '/translate channel [lang]': [],
    '/threadwatch add [thread]': [], '/threadwatch list': [], '/threadwatch remove [thread]': [], '/threadwatch setup': [],
    '/voice claim': [], '/voice kick [member]': [], '/voice ban [member]': [],
    '/stats setup': [{ cmd: '/counter setup', desc: 'Create counters from the guided setup.' }],
    '/stats channels': [{ cmd: '/counter list', desc: 'List active server counter channels.' }],
    '/stats refresh': [{ cmd: '/stats overview', desc: 'View current server statistics.' }],
    '/slap [user]': [{ cmd: '/slap user [member]', desc: 'Send a playful slap interaction to a member.' }]
};

for (const doc of docs) {
    for (const item of doc.content || []) {
        if (item.type !== 'commands') continue;
        item.items = item.items.flatMap((command) => commandReplacements[command.cmd] ?? [command]);
        const commandNames = new Set();
        item.items = item.items.filter((command) => {
            if (commandNames.has(command.cmd)) return false;
            commandNames.add(command.cmd);
            return true;
        });
    }
}

const antiRaidDoc = docs.find((doc) => doc.id === 'antiraid');
if (antiRaidDoc) {
    for (const item of antiRaidDoc.content || []) {
        if (item.type !== 'list') continue;
        item.items = item.items
            .filter((entry) => !entry.includes('AutoMod Filters'))
            .map((entry) => entry.replace('Anti-Nuke Risk Score shows', 'The integrated Risk Score view shows'));
    }
}

const raidPollsDoc = docs.find((doc) => doc.id === 'raidpolls');
if (raidPollsDoc) raidPollsDoc.title = 'Polls & Raid Rosters';

const wordingReplacements = new Map([
    ['Precision hit calculators', 'Damage calculators'],
    ['Eliminate math guesswork during high-stakes raids.', 'Calculate expected damage for raids and regular combat.'],
    ['Instantly dispatch', 'Send'],
    ['instantly with autocomplete', 'with autocomplete'],
    ['Display elite players', 'Display players'],
    ['Instantly sync', 'Sync'],
    ['Instant Wizard101 pet stats', 'Wizard101 pet stats'],
    ['Instantly post', 'Post'],
    ['instant visual scam blocks', 'visual scam blocks'],
    ['massive official events', 'large official events'],
    ['Warn a user instantly', 'Warn a user'],
    ['Precision Event Reminders', 'Event Reminders'],
    ['Seamless timezone detection', 'Timezone detection'],
    ['SeanBot instantly creates', 'SeanBot creates']
]);

function cleanWording(value) {
    if (typeof value === 'string') {
        let result = value;
        for (const [before, after] of wordingReplacements) result = result.replaceAll(before, after);
        return result;
    }
    if (Array.isArray(value)) return value.map(cleanWording);
    if (value && typeof value === 'object') {
        for (const key of Object.keys(value)) value[key] = cleanWording(value[key]);
    }
    return value;
}

docs.forEach(cleanWording);

const quickstart = docs.find((doc) => doc.id === 'quickstart');
const core = docs.find((doc) => doc.id === 'core');
const ordered = [quickstart, core, ...docs.filter((doc) => doc !== quickstart && doc !== core)];
fs.writeFileSync(
    dataPath,
    `// SeanBot documentation. Normalized by scripts/rebuild_docs_data.js.\nconst docsData = ${JSON.stringify(ordered, null, 4)};\n`,
    'utf8'
);
console.log(`Wrote ${ordered.length} unique documentation guides to ${dataPath}`);
