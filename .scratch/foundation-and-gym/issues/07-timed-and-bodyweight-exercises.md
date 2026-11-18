# 07: Timed and bodyweight Exercises

**What to build:** During an Active Workout, a Timed Exercise (plank, L-sit) is logged with a hold timer instead of reps, and bodyweight Exercises use the Owner Profile body weight plus any added weight, so load and calories are correct for both.

**Blocked by:** 05 — Active Workout tracer bullet

**Status:** ready-for-agent

- [ ] Timed Exercise flag is explicit; when absent, a target ending in seconds ("60s", "30–45s") implies it. Tested.
- [ ] Hold timer derives from stored timestamps and survives reload mid-hold.
- [ ] Timed Set calories use actual seconds held; tested.
- [ ] Bodyweight Set stores both body weight and added weight; effective load = sum; calories use it. Tested.
- [ ] The Workout records whether each Exercise was timed, so history reads seconds instead of reps.
