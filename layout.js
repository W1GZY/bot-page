(function() {
    if (window.__seanbotLayoutInit) return;
    window.__seanbotLayoutInit = true;

    // The palette row is rendered from the registry in theme-init.js, so the menu,
    // the glyphs and the allow-list come from one list. Each option carries its
    // hue as --palette-hue, which tints the Phosphor glyph .palette-icon draws.
    const PALETTE_REGISTRY = window.SEANBOT_PALETTES || [];
    const PALETTES = PALETTE_REGISTRY.map(p => p.id);
    function renderPaletteRow() {
        const row = document.querySelector('.palette-options');
        if (!row) return;
        row.replaceChildren(...PALETTE_REGISTRY.map(p => {
            const option = document.createElement('button');
            option.type = 'button';
            option.className = 'palette-option';
            option.dataset.palette = p.id;
            option.setAttribute('role', 'radio');
            option.setAttribute('aria-checked', 'false');
            option.style.setProperty('--palette-hue', p.hue);
            const icon = document.createElement('i');
            icon.className = 'ph ' + p.icon + ' palette-icon';
            icon.setAttribute('aria-hidden', 'true');
            option.append(icon, p.label);
            return option;
        }));
    }
    renderPaletteRow();
    // persist=false on the first call below: that call only mirrors the attribute
    // theme-init.js already set onto the option buttons, and writing the choice
    // back on a page that never restored it would erase a visitor's saved palette.
    function applyPalette(name, persist = true) {
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
        if (!persist) return;
        try { localStorage.setItem('seanbotPalette', palette); } catch (e) {}
    }
    applyPalette(document.documentElement.getAttribute('data-palette') || 'original', false);

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
                const palette = e.currentTarget.getAttribute('data-palette');
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
