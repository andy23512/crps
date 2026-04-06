## Why

Without a time constraint, players can take unlimited time before choosing a move, reducing the pressure and urgency that make the challenge format engaging. Adding a 10-second countdown per round creates time pressure and makes a timeout itself a failure condition, tightening the gameplay loop.

## What Changes

- Add a per-round countdown timer that starts when a round is ready for player input and counts down from 10 seconds.
- Trigger game over if the countdown reaches zero before the player selects a move.
- Display the remaining time to the player during the countdown.
- Reset and restart the timer when a new round begins (after a passed round) or when the game is reset.
- Cancel the timer when game over is triggered by a target mismatch (timer no longer needed once already in game-over state).

## Capabilities

### New Capabilities

- `round-timer`: Per-round countdown timer that triggers game over on expiry, displays remaining time, resets on new round and game reset.

### Modified Capabilities

- `game-ui`: Move controls require a new timer display and the player-can-select requirement must account for timer-based game-over as an additional blocking condition.

## Impact

- Affected code: app component (timer lifecycle), move-controls interaction, UI template (timer display), and app integration tests.
- APIs/contracts: no external API changes; timer state is internal to the app component.
- Dependencies/systems: no new external npm dependencies; uses browser `setInterval`/`clearInterval`.
