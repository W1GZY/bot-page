(function() {
    if (window.__seanbotLayoutInit) return;
    window.__seanbotLayoutInit = true;

    function initLayout() {
        if (window.__seanbotLayoutDone) return;
        window.__seanbotLayoutDone = true;

        const body = document.body;
        const navId = body.getAttribute('data-nav') || 'overview';
        const pageTitle = body.getAttribute('data-title') || 'Overview';
        
        const contentDiv = document.querySelector('.content');
        if (!contentDiv) return;

        body.insertAdjacentHTML('afterbegin', `
            <div class="sidebar-overlay" id="sidebarOverlay"></div>
            <nav class="sidebar" id="sidebar">
                <div class="brand">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <i class="ph-fill ph-paw-print" style="color: var(--accent); font-size: 1.8rem;"></i>
                        <span style="font-weight: 900; font-size: 1.9rem; letter-spacing: -0.05em; color: var(--accent);">SeanBot<span style="color: #9ca3af; margin-left: 1px;">.</span></span>
                    </div>
                    <button class="hamburger" id="closeSidebarBtn"><i class="ph ph-x"></i></button>
                </div>
                
                <div style="font-size: 0.65rem; font-weight: 800; color: #71717a; text-transform: uppercase; letter-spacing: 1.5px; margin: 15px 0 8px 0;">Menu</div>
                
                <a href="index.html" class="nav-link ${navId === 'overview' ? 'active' : ''}"><i class="ph ph-house"></i> <span>Overview</span></a>
                <a href="docs.html" class="nav-link ${navId === 'docs' ? 'active' : ''}"><i class="ph ph-book-open"></i> <span>Documentation</span></a>
                <a href="commands.html" class="nav-link ${navId === 'commands' ? 'active' : ''}"><i class="ph ph-terminal-window"></i> <span>Commands</span></a>
                
                ${navId === 'docs' ? `
                <div class="sidebar-toc-container" id="sidebarDocsNav" style="margin-top: 14px; padding: 12px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border); border-radius: var(--radius-md); max-height: calc(100vh - 280px); overflow-y: auto;">
                    <div style="font-size: 0.65rem; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                        <i class="ph ph-compass"></i> Docs Navigation
                    </div>
                    <div id="sidebarDocsNavLinks"></div>
                </div>
                ` : ''}
            </nav>
        `);

        const wrapper = document.createElement('div');
        wrapper.className = 'content-wrapper';
        contentDiv.parentNode.insertBefore(wrapper, contentDiv);
        
        wrapper.insertAdjacentHTML('beforeend', `
            <header class="top-header">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <button class="hamburger" id="openSidebarBtn"><i class="ph ph-list"></i></button>
                    <div class="breadcrumbs">
                        <a href="index.html" class="breadcrumb-item" title="Dashboard">
                            <i class="ph-fill ph-paw-print breadcrumb-icon"></i> 
                            <span style="font-weight: 900; font-size: 1.1rem; letter-spacing: -0.05em; color: var(--accent);">SeanBot<span style="color: #9ca3af; margin-left: 1px;">.</span></span>
                        </a>
                        <i class="ph ph-caret-right breadcrumb-separator"></i>
                        <span class="breadcrumb-item active">${pageTitle}</span>
                    </div>
                </div>
                
                <div class="header-right">
                    <div class="dropdown-toggle" id="themeToggle" title="Change Theme Accent">
                        <div class="active-display"></div>
                        <i class="ph ph-caret-down"></i>
                        
                        <div class="dropdown-menu-content">
                            <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">Theme Accent</div>
                            <div class="color-grid" id="colorGrid">
                                <div class="accent-dot" data-accent="gold" style="background: #FFD700;" title="Gold"></div>
                                <div class="accent-dot" data-accent="amber" style="background: #F59E0B;" title="Amber"></div>
                                <div class="accent-dot" data-accent="orange" style="background: #F97316;" title="Orange"></div>
                                <div class="accent-dot" data-accent="rose" style="background: #E11D48;" title="Rose"></div>
                                <div class="accent-dot" data-accent="pink" style="background: #EC4899;" title="Pink"></div>
                                <div class="accent-dot" data-accent="purple" style="background: #9333EA;" title="Purple"></div>
                                <div class="accent-dot" data-accent="blurple" style="background: #5865F2;" title="Blurple"></div>
                                <div class="accent-dot" data-accent="indigo" style="background: #6366F1;" title="Indigo"></div>
                                <div class="accent-dot" data-accent="blue" style="background: #3B82F6;" title="Blue"></div>
                                <div class="accent-dot" data-accent="cyan" style="background: #06B6D4;" title="Cyan"></div>
                                <div class="accent-dot" data-accent="teal" style="background: #0D9488;" title="Teal"></div>
                                <div class="accent-dot" data-accent="emerald" style="background: #10B981;" title="Emerald"></div>
                                <div class="accent-dot" data-accent="green" style="background: #22C55E;" title="Green"></div>
                                <div class="accent-dot" data-accent="lime" style="background: #84CC16;" title="Lime"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        `);

        wrapper.appendChild(contentDiv);

        wrapper.insertAdjacentHTML('beforeend', `
            <footer class="page-footer">
                <div>&copy; 2026 SeanBot. All rights reserved.</div>
                <div style="display:flex; gap: 16px; flex-wrap: wrap;">
                    <a href="tos.html">Terms & Privacy</a>
                </div>
            </footer>
        `);

        initLayoutEvents();
        document.dispatchEvent(new CustomEvent('seanbotLayoutReady'));
    }

    function initLayoutEvents() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                themeToggle.classList.toggle('open');
            });
        }

        document.addEventListener('click', (e) => {
            if (themeToggle && !themeToggle.contains(e.target)) {
                themeToggle.classList.remove('open');
            }
        });

        document.querySelectorAll('.accent-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const color = e.target.getAttribute('data-accent');
                if (color) {
                    document.documentElement.setAttribute('data-accent', color);
                    localStorage.setItem('seanbotAccent', color);
                    themeToggle?.classList.remove('open');
                }
            });
        });

        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        const openBtn = document.getElementById('openSidebarBtn');
        const closeBtn = document.getElementById('closeSidebarBtn');

        function toggleSidebar(show) {
            if (show) {
                sidebar?.classList.add('mobile-open');
                overlay?.classList.add('show');
                document.body.style.overflow = 'hidden';
            } else {
                sidebar?.classList.remove('mobile-open');
                overlay?.classList.remove('show');
                document.body.style.overflow = '';
            }
        }

        openBtn?.addEventListener('click', () => toggleSidebar(true));
        closeBtn?.addEventListener('click', () => toggleSidebar(false));
        overlay?.addEventListener('click', () => toggleSidebar(false));

        sidebar?.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('.nav-link')) {
                if (window.innerWidth <= 1000) toggleSidebar(false);
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') toggleSidebar(false);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLayout);
    } else {
        initLayout();
    }
})();
