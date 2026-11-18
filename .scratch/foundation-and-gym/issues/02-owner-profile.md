# 02: Owner Profile

**What to build:** On first launch the user goes through a short onboarding (sex, age, height, body weight, goal) that creates their Owner Profile, and can edit it later in settings. The Profile survives reloads. This ticket introduces the data layer: repository interfaces the UI depends on, an IndexedDB (Dexie) implementation, and a shared contract test suite that a cloud implementation will run later (ADR 0003, ADR 0005).

**Blocked by:** 01 — Walking skeleton

**Status:** ready-for-agent

- [ ] Onboarding appears only when no Owner Profile exists; completing it lands on the Gym Module.
- [ ] Owner Profile is editable in settings; changes persist across reload.
- [ ] UI and stores read and write only through repository interfaces, never Dexie directly.
- [ ] Every record has a UUID, created at, updated at and a soft-delete marker; updates bump updated at.
- [ ] Gym-facing repositories require a Profile id; records of one Profile are never returned for another.
- [ ] Schema is versioned from v1 with an explicit migration path.
- [ ] Contract suite (save/read back, Profile scoping, soft delete, updated-at bump) passes against the Dexie implementation in Node.
- [ ] End-to-end test: complete onboarding, reload, Profile values still shown.
