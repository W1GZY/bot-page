/* ==========================================================================
   Page navigation, showcase, filters, reveals, counters
   ========================================================================== */
// Single-page navigation and section jumping
    const topNavLinks = document.querySelectorAll('.site-nav-link');
    const topNavMenu = document.getElementById('topNavLinks');
    const topNavToggle = document.getElementById('topNavToggle');

    function closeTopNav() {
        topNavMenu?.classList.remove('open');
        topNavToggle?.setAttribute('aria-expanded', 'false');
        const icon = topNavToggle?.querySelector('i');
        if (icon) icon.className = 'ph ph-list';
    }

    function setTopNavActive(key) {
        topNavLinks.forEach(link => {
            const linkKey = link.getAttribute('data-section') || link.getAttribute('data-tab');
            link.classList.toggle('active', linkKey === key);
        });
    }

    function jumpToSection(sectionId) {
        document.querySelectorAll('.tab-view').forEach(view => {
            const isOverview = view.id === 'view-overview';
            view.classList.toggle('active-view', isOverview);
            view.style.display = isOverview ? 'block' : 'none';
        });

        setTopNavActive(sectionId);
        closeTopNav();

        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }

    const showcaseOrder = ['timezone', 'antiraid', 'voice', 'serverstats', 'events', 'emoji', 'embed'];
    const SHOWCASE_INTERVAL = 7000;
    let showcaseIndex = 0;
    let showcaseTimer = null;
    let showcaseIsVisible = false;
    let showcaseUserSelected = false;
    // Screenshots stay deferred (data-src) until the carousel is near the
    // viewport, so the first paint is not held up by images nobody has reached
    // yet.
    let showcaseIsWarm = false;

    function scheduleShowcaseAdvance() {
        clearTimeout(showcaseTimer);
        const shouldRun = showcaseIsVisible && !showcaseUserSelected && !document.hidden;
        if (!shouldRun) return;

        showcaseTimer = window.setTimeout(() => {
            const nextIndex = (showcaseIndex + 1) % showcaseOrder.length;
            setShowcase(showcaseOrder[nextIndex], { scheduleNext: true });
        }, SHOWCASE_INTERVAL);
    }

    // Screenshots inside inactive panels ship as data-src so a page visit does
    // not download ~850 KB of images nobody can see yet. The panel is hydrated
    // the moment it is shown, which keeps the swap deterministic (unlike
    // loading="lazy", which never fires for images revealed out of display:none
    // in some engines).
    function hydratePanelImages(panel) {
        panel.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            delete img.dataset.src;
        });
    }

    // Once the rotator is on screen, warm the next panel's screenshot so the
    // automatic advance never shows an empty frame.
    function preloadNextPanelImage() {
        const nextName = showcaseOrder[(showcaseIndex + 1) % showcaseOrder.length];
        const nextImg = document.querySelector(`#showcase-${nextName} img[data-src]`);
        if (!nextImg) return;
        const preloader = new Image();
        preloader.src = nextImg.dataset.src;
    }

    // Load the panel on screen plus the one after it. Idempotent, so it is safe
    // to call from the warmup observer, the visibility observer and a tab click.
    function warmShowcaseImages() {
        showcaseIsWarm = true;
        const activePanel = document.getElementById(`showcase-${showcaseOrder[showcaseIndex]}`);
        if (activePanel) hydratePanelImages(activePanel);
        preloadNextPanelImage();
    }

    function setShowcase(name, options = {}) {
        const nextIndex = showcaseOrder.indexOf(name);
        if (nextIndex === -1) return;

        if (options.userSelected) {
            showcaseUserSelected = true;
            clearTimeout(showcaseTimer);
        }

        showcaseIndex = nextIndex;
        document.querySelectorAll('.showcase-tab').forEach(tab => {
            const active = tab.dataset.showcase === name;
            tab.classList.toggle('active', active);
            tab.setAttribute('aria-selected', String(active));
            if (active && options.focusTab) tab.focus({ preventScroll: true });
        });

        document.querySelectorAll('.showcase-panel').forEach(panel => {
            const active = panel.id === `showcase-${name}`;
            panel.hidden = !active;
            panel.style.display = active ? 'grid' : 'none';
            panel.classList.toggle('active', active);
            // A click is deliberate, so it always loads its screenshot; the
            // automatic rotation waits for the warmup observer instead.
            if (active && (showcaseIsWarm || options.userSelected)) hydratePanelImages(panel);
        });

        if (showcaseIsWarm) preloadNextPanelImage();

        if (options.scheduleNext) scheduleShowcaseAdvance();
    }

    function initShowcaseRotator() {
        const container = document.getElementById('showcaseRotator');
        const tabs = Array.from(document.querySelectorAll('.showcase-tab'));
        if (!container || tabs.length === 0) return;

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                setShowcase(tab.dataset.showcase, { userSelected: true });
            });

            tab.addEventListener('keydown', event => {
                if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
                event.preventDefault();

                let targetIndex = index;
                if (event.key === 'ArrowRight') targetIndex = (index + 1) % tabs.length;
                if (event.key === 'ArrowLeft') targetIndex = (index - 1 + tabs.length) % tabs.length;
                if (event.key === 'Home') targetIndex = 0;
                if (event.key === 'End') targetIndex = tabs.length - 1;

                setShowcase(tabs[targetIndex].dataset.showcase, {
                    focusTab: true,
                    userSelected: true
                });
            });
        });

        const visibilityObserver = new IntersectionObserver(entries => {
            showcaseIsVisible = entries.some(entry => entry.isIntersecting);
            if (showcaseIsVisible) warmShowcaseImages();
            scheduleShowcaseAdvance();
        }, { threshold: 0.35 });

        visibilityObserver.observe(container);

        // The carousel screenshots are the heaviest assets on the page, so they
        // wait until the section is about one screen away and then load ahead of
        // the visitor instead of competing with the hero for bandwidth.
        const warmupObserver = new IntersectionObserver((entries, observer) => {
            if (!entries.some(entry => entry.isIntersecting)) return;
            observer.disconnect();
            warmShowcaseImages();
        }, { rootMargin: '600px 0px', threshold: 0 });
        warmupObserver.observe(container);

        document.addEventListener('visibilitychange', scheduleShowcaseAdvance);
        setShowcase(showcaseOrder[0]);
    }

    document.addEventListener('DOMContentLoaded', initShowcaseRotator);

    // The docs and commands markup lives on the landing page too, hidden behind
    // tabs. Building both at load put ~10k nodes of DOM behind the first paint
    // for content the visitor had not opened, so each tab is built the first
    // time it is shown instead.
    const tabInitializers = {
        docs: initDocsPage,
        commands: initCommandsPage
    };
    const builtTabs = new Set();

    function initTab(tabId) {
        if (builtTabs.has(tabId)) return;
        const build = tabInitializers[tabId];
        if (!build) return;
        // Marked before the build so a re-entrant call cannot double-render.
        builtTabs.add(tabId);
        build();
    }

    function switchTab(tabId) {
        initTab(tabId);
        document.querySelectorAll('.tab-view').forEach(view => {
            const isTarget = view.id === `view-${tabId}`;
            view.classList.toggle('active-view', isTarget);
            view.style.display = isTarget ? 'block' : 'none';
        });

        setTopNavActive(tabId);
        closeTopNav();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.setTimeout(() => {
            const activeView = document.getElementById(`view-${tabId}`);
            if (activeView && typeof window.refreshScrollReveals === 'function') {
                window.refreshScrollReveals(activeView);
            }
        }, 80);
    }

    topNavToggle?.addEventListener('click', () => {
        const isOpen = topNavMenu?.classList.toggle('open');
        topNavToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
        const icon = topNavToggle.querySelector('i');
        if (icon) icon.className = isOpen ? 'ph ph-x' : 'ph ph-list';
    });

    document.addEventListener('click', event => {
        if (!event.target.closest('.site-topbar')) closeTopNav();
    });

    const docsNavToggle = document.getElementById('docsNavToggle');
    const docsSidebar = document.getElementById('docsSidebar');

    docsNavToggle?.addEventListener('click', () => {
        const isOpen = docsSidebar?.classList.toggle('open');
        docsNavToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
        const caret = docsNavToggle.querySelector('i:last-child');
        if (caret) caret.className = isOpen ? 'ph-bold ph-caret-up' : 'ph-bold ph-caret-down';
    });

    function closeMobileDocsNav() {
        if (window.innerWidth > 900) return;
        docsSidebar?.classList.remove('open');
        docsNavToggle?.setAttribute('aria-expanded', 'false');
        const caret = docsNavToggle?.querySelector('i:last-child');
        if (caret) caret.className = 'ph-bold ph-caret-down';
    }

    topNavLinks.forEach(link => {
        link.addEventListener('click', event => {
            const sectionId = link.getAttribute('data-section');
            const tabId = link.getAttribute('data-tab');
            if (!sectionId && !tabId) return;

            event.preventDefault();
            if (sectionId) {
                jumpToSection(sectionId);
                history.pushState(null, '', `#${sectionId}`);
            } else {
                switchTab(tabId);
                history.pushState(null, '', `#${tabId}`);
            }
        });
    });

    // Searchable module directory
    const overviewPills = document.querySelectorAll('#overviewCategoryFilters .pill-btn');
    const moduleSearch = document.getElementById('moduleSearch');
    const moduleCards = Array.from(document.querySelectorAll('#featuresGrid .module-card'));
    const moduleResultsSummary = document.getElementById('moduleResultsSummary');
    const moduleEmptyState = document.getElementById('moduleEmptyState');
    let activeModuleCategory = 'all';

    function applyModuleFilters() {
        const query = moduleSearch?.value.trim().toLowerCase() || '';
        let visibleCount = 0;

        moduleCards.forEach(card => {
            const categoryMatches = activeModuleCategory === 'all' || card.dataset.category === activeModuleCategory;
            // Visible copy is authoritative; data-search only adds keywords the card does not spell out.
            const haystack = `${card.textContent} ${card.dataset.search || ''}`.toLowerCase();
            const searchMatches = !query || haystack.includes(query);
            const visible = categoryMatches && searchMatches;
            card.style.display = visible ? 'flex' : 'none';
            if (visible) visibleCount += 1;
        });

        if (moduleResultsSummary) {
            moduleResultsSummary.textContent = `${visibleCount} module${visibleCount === 1 ? '' : 's'}`;
        }
        if (moduleEmptyState) moduleEmptyState.hidden = visibleCount !== 0;
    }

    overviewPills.forEach(pill => {
        pill.addEventListener('click', () => {
            overviewPills.forEach(item => item.classList.remove('active'));
            pill.classList.add('active');
            activeModuleCategory = pill.dataset.category || 'all';
            applyModuleFilters();
        });
    });

    moduleSearch?.addEventListener('input', applyModuleFilters);

    // Keep the module-count badge in sync with the grid.
    applyModuleFilters();

    moduleCards.forEach(card => {
        const openDoc = () => {
            const docId = card.dataset.doc;
            switchTab('docs');
            if (docId) setTimeout(() => activateDoc(docId), 50);
        };
        card.addEventListener('click', openDoc);
        card.tabIndex = 0;
        card.setAttribute('role', 'link');
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openDoc();
            }
        });
    });

    // Stat count-up: hero numbers roll from a low value to their target the
    // first time the stats grid enters the viewport. Non-numeric labels like
    // "Guild friendly" and the live-updating server count (id=liveServerCount)
    // are skipped so nothing overwrites data set elsewhere. Respects
    // prefers-reduced-motion by leaving the numbers as written.
    function runStatCountUps() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        document.querySelectorAll('.stats-grid .stat-number').forEach(el => {
            if (el.dataset.countUpDone || el.classList.contains('stat-word') || el.id === 'liveServerCount') return;
            const match = el.textContent.trim().match(/^(\d[\d,.]*)(.*)$/);
            if (!match) return;
            // Only animate pure integers. A value like "99.9%" would lose its
            // decimal point to the strip below, so decimals stay as written.
            if (/[.,]/.test(match[1])) return;
            const target = parseInt(match[1], 10);
            if (!Number.isFinite(target) || target < 2) return;
            const suffix = match[2] || '';
            el.dataset.countUpDone = 'true';
            el.classList.add('is-counting');
            const duration = 1100;
            const start = performance.now();
            const easeOut = t => 1 - Math.pow(1 - t, 3);
            const tick = now => {
                const progress = Math.min((now - start) / duration, 1);
                // The last frame writes the exact target text, so a dropped or
                // throttled animation still lands on the real number instead of
                // being left mid-roll.
                if (progress >= 1) {
                    el.textContent = `${target}${suffix}`;
                    el.classList.remove('is-counting');
                    return;
                }
                el.textContent = `${Math.round(target * easeOut(progress))}${suffix}`;
                requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
    }

    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid && 'IntersectionObserver' in window) {
        // 0.4 never fires when the cards stack vertically on a short screen
        // (the grid grows taller than the viewport), so trigger on a quarter
        // of the grid and disconnect after the single run.
        const statsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                runStatCountUps();
                statsObserver.disconnect();
            });
        }, { threshold: 0.25 });
        statsObserver.observe(statsGrid);
        // Safety net: if the tab was hidden or the observer never delivered a
        // qualifying entry, make sure the real numbers still appear.
        window.setTimeout(() => {
            statsObserver.disconnect();
            runStatCountUps();
        }, 4000);
    } else {
        runStatCountUps();
    }

    // Scroll-triggered pop-in reveals
    let scrollRevealObserver = null;

    function ensureScrollRevealObserver() {
        if (scrollRevealObserver || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        scrollRevealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('in-view');
                scrollRevealObserver.unobserve(entry.target);
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -35px' });
    }

    window.animateScrollPop = function(element, direction = 'up', delay = 0, replay = false) {
        if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        ensureScrollRevealObserver();
        element.classList.add('scroll-pop');
        element.dataset.reveal = direction;
        element.style.setProperty('--reveal-delay', `${delay}ms`);
        if (replay) {
            element.classList.remove('in-view');
            void element.offsetWidth;
        }
        scrollRevealObserver?.observe(element);
    };

    window.refreshScrollReveals = function(root = document) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const addTargets = (selector, options = {}) => {
            root.querySelectorAll(selector).forEach((element, index) => {
                if (element.classList.contains('scroll-pop')) return;
                const direction = typeof options.direction === 'function' ? options.direction(index) : (options.direction || 'up');
                const delay = typeof options.delay === 'function' ? options.delay(index) : (options.delay || 0);
                window.animateScrollPop(element, direction, delay);
            });
        };
        addTargets('.hero-section > h1, .hero-section > p, .hero-section > div', { delay: index => index * 95 });
        addTargets('.stats-grid .stat-card', { direction: 'zoom', delay: index => index * 75 });
        addTargets('#view-overview .feature-row > *', { direction: index => index % 2 === 0 ? 'left' : 'right', delay: index => index * 85 });
        addTargets('#showcase > div:first-child', { direction: 'down' });
        addTargets('#showcase > .showcase-container', { direction: 'zoom', delay: 100 });
        addTargets('#features .modules-heading, #features .modules-toolbar', { delay: index => index * 90 });
        addTargets('#featuresGrid .module-card', { direction: 'zoom', delay: index => (index % 6) * 60 });
        addTargets('#view-overview .section-cta-banner', { direction: 'zoom', delay: 60 });
        addTargets('#view-docs .docs-page-header, #view-docs #docsCategoryFilters, #view-docs .search-container', { delay: index => index * 70 });
        addTargets('#view-docs .docs-nav', { direction: 'left', delay: 80 });
        addTargets('#view-docs .docs-article', { direction: 'right', delay: 100 });
        addTargets('#view-commands > div:first-child, #view-commands > .search-container', { delay: index => index * 70 });
        addTargets('#view-commands .cmd-section', { direction: 'zoom', delay: index => (index % 4) * 70 });
        addTargets('#view-commands .toc-sidebar', { direction: 'right', delay: 80 });
    };

    window.refreshScrollReveals(document);

    // switchTab scrolls to the top, so only switch when the tab is not already
    // showing; back/forward has just restored the reader's position.
    function ensureTab(tabId) {
        const view = document.getElementById(`view-${tabId}`);
        if (!view || view.classList.contains('active-view')) return;
        switchTab(tabId);
    }

    // One route table for every fragment: tab (#docs), section (#features),
    // guide id (#tickets), command category (#moderation). A fragment behaves
    // the same whether it arrives with a page load or is typed in.
    function applyHashRoute() {
        const hash = window.location.hash.replace(/^#/, '');
        if (!hash) return;

        if (['overview', 'docs', 'commands'].includes(hash)) {
            ensureTab(hash);
            return;
        }

        // Scroll targets are read off the nav's own data-section values, so a
        // new section routes without a second list to keep in step.
        if ([...topNavLinks].some(link => link.getAttribute('data-section') === hash)) {
            jumpToSection(hash);
            return;
        }

        if (typeof docsData !== 'undefined' && docsData.some(d => d.id === hash)) {
            ensureTab('docs');
            setTimeout(() => window.activateDoc?.(hash, { updateHistory: 'skip' }), 50);
            return;
        }

        if (typeof commandsDatabase !== 'undefined' && commandsDatabase.some(c => c.id === hash)) {
            // ensureTab builds the tab, so this category section only exists from
            // here on: the browser's own fragment scroll already looked for it in
            // empty markup, which means this path has to scroll it into view.
            ensureTab('commands');
            const targetSec = document.getElementById(hash);
            if (!targetSec) return;
            setTimeout(() => {
                const before = window.scrollY;
                targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // A smooth move can be skipped outright (reduced motion, a page
                // that never composites, a very long jump). If the page has not
                // moved at all, jump to the section for real.
                setTimeout(() => {
                    if (Math.abs(window.scrollY - before) < 2) {
                        targetSec.scrollIntoView({ block: 'start' });
                    }
                }, 800);
            }, 100);
        }
    }

    // Back/forward fires popstate and hashchange; the fragment carries the
    // route, so hashchange covers traversal as well.
    window.addEventListener('hashchange', applyHashRoute);

    // Handle Hash Navigation on Page Load
    window.addEventListener('load', () => {
        applyHashRoute();

        // Back to Top Button Scroll Listener
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            }, { passive: true });
        }
        // Stat count-ups live in runStatCountUps() further up; there is exactly
        // one animation per number so nothing can read another loop's midpoint
        // and freeze there.
    });


/* ==========================================================================
   Documentation and command rendering
   ========================================================================== */

// Callout colour and icon both come from the variant (note = accent,
// tip = green, warning = red). Unknown or missing falls back to a plain note.
const CALLOUT_VARIANTS = {
    note: { className: 'callout-note', icon: 'ph-info' },
    tip: { className: 'callout-tip', icon: 'ph-lightbulb' },
    warning: { className: 'callout-warning', icon: 'ph-warning' }
};

function initDocsPage() {
        const navContainer = document.getElementById('docsNavLinks');
        const sidebarNavContainer = document.getElementById('sidebarDocsNavLinks');
        const contentContainer = document.getElementById('docsContent');

        if (!contentContainer) return;

        const categoryMap = {
            'quickstart': { cat: 'getting_started', title: 'Getting started', icon: 'ph-rocket' },
            'core': { cat: 'getting_started', title: 'Getting started', icon: 'ph-rocket' },
            'server_admin': { cat: 'getting_started', title: 'Getting started', icon: 'ph-rocket' },

            'w101': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'beastmoon': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'pet_tome': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'spells': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'teamup_w101': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'value_reagent': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'strategy': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'tapestry': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'wizard_info': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },
            'recap_tracker': { cat: 'w101', title: 'Wizard101', icon: 'ph-magic-wand' },

            'antiraid': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'moderation': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'warn_cog': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'logging': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'staff_tools': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'reports': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'invites': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'honeypot': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'antiping': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },
            'global_enforcement': { cat: 'security', title: 'Moderation & Safety', icon: 'ph-shield-check' },

            'timeping': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'timezones': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'time_converter': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'events': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'raids': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'raidpolls': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'simple_poll_timestamps': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'teamup_fed': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'temp_vc': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'tickets': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'loa': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'giveaways': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },

            'activitytracker': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'autopin': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'starboard': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'emojis': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'reactions': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'reaction_pings': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'sticky_messages': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'embeds': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'autoreply': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'reminders': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'translate_cog': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'thread_watcher': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'voicestats': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'stats': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'returning_roles': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'federation': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'roshambo': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'fun': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'general_sys': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'discord_apps': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' },
            'faq': { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' }
        };


    window.activateDoc = function(docId, options = {}) {
            if (!docId || (typeof docsData !== 'undefined' && !docsData.some(d => d.id === docId))) {
                docId = (typeof docsData !== 'undefined' && docsData.length > 0) ? docsData[0].id : 'quickstart';
            }
            if (!docId) return;

            const updateHistory = options.updateHistory || 'replace';

            const previousScrollY = window.scrollY;

            document.querySelectorAll('.docs-nav-link, .sidebar-toc-link').forEach(link => {
                if (link.getAttribute('data-doc') === docId || link.getAttribute('href') === `#${docId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            document.querySelectorAll('.docs-article').forEach(article => {
                if (article.id === docId) {
                    article.classList.add('active-doc');
                    article.style.setProperty('display', 'block', 'important');
                } else {
                    article.classList.remove('active-doc');
                    article.style.setProperty('display', 'none', 'important');
                }
            });

            closeMobileDocsNav();

            if (updateHistory !== 'skip') {
                if (updateHistory === 'push') {
                    history.pushState({ doc: docId }, '', `#${docId}`);
                } else {
                    history.replaceState({ doc: docId }, '', `#${docId}`);
                }
            }

            // Swapping documentation articles must not move the main page or dashboard.
            requestAnimationFrame(() => {
                window.scrollTo({ top: previousScrollY, left: window.scrollX, behavior: 'auto' });
            });

            const activeArticle = document.getElementById(docId);
            if (activeArticle && typeof window.animateScrollPop === 'function') {
                window.animateScrollPop(activeArticle, 'right', 0, true);
            }
        };

        const groups = {};
        docsData.forEach(doc => {
            const meta = categoryMap[doc.id] || { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' };
            if (!groups[meta.cat]) {
                groups[meta.cat] = { title: meta.title, icon: meta.icon, items: [] };
            }
            groups[meta.cat].items.push(doc);
        });

        // Render sticky page nav
        if (navContainer) {
            navContainer.innerHTML = '';
            Object.keys(groups).forEach(catKey => {
                const grp = groups[catKey];
                const grpDiv = document.createElement('div');
                grpDiv.className = 'docs-nav-group';
                grpDiv.setAttribute('data-category-group', catKey);

                const grpTitle = document.createElement('div');
                grpTitle.className = 'docs-nav-group-title';
                grpTitle.innerHTML = `<i class="ph ${grp.icon}"></i> ${grp.title}`;
                grpDiv.appendChild(grpTitle);

                grp.items.forEach(doc => {
                    const navLink = document.createElement('a');
                    navLink.className = `docs-nav-link ${doc.id === docsData[0].id ? 'active' : ''}`;
                    navLink.setAttribute('data-doc', doc.id);
                    navLink.href = `#${doc.id}`;
                    navLink.innerHTML = `<i class="ph ${doc.icon}"></i> ${doc.title}`;
                    navLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        activateDoc(doc.id, { updateHistory: 'push' });
                    });
                    grpDiv.appendChild(navLink);
                });
                navContainer.appendChild(grpDiv);
            });
        }

        // Render sidebar TOC nav
        if (sidebarNavContainer) {
            sidebarNavContainer.innerHTML = '';
            Object.keys(groups).forEach(catKey => {
                const grp = groups[catKey];
                const grpDiv = document.createElement('div');
                grpDiv.className = 'docs-nav-group';
                grpDiv.setAttribute('data-category-group', catKey);

                const grpTitle = document.createElement('div');
                grpTitle.className = 'docs-nav-group-title';
                grpTitle.innerHTML = `<i class="ph ${grp.icon}"></i> ${grp.title}`;
                grpDiv.appendChild(grpTitle);

                grp.items.forEach(doc => {
                    const sidebarLink = document.createElement('a');
                    sidebarLink.className = `sidebar-toc-link ${doc.id === docsData[0].id ? 'active' : ''}`;
                    sidebarLink.setAttribute('data-doc', doc.id);
                    sidebarLink.href = `#${doc.id}`;
                    sidebarLink.innerHTML = `<i class="ph ${doc.icon}"></i> ${doc.title}`;
                    sidebarLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        activateDoc(doc.id, { updateHistory: 'push' });
                        if (window.innerWidth <= 1000) {
                            const sidebar = document.getElementById('sidebar');
                            const overlay = document.getElementById('sidebarOverlay');
                            sidebar?.classList.remove('mobile-open');
                            overlay?.classList.remove('show');
                            document.body.style.overflow = '';
                        }
                    });
                    grpDiv.appendChild(sidebarLink);
                });
                sidebarNavContainer.appendChild(grpDiv);
            });
        }

        // Render articles feed
        contentContainer.innerHTML = '';
        docsData.forEach((doc, idx) => {
            const article = document.createElement('article');
            article.className = `docs-article ${idx === 0 ? 'active-doc' : ''}`;
            article.id = doc.id;
            const meta = categoryMap[doc.id] || { cat: 'utility', title: 'Utilities & Automation', icon: 'ph-gear-six' };
            article.setAttribute('data-category', meta.cat);

            if (idx !== 0) {
                article.style.setProperty('display', 'none', 'important');
            } else {
                article.style.setProperty('display', 'block', 'important');
            }

            const prevDoc = idx > 0 ? docsData[idx - 1] : null;
            const nextDoc = idx < docsData.length - 1 ? docsData[idx + 1] : null;

            let html = `
                <div class="docs-article-heading">
                    <div>
                        <h2><i class="ph ${doc.icon}" style="color: var(--accent);"></i> ${doc.title}</h2>
                        <p class="docs-article-subtitle">${doc.subtitle}</p>
                    </div>
                    <span class="badge role">${meta.title}</span>
                </div>
            `;

            doc.content.forEach(item => {
                if (item.type === 'heading') {
                    html += `<h3>${item.text}</h3>`;
                } else if (item.type === 'text') {
                    html += `<p>${item.text}</p>`;
                } else if (item.type === 'callout') {
                    const callout = CALLOUT_VARIANTS[item.variant] || CALLOUT_VARIANTS.note;
                    html += `
                        <div class="callout-box ${callout.className}">
                            <strong><i class="ph-fill ${callout.icon}"></i>${item.title}:</strong> ${item.text}
                        </div>
                    `;
                } else if (item.type === 'list') {
                    if (item.title) html += `<h3>${item.title}</h3>`;
                    html += `<ul>${item.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
                } else if (item.type === 'commands') {
                    if (item.title) html += `<h3>${item.title}</h3>`;
                    html += `<div class="cmd-item-list">`;
                    item.items.forEach(cmd => {
                        html += `
                            <div class="cmd-item-box">
                                <div class="cmd-item-left">
                                    <code class="cmd-code">${cmd.cmd}</code>
                                    <span class="cmd-desc-text">${cmd.desc}</span>
                                </div>
                                <button class="copy-btn" data-cmd="${cmd.cmd.replace(/"/g, '&quot;')}" title="Copy Command">
                                    <i class="ph ph-copy"></i>
                                </button>
                            </div>
                        `;
                    });
                    html += `</div>`;
                }
            });

            // Prev / Next Navigation Footer
            html += `<div class="doc-article-nav">`;
            if (prevDoc) {
                html += `
                    <button class="doc-nav-btn prev-btn" data-doc="${prevDoc.id}">
                        <i class="ph ph-arrow-left"></i>
                        <div>
                            <span class="nav-label">PREVIOUS MODULE</span>
                            <span class="nav-title">${prevDoc.title}</span>
                        </div>
                    </button>
                `;
            } else {
                html += `<div></div>`;
            }

            if (nextDoc) {
                html += `
                    <button class="doc-nav-btn next-btn" data-doc="${nextDoc.id}">
                        <div>
                            <span class="nav-label">NEXT MODULE</span>
                            <span class="nav-title">${nextDoc.title}</span>
                        </div>
                        <i class="ph ph-arrow-right"></i>
                    </button>
                `;
            } else {
                html += `<div></div>`;
            }
            html += `</div>`;

            article.innerHTML = html;
            contentContainer.appendChild(article);
        });

        // Prev/Next and copy buttons inside the article.
        contentContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.doc-nav-btn');
            if (btn) {
                const targetDocId = btn.getAttribute('data-doc');
                if (targetDocId) {
                    activateDoc(targetDocId, { updateHistory: 'push' });
                }
                return;
            }

            const copyBtn = e.target.closest('.copy-btn');
            if (copyBtn) {
                const textToCopy = copyBtn.getAttribute('data-cmd');
                if (textToCopy) {
                    navigator.clipboard.writeText(textToCopy);
                    copyBtn.innerHTML = '<i class="ph ph-check" style="color: var(--accent);"></i>';
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="ph ph-copy"></i>';
                    }, 1500);
                }
            }
        });

        // Category filter pills
        const catFilterBtns = document.querySelectorAll('#docsCategoryFilters .pill-btn');
        catFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                catFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const selectedCat = btn.getAttribute('data-category');

                // Category switches restart search filtering.
                activeDocsCategory = selectedCat;
                if (searchInput) searchInput.value = '';
                applyDocSearchFilter('');

                const firstVisible = docsData.find(d => {
                    const meta = categoryMap[d.id] || { cat: 'utility' };
                    return selectedCat === 'all' || meta.cat === selectedCat;
                });
                if (firstVisible) activateDoc(firstVisible.id, { updateHistory: 'skip' });
            });
        });

        // Live search input filter
        const searchInput = document.getElementById('docSearch');
        let activeDocsCategory = 'all';

        // Sidebar filter only: a link needs the active category and the query.
        // Empty groups hide; the open article does not change while typing.
        function applyDocSearchFilter(rawQuery) {
            const normalized = String(rawQuery || '').toLowerCase().trim();
            const groupVisibility = {};

            docsData.forEach(doc => {
                const meta = categoryMap[doc.id] || { cat: 'utility' };
                const article = document.getElementById(doc.id);
                const searchMatch = !normalized || doc.title.toLowerCase().includes(normalized) || doc.subtitle.toLowerCase().includes(normalized) || (article && article.textContent.toLowerCase().includes(normalized));
                const categoryMatch = activeDocsCategory === 'all' || meta.cat === activeDocsCategory;
                const visible = searchMatch && categoryMatch;

                document.querySelectorAll(`[data-doc="${doc.id}"]`).forEach(link => {
                    link.style.display = visible ? 'flex' : 'none';
                });

                groupVisibility[meta.cat] = Boolean(groupVisibility[meta.cat] || visible);
            });

            document.querySelectorAll('.docs-nav-group').forEach(grp => {
                const grpCat = grp.getAttribute('data-category-group');
                grp.style.display = groupVisibility[grpCat] ? 'block' : 'none';
            });
        }

        searchInput?.addEventListener('input', (e) => {
            applyDocSearchFilter(e.target.value);
        });

        // Enter opens the best match; typing only filters the sidebar.
        searchInput?.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;
            const query = e.target.value.toLowerCase().trim();
            if (!query) return;
            const titleMatch = doc => doc.title.toLowerCase().includes(query) || doc.subtitle.toLowerCase().includes(query);
            const contentMatch = doc => (document.getElementById(doc.id)?.textContent || '').toLowerCase().includes(query);
            const best = docsData.find(titleMatch) || docsData.find(contentMatch);
            if (best) {
                activateDoc(best.id, { updateHistory: 'push' });
                document.getElementById(best.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        // Open the first guide (or the one in the URL) so the pane is not
        // blank, without writing that choice into the address bar.
        const requestedDoc = window.location.hash.replace(/^#/, '');
        const initialDoc = docsData.some((doc) => doc.id === requestedDoc) ? requestedDoc : docsData[0]?.id;
        if (initialDoc) activateDoc(initialDoc, { updateHistory: 'skip' });
    }

    // Commands page renderer
    
    function getDocModuleForCommand(cmdName, categoryId) {
        const name = (cmdName || '').toLowerCase();
        const cat = (categoryId || '').toLowerCase();

        if (name.includes('/serveradmin')) return 'server_admin';
        if (name.includes('/thread ') || name.includes('/relay ') || name.includes('/identity ') || name.includes('teamup_federation')) return 'federation';
        if (name.includes('/publicreport') || name === '/report' || name.includes('vote report')) return 'reports';
        if (name.includes('/appeals ') || name.includes('/suggestion ') || name.includes('/modpreset ')) return 'staff_tools';
        if (name.includes('/poll ') || name.includes('/raidpoll')) return 'raidpolls';
        if (name.includes('/counter ') || name === '/stats overview' || name === '/stats growth') return 'stats';
        if (name.includes('/sticky ')) return 'sticky_messages';
        if (name.includes('/autoping ') || name.includes('ping reactors')) return 'reaction_pings';
        if (name.includes('/returning_role ')) return 'returning_roles';
        if (name.includes('/w101 ')) return 'recap_tracker';
        if (name.includes('w101') || name.includes('calc') || name.includes('damage')) return 'w101';
        if (name.includes('beastmoon')) return 'beastmoon';
        if (name.includes('pet')) return 'pet_tome';
        if (name.includes('spell')) return 'spells';
        if (name.includes('teamup')) return 'teamup_w101';
        if (name.includes('reagent') || name.includes('tc') || name.includes('empower')) return 'value_reagent';
        if (name.includes('boss') || name.includes('strategy') || name.includes('cheat')) return 'strategy';
        if (name.includes('tapestry')) return 'tapestry';
        if (name.includes('ticket')) return 'tickets';
        if (name.includes('tempvc') || name.includes('voice')) return 'temp_vc';
        if (name.includes('timezone')) return 'timezones';
        if (name.includes('timeping') || name.includes('timestamp')) return 'timeping';
        if (name.includes('translate')) return 'translate_cog';
        if (name.includes('remind')) return 'reminders';
        if (name.includes('emoji')) return 'emojis';
        if (name.includes('reaction')) return 'reactions';
        if (name.includes('embed')) return 'embeds';
        if (name.includes('autopin') || name.includes('pin')) return 'autopin';
        if (name.includes('starboard') || name.includes('star')) return 'starboard';
        if (name.includes('loa') || name.includes('quarantine') || name.includes('diagnose') || name.includes('staff')) return 'staff_tools';
        if (name.includes('warn')) return 'warn_cog';
        if (name.includes('kick') || name.includes('ban') || name.includes('unban') || name.includes('mute') || name.includes('purge') || name.includes('nick')) return 'moderation';
        if (name.includes('scam') || name.includes('antiraid') || name.includes('raid')) return 'antiraid';
        if (name.includes('log') || name.includes('invite')) return 'logging';
        if (name.includes('activity')) return 'activitytracker';
        if (name.includes('stat')) return 'stats';

        if (cat.includes('mod')) return 'moderation';
        if (cat.includes('staff')) return 'staff_tools';
        if (cat.includes('w101') || cat.includes('gaming')) return 'w101';
        if (cat.includes('util')) return 'general_sys';

        return 'quickstart';
    }

    function initCommandsPage() {
        const feedContainer = document.getElementById('commandsFeedContainer');
        const tocContainer = document.getElementById('tocSidebarContainer');
        if (!feedContainer || !tocContainer) return;
        if (typeof commandsDatabase === 'undefined' || !Array.isArray(commandsDatabase)) return;

        feedContainer.innerHTML = '';
        tocContainer.innerHTML = '<div class="toc-title">Jump to Category</div>';

        commandsDatabase.forEach((category) => {
            const tocLink = document.createElement('a');
            tocLink.href = `#${category.id}`;
            tocLink.className = 'toc-link';
            tocLink.setAttribute('data-target', category.id);
            tocLink.textContent = `${category.tocLabel} (${category.commands.length})`;
            
            tocLink.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSec = document.getElementById(category.id);
                if (targetSec) {
                    document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active-toc'));
                    tocLink.classList.add('active-toc');
                    targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });

            tocContainer.appendChild(tocLink);

            const sortedCommands = [...category.commands].sort((a, b) => {
                const order = { "public": 1, "role": 2, "perm": 3 };
                return (order[a.type] || 99) - (order[b.type] || 99);
            });

            const cardsHTML = sortedCommands.map(cmd => {
                const docId = getDocModuleForCommand(cmd.name, category.id);
                return `
                <a class="cmd-card" href="docs.html#${docId}" style="cursor: pointer; transition: all var(--transition-fast); text-decoration: none;" title="Open the related setup guide for ${cmd.name}">
                    <div class="cmd-header">
                        <p class="cmd-name">${cmd.name}</p>
                        <div class="badge-container" style="display: flex; align-items: center; gap: 8px;">
                            <span class="badge ${cmd.type}">${cmd.badge}</span>
                            ${cmd.isNew ? '<span class="badge new">New!</span>' : ''}
                            <span style="font-size: 0.75rem; color: var(--accent); font-weight: 600; display: inline-flex; align-items: center; gap: 3px;"><i class="ph ph-book-open"></i> Setup guide</span>
                        </div>
                    </div>
                    <p class="cmd-desc">${cmd.desc}</p>
                </a>
            `;
            }).join('');

            const section = document.createElement('section');
            section.className = 'cmd-section';
            section.id = category.id;
            section.innerHTML = `
                <h2><i class="ph-duotone ${category.icon}"></i> ${category.title} <span class="badge public">${category.commands.length}</span></h2>
                <div class="cards-container">${cardsHTML}</div>
            `;
            
            feedContainer.appendChild(section);
        });

        const searchInput = document.getElementById('commandSearch');
        const cmdSections = document.querySelectorAll('.cmd-section');

        searchInput?.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            cmdSections.forEach(section => {
                let hasVisibleCard = false;
                const cards = section.querySelectorAll('.cmd-card');
                cards.forEach(card => {
                    const textContent = card.textContent.toLowerCase();
                    if (!term || textContent.includes(term)) {
                        card.style.display = 'flex';
                        hasVisibleCard = true;
                    } else {
                        card.style.display = 'none';
                    }
                });
                section.style.display = hasVisibleCard ? 'block' : 'none';
            });
        });

        const tocLinks = document.querySelectorAll('.toc-link');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tocLinks.forEach(link => link.classList.remove('active-toc'));
                    const activeLink = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
                    if (activeLink) activeLink.classList.add('active-toc');
                }
            });
        }, { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 });

        cmdSections.forEach(section => observer.observe(section));
    }

    document.addEventListener('DOMContentLoaded', () => {
        // docs.html and commands.html are a single tab with no tab wrapper
        // (body[data-nav]), so their content builds right away. The landing page
        // wraps all three views in .tab-view and builds each one on first open.
        if (!document.querySelector('.tab-view')) initTab(document.body.dataset.nav);
        window.setTimeout(() => window.refreshScrollReveals?.(document), 60);
    });


/* ==========================================================================
   Ticket demo
   ========================================================================== */
let ticketStep = 1;

    // Random usernames for the final step
    const randomUsernames = [
        "Mek", "PvPGhost", "StarShard", "Krokopatra",
        "WolfBlade77", "LilPwny", "NightMist", "SunWizard"
    ];

    function handleTicketStep() {
        const step1 = document.getElementById('ticket-ui-step-1');
        const step2 = document.getElementById('ticket-ui-step-2');
        const step3 = document.getElementById('ticket-ui-step-3');
        const typingIndicator = document.getElementById('discord-typing-status');
        const textElement = document.getElementById('ticket-step-text');
        const actionArea = document.getElementById('ticket-action-area');

        // Disable buttons temporarily while "typing"
        actionArea.style.pointerEvents = "none";
        actionArea.style.opacity = "0.6";

        if (ticketStep === 1) {
            // Show typing indicator
            typingIndicator.style.display = 'flex';
            if (textElement) textElement.innerText = 'SeanBot is processing your request...';

            setTimeout(() => {
                typingIndicator.style.display = 'none';
                step1.style.display = 'none';
                step2.style.display = 'block';

                if (textElement) textElement.innerText = 'Ticket channel created! Loading details...';
                
                actionArea.innerHTML = `
                    <button onclick="handleTicketStep()" style="background: #5865F2; color: #fff; border: none; cursor: pointer; font-weight: 700; padding: 7px 16px; border-radius: 4px; display: inline-flex; align-items: center; gap: 6px; font-size: 0.825rem; box-shadow: 0 2px 8px rgba(88, 101, 242, 0.4);">
                        <i class="ph-bold ph-arrow-right"></i> Next Step
                    </button>
                `;
                
                actionArea.style.pointerEvents = "auto";
                actionArea.style.opacity = "1";
                ticketStep = 2;
            }, 1200); // 1.2s delay for typing simulation

        } else if (ticketStep === 2) {
            // Pick a random username
            const randomUser = randomUsernames[Math.floor(Math.random() * randomUsernames.length)];
            document.getElementById('random-user-name').innerText = randomUser;

            // Show typing indicator
            typingIndicator.style.display = 'flex';
            if (textElement) textElement.innerText = `${randomUser} is typing...`;

            setTimeout(() => {
                typingIndicator.style.display = 'none';
                step2.style.display = 'none';
                step3.style.display = 'block';

                // Step 3: the invite button follows the user's request message.
                if (textElement) textElement.innerHTML = '';
                
                actionArea.innerHTML = `
                    <a href="invite.html" target="_blank" style="background: #5865F2; color: #fff; text-decoration: none; font-weight: 700; padding: 7px 16px; border-radius: 4px; display: inline-flex; align-items: center; gap: 6px; font-size: 0.825rem; box-shadow: 0 2px 8px rgba(88, 101, 242, 0.4);">
                        <i class="ph-fill ph-discord-logo"></i> Invite SeanBot to Your Server
                    </a>
                    <button onclick="resetTicketDemo()" style="background: rgba(255,255,255,0.08); color: #dbdee1; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; font-weight: 700; padding: 7px 14px; border-radius: 4px; display: inline-flex; align-items: center; gap: 6px; font-size: 0.825rem;">
                        <i class="ph-bold ph-arrows-counter-clockwise"></i> Reset
                    </button>
                `;
                
                actionArea.style.pointerEvents = "auto";
                actionArea.style.opacity = "1";
                ticketStep = 3;
            }, 1500); // 1.5s delay for realistic typing feel
        }
    }

    function resetTicketDemo() {
        ticketStep = 1;
        document.getElementById('ticket-ui-step-1').style.display = 'block';
        document.getElementById('ticket-ui-step-2').style.display = 'none';
        document.getElementById('ticket-ui-step-3').style.display = 'none';
        document.getElementById('discord-typing-status').style.display = 'none';

        const textElement = document.getElementById('ticket-step-text');
        const actionArea = document.getElementById('ticket-action-area');

        if (textElement) textElement.innerText = 'Click "Open Ticket" below to start the Discord ticket flow:';
        if (actionArea) {
            actionArea.style.pointerEvents = "auto";
            actionArea.style.opacity = "1";
            actionArea.innerHTML = `
                <button onclick="handleTicketStep()" style="background: #5865F2; color: #fff; border: none; cursor: pointer; font-weight: 700; padding: 7px 16px; border-radius: 4px; display: inline-flex; align-items: center; gap: 6px; font-size: 0.825rem; box-shadow: 0 2px 8px rgba(88, 101, 242, 0.4);">
                    <i class="ph-fill ph-ticket"></i> Open Ticket
                </button>
            `;
        }
    }


/* ==========================================================================
   Timezone demo
   ========================================================================== */
// Timezone data for each region
    const timezoneData = {
        America: [
            { label: "US Eastern (UTC-5)", role: "US Eastern" },
            { label: "US Central (UTC-6)", role: "US Central" },
            { label: "US Pacific (UTC-8)", role: "US Pacific" }
        ],
        Europe: [
            { label: "Western Europe (UTC+0)", role: "EU West" },
            { label: "Central Europe (UTC+1)", role: "EU Central" },
            { label: "Eastern Europe (UTC+2)", role: "EU East" }
        ],
        Asia: [
            { label: "India Standard (UTC+5:30)", role: "Asia South" },
            { label: "Japan Standard (UTC+9)", role: "Asia East" },
            { label: "Singapore Time (UTC+8)", role: "Asia SE" }
        ],
        Oceania: [
            { label: "Australian Eastern (UTC+10)", role: "Oceania East" },
            { label: "Australian Central (UTC+9:30)", role: "Oceania Central" },
            { label: "New Zealand Standard (UTC+12)", role: "NZ Time" }
        ],
        Africa: [
            { label: "West Africa (UTC+1)", role: "Africa West" },
            { label: "Central Africa (UTC+2)", role: "Africa Central" },
            { label: "East Africa (UTC+3)", role: "Africa East" }
        ],
        Other: [
            { label: "UTC / GMT (UTC+0)", role: "Global UTC" },
            { label: "Atlantic Standard (UTC-4)", role: "Atlantic" },
            { label: "Hawaii Standard (UTC-10)", role: "Hawaii" }
        ]
    };

    function selectRegion(region) {
        const selectContainer = document.getElementById('tz-dropdown-container');
        const selectMenu = document.getElementById('tz-select-menu');
        const statusMsg = document.getElementById('tz-status-message');

        // Hide status message while selecting
        statusMsg.style.display = 'none';

        // Populate options
        selectMenu.innerHTML = `<option value="" disabled selected>Select a timezone in ${region}...</option>`;
        timezoneData[region].forEach(item => {
            const opt = document.createElement('option');
            opt.value = item.role;
            opt.innerText = item.label;
            selectMenu.appendChild(opt);
        });

        // Display the dropdown menu
        selectContainer.style.display = 'block';
    }

    function handleTimezoneSelection() {
        const selectMenu = document.getElementById('tz-select-menu');
        const selectedRole = selectMenu.value;
        const typingIndicator = document.getElementById('tz-typing-status');
        const statusMsg = document.getElementById('tz-status-message');
        const roleNameSpan = document.getElementById('tz-role-name');

        if (!selectedRole) return;

        // Show typing indicator
        typingIndicator.style.display = 'flex';

        setTimeout(() => {
            typingIndicator.style.display = 'none';
            roleNameSpan.innerText = selectedRole;
            statusMsg.style.display = 'block';
        }, 1000);
    }

    function resetTimezoneDemo() {
        document.getElementById('tz-dropdown-container').style.display = 'none';
        document.getElementById('tz-status-message').style.display = 'none';
        document.getElementById('tz-typing-status').style.display = 'none';
    }

/* ==========================================================================
   Communities using SeanBot deck

   One full slot per opted-in server: its own avatar as the hero image, then
   the name, the description its admin wrote and its member count, with the
   track moving on by itself until the reader takes over. The dashboard's
   public API serves exactly the servers whose admins turned the showcase on.
   The static featuredServers list from servers-data.js is a local
   dev seed only and ships empty, so the site never shows a server that did
   not opt in. The section stays hidden when the list is genuinely empty, and
   shows one line with a retry when the list could not be fetched at all, so
   an offline or blocked visit is not mistaken for a feature that is gone.
   ========================================================================== */
(function () {
    const SERVERS_ENDPOINT = 'https://dashboard-seanbo.vercel.app/api/public/servers';
    const CACHE_KEY = 'seanbot.publicServers';
    const CACHE_TTL_MS = 60 * 1000;
    const REQUEST_TIMEOUT_MS = 4000;

    function serverList() {
        if (typeof featuredServers === 'undefined' || !Array.isArray(featuredServers)) return [];
        // A nameless entry would render an empty tile, so it is dropped rather
        // than shipped as a blank slot.
        return featuredServers.filter(server => server && String(server.name || '').trim());
    }

    function initialsFor(name) {
        return String(name).trim().split(/\s+/).slice(0, 2)
            .map(part => part.charAt(0)).join('').toUpperCase();
    }

    // A colour of its own for each community, derived from the name so it is
    // the same on every visit and on every machine. Purely decorative: it
    // tints the avatar of a server that has no icon, and nothing reads it back.
    function hueFor(name) {
        const text = String(name);
        let hash = 0;
        for (let index = 0; index < text.length; index += 1) {
            hash = (hash * 31 + text.charCodeAt(index)) % 360;
        }
        return hash;
    }

    // The initials plate for a server with no icon, or one whose icon link is
    // dead. Shared by both paths so a slot can never render as an empty frame.
    function fillInitials(hero, name) {
        hero.classList.add('is-initials');
        const initials = document.createElement('span');
        initials.className = 'server-slide-initials';
        initials.textContent = initialsFor(name);
        hero.appendChild(initials);
    }

    // The hero for one slot: the server's own avatar, filling the top of the
    // card. It is cropped to the frame rather than letterboxed, because the
    // frame is meant to read as the community's own picture.
    function buildHero(server) {
        const hero = document.createElement('div');
        hero.className = 'server-slide-hero';
        const iconUrl = String(server.icon || '').trim();
        if (!iconUrl) {
            fillInitials(hero, server.name);
            return hero;
        }
        const img = document.createElement('img');
        img.alt = '';
        img.decoding = 'async';
        img.addEventListener('error', () => {
            img.remove();
            fillInitials(hero, server.name);
        });
        img.src = iconUrl;
        hero.appendChild(img);
        return hero;
    }

    // One full slot: the hero, then the name, the description and the members
    // the API serves for that same server. Unlike the tile wall, everything a
    // server has to say is on its own card, because the member count and the
    // invite only mean anything next to the avatar they belong to.
    function buildSlide(server, index) {
        const slide = document.createElement('article');
        slide.className = 'server-slide';
        slide.dataset.index = String(index);
        // The initials plate reads its hue off the slot.
        slide.style.setProperty('--slide-hue', String(hueFor(server.name)));

        const progress = document.createElement('span');
        progress.className = 'server-slide-progress';
        progress.setAttribute('aria-hidden', 'true');
        slide.appendChild(progress);

        slide.appendChild(buildHero(server));

        const body = document.createElement('div');
        body.className = 'server-slide-body';

        const name = document.createElement('h3');
        name.className = 'server-slide-name';
        name.textContent = String(server.name).trim();
        body.appendChild(name);

        // The server's own short description, read under the name the public
        // API serves it by. There is deliberately no second local name for it:
        // a page that reads its own name for a served field renders blank the
        // day the two drift apart, with nothing raised anywhere. That is how
        // this shipped broken once, the builder looking for "tagline" while
        // the API served "description".
        const description = String(server.description || '').trim();
        if (description) {
            const line = document.createElement('p');
            line.className = 'server-slide-desc';
            line.textContent = description;
            body.appendChild(line);
        }

        const foot = document.createElement('div');
        foot.className = 'server-slide-foot';

        const members = Number(server.members) || 0;
        if (members > 0) {
            const stat = document.createElement('div');
            stat.className = 'server-slide-stat';
            const value = document.createElement('span');
            value.className = 'server-slide-stat-value';
            value.textContent = Math.round(members).toLocaleString();
            const label = document.createElement('span');
            label.className = 'server-slide-stat-label';
            label.textContent = 'Members';
            stat.appendChild(value);
            stat.appendChild(label);
            foot.appendChild(stat);
        }

        const invite = String(server.invite || '').trim();
        if (invite) {
            const join = document.createElement('a');
            join.className = 'server-slide-join';
            join.href = invite;
            join.target = '_blank';
            join.rel = 'noopener';
            const joinIcon = document.createElement('i');
            joinIcon.className = 'ph-fill ph-discord-logo';
            join.appendChild(joinIcon);
            join.appendChild(document.createTextNode('Join server'));
            foot.appendChild(join);
        }
        if (foot.childElementCount) body.appendChild(foot);

        slide.appendChild(body);
        return slide;
    }

    // The row reads biggest first: the largest opted-in community opens the
    // carousel. The bot already sorts its payload this way and the route
    // republishes it untouched, but the site sorts again so the order still
    // holds for the local dev seed and for a cached response, and a reordering
    // upstream cannot quietly change which community is featured.
    function sortByMembers(entries) {
        return entries.slice().sort((left, right) =>
            (Number(right.members) || 0) - (Number(left.members) || 0));
    }

    // How long one community holds the front before the row moves on.
    const SLIDE_INTERVAL = 6000;

    // The running carousel, or null. Kept here rather than inside the build so
    // the controls can be wired once: the track and the panel are emptied and
    // refilled on a rebuild, never replaced, so a listener added per build
    // would stack and make one click step twice.
    let carouselRuntime = null;

    function stopCarousel() {
        if (carouselRuntime) {
            carouselRuntime.destroy();
            carouselRuntime = null;
        }
    }

    function wireCarouselOnce() {
        if (wireCarouselOnce.done) return;
        wireCarouselOnce.done = true;
        const track = document.getElementById('serverTrack');
        const panel = track && track.closest('.server-carousel');
        if (!track || !panel) return;

        const runtime = () => carouselRuntime;

        // A gesture that scrolled the track is not a pick, so the click that
        // ends a swipe or a drag is ignored for a moment after any scroll.
        let lastScrollAt = 0;
        track.addEventListener('scroll', () => {
            lastScrollAt = Date.now();
            const carousel = runtime();
            if (carousel) carousel.handleScroll();
        });

        // Clicking a slot that is not the one in front brings it forward, so
        // the neighbours peeking at either side are the way back and forward
        // through the row: they are the control, in place of arrow buttons.
        // Anything inside the front slot is left alone, which is what keeps
        // the invite link working.
        track.addEventListener('click', event => {
            const carousel = runtime();
            if (!carousel) return;
            if (Date.now() - lastScrollAt < 300) return;
            const target = event.target instanceof Element ? event.target : null;
            if (!target || target.closest('a')) return;
            const slide = target.closest('.server-slide');
            if (!slide) return;
            carousel.pick(Number(slide.dataset.index));
        });
        track.addEventListener('keydown', event => {
            const carousel = runtime();
            if (!carousel) return;
            if (event.key === 'ArrowRight') { event.preventDefault(); carousel.next(); }
            else if (event.key === 'ArrowLeft') { event.preventDefault(); carousel.prev(); }
            else if (event.key === 'Home') { event.preventDefault(); carousel.first(); }
            else if (event.key === 'End') { event.preventDefault(); carousel.last(); }
        });
        // The row stops moving while it is being read, the same way the rest of
        // the page's motion does.
        panel.addEventListener('mouseenter', () => { const c = runtime(); if (c) c.setHovered(true); });
        panel.addEventListener('mouseleave', () => { const c = runtime(); if (c) c.setHovered(false); });
        panel.addEventListener('focusin', () => { const c = runtime(); if (c) c.setFocused(true); });
        panel.addEventListener('focusout', () => { const c = runtime(); if (c) c.setFocused(false); });
        document.addEventListener('visibilitychange', () => { const c = runtime(); if (c) c.resume(); });
    }

    function buildCarousel(serverEntries) {
        const track = document.getElementById('serverTrack');
        const section = document.getElementById('servers');
        const panel = track && track.closest('.server-carousel');
        const controls = document.getElementById('serverCarouselControls');
        const dotRow = document.getElementById('serverCarouselDots');
        const notice = document.getElementById('serverCarouselNotice');
        if (!track || !section || !panel) return;

        // A rebuild (the seed first, then the live payload) tears the previous
        // run down, so exactly one timer and one observer drive the track.
        stopCarousel();
        track.replaceChildren();
        if (dotRow) dotRow.replaceChildren();
        if (notice) notice.replaceChildren();

        const servers = sortByMembers(serverEntries);
        if (servers.length === 0) {
            section.hidden = true;
            return;
        }

        track.style.setProperty('--slide-interval', `${SLIDE_INTERVAL}ms`);
        // One community needs no controls: the arrows and dots would only say
        // "there is more" where there is not.
        if (dotRow) dotRow.hidden = servers.length < 2;
        if (controls) controls.hidden = servers.length < 2;

        const slides = servers.map((server, index) => {
            const slide = buildSlide(server, index);
            track.appendChild(slide);
            return slide;
        });

        // One dot per community: the peeking slots are a pointer affordance, so
        // the dots (and the arrows) are the keyboard and screen-reader way
        // through the row.
        const dots = servers.map((server, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'server-carousel-dot';
            dot.setAttribute('aria-label', `Show ${String(server.name).trim()}`);
            dot.addEventListener('click', () => goTo(index));
            if (dotRow) dotRow.appendChild(dot);
            return dot;
        });

        let activeIndex = 0;
        let timer = null;
        let visible = false;
        let hovered = false;
        let focused = false;
        let scrollFrame = null;

        function prefersReducedMotion() {
            return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        }

        function setActive(index) {
            activeIndex = index;
            slides.forEach((slide, position) => {
                const current = position === index;
                slide.classList.toggle('is-active', current);
                // Only the front slot is announced; the rest are still read by
                // the dots' labels and reachable through them.
                if (current) slide.removeAttribute('aria-hidden');
                else slide.setAttribute('aria-hidden', 'true');
            });
            dots.forEach((dot, position) => {
                if (position === index) dot.setAttribute('aria-current', 'true');
                else dot.removeAttribute('aria-current');
            });
        }

        // Which slot is nearest the middle of the visible track. Read from the
        // scroll position rather than tracked alongside it, so a finger swipe
        // and the timer cannot disagree about where the row is.
        function nearestIndex() {
            const centre = track.scrollLeft + track.clientWidth / 2;
            let best = 0;
            let bestDistance = Infinity;
            slides.forEach((slide, index) => {
                const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - centre);
                if (distance < bestDistance) {
                    bestDistance = distance;
                    best = index;
                }
            });
            return best;
        }

        function goTo(index) {
            const target = ((index % slides.length) + slides.length) % slides.length;
            const slide = slides[target];
            track.scrollTo({
                left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
                behavior: prefersReducedMotion() ? 'auto' : 'smooth'
            });
            setActive(target);
            schedule();
        }

        // The countdown bar is dropped and re-added a frame later so it replays
        // from zero after every move, and it only runs while the row is on
        // screen, unhovered, unfocused and in the foreground tab.
        function schedule() {
            window.clearTimeout(timer);
            slides.forEach(slide => slide.classList.remove('is-running'));
            const running = visible && !hovered && !focused && !document.hidden && slides.length > 1;
            if (!running) return;
            const front = slides[activeIndex];
            window.requestAnimationFrame(() => front.classList.add('is-running'));
            timer = window.setTimeout(() => goTo(activeIndex + 1), SLIDE_INTERVAL);
        }

        // A swipe or a trackpad drag is the reader's own move, so the dots
        // follow the track instead of the track being snapped back. Throttled
        // to one read per frame; a scroll fires far more often than that.
        function handleScroll() {
            if (scrollFrame) return;
            scrollFrame = window.requestAnimationFrame(() => {
                scrollFrame = null;
                const index = nearestIndex();
                if (index === activeIndex) return;
                setActive(index);
                schedule();
            });
        }

        const observer = new IntersectionObserver(entries => {
            visible = entries.some(entry => entry.isIntersecting);
            schedule();
        }, { threshold: 0.4 });
        observer.observe(track);

        wireCarouselOnce();
        section.hidden = false;
        panel.classList.add('is-live');
        // Painted only once the section is on screen: a hidden section reports
        // a width of zero, which would park every slot off centre.
        setActive(0);
        goTo(0);

        carouselRuntime = {
            next() { goTo(activeIndex + 1); },
            prev() { goTo(activeIndex - 1); },
            first() { goTo(0); },
            last() { goTo(slides.length - 1); },
            // A click on the slot that is already in front is not a move: it
            // belongs to whatever it landed on, such as the invite link.
            pick(index) { if (index !== activeIndex) goTo(index); },
            handleScroll,
            resume: schedule,
            setHovered(value) { hovered = value; schedule(); },
            setFocused(value) { focused = value; schedule(); },
            destroy() {
                window.clearTimeout(timer);
                if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
                observer.disconnect();
            }
        };
    }

    function readCachedServers() {
        try {
            const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
            if (!cached || !Array.isArray(cached.servers)) return null;
            if (Date.now() - Number(cached.fetchedAt || 0) > CACHE_TTL_MS) return null;
            return cached.servers;
        } catch (error) {
            return null;
        }
    }

    function writeCachedServers(servers) {
        try {
            sessionStorage.setItem(CACHE_KEY, JSON.stringify({
                servers: servers,
                fetchedAt: Date.now()
            }));
        } catch (error) {
            // Private mode or a full quota: the next visit just re-fetches.
        }
    }

    // The API serves display-safe fields; this mirrors the caps the backend
    // applies so a hand-crafted response cannot inject anything longer.
    function sanitizeServers(raw) {
        if (!Array.isArray(raw)) return [];
        return raw
            .filter(server => server && typeof server === 'object' && String(server.name || '').trim())
            .slice(0, 24)
            .map(server => ({
                name: String(server.name).trim().slice(0, 100),
                icon: String(server.icon || '').trim().slice(0, 300),
                members: Number(server.members) || 0,
                // Kept under the API's own name so the shape the grid renders
                // is the shape the API serves, rather than a second vocabulary
                // that a rename on either side would break silently.
                description: String(server.description || '').trim().slice(0, 140),
                invite: String(server.invite || '').trim().slice(0, 200)
            }));
    }

    // Two attempts, because the first one is the one that meets a cold Vercel
    // instance plus the bot's own round-trip. A single 4s try was enough to
    // blank the whole section on a slow first paint.
    const FETCH_ATTEMPTS = 2;
    const RETRY_DELAY_MS = 900;

    function wait(ms) {
        return new Promise(resolve => window.setTimeout(resolve, ms));
    }

    // True when the page is being served off a developer's machine rather than
    // from the site's own origin.
    function isLocalPreview() {
        const host = window.location.hostname;
        return host === 'localhost' || host === '127.0.0.1' || host === '::1' || host === '';
    }

    // The failure state, built into the detail strip. Before this, a request
    // that could not complete at all (offline, CORS, the bot down, a timeout)
    // left the section hidden, which is indistinguishable from a feature that
    // was never built - and it is what a local preview always hits, because
    // the dashboard's CORS policy only answers the live site's own origin.
    function buildLoadFailure() {
        const wrap = document.createElement('p');
        wrap.className = 'server-load-failure';
        let message = 'The community list could not be loaded right now. ';
        if (isLocalPreview()) {
            message += 'A local preview is refused by the dashboard, which only answers its own '
                + 'origin (sean.bot.nu). Paste a response from /api/public/servers into '
                + 'servers-data.js to preview the grid here. ';
        }
        wrap.appendChild(document.createTextNode(message));
        const retry = document.createElement('button');
        retry.type = 'button';
        retry.className = 'server-load-retry';
        retry.textContent = 'Try again';
        retry.addEventListener('click', () => {
            retry.disabled = true;
            retry.textContent = 'Trying...';
            fetchLiveServers(true);
        });
        wrap.appendChild(retry);
        return wrap;
    }

    function showLoadFailure() {
        const track = document.getElementById('serverTrack');
        const section = document.getElementById('servers');
        const notice = document.getElementById('serverCarouselNotice');
        const controls = document.getElementById('serverCarouselControls');
        if (!track || !section || !notice) return;
        // Anything already on screen wins: a seed, or a payload built by an
        // earlier attempt on this page.
        if (track.childElementCount) return;
        if (controls) controls.hidden = true;
        track.hidden = true;
        notice.replaceChildren(buildLoadFailure());
        section.hidden = false;
    }

    function hideSection() {
        const section = document.getElementById('servers');
        const notice = document.getElementById('serverCarouselNotice');
        if (notice) notice.replaceChildren();
        if (section) section.hidden = true;
    }

    async function fetchLiveServers(force) {
        if (!force) {
        const cached = readCachedServers();
        if (cached) {
            buildCarousel(cached);
            return;
        }
        }
        for (let attempt = 1; attempt <= FETCH_ATTEMPTS; attempt += 1) {
            const controller = new AbortController();
            const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
            try {
                const response = await fetch(SERVERS_ENDPOINT, { signal: controller.signal });
                clearTimeout(timeout);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                const servers = sanitizeServers(data && data.servers);
                // An empty list is cached too: it is a valid state (nobody has
                // opted in yet), not a failure worth retrying every view.
                writeCachedServers(servers);
                if (servers.length) buildCarousel(servers);
                else hideSection();
                return;
            } catch (error) {
                clearTimeout(timeout);
                // Offline, CORS, bot down, timeout: try once more, then say so
                // rather than leaving the section invisible.
                if (attempt < FETCH_ATTEMPTS) await wait(RETRY_DELAY_MS);
            }
        }
        showLoadFailure();
    }

    function initServerDeck() {
        const staticServers = serverList();
        if (staticServers.length) buildCarousel(staticServers);
        fetchLiveServers();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initServerDeck);
    } else {
        initServerDeck();
    }
})();

/* ==========================================================================
   Live server count
   Fills the "Communities" stat card from the dashboard's public stats bridge.
   Any failure (offline, CORS, bot down, timeout) leaves the static copy in
   place instead of showing a number that may be wrong.
   ========================================================================== */
(function () {
    // Dashboard route that proxies get_public_stats for the static site.
    const STATS_ENDPOINT = 'https://dashboard-seanbo.vercel.app/api/public/stats';
    const CACHE_KEY = 'seanbot.publicStats';
    const CACHE_TTL_MS = 60 * 1000;
    const REQUEST_TIMEOUT_MS = 4000;

    function readCachedStats() {
        try {
            const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
            if (!cached || typeof cached.servers !== 'number') return null;
            if (Date.now() - Number(cached.fetchedAt || 0) > CACHE_TTL_MS) return null;
            return cached;
        } catch (error) {
            return null;
        }
    }

    function writeCachedStats(stats) {
        try {
            sessionStorage.setItem(CACHE_KEY, JSON.stringify({
                servers: stats.servers,
                fetchedAt: Date.now()
            }));
        } catch (error) {
            // Private mode or a full quota: the next visit just re-fetches.
        }
    }

    function applyStats(stats) {
        if (!stats || typeof stats.servers !== 'number' || stats.servers < 0) return;

        // Plain digits: the counter animation parses this text.
        const cardCount = document.getElementById('liveServerCount');
        if (cardCount) cardCount.textContent = String(stats.servers);
    }

    async function loadLiveStats() {
        if (!document.getElementById('liveServerCount')) return;

        const cached = readCachedStats();
        if (cached) {
            applyStats(cached);
            return;
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
        try {
            const response = await fetch(STATS_ENDPOINT, {
                signal: controller.signal,
                headers: { Accept: 'application/json' }
            });
            if (!response.ok) return;
            const stats = await response.json();
            applyStats(stats);
            writeCachedStats(stats);
        } catch (error) {
            // Offline, CORS-blocked or unreachable: keep the static copy.
        } finally {
            clearTimeout(timeout);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadLiveStats);
    } else {
        loadLiveStats();
    }
})();
