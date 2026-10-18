const savedAccent = localStorage.getItem('seanbotAccent') || 'gold';
        document.documentElement.setAttribute('data-accent', savedAccent);
const savedPalette = localStorage.getItem('seanbotPalette') || 'original';
        if (['new', 'indigo', 'ember', 'ocean', 'moss'].includes(savedPalette)) {
            document.documentElement.setAttribute('data-palette', savedPalette);
        }
