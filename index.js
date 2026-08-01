/* ==========================================================================
   PAGE NAVIGATION, SHOWCASE, FILTERS, REVEALS, AND COUNTERS
   Extracted from index.html inline script block 2
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

    function scheduleShowcaseAdvance() {
        clearTimeout(showcaseTimer);
        const shouldRun = showcaseIsVisible && !showcaseUserSelected && !document.hidden;
        if (!shouldRun) return;

        showcaseTimer = window.setTimeout(() => {
            const nextIndex = (showcaseIndex + 1) % showcaseOrder.length;
            setShowcase(showcaseOrder[nextIndex], { scheduleNext: true });
        }, SHOWCASE_INTERVAL);
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
        });

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
            scheduleShowcaseAdvance();
        }, { threshold: 0.35 });

        visibilityObserver.observe(container);
        document.addEventListener('visibilitychange', scheduleShowcaseAdvance);
        setShowcase(showcaseOrder[0]);
    }

    document.addEventListener('DOMContentLoaded', initShowcaseRotator);

    function switchTab(tabId) {
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
            const searchMatches = !query || (card.dataset.search || card.textContent.toLowerCase()).includes(query);
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

    // Handle Hash Navigation on Page Load
    window.addEventListener('load', () => {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            if (['overview', 'docs', 'commands'].includes(hash)) {
                switchTab(hash);
            } else if (['showcase', 'features'].includes(hash)) {
                jumpToSection(hash);
            } else if (typeof docsData !== 'undefined' && docsData.some(d => d.id === hash)) {
                switchTab('docs');
                setTimeout(() => activateDoc(hash), 50);
            } else if (typeof commandsDatabase !== 'undefined' && commandsDatabase.some(c => c.id === hash)) {
                switchTab('commands');
                const targetSec = document.getElementById(hash);
                if (targetSec) setTimeout(() => targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
            }
        }

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

        // Stat Counter Single Animation Observer
        let statsAnimated = false;
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            const statsObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    animateStatCounters();
                }
            }, { threshold: 0.2 });
            statsObserver.observe(statsGrid);
        }

        function animateStatCounters() {
            document.querySelectorAll('.stat-card').forEach(card => {
                const numEl = card.querySelector('.stat-number');
                if (!numEl) return;
                const rawText = numEl.textContent.trim();
                let target = parseFloat(rawText.replace(/[^0-9.]/g, ''));
                let suffix = rawText.replace(/[0-9.]/g, '');
                
                if (isNaN(target)) return;

                let start = 0;
                let duration = 1200; // ms
                let startTime = null;

                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    let progress = Math.min((timestamp - startTime) / duration, 1);
                    let easeProgress = 1 - Math.pow(1 - progress, 3);
                    let current = start + (target - start) * easeProgress;
                    
                    if (Number.isInteger(target)) {
                        numEl.textContent = Math.floor(current) + suffix;
                    } else {
                        numEl.textContent = current.toFixed(1) + suffix;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        numEl.textContent = rawText;
                    }
                }
                requestAnimationFrame(step);
            });
        }
    });


/* ==========================================================================
   DOCUMENTATION AND COMMAND RENDERING
   Extracted from index.html inline script block 3
   ========================================================================== */
function initDocsPage() {
        const navContainer = document.getElementById('docsNavLinks');
        const sidebarNavContainer = document.getElementById('sidebarDocsNavLinks');
        const contentContainer = document.getElementById('docsContent');

        if (!contentContainer) return;

        const categoryMap = {
            'quickstart': { cat: 'getting_started', title: 'Getting Started', icon: 'ph-rocket' },
            'core': { cat: 'getting_started', title: 'Getting Started', icon: 'ph-rocket' },
            'prefix': { cat: 'getting_started', title: 'Getting Started', icon: 'ph-rocket' },
            'server_admin': { cat: 'getting_started', title: 'Getting Started', icon: 'ph-rocket' },

            'w101': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'beastmoon': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'pet_tome': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'spells': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'teamup_w101': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'value_reagent': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'strategy': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'tapestry': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'wizard_info': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },
            'recap_tracker': { cat: 'w101', title: 'Wizard101 Suite', icon: 'ph-magic-wand' },

            'antiraid': { cat: 'security', title: 'Security & Core', icon: 'ph-shield-check' },
            'moderation': { cat: 'security', title: 'Security & Core', icon: 'ph-shield-check' },
            'warn_cog': { cat: 'security', title: 'Security & Core', icon: 'ph-shield-check' },
            'logging': { cat: 'security', title: 'Security & Core', icon: 'ph-shield-check' },
            'staff_tools': { cat: 'security', title: 'Security & Core', icon: 'ph-shield-check' },
            'reports': { cat: 'security', title: 'Security & Core', icon: 'ph-shield-check' },

            'timeping': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'timezones': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'time_converter': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'calendar': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'raids': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'raidpolls': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'teamup_fed': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'temp_vc': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'tickets': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },
            'loa': { cat: 'community', title: 'Community & Events', icon: 'ph-users-three' },

            'activitytracker': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'autopin': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'starboard': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'emojis': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'reactions': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'reaction_pings': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'sticky_messages': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'embeds': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'autoreply': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'reminders': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'translate_cog': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'thread_watcher': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'voicestats': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'stats': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'returning_roles': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'federation': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'roshambo': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'fun': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'general_sys': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'discord_apps': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' },
            'faq': { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' }
        };


    window.activateDoc = function(docId) {
            if (!docId || (typeof docsData !== 'undefined' && !docsData.some(d => d.id === docId))) {
                docId = (typeof docsData !== 'undefined' && docsData.length > 0) ? docsData[0].id : 'quickstart';
            }
            if (!docId) return;

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
            const meta = categoryMap[doc.id] || { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' };
            if (!groups[meta.cat]) {
                groups[meta.cat] = { title: meta.title, icon: meta.icon, items: [] };
            }
            groups[meta.cat].items.push(doc);
        });

        // Render Sticky Page Nav
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
                    navLink.innerHTML = `<i class="ph ${doc.icon}"></i> ${doc.title}`;
                    navLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        activateDoc(doc.id);
                        history.replaceState(null, '', `#${doc.id}`);
                    });
                    grpDiv.appendChild(navLink);
                });
                navContainer.appendChild(grpDiv);
            });
        }

        // Render Sidebar TOC Nav
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
                    sidebarLink.innerHTML = `<i class="ph ${doc.icon}"></i> ${doc.title}`;
                    sidebarLink.addEventListener('click', (e) => {
                        e.preventDefault();
                        activateDoc(doc.id);
                        history.replaceState(null, '', `#${doc.id}`);
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

        // Render Articles Feed
        contentContainer.innerHTML = '';
        docsData.forEach((doc, idx) => {
            const article = document.createElement('article');
            article.className = `docs-article ${idx === 0 ? 'active-doc' : ''}`;
            article.id = doc.id;
            const meta = categoryMap[doc.id] || { cat: 'utility', title: 'Utility & System', icon: 'ph-gear-six' };
            article.setAttribute('data-category', meta.cat);

            if (idx !== 0) {
                article.style.setProperty('display', 'none', 'important');
            } else {
                article.style.setProperty('display', 'block', 'important');
            }

            const prevDoc = idx > 0 ? docsData[idx - 1] : null;
            const nextDoc = idx < docsData.length - 1 ? docsData[idx + 1] : null;

            let html = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 6px;">
                    <h2><i class="ph ${doc.icon}" style="color: var(--accent);"></i> ${doc.title}</h2>
                    <span class="badge role">${meta.title}</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0; margin-bottom: 24px;">${doc.subtitle}</p>
            `;

            doc.content.forEach(item => {
                if (item.type === 'heading') {
                    html += `<h3>${item.text}</h3>`;
                } else if (item.type === 'text') {
                    html += `<p>${item.text}</p>`;
                } else if (item.type === 'callout') {
                    html += `
                        <div class="callout-box">
                            <strong>${item.icon || '💡'} ${item.title}:</strong> ${item.text}
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

        // Event Listeners for Prev/Next & Copy Buttons inside contentContainer
        contentContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.doc-nav-btn');
            if (btn) {
                const targetDocId = btn.getAttribute('data-doc');
                if (targetDocId) {
                    activateDoc(targetDocId);
                    history.replaceState(null, '', `#${targetDocId}`);
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

        // Category Filter Pills
        const catFilterBtns = document.querySelectorAll('#docsCategoryFilters .pill-btn');
        catFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                catFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const selectedCat = btn.getAttribute('data-category');
                
                document.querySelectorAll('.docs-nav-group').forEach(grp => {
                    const grpCat = grp.getAttribute('data-category-group');
                    if (selectedCat === 'all' || grpCat === selectedCat) {
                        grp.style.display = 'block';
                    } else {
                        grp.style.display = 'none';
                    }
                });

                const firstVisible = docsData.find(d => {
                    const meta = categoryMap[d.id] || { cat: 'utility' };
                    return selectedCat === 'all' || meta.cat === selectedCat;
                });
                if (firstVisible) activateDoc(firstVisible.id);
            });
        });

        // Live Search Input Filter
        const searchInput = document.getElementById('docSearch');
        searchInput?.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let firstMatch = null;

            docsData.forEach(doc => {
                const article = document.getElementById(doc.id);
                const match = !query || doc.title.toLowerCase().includes(query) || doc.subtitle.toLowerCase().includes(query) || (article && article.textContent.toLowerCase().includes(query));
                
                document.querySelectorAll(`[data-doc="${doc.id}"]`).forEach(link => {
                    link.style.display = match ? 'flex' : 'none';
                });

                if (match && !firstMatch) firstMatch = doc.id;
            });

            if (query && firstMatch) {
                activateDoc(firstMatch);
            } else if (!query && docsData.length > 0) {
                activateDoc(docsData[0].id);
            }
        });

        const requestedDoc = window.location.hash.replace(/^#/, '');
        const initialDoc = docsData.some((doc) => doc.id === requestedDoc) ? requestedDoc : docsData[0]?.id;
        if (initialDoc) activateDoc(initialDoc);
    }

    // Commands Page Renderer
    
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
        initDocsPage();
        initCommandsPage();
        window.setTimeout(() => window.refreshScrollReveals?.(document), 60);
    });


/* ==========================================================================
   TICKET DEMO
   Extracted from index.html inline script block 4
   ========================================================================== */
let ticketStep = 1;

    // List of random usernames for the final step
    const randomUsernames = [
        "CyberNinja", "Mek", "Cool_guy", "Your_Friend", 
        "Cool_dude", "Cool_gamer", "Admin", "Fun_guy"
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
            // Show Typing Indicator
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

            // Show Typing Indicator
            typingIndicator.style.display = 'flex';
            if (textElement) textElement.innerText = `${randomUser} is typing...`;

            setTimeout(() => {
                typingIndicator.style.display = 'none';
                step2.style.display = 'none';
                step3.style.display = 'block';

                if (textElement) textElement.innerHTML = '<strong>Ticket flow complete!</strong> Here is your invite link:';
                
                actionArea.innerHTML = `
                    <a href="https://discord.com/oauth2/authorize?client_id=1477759885822365738" target="_blank" style="background: #5865F2; color: #fff; text-decoration: none; font-weight: 700; padding: 7px 16px; border-radius: 4px; display: inline-flex; align-items: center; gap: 6px; font-size: 0.825rem; box-shadow: 0 2px 8px rgba(88, 101, 242, 0.4);">
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
   TIMEZONE DEMO
   Extracted from index.html inline script block 5
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
