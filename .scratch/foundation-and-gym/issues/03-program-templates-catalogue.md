# 03: Program Templates catalogue

**What to build:** The user can browse the built-in Program Templates, filter them by sex, goal, level and days per week, and open one to see its Program Days, focus and Exercises, all in their language. The Program Template and Exercise data from Forge Vault is ported into the i18n package as data keyed by stable ids, with EN/ES/RU translations of names and coaching notes.

**Blocked by:** 01 — Walking skeleton

**Status:** ready-for-agent

- [ ] All Forge Vault Program Templates and their Exercises (target sets, reps or seconds, MET, recommended flag, notes) are available, keyed by stable ids.
- [ ] Names, focus and notes are translated in EN, ES and RU; the missing-key check covers this data.
- [ ] Catalogue filters by sex, goal, level and days per week, and combinations narrow results correctly.
- [ ] Template detail shows each Program Day with its Exercises and marks recommended Exercises.
- [ ] Switching language changes Program Template and Exercise names on screen.
