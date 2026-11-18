# 11: History and progress

**What to build:** The user sees a list of past Workouts (partial ones marked), a reminder on the Program screen when the last Workout was partial (dismissable), charts of weight over time per Exercise and seconds held per Timed Exercise, filterable by 7, 30, 90 days or all time, plus workout frequency and calories over time.

**Blocked by:** 07 — Timed and bodyweight Exercises; 08 — Workout controls

**Status:** ready-for-agent

- [ ] Progress queries (per-Exercise max weight or max seconds per day over a period; Workout count and calories per period) are domain functions, tested.
- [ ] Workout list shows date, Program Day, duration, calories and a partial marker.
- [ ] Partial-Workout reminder appears on the Program screen and can be dismissed.
- [ ] Exercise picker chooses the chart; Timed Exercises chart seconds, others chart weight.
- [ ] Period filter 7d / 30d / 90d / All changes all charts.
- [ ] Dates and numbers are formatted for the current language.
