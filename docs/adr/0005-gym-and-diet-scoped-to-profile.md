# Gym and Diet data belong to a Profile; everything else to the Account

Every Gym and Diet record references a Profile, not the Account, from day one, even though only Coach Mode (Pro, built late) ever has more than one Profile per Account. Retrofitting this later would mean migrating every workout and meal record, while doing it now costs one column. Mandala, Habits and Notes are personal to the Account holder and are deliberately not Profile-scoped, so switching Profile in Coach Mode never shows or changes them.

## Consequences

- In v1 Coach Mode is trainer-side only: managed Profiles have no login or app access of their own. A coach–client model with separate accounts is out of scope.
- A managed Profile is the coach's record, not the client's. A client who wants the app installs it and creates their own Account; there is no link or data transfer between the two in v1.
- Coach Mode is sold as its own Plan (Coach), priced above Pro.
