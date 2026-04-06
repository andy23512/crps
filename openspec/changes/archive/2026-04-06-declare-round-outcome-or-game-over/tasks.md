## 1. Round Challenge State

- [x] 1.1 Add game state field for generated required target outcome (`player`, `computer`, `draw`)
- [x] 1.2 Add game state field for terminal game-over status
- [x] 1.3 Initialize generated target outcome when the game starts

## 2. Target Outcome Generation

- [x] 2.1 Implement random target-outcome generator in app/service layer
- [x] 2.2 Ensure generated target remains fixed for the active round until resolution
- [x] 2.3 Generate a new target outcome only when progressing to the next non-terminal round

## 3. Round Resolution and Game Over

- [x] 3.1 Keep existing RPS winner logic unchanged for actual round result
- [x] 3.2 Compare actual round result with generated target outcome
- [x] 3.3 Set game-over state when result does not match generated target outcome
- [x] 3.4 Prevent any further round progression when game-over is active

## 4. UI Updates

- [x] 4.1 Display generated required target outcome before move selection
- [x] 4.2 Continue displaying pre-round computer move and current target outcome together
- [x] 4.3 Show result panel indication for target matched vs target failed
- [x] 4.4 Show clear game-over status and disable move controls in terminal state

## 5. Reset and Continuation

- [x] 5.1 Update reset/new game to clear game-over state
- [x] 5.2 Update reset/new game to clear prior result display and scores (existing behavior)
- [x] 5.3 Regenerate and display a fresh target outcome and round state after reset

## 6. Verification

- [x] 6.1 Verify rounds continue when actual result matches generated target outcome
- [x] 6.2 Verify game enters terminal state when actual result mismatches generated target outcome
- [x] 6.3 Verify no further rounds can be played while game-over is active
- [x] 6.4 Verify reset restores playable state with fresh target outcome
