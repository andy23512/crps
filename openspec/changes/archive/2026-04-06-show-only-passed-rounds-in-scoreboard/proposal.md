## Why

The current scoreboard shows player wins, computer wins, and draws, which adds noise for the challenge-style game flow where the most important progress signal is how many rounds have been successfully passed. Simplifying the scoreboard to passed rounds makes progress clearer and easier to scan.

## What Changes

- Replace scoreboard presentation from three counters (player/computer/draw) to a single passed-rounds counter.
- Define passed rounds as rounds where the player satisfies the generated required target outcome.
- Keep round resolution and game-over behavior unchanged; this change is focused on progress display and the supporting score-tracking contract.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `game-ui`: Change scoreboard requirement to display only passed rounds and update immediately after each successful round.
- `score-tracker`: Change score-tracking requirement from separate player/computer/draw counters to a session-level passed-rounds count used by the scoreboard.

## Impact

- Affected code: scoreboard component inputs/template, app state mapping, score tracking service/model, and related unit tests.
- APIs/contracts: internal score model contract between game flow and UI components.
- Dependencies/systems: no new external dependencies.
