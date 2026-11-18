# Spec: Foundation and Gym

Status: ready-for-agent

Covers stages 1 (Foundation) and 2 (Gym) of `docs/PLAN.md`. Vocabulary per `GLOSSARY.md`. Relevant ADRs: 0003 (data layer), 0004 (Active Workout persistence), 0005 (Profile scoping).

## Problem Statement

The user trains at the gym with their phone and needs an app that guides the workout and remembers progress. The previous app (Forge Vault) had the right features but lost the whole Active Workout whenever the phone killed the app in the background, so a user who checked a message between Sets could come back to an empty screen and have to start over. Its timers and bodyweight handling also broke repeatedly. It was Spanish-only, stored everything in a single browser store with a small size limit, and its code mixed workout logic into UI components, which is why those bugs kept returning.

There is also no foundation yet for the new app: no shared design system, no translations, no data layer that can later sync to the cloud, and no single Profile that Gym and (later) Diet can share.

## Solution

A new app shell, offline and without registration, in English, Spanish and Russian, with a Gym module that does everything Forge Vault's did but never loses a workout. The user sets up their Owner Profile once, picks or builds a Program, and runs an Active Workout that survives the app being closed, the phone locking or the browser reloading: on return, the app resumes at the exact Exercise, Set and Rest countdown. Finished Workouts feed history and progress charts. The workout logic lives in a pure, test-first domain package, and all storage goes through a data layer that can later be backed by the cloud without touching the UI.

## User Stories

### Shell and language

1. As a new user, I want to open the app and use it without creating an Account, so that I can try it immediately.
2. As a user, I want the app to work fully offline, so that bad gym Wi-Fi never blocks my workout.
3. As a Spanish speaker, I want the whole app in Spanish, so that I understand every label and instruction.
4. As a Russian speaker, I want the whole app in Russian, so that I understand every label and instruction.
5. As a user, I want the app to pick my device language on first launch, so that I don't have to configure it.
6. As a user, I want to switch language in settings at any time, so that I can use the language I prefer.
7. As a user, I want built-in Exercise names, Program Template names and coaching notes translated too, so that nothing is left in a foreign language.
8. As a user, I want numbers, dates and weekdays formatted for my language, so that they read naturally.
9. As a user, I want to move between Modules with a bottom navigation, so that switching is one tap.
10. As a user, I want Modules not yet built to be hidden, so that the app doesn't look unfinished.
11. As a user, I want a consistent dark visual style across every screen, so that the app feels like one product.
12. As a mobile user, I want to install the web app to my home screen and have it open full-screen, so that it feels native.
13. As an iPhone user, I want content to respect the notch and home indicator, so that nothing is hidden.

### Owner Profile

14. As a new user, I want a short onboarding asking my sex, age, height, body weight and goal, so that calorie estimates fit me.
15. As a user, I want to edit my Owner Profile later, so that estimates stay accurate as I change.
16. As a user, I want my body weight update to apply to all future calorie estimates, so that I don't keep a second copy anywhere.
17. As a user, I want my past Workouts to keep the calories they were calculated with, so that changing my weight doesn't rewrite history.
18. As a user, I want my data to be kept across browser reloads and app restarts, so that nothing is lost.

### Choosing a Program

19. As a user, I want to browse Program Templates filtered by sex, goal, level and days per week, so that I find one that fits me.
20. As a user, I want to see a Program Template's days, focus and Exercises before choosing it, so that I know what I'm committing to.
21. As a user, I want to choose how many days per week I train when a template offers several options, so that it fits my schedule.
22. As a user, I want to pick which weekdays I train, so that the app knows which Program Day is today.
23. As a user, I want to enable or disable individual Exercises in my Program, so that I skip equipment I don't have.
24. As a user, I want recommended Exercises marked, so that I know which ones matter most.
25. As a user, I want to reorder Exercises inside a Program Day by drag and drop, so that the order matches my gym's layout.
26. As a user, I want to edit target sets and reps of an Exercise, so that the Program fits my level.
27. As a user, I want to add my own Exercise to a Program Day, so that I'm not limited to the template.
28. As a user, I want to open a video tutorial search for any Exercise, so that I can check technique.
29. As a user, I want to build a Program from scratch, so that I can follow my own plan.
30. As a user, I want one active Program at a time, so that the app always knows what I'm doing.
31. As a user, I want to switch to a new Program and have the old one go to Past Programs, so that its history is kept.
32. As a user, I want to see my Past Programs with when I started and last trained them, so that I can review my training history.
33. As a user, I want to restart a Past Program, so that I can return to something that worked.

### Running an Active Workout

34. As a user, I want the app to suggest today's Program Day based on my weekdays, so that starting is one tap.
35. As a user, I want to start any Program Day manually, so that I can train on a different day than planned.
36. As a user, I want to see the current Exercise, Set number and target, so that I know what to do now.
37. As a user, I want the weight field pre-filled with what I lifted last time for that Exercise, so that logging is fast.
38. As a user, I want to log a Set with weight and reps, so that my progress is recorded.
39. As a user, I want to log a Timed Exercise by holding a timer and stopping it, so that the seconds are recorded automatically.
40. As a user, I want bodyweight Exercises to use my Profile body weight (plus any added weight), so that calories and volume are correct.
41. As a user, I want to correct a Set I logged by mistake, so that history stays accurate.
42. As a user, I want a Rest countdown to start after each Set, so that I rest the right amount.
43. As a user, I want to skip Rest, so that I can move on when I'm ready.
44. As a user, I want to add or remove time during Rest, so that I can adapt to how I feel.
45. As a user, I want to set my default Rest duration, or turn Rest off entirely, so that it fits my training style.
46. As a user, I want to change the Rest duration just for this workout, so that I don't alter my default.
47. As a user, I want to be notified when Rest ends while the app is in the background, so that I don't miss my next Set.
48. As a user, I want to see total elapsed workout time, so that I know how long I've trained.
49. As a user, I want to see estimated calories burned so far, so that I stay motivated.
50. As a user, I want to see the queue of remaining Exercises, so that I know what's coming.
51. As a user, I want to reorder the remaining Exercises during the workout, so that I can work around a busy machine.
52. As a user, I want to skip an Exercise, so that I can drop it when needed.
53. As a user, I want tab switching locked during an Active Workout, so that I can't leave it by accident.
54. As a user, I want to lock my phone, switch apps or receive a call mid-workout and come back to exactly where I was, so that I never lose progress.
55. As a user, I want the app to resume my Active Workout even after the system killed it or the browser reloaded, so that a closed app is never a lost workout.
56. As a user, I want the Rest countdown and elapsed time to be correct after coming back, so that the time I was away is counted.
57. As a user, I want to Finish Early and keep what I logged, so that a cut-short session still counts.
58. As a user, I want to Abandon a workout with a confirmation, so that I can discard it without doing so by accident.
59. As a user, I want to see a summary when a Workout finishes (duration, Sets, calories), so that I feel the result.

### History and progress

60. As a user, I want a list of my past Workouts, so that I can see what I've done.
61. As a user, I want partial Workouts marked as such, so that I know which ones were cut short.
62. As a user, I want to be reminded on the Program screen when my last Workout was partial, so that I can pick that day up again, and to dismiss that reminder.
63. As a user, I want a chart of weight over time for an Exercise I pick, so that I see whether I'm getting stronger.
64. As a user, I want a chart of seconds held over time for a Timed Exercise, so that I see progress on holds.
65. As a user, I want to filter charts by 7 days, 30 days, 90 days or all time, so that I see short and long trends.
66. As a user, I want to see workout frequency and calories over time, so that I track consistency.

### HIIT

67. As a user, I want to build a HIIT Circuit by picking exercises from a pool, so that I can do quick interval sessions.
68. As a user, I want the HIIT Circuit to run work and rest intervals automatically with clear phase changes, so that I don't look at the screen.
69. As a user, I want a HIIT Circuit to survive backgrounding like an Active Workout, so that the intervals stay correct.

### Data and future readiness

70. As a user, I want my old phone storage limits to never cut off my history, so that years of Workouts fit.
71. As a future Pro user, I want my local data to be ready to sync to an Account later without losing anything, so that upgrading is seamless.
72. As a future Coach, I want every Gym record tied to a Profile, so that managing clients later doesn't require migrating history.

## Implementation Decisions

### Monorepo and packages
- pnpm workspaces with two apps (the app; the public site, which this spec only scaffolds empty) and three packages: domain, ui, i18n.
- The app: React + Vite + TypeScript (strict) + Tailwind v3, installable PWA. Capacitor is added in stage 8, not here, but nothing in this spec may assume a browser-only API without a seam for it (notifications, wake lock).
- App state: Zustand for shared state; local UI state stays in components.

### Domain package (pure, no React, no storage)
- **Active Workout engine**: a state machine exposed as a function from (state, command, now) to new state, plus selectors. Commands: start (Program Day snapshot, Profile snapshot, preferences), log Set, edit Set, start Rest, adjust Rest, skip Rest, Rest elapsed, skip Exercise, reorder remaining Exercises, Finish Early, finish, Abandon. Selectors: current Exercise and Set, Rest remaining, elapsed time, calories so far, queue, isComplete.
- **Time is injected.** The engine never reads the clock or uses intervals; all durations are derived from stored timestamps (started at, Rest started at, accumulated pause). Ticking in the UI is presentation only.
- **The state is plain serialisable data**, so persisting it is a write of the whole object (ADR 0004).
- On start, the engine snapshots the Program Day and the relevant Profile values (body weight); later edits to the Program or Profile do not affect a running Active Workout.
- **Calories**: per-Set estimate = MET × body weight (kg) × hours, where hours = reps × 3 s for rep-based Sets and the actual seconds for Timed Exercises; rounded to 0.1 kcal. Carried over from Forge Vault.
- A Timed Exercise is flagged explicitly; when a template omits the flag, a target ending in seconds ("60s", "30–45s") implies it.
- Bodyweight Exercises: effective load = Profile body weight + added weight; the logged Set stores both.
- Finishing produces a Workout record (with an isPartial flag for Finish Early); Abandon produces nothing.
- **HIIT engine**: a separate, smaller state machine with the same time-injected, serialisable design; HIIT Circuits are not saved as Workouts in this spec.
- **Program operations**: create a Program from a Program Template (days per week, weekdays), toggle/reorder/edit/add Exercises, compute "today's Program Day" from weekdays and last trained date, archive and restore Programs.
- **Progress queries**: per-Exercise max weight (or max seconds) per day over a period; Workout count and calories per period.

### Data layer
- Repository interfaces per aggregate: Profiles, Programs, Workouts, Active Workout (single slot per Profile), Preferences. The UI and stores depend only on these interfaces (ADR 0003).
- Implementation in this spec: IndexedDB via Dexie. A cloud implementation arrives in stage 6.
- Every Gym record carries a Profile id; an Account-less device has exactly one Owner Profile (ADR 0005).
- Every record carries an id (UUID), created at, updated at and a soft-delete marker, so stage 6 sync (last write wins) needs no migration.
- Schema is versioned from v1 with explicit migrations.
- The Active Workout is written on every command, before the UI updates.
- Records store numbers and translation keys, never translated strings; user-entered names are stored as typed.

### i18n package
- i18next with EN, ES, RU; the device locale picks the default, a setting overrides it, persisted in Preferences.
- Program Templates, Exercises, notes and the HIIT pool live here as data keyed by stable ids, with translations per language; the domain refers to them by id.
- All user-facing strings are keys. A check fails the build when a key is missing in any language.

### UI package
- Design tokens (colors, type, spacing, radii) in the spirit of Forge Vault: dark surfaces, acid accent, monospace labels.
- Base components: Button, Input, NumberStepper, Modal, Sheet, Tabs, BottomNav, Toast, ConfirmBanner, Chart wrapper.

### Background behaviour (web, this spec)
- On returning to the page (visibility change, reload), the app reads the stored Active Workout and recomputes all timers from timestamps.
- Screen wake lock is requested during an Active Workout where supported.
- Rest-end notification: a single scheduled notification behind a notifier seam; on web, best effort (Notifications API when permitted, otherwise sound/vibration when visible). Native scheduling arrives with Capacitor in stage 8.

## Testing Decisions

- **Good tests exercise external behaviour only**: issue commands to an engine, or calls to a repository, and assert on returned state or read-back data. They never reach into private fields, component internals or storage layout. A refactor that keeps behaviour must keep tests green.
- **Seam 1, main: the domain package API.** Written test-first (Vitest). Covers the Active Workout engine with an injected clock: the full happy path, Rest skip/adjust/off, Timed Exercises, bodyweight load, Set edit, Exercise skip and reorder, Finish Early vs Abandon, snapshot isolation from later Program/Profile edits, and **a serialise → advance clock by 30 minutes → deserialise → continue** scenario asserting correct Rest remaining and elapsed time. Also calorie maths, timed-flag inference, today's Program Day, Program operations, progress queries, and the HIIT engine.
- **Seam 2: the data layer contract.** One shared suite run against the Dexie implementation (fake-indexeddb in Node): save then read back, Profile scoping (records of one Profile never appear for another), soft delete, updated-at bumps, Active Workout slot overwrite, schema migration from v1. The same suite will later run against the cloud implementation.
- **Seam 3: a few end-to-end scenarios** (Playwright, browser): Owner Profile onboarding; choosing a Program Template and completing a Workout; **reloading the page mid-Rest and resuming at the same Exercise with the countdown correct**; switching language changes Exercise names.
- UI components are not unit-tested.
- Prior art: none in this repo yet; these suites set the pattern. Forge Vault had no tests. Its calorie formula is the reference for expected values.

## Out of Scope

- Diet, Mandala, Habits and Notes (stages 3–5).
- Account, cloud sync, Plans, paywalls and limits, RevenueCat, PostHog, GDPR consent flow (stage 6).
- Capacitor, native notifications, Android foreground service, store publishing (stage 8).
- Coach Mode and more than one Profile per device (stage 10).
- The public site's content and SEO pages (only an empty site app is scaffolded).
- Importing data from Forge Vault.
- Saving HIIT Circuits as Workouts.

## Further Notes

- Forge Vault (github.com/idomyhomework/forge-vault) is reference only, for feature behaviour, the Program Template and Exercise data, and the calorie formula. Its code is not copied over; its template data is ported into the i18n package and translated.
- The lost-workout bug's root cause in Forge Vault: the in-progress workout lived only in component state and was saved only at the end. This spec's persistence and timestamp rules exist to make that impossible.
- If a Program Template turns out to need fields beyond those listed in the glossary, extend `GLOSSARY.md` rather than inventing synonyms.
