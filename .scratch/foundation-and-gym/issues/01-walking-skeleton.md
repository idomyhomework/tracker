# 01: Walking skeleton

**What to build:** The user can open the app on the web, install it to the home screen, see a dark-themed shell with a bottom navigation (Gym only for now) and switch the interface between English, Spanish and Russian. Behind it: the pnpm workspaces monorepo with the app, an empty public-site app and the domain, ui and i18n packages; base design tokens and components in the spirit of Forge Vault; unit and end-to-end test runners wired up. See spec: `.scratch/foundation-and-gym/spec.md`.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] One install and one command start the app; the empty site app also builds.
- [ ] Shell renders with bottom navigation; Modules not yet built are not shown.
- [ ] First launch picks EN, ES or RU from the device locale; a setting switches language and the choice survives reload.
- [ ] Every user-facing string is a translation key; the build fails when a key is missing in any of EN/ES/RU.
- [ ] Design tokens (colors, type, spacing, radii) and base components (Button, Input, Modal, Sheet, Tabs, BottomNav, Toast) exist and are used by the shell.
- [ ] Installable PWA that opens full-screen and respects iPhone safe areas.
- [ ] Unit test runner passes with at least one domain test; an end-to-end test switches language and asserts a translated label.
