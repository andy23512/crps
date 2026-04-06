## Why

Current rounds only ask the player to choose a move, which limits strategic goals to simple win attempts. Having the application randomly generate a required target outcome (win, lose, or draw) introduces a challenge mode with varied objectives and a clear fail condition when the required target is not achieved.

## What Changes

- Add a pre-round target generation step where the application randomly chooses one required outcome: win, lose, or draw
- Resolve each round against the generated target; if actual result does not match the generated outcome, the game enters a game-over state
- Prevent additional rounds while game-over is active until reset/new game is triggered
- Preserve existing move rules and random computer move generation
- Update UI flow to display the generated target outcome, current game-over status, and reset path

## Capabilities

### New Capabilities

- `generated-target-outcome-challenge`: Round contract where the app generates required outcome before player chooses a move
- `game-over-state`: Terminal game-over behavior when generated target and round result do not match

### Modified Capabilities

- `game-ui`: Display generated target outcome and game-over messaging/disablement behavior
- `game-core`: Add validation of actual result versus generated target outcome while preserving existing RPS resolution rules
- `score-tracker`: Support score and round-state consistency when transitioning into game-over

## Impact

- Frontend state model and interaction flow become multi-step (generate target outcome -> choose move -> evaluate match)
- Component and service interfaces require new target-outcome and game-over fields
- No backend/API changes; no external dependency changes expected
