# SeanBot refactor

This is a behavior-preserving structural refactor of the supplied files.

- `index.html`: content and markup, with embedded `<style>` and inline `<script>` blocks removed.
- `global.css`: original shared stylesheet, unchanged.
- `index.css`: all three former inline style blocks, kept in their original cascade order.
- `layout.js`: original shared layout behavior, unchanged.
- `theme-init.js`: early accent restoration, loaded before CSS to avoid an accent-color flash.
- `index.js`: page navigation, docs/commands rendering, showcase behavior, ticket demo, and timezone demo.

Keep `commands-data.js`, `docs-data.js`, and the `assets/` directory beside these files when deploying.
