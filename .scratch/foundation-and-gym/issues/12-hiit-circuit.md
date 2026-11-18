# 12: HIIT Circuit

**What to build:** The user builds a HIIT Circuit by picking exercises from a pool and runs it: work and rest intervals advance automatically with a clear phase change, and the circuit stays correct if the app goes to the background or reloads. HIIT Circuits are not saved as Workouts.

**Blocked by:** 05 — Active Workout tracer bullet

**Status:** ready-for-agent

- [ ] HIIT pool from Forge Vault ported into the i18n package with EN/ES/RU names.
- [ ] HIIT engine is a separate, time-injected, serialisable state machine, written test-first (phases idle → work → rest → done).
- [ ] Test: serialise mid-interval, advance clock across several intervals, deserialise; the phase and remaining time are correct.
- [ ] Circuit state is persisted on every change and resumes after reload.
- [ ] Phase changes are signalled with sound/vibration where supported.
- [ ] Nothing from a HIIT Circuit appears in Workout history.
