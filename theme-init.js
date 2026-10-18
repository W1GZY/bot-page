const savedAccent = localStorage.getItem('seanbotAccent') || 'gold';
        document.documentElement.setAttribute('data-accent', savedAccent);
const savedPalette = localStorage.getItem('seanbotPalette') || 'original';
        if (savedPalette === 'new' || savedPalette === 'indigo') {
            document.documentElement.setAttribute('data-palette', savedPalette);
        }
