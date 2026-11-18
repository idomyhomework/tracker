# Notes are end-to-end encrypted (zero-knowledge)

Notes are encrypted on the device with a key derived from the user's password before they are synced, so the server only ever stores ciphertext and we cannot read them. We chose this over server-side encryption at rest because "even we can't read your notes" is a selling point that is only honest under zero-knowledge. The cost is that a forgotten password means lost notes, mitigated by a one-time Recovery Code shown at signup.

## Consequences

- No server-side search, preview or AI features over note content.
- Password reset without the Recovery Code wipes notes; the UI must say so plainly.
- Changing the password re-wraps the notes key, it does not re-encrypt every note.
