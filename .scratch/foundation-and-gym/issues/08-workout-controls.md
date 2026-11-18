# 08: Workout controls

**What to build:** The full set of in-workout controls: weight pre-filled from the last time the user did that Exercise, editing a logged Set, skipping an Exercise, reordering the remaining queue by drag and drop, Finish Early (saved as a partial Workout), Abandon with a confirmation, Module navigation locked during an Active Workout, and a summary screen when a Workout finishes.

**Blocked by:** 05 — Active Workout tracer bullet

**Status:** ready-for-agent

- [ ] Weight field pre-fills from the most recent Set of the same Exercise for this Profile.
- [ ] Edit Set, skip Exercise and reorder queue are engine commands, tested; reorder affects only remaining Exercises.
- [ ] Finish Early saves a Workout flagged partial with what was logged; Abandon saves nothing and clears the slot. Both tested.
- [ ] Abandon requires an explicit confirmation.
- [ ] Bottom navigation is disabled during an Active Workout, with a short message explaining why.
- [ ] Summary screen shows duration, Sets logged and calories after finish or Finish Early.
