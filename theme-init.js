// The bot page's colour palettes, as one list. layout.js renders the palette row
// from window.SEANBOT_PALETTES, and this file applies the saved palette before
// first paint, so adding a palette is an entry here plus its token block in
// global.css. The dashboard keeps its own copy in core/palettes.py;
// dashboardv2/tests/test_palette_registry.py fails if the two disagree.
//
// page / panel / hue describe the palette and hue tints the row's glyph; icon
// names the Phosphor glyph shown beside the label. "original" is the default and
// carries no data-palette attribute.
window.SEANBOT_PALETTES = [
    { id: 'original', label: 'Original', page: '#09090b', panel: '#111113', hue: '#71717a', icon: 'ph-circle' },
    { id: 'new', label: 'New', page: '#0b0d12', panel: '#11151d', hue: '#60a5fa', icon: 'ph-sparkle' },
    { id: 'indigo', label: 'Indigo', page: '#0b0a17', panel: '#13122a', hue: '#8c86ff', icon: 'ph-moon-stars' },
    { id: 'ember', label: 'Ember', page: '#120804', panel: '#1c0f08', hue: '#fb923c', icon: 'ph-fire' },
    { id: 'ocean', label: 'Ocean', page: '#050d13', panel: '#0a1820', hue: '#22d3ee', icon: 'ph-waves' },
    { id: 'moss', label: 'Moss', page: '#080d09', panel: '#101810', hue: '#4ade80', icon: 'ph-leaf' },
    { id: 'sunset', label: 'Sunset', page: '#120a10', panel: '#1d1019', hue: '#fb7185', icon: 'ph-sun-horizon' },
    { id: 'aurora', label: 'Aurora', page: '#05090f', panel: '#0b1420', hue: '#2dd4bf', icon: 'ph-shooting-star' },
    { id: 'glacier', label: 'Glacier', page: '#0a1119', panel: '#101b27', hue: '#bae6fd', icon: 'ph-snowflake' },
    { id: 'terminal', label: 'Terminal', page: '#050400', panel: '#0c0a03', hue: '#fbbf24', icon: 'ph-terminal-window' },
];
const savedAccent = localStorage.getItem('seanbotAccent') || 'gold';
        document.documentElement.setAttribute('data-accent', savedAccent);
const savedPalette = localStorage.getItem('seanbotPalette') || 'original';
        if (savedPalette !== 'original' && window.SEANBOT_PALETTES.some(p => p.id === savedPalette)) {
            document.documentElement.setAttribute('data-palette', savedPalette);
        }
