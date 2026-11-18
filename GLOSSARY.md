# Ultra Tracker Pro

A personal self-improvement app built around training, nutrition and goal planning, with habits and notes as supporting tools.

## Language

### Structure

**Module**:
A self-contained area of the app with its own screen and data (Gym, Diet, Mandala, Habits, Notes).
_Avoid_: Tab, page, section, feature

**Core Module**:
A Module the product is positioned around and sold on: Gym, Diet, Mandala.
_Avoid_: Main feature, pillar

**Supporting Module**:
A Module that exists to serve the Core Modules rather than to stand on its own: Habits, Notes.
_Avoid_: Auxiliary module, secondary feature, extra

### People

**Account**:
The login that owns data in the cloud and holds a Pro subscription. Optional: the app works without one.
_Avoid_: User (ambiguous), login

**Profile**:
A person whose body data (sex, age, height, weight, goal) and Gym and Diet records are tracked. Gym and Diet data always belong to exactly one Profile.
_Avoid_: User, client, athlete, gym profile

**Owner Profile**:
The Profile of the Account holder themself. Every Account has exactly one.
_Avoid_: Main profile, my profile, default profile

**Coach Mode**:
A Coach-plan capability letting one Account manage several Profiles in Gym and Diet, switching between them. Mandala, Habits and Notes stay with the Account and are unaffected.
_Avoid_: Trainer mode, multi-profile, team

### Plans

**Plan**:
The subscription level of an Account: Free, Pro, or Coach.
_Avoid_: Tier, subscription, license

**Pro**:
The paid Plan for individuals: sync, encrypted cloud Notes, unlimited Mandalas and Habits, AI food recognition, advanced analytics.
_Avoid_: Premium, Plus

**Coach**:
A pricier Plan that includes everything in Pro plus Coach Mode.
_Avoid_: Trainer plan, business, team

### Gym

**Program Template**:
A built-in, read-only training plan shipped with the app, filtered by sex, goal, level and days per week.
_Avoid_: Built-in program, preset, routine

**Program**:
A Profile's own configured copy of a Program Template (or built from scratch): chosen days, weekdays, enabled and reordered Exercises.
_Avoid_: Program config, routine, plan (reserved for subscriptions)

**Program Day**:
One training day inside a Program, with its own ordered list of Exercises.
_Avoid_: Day, split, session

**Exercise**:
A movement inside a Program Day with target sets, target reps (or seconds) and a MET value.
_Avoid_: Movement, lift

**Timed Exercise**:
An Exercise measured in seconds held instead of reps (plank, L-sit).
_Avoid_: Isometric, hold exercise

**Set**:
One logged effort of an Exercise: weight, reps or seconds, and estimated calories.
_Avoid_: Round, attempt

**Rest**:
The countdown between Sets; can be skipped, adjusted or turned off.
_Avoid_: Break, pause

**Active Workout**:
A Workout the user has started and not yet finished or abandoned. Survives the app being closed.
_Avoid_: Session (ambiguous), current workout

**Workout**:
The saved record of a finished Active Workout: date, Program Day, Sets, duration, calories.
_Avoid_: Session, training, log

**Finish Early**:
Ending an Active Workout before all Sets are done while keeping what was logged; the Workout is saved as partial.
_Avoid_: Urgent finish, stop

**Abandon**:
Ending an Active Workout without saving anything.
_Avoid_: Exit, cancel, discard

**HIIT Circuit**:
A timed work/rest interval workout built from a pool of exercises, separate from Programs.
_Avoid_: HIIT session, tabata

### Mandala

**Mandala**:
A 9×9 goal plan in the Harada method: one Main Goal, eight Sub-goals around it, eight Actions per Sub-goal.
_Avoid_: Mandala chart, goal grid, board

**Main Goal**:
The single centre cell of a Mandala; the life goal the whole plan serves. Carries a Target Date and a Why.
_Avoid_: Central goal, objective, dream

**Target Date**:
The date by which the user intends to reach the Main Goal.
_Avoid_: Deadline (reserved for Actions), due date

**Why**:
The user's own statement of why the Main Goal matters to them.
_Avoid_: Motivation, reason, description

**Sub-goal**:
One of the eight areas that must be achieved for the Main Goal to happen.
_Avoid_: Pillar, category, sub-target

**Action**:
One of the eight concrete steps the user commits to under a Sub-goal. May have a Deadline and a Recurrence.
_Avoid_: Task, step, todo

**Action Status**:
Where an Action stands: Not Started, In Progress, or Done.
_Avoid_: State, progress, completion

**Deadline**:
The date by which a single Action should be Done.
_Avoid_: Due date, target date (reserved for the Main Goal)

**Recurrence**:
A repeating schedule on an Action (e.g. every day, 3× a week) that turns it into an ongoing commitment rather than a one-off step.
_Avoid_: Repeat, frequency, schedule

### Notes

**Recovery Code**:
A one-time secret shown at signup that is the only way to regain access to encrypted Notes if the password is lost.
_Avoid_: Backup key, recovery phrase, seed

### Diet

**Daily Target**:
The calories and macros a user aims to eat in a day, derived from their profile and goal.
_Avoid_: Budget, limit, quota

**Food**:
A single item with known nutrition per 100 g, from the public database, a barcode scan, or entered by the user.
_Avoid_: Product, ingredient, item

**Meal Entry**:
A logged portion of a Food at a point in the day.
_Avoid_: Log, record, intake
