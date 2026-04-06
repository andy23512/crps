## Why

The current game title text does not reflect the newer challenge-oriented gameplay identity. Updating the title to "Conditional RPS" improves product clarity and keeps UI copy aligned with the current game concept.

## What Changes

- Update the primary game title displayed in the Angular app shell to "Conditional RPS".
- Align the browser tab title to "Conditional RPS".
- Ensure title rendering remains consistent in the root shell across initial load and active gameplay states.
- Update related UI/test expectations that assert the displayed application title.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `angular-app-shell`: Update shell-level title rendering requirement to reflect the "Conditional RPS" game title.

## Impact

- Affected code: Angular root template text, browser tab title source, and related tests.
- APIs: no API changes.
- Dependencies: no new dependencies expected.
- Systems: UI copy consistency and test assertions.
