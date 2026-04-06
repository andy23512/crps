## Why

The game currently resets score to zero on new sessions, so players cannot track personal best progress over time. Persisting the highest passed-round total improves replay motivation and gives meaningful long-term feedback.

## What Changes

- Persist the highest passed-round count (max passed rounds) across browser sessions.
- Update score tracking behavior to compare current session progress against persisted best score.
- Update scoreboard UI requirements so current score and highest score are both visible and updated appropriately.
- Ensure reset/new game clears only current session score and does not erase highest score.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `score-tracker`: Extend score requirements to include persistent highest score behavior and update rules.
- `game-ui`: Extend scoreboard rendering requirements to show highest score alongside current session passed rounds.

## Impact

- Affected code: score-tracking service/state persistence and scoreboard component rendering.
- APIs: no external API changes.
- Dependencies: no new dependencies expected (browser storage only).
- Systems: frontend state persistence, score display, and test assertions.
