/* ==========================================================================
   Recommended servers for the landing page deck.

   The real list comes from the dashboard's public API
   (GET /api/public/servers) and contains exactly the servers whose admins
   turned on "Feature my server on the SeanBot website" on the dashboard's
   Server Access page. Nothing is added here by hand.

   This file is only a LOCAL SEED for development and offline preview: when
   the API is unreachable the deck falls back to whatever is in this array.
   Keep it empty in production so the site never shows a server that has
   not opted in. The deck hides itself when the list it ends up with is
   empty.

   Entry shape (matches what the API serves):
     name    - server name, shown as the card title (required)
     icon    - image URL for the server icon; initials are shown without it
     members - member count; formatted for the reader's locale
     tagline - the server's own short description (140 characters max)
     tags    - optional labels, at most three
     invite  - invite URL; without one the card has no join button
   ========================================================================== */

const featuredServers = [{ name: 'Preview Test Server', members: 1234, tagline: 'Temporary seed for preview verification.' }];
