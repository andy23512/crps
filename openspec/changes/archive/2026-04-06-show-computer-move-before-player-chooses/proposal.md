## Why

The current flow hides the computer move until after the player chooses, which makes each round fully reactive and less strategic. Revealing the computer move first introduces a different decision mode where players can choose with full information, enabling a deliberate and transparent gameplay variant.

## What Changes

- Change round flow so the computer move is generated and displayed before the player selects a move
- Keep round resolution rules unchanged once the player chooses
- Advance to a new round by generating and revealing a new computer move after each completed round
- Preserve score tracking and reset behavior while updating UI timing semantics

## Capabilities

### New Capabilities

- None

### Modified Capabilities

- game-ui: Add pre-choice display of the computer move and adjust round progression UI behavior
- computer-player: Require move generation timing to occur before player input for each round

## Impact

- Frontend UI behavior and state sequencing change for round lifecycle
- Angular component and service interaction updates in game flow orchestration
- No backend, API, or dependency changes required
