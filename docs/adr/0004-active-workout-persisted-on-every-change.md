# Active Workout is persisted on every change

The old app kept the in-progress workout only in memory and saved it at the end, so when the OS killed the backgrounded app the whole workout was lost. The Active Workout is now written to device storage on every logged set and state change, and all timers are derived from stored timestamps, so the app can be killed at any moment and resume exactly where the user was.
