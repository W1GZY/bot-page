// The bot page's colour palettes, as one list. layout.js renders the palette row
// from window.SEANBOT_PALETTES, and this file applies the saved palette before
// first paint, so adding a palette is an entry here plus its token block in
// global.css. The dashboard keeps its own copy in core/palettes.py;
// dashboardv2/tests/test_palette_registry.py fails if the two disagree.
//
// page / panel / hue are the swatch (previews, not tokens). "original" is the
// default and carries no data-palette attribute.
window.SEANBOT_PALETTES = [
    { id: 'original', label: 'Original', page: '#09090b', panel: '#111113', hue: '#71717a' },
    { id: 'new', label: 'New', page: '#0b0d12', panel: '#11151d', hue: '#60a5fa' },
    { id: 'indigo', label: 'Indigo', page: '#0b0a17', panel: '#13122a', hue: '#8c86ff' },
    { id: 'ember', label: 'Ember', page: '#120804', panel: '#1c0f08', hue: '#fb923c' },
    { id: 'ocean', label: 'Ocean', page: '#050d13', panel: '#0a1820', hue: '#22d3ee' },
    { id: 'moss', label: 'Moss', page: '#080d09', panel: '#101810', hue: '#4ade80' },
    { id: 'sunset', label: 'Sunset', page: '#120a10', panel: '#1d1019', hue: '#fb7185' },
    { id: 'aurora', label: 'Aurora', page: '#05090f', panel: '#0b1420', hue: '#2dd4bf' },
    { id: 'glacier', label: 'Glacier', page: '#0a1119', panel: '#101b27', hue: '#bae6fd' },
    { id: 'terminal', label: 'Terminal', page: '#050400', panel: '#0c0a03', hue: '#fbbf24' },
];
const savedAccent = localStorage.getItem('seanbotAccent') || 'gold';
        document.documentElement.setAttribute('data-accent', savedAccent);
const savedPalette = localStorage.getItem('seanbotPalette') || 'original';
        if (savedPalette !== 'original' && window.SEANBOT_PALETTES.some(p => p.id === savedPalette)) {
            document.documentElement.setAttribute('data-palette', savedPalette);
        }
