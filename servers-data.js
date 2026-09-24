/* Recommended servers for the landing page deck. The real list comes from the
   dashboard's public API (GET /api/public/servers) and holds exactly the servers
   whose admins turned the showcase on, so this file stays empty in production: it
   is a local seed for development and offline previews, and the deck hides itself
   when the list it ends up with is empty.

   Fields, under the API's own names, so a real response pastes in verbatim:
     name        - server name, the slot title (required)
     icon        - image URL for the server icon; initials are shown without it
     members     - member count, formatted for the reader's locale
     description - the server's own short description (140 characters max)
     tags        - optional labels, at most three, seed-only
     invite      - invite URL; without one the slot has no join button

   A field written under another name renders as missing rather than failing;
   scripts/check_deck_contract.py is the gate over these. */

const featuredServers = [];
