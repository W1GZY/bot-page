(function() {
    if (window.__seanbotLayoutInit) return;
    window.__seanbotLayoutInit = true;

    const PALETTES = ['original', 'new', 'indigo'];
    function applyPalette(name) {
        const palette = PALETTES.includes(name) ? name : 'original';
        if (palette === 'original') {
            document.documentElement.removeAttribute('data-palette');
        } else {
            document.documentElement.setAttribute('data-palette', palette);
        }
        document.querySelectorAll('.palette-option').forEach(o => {
            const isCurrent = o.getAttribute('data-palette') === palette;
            o.classList.toggle('active', isCurrent);
            o.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
        });
        try { localStorage.setItem('seanbotPalette', palette); } catch (e) {}
    }
    applyPalette(document.documentElement.getAttribute('data-palette') || 'original');

    function initGlobalEvents() {
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

        document.querySelectorAll('.palette-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const palette = e.target.getAttribute('data-palette');
                if (palette) {
                    applyPalette(palette);
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
            if (e.target.closest('a') || e.target.closest('.nav-link') || e.target.closest('.sidebar-toc-link')) {
                if (window.innerWidth <= 1000) toggleSidebar(false);
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') toggleSidebar(false);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGlobalEvents);
    } else {
        initGlobalEvents();
    }
})();
