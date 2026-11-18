# 05: Active Workout — tracer bullet

**What to build:** The user starts today's (or any) Program Day, sees the current Exercise, Set number and target, logs Sets with weight and reps, sees elapsed time and calories so far, and finishes to save a Workout. If the page reloads or the app is killed at any point, the user returns to exactly the same Exercise and Set. The Active Workout engine is a pure, time-injected state machine in the domain package, built test-first; the app persists its state after every command (ADR 0004).

**Blocked by:** 04 — Choose a Program

**Status:** ready-for-agent

- [ ] Engine is a function of (state, command, now) with selectors; it never reads the clock or uses timers. State is plain serialisable data.
- [ ] Starting snapshots the Program Day and the Profile's body weight; later edits to either don't affect the running Active Workout.
- [ ] Set calories = MET × body weight × hours, with hours from reps × 3 s; rounded to 0.1 kcal; tests cover reference values from the Forge Vault formula.
- [ ] Elapsed time is derived from stored timestamps; a test serialises, advances the injected clock 30 minutes, deserialises and asserts elapsed time.
- [ ] The app writes the Active Workout to storage on every command, before the UI updates; one Active Workout slot per Profile.
- [ ] Finishing saves a Workout (date, Program Day, Sets, duration, calories) and clears the slot; the Program's last trained date updates.
- [ ] On launch with a stored Active Workout, the app opens straight into it.
- [ ] End-to-end test: log two Sets, reload, continue from the third Set, finish, Workout saved.
