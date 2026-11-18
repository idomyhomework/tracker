# CLAUDE.md


Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

Tradeoff: These guidelines bias toward caution over speed. For trivial tasks, use judgment.

1. Think Before Coding

Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

2. Simplicity First

Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

3. Surgical Changes

Touch only what you must. Clean up only your own mess.

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

4. Goal-Driven Execution

Define success criteria. Loop until verified.

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]

5. Project Idea

Ultra Tracker Pro (working name): a local-first self-improvement app. **Core Modules**: Gym, Diet, Mandala. **Supporting Modules**: Habits, Notes. Runs on web, iOS and Android (Capacitor); EN, ES, RU from day one. A from-scratch rewrite of the abandoned Forge Vault PWA; old code is reference only, never copied wholesale.

## Read before working

- `GLOSSARY.md`: the project's language. Use its terms in code, commits and conversation; when a term is fuzzy or missing, resolve it with the user and add it there.
- `docs/PLAN.md`: stages in order, each with a "done when" criterion. Work belongs to the current stage; things outside it go to the plan's «Идеи на потом» section.
- `docs/adr/`: decisions that look surprising without context. Check them before changing architecture; a reversal gets a new ADR.

## Stack

- pnpm workspaces monorepo: `apps/app` (React + Vite + TS + Tailwind v3, Dexie, Zustand, i18next, Capacitor), `apps/site` (Astro, public SEO site), `packages/domain`, `packages/ui`, `packages/i18n`.
- Backend: Supabase in the EU region, reached only through our own data layer (ADR 0003).
- Payments: RevenueCat is the single source of truth for an Account's Plan (Free / Pro / Coach).
- Analytics: PostHog EU, events only.
- Use pnpm for every package operation.

## Rules that hold everywhere

- **Local-first**: every feature works offline and without an Account; IndexedDB is the primary store, the cloud is a sync target.
- **Data layer**: UI and stores read and write through repository interfaces; Supabase and Dexie live behind them.
- **Profile scoping**: every Gym and Diet record carries a Profile id; Mandala, Habits and Notes belong to the Account (ADR 0005).
- **Translated strings**: all user-facing text, including built-in exercise and program data, lives in `packages/i18n` as keys for EN, ES and RU.
- **Pure domain**: business logic (Active Workout state machine, timers, calories, Daily Target, Mandala, sync, crypto) lives in `packages/domain` with no React or storage imports, and is written test-first.
- **Survivable state**: anything in progress (above all the Active Workout) is persisted on every change and timers derive from stored timestamps, so the app can be killed at any moment and resume (ADR 0004).
- **Notes privacy**: Notes leave the device only as ciphertext (ADR 0001).
- **Health data**: body, diet and training data go to analytics as counts and events only, never as values.

## Code style

- TypeScript strict, typed explicitly where inference is unclear; `unknown` plus narrowing in place of `any`.
- Functional components and hooks; local UI state in `useState`/`useReducer`, shared app state in Zustand.
- Tailwind with tokens from `packages/ui`; extend the config for new colors, fonts or spacing; conditional classes via `clsx`/`tailwind-merge`. Mobile-first.
- Naming: `camelCase` values, `PascalCase` components and types, `snake_case` database tables and columns.
- Secrets in `.env` (git-ignored); frontend env vars via `import.meta.env.VITE_*`.

## Agent skills

### Issue tracker

Issues and specs are local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five roles, recorded as a `Status:` line in each issue file. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
