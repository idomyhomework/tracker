# 06: Rest

**What to build:** After each Set a Rest countdown starts. The user can skip it, add or remove time, change the duration just for this workout, set a default, or turn Rest off. Coming back from the background (or a reload) shows the correct remaining time. The screen stays awake during an Active Workout where supported, and the user is told when Rest ends while the app is in the background, as far as the web allows.

**Blocked by:** 05 — Active Workout tracer bullet

**Status:** ready-for-agent

- [ ] Engine commands for start, adjust, skip and elapse Rest, written test-first; Rest remaining derives from the stored Rest start timestamp.
- [ ] Default Rest duration and Rest on/off are Preferences; a per-workout override doesn't change the default.
- [ ] Test: start Rest, advance clock past its end while serialised, deserialise; Rest is over and the next Set is current.
- [ ] Wake lock requested during an Active Workout and released after; absence of support doesn't break anything.
- [ ] Rest-end notification goes through a notifier seam; the web implementation uses the Notifications API when permitted, otherwise sound/vibration while visible.
- [ ] End-to-end test: reload mid-Rest, countdown resumes with the correct remaining time.
