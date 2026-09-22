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

   Entry shape (the API's own field names, so a real response can be pasted
   in here verbatim):
     name        - server name, shown as the tile label (required)
     icon        - image URL for the server icon; initials are shown without it
     members     - member count; formatted for the reader's locale
     description - the server's own short description (140 characters max)
     tags        - optional labels, at most three; a seed may carry these, the
                   API exposes none because a server's copy is what gets
                   reviewed
     invite      - invite URL; without one the detail strip has no join button

   Use the names above exactly. The deck reads only what the API serves (plus
   tags), so an entry written under a different name renders without that
   field rather than failing - scripts/check_deck_contract.py is the gate that
   compares these three sides.
   ========================================================================== */

const featuredServers = [];
