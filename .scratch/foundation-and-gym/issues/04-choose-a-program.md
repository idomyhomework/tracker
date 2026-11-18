# 04: Choose a Program

**What to build:** From a Program Template the user creates their own Program: picks days per week (when the template offers options) and the weekdays they train. It becomes the single active Program for the Owner Profile, and the Program screen lists its Program Days and highlights today's one.

**Blocked by:** 02 — Owner Profile; 03 — Program Templates catalogue

**Status:** ready-for-agent

- [ ] Creating a Program from a template stores a Profile-scoped copy; later template changes don't alter it.
- [ ] Days-per-week choice limits the Program Days to the template's matching option.
- [ ] Weekday selection must match the number of training days.
- [ ] Exactly one active Program per Profile; it persists across reload.
- [ ] Domain function for "today's Program Day" (from weekdays and last trained date) is written test-first, including rest days and weeks with missed sessions.
- [ ] Program screen shows all Program Days and highlights today's one.
