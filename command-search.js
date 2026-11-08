// Plain-language command search. The generated descriptions use the bot's own
// vocabulary, so a reader who types "stop logging a channel" would miss
// /log ignore_log_add under a substring match. This turns a query into
// concepts (stop, log, channel), matches each concept against a command's
// name and description, and ranks by how much of the intent it covers.
const CommandSearch = (() => {
    const STOP_WORDS = new Set([
        'a', 'an', 'the', 'to', 'for', 'of', 'in', 'on', 'at', 'by', 'with',
        'from', 'my', 'me', 'i', 'we', 'our', 'you', 'your', 'it', 'its',
        'this', 'that', 'these', 'those', 'do', 'does', 'how', 'can', 'could',
        'should', 'would', 'please', 'when', 'where', 'what', 'which', 'who',
        'is', 'are', 'be', 'and', 'or', 'if', 'so', 'want', 'need', 'make',
        'makes', 'get', 'got', 'there', 'here', 'about', 'into', 'over',
        'again', 'just', 'only', 'also', 'all', 'any', 'some'
    ]);

    // Filler that adds no topic of its own, so it should not count against a
    // short description that is otherwise entirely on intent.
    const FILLERS = new Set([
        'anything', 'everything', 'something', 'someone', 'somebody', 'all',
        'any', 'some', 'other', 'more', 'once', 'back', 'automatically',
        'auto', 'default', 'existing', 'current', 'per', 'via', 'using',
        'use', 'used', 'custom', 'specific', 'certain', 'given', 'server',
        'guild', 'guilds', 'discord', 'id', 'ids'
    ]);

    // One entry per idea a reader might type. A word may belong to more than
    // one idea; the query keeps both and matching only needs one of them.
    const CONCEPTS = {
        stop: ['stop', 'stops', 'stopped', 'stopping', 'disable', 'disabled',
            'turn off', 'switch off', 'shut off', 'pause', 'halt', 'ignore',
            'ignored', 'unset', 'deactivate', 'suppress', 'silence', 'off'],
        start: ['start', 'enable', 'enabled', 'turn on', 'switch on', 'resume',
            'restore', 'reactivate', 'unignore', 'unadd', 'unmute', 'activate',
            'readd', 'turnoff'],
        remove: ['remove', 'delete', 'clear', 'reset', 'purge', 'wipe', 'drop'],
        set: ['set', 'change', 'edit', 'update', 'configure', 'config',
            'adjust', 'modify', 'choose', 'select', 'assign', 'rename'],
        add: ['add', 'create', 'new', 'register', 'setup', 'set up'],
        list: ['list', 'show', 'view', 'see', 'display', 'check', 'find',
            'lookup', 'search', 'status', 'info', 'inspect', 'where'],
        log: ['log', 'logs', 'logging', 'logger', 'audit', 'auditlog',
            'history', 'event', 'events', 'webhook'],
        channel: ['channel', 'channels', 'chan', 'room', 'rooms'],
        member: ['member', 'members', 'user', 'users', 'person', 'people',
            'account', 'accounts', 'moderator', 'moderators', 'staff'],
        message: ['message', 'messages', 'msg', 'chat', 'text', 'content',
            'post', 'posts'],
        role: ['role', 'roles', 'rank', 'ranks', 'permission', 'permissions',
            'perm', 'perms'],
        reaction: ['reaction', 'reactions', 'react', 'reacts', 'emoji',
            'emojis', 'emote', 'emotes'],
        welcome: ['welcome', 'welcomes', 'greeting', 'greetings'],
        goodbye: ['goodbye', 'farewell', 'leave', 'leaves', 'left',
            'departure'],
        reminder: ['remind', 'reminder', 'reminders', 'remember', 'schedule',
            'scheduled'],
        poll: ['poll', 'polls', 'vote', 'votes', 'voting', 'ballot', 'survey'],
        ticket: ['ticket', 'tickets', 'support', 'appeal', 'appeals',
            'application', 'applications'],
        giveaway: ['giveaway', 'giveaways', 'prize', 'prizes', 'gift', 'gifts'],
        timezone: ['timezone', 'timezones', 'zone', 'zones', 'tz', 'clock',
            'time', 'times'],
        raid: ['raid', 'raids', 'roster', 'rosters', 'team', 'teams', 'run',
            'runs', 'attendance'],
        ban: ['ban', 'bans', 'banned', 'banhammer'],
        unban: ['unban', 'unbans', 'unbanned', 'pardon'],
        kick: ['kick', 'kicks', 'kicked'],
        timeout: ['timeout', 'timeouts', 'mute', 'mutes', 'muted', 'jail'],
        warn: ['warn', 'warns', 'warning', 'warnings', 'strike', 'strikes',
            'infraction', 'infractions'],
        report: ['report', 'reports', 'reporting', 'modmail'],
        stats: ['stats', 'stat', 'statistics', 'leaderboard', 'leaderboards',
            'ranking', 'rankings', 'top'],
        embed: ['embed', 'embeds', 'embedbuilder', 'builder', 'component',
            'components'],
        reply: ['autoreply', 'autoreplies', 'reply', 'replies', 'responder',
            'autoresponder'],
        counter: ['counter', 'counters', 'membercount', 'servercount',
            'count'],
        presence: ['presence', 'online', 'offline', 'activity', 'activities'],
        loa: ['loa', 'absence', 'away', 'vacation', 'break'],
        federation: ['federation', 'federated', 'network', 'networks',
            'partner', 'partners', 'crossserver'],
        teamup: ['teamup', 'teamups', 'kiosk', 'sigil', 'sigils'],
        starboard: ['starboard', 'star', 'stars', 'pin', 'pins', 'pinned'],
        sticky: ['sticky', 'stickies'],
        honeypot: ['honeypot', 'honeypots', 'trap', 'bait'],
        antiraid: ['antiraid', 'security', 'scam', 'scammer', 'scammers',
            'nuke', 'lockdown', 'canary'],
        level: ['level', 'levels', 'xp', 'experience']
    };

    // A description that says the opposite of the query is a near miss, not a
    // match, even when every keyword is present.
    const OPPOSITES = {
        stop: ['enable', 'resume', 'start', 'activate', 'unignore', 'unadd',
            'readd', 'turn on', 'switch on'],
        start: ['disable', 'stop', 'ignore', 'deactivate', 'turn off',
            'switch off'],
        remove: ['add', 'create', 'register'],
        add: ['remove', 'delete', 'clear']
    };

    // Kept short on purpose: the goal is to fold plurals and participles
    // together, not to write a stemmer.
    function stem(word) {
        if (word.length > 4 && word.endsWith('ies')) {
            return `${word.slice(0, -3)}y`;
        }
        if (word.length > 5 && word.endsWith('ing')) {
            let base = word.slice(0, -3);
            if (/([b-df-hj-np-tv-z])\1$/.test(base)) base = base.slice(0, -1);
            else if (/(at|iz|iv|ur)$/.test(base)) base += 'e';
            return base;
        }
        if (word.length > 4 && word.endsWith('ed')) {
            let base = word.slice(0, -2);
            if (/([b-df-hj-np-tv-z])\1$/.test(base)) base = base.slice(0, -1);
            else if (/(at|iz|iv|ur|bl|pl|gl|cl|dl)$/.test(base)) base += 'e';
            return base;
        }
        if (word.length > 3 && word.endsWith('s') && !/(ss|us|is)$/.test(word)) {
            return word.slice(0, -1);
        }
        return word;
    }

    function wordForms(word) {
        const once = stem(word);
        return new Set([word, once, stem(once)]);
    }

    // Slash commands and underscored subcommands read as words, and a channel
    // name is an instance rather than a topic, so it never helps a query.
    function normalize(text) {
        return String(text || '')
            .toLowerCase()
            .replace(/<#[0-9]+>/g, ' ')
            .replace(/#[\w-]+/g, ' ')
            .replace(/[\u2019']/g, '')
            .replace(/[^a-z0-9]+/g, ' ')
            .trim();
    }

    function words(text) {
        return normalize(text).split(' ').filter(Boolean);
    }

    // Concept forms are built once: each single word keeps its raw spelling
    // and both stems, and a multi-word term is matched as a phrase.
    const CONCEPT_FORMS = new Map();
    const TERM_INDEX = new Map();
    const PHRASE_FORMS = [];

    function registerForm(concept, term) {
        const parts = term.split(' ');
        if (parts.length > 1) {
            PHRASE_FORMS.push({ concept, phrase: ` ${term} `, length: parts.length });
            return;
        }
        const forms = wordForms(term);
        for (const form of forms) {
            if (!TERM_INDEX.has(form)) TERM_INDEX.set(form, new Set());
            TERM_INDEX.get(form).add(concept);
        }
    }

    Object.entries(CONCEPTS).forEach(([concept, terms]) => {
        CONCEPT_FORMS.set(concept, terms.map(term => {
            const parts = term.split(' ');
            return {
                phrase: parts.length > 1 ? ` ${term} ` : null,
                forms: parts.length > 1 ? [] : [...wordForms(term)]
            };
        }));
        terms.forEach(term => registerForm(concept, term));
    });

    PHRASE_FORMS.sort((a, b) => b.length - a.length);

    function textIndex(text) {
        const normalized = normalize(text);
        const tokens = new Set();
        normalized.split(' ').filter(Boolean).forEach(word => {
            wordForms(word).forEach(form => tokens.add(form));
        });
        return { text: normalized, padded: ` ${normalized} `, tokens };
    }

    function formIn(index, form) {
        if (form.phrase) return index.padded.includes(form.phrase);
        return form.forms.some(word => index.tokens.has(word));
    }

    function conceptIn(index, concept) {
        return concept.forms.some(form => formIn(index, form));
    }

    function unknownConcept(word) {
        return {
            key: `word:${word}`,
            known: false,
            forms: [{ phrase: null, forms: [...wordForms(word)] }]
        };
    }

    function conceptForKey(key) {
        return {
            key,
            known: true,
            forms: CONCEPT_FORMS.get(key)
        };
    }

    // The concepts a query asks for, in the order they were typed. Repeated
    // ideas collapse, so "stop disabling logging" still needs only stop, log.
    function queryConcepts(text) {
        let remaining = ` ${normalize(text)} `;
        const found = new Map();

        PHRASE_FORMS.forEach(({ concept, phrase }) => {
            if (!remaining.includes(phrase)) return;
            if (!found.has(concept)) found.set(concept, conceptForKey(concept));
            remaining = remaining.split(phrase).join(' ');
        });

        words(remaining).forEach(word => {
            if (STOP_WORDS.has(word)) return;
            const mapped = TERM_INDEX.get(word) || TERM_INDEX.get(stem(word));
            if (mapped) {
                mapped.forEach(concept => {
                    if (!found.has(concept)) found.set(concept, conceptForKey(concept));
                });
            } else if (!found.has(`word:${word}`)) {
                found.set(`word:${word}`, unknownConcept(word));
            }
        });

        return [...found.values()];
    }

    function prepare(commandsDatabase) {
        const entries = [];
        (Array.isArray(commandsDatabase) ? commandsDatabase : []).forEach(category => {
            (category.commands || []).forEach(command => {
                entries.push({
                    order: entries.length,
                    categoryId: category.id,
                    categoryTitle: category.title,
                    command,
                    nameIndex: textIndex(command.name),
                    descIndex: textIndex(command.desc),
                    categoryIndex: textIndex(`${category.title} ${category.id}`)
                });
            });
        });
        return entries;
    }

    function conceptInWord(concept, word) {
        if (!concept.forms) return false;
        const forms = wordForms(word);
        return concept.forms.some(form => {
            if (form.phrase) return false;
            return form.forms.some(candidate => forms.has(candidate));
        });
    }

    function scoreEntry(entry, concepts, phrase) {
        const keys = new Set(concepts.map(concept => concept.key));
        const known = concepts.filter(concept => concept.known);
        let matched = 0;
        let knownMatched = 0;
        let score = 0;

        concepts.forEach(concept => {
            const inName = conceptIn(entry.nameIndex, concept);
            const inDesc = conceptIn(entry.descIndex, concept);
            const inCategory = conceptIn(entry.categoryIndex, concept);
            if (inName || inDesc || inCategory) {
                matched += 1;
                if (concept.known) knownMatched += 1;
            }
            if (inName) score += 9;
            if (inDesc) score += 4;
            if (inCategory) score += 1;
        });

        const coverage = known.length ? knownMatched / known.length : matched / concepts.length;

        // A phrase the reader typed verbatim is strong evidence, especially in
        // the command's own name.
        if (phrase) {
            if (entry.nameIndex.padded.includes(` ${phrase} `)) score += 24;
            if (entry.descIndex.padded.includes(` ${phrase} `)) score += 8;
        }

        // Prefer the command whose description is about this intent and not
        // three other topics as well. Extra words in the name matter more:
        // /ban is a better answer than /vc ban when no scope was named.
        const contentWords = entry.descIndex.text.split(' ').filter(word => word && !STOP_WORDS.has(word) && !FILLERS.has(word));
        const extra = contentWords.filter(word => !concepts.some(concept => conceptInWord(concept, word)));
        score -= Math.min(extra.length, 5) * 1.25;

        const nameWords = entry.nameIndex.text.split(' ').filter(word => word && !STOP_WORDS.has(word));
        const extraName = nameWords.filter(word => !concepts.some(concept => conceptInWord(concept, word)));
        score -= Math.min(extraName.length, 3) * 2;
        if (nameWords.length && !extraName.length) score += 8;

        // A read-only command is a related answer, not the action asked for.
        const actions = ['stop', 'start', 'remove', 'add', 'set'];
        if (actions.some(action => keys.has(action)) && entry.nameIndex.tokens.has('list')) {
            score -= 6;
        }

        Object.entries(OPPOSITES).forEach(([concept, terms]) => {
            if (!keys.has(concept)) return;
            terms.forEach(term => {
                const padded = ` ${term} `;
                if (entry.descIndex.padded.includes(padded)) score -= 10;
            });
        });

        return { entry, score, coverage, matched };
    }

    function search(entries, query) {
        const normalized = normalize(query);
        if (!normalized) {
            return { query: normalized, results: entries.map(entry => ({ entry, score: 0, coverage: 1, matched: 0 })) };
        }

        const concepts = queryConcepts(query);
        if (!concepts.length) {
            return { query: normalized, results: [] };
        }

        const scored = entries
            .map(entry => scoreEntry(entry, concepts, normalized))
            .filter(result => result.matched > 0 && result.coverage > 0);

        const known = concepts.filter(concept => concept.known);
        const required = known.length || concepts.length;
        const full = scored.filter(result => result.coverage >= 1);
        const near = scored.filter(result => result.coverage >= (required > 1 ? 1 - 1 / required : 0));
        const pool = full.length ? full : (near.length ? near : scored);

        pool.sort((left, right) => right.score - left.score || right.coverage - left.coverage || left.entry.order - right.entry.order);
        return { query: normalized, results: pool };
    }

    // Ranges in `text` that explain why a query matched this wording. Matching
    // follows the same concepts as ranking, so a result reached through
    // "ignore" highlights "ignore" even when the query said "stop".
    function matchRanges(text, query) {
        const source = String(text || '');
        const concepts = queryConcepts(query);
        if (!source || !concepts.length) return [];

        const singleForms = new Set();
        const phrases = new Set();
        concepts.forEach(concept => {
            (concept.forms || []).forEach(form => {
                if (form.phrase) {
                    phrases.add(form.phrase.trim().replace(/\s+/g, ' '));
                } else {
                    form.forms.forEach(word => singleForms.add(word));
                }
            });
        });

        const tokens = [];
        const wordPattern = /[A-Za-z0-9]+/g;
        let word;
        while ((word = wordPattern.exec(source))) {
            const normalized = normalize(word[0]);
            if (!normalized) continue;
            tokens.push({
                start: word.index,
                end: word.index + word[0].length,
                normalized,
                matches: [...wordForms(normalized)].some(form => singleForms.has(form))
            });
        }

        const ranges = tokens
            .filter(token => token.matches)
            .map(token => ({ start: token.start, end: token.end }));

        phrases.forEach(phrase => {
            const parts = phrase.split(' ');
            const lastStart = tokens.length - parts.length;
            for (let index = 0; index <= lastStart; index += 1) {
                const matches = parts.every((part, offset) => tokens[index + offset].normalized === part);
                if (!matches) continue;
                ranges.push({
                    start: tokens[index].start,
                    end: tokens[index + parts.length - 1].end
                });
            }
        });

        ranges.sort((left, right) => left.start - right.start || right.end - left.end);
        const merged = [];
        ranges.forEach(range => {
            const previous = merged[merged.length - 1];
            if (previous && range.start <= previous.end) {
                previous.end = Math.max(previous.end, range.end);
            } else {
                merged.push({ ...range });
            }
        });
        return merged;
    }

    return { prepare, search, matchRanges, normalize, queryConcepts };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CommandSearch;
}
