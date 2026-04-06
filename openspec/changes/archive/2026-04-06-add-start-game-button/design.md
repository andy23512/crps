## Context

The app currently auto-starts gameplay on `ngOnInit`, immediately generating the first computer move, target outcome, and round timer countdown. The player can be mid-read when the clock is already ticking. Adding an idle/pre-game state gated by a Start Game button is a focused UI flow change: the app component gets a boolean flag that governs whether in-game UI is rendered and timers are running, and reset returns to that idle state rather than re-initiating gameplay.

## Goals / Non-Goals

**Goals:**

- App opens in idle state — minimal UI with just a title, the Start Game button, and the scoreboard reset to zero.
- Pressing Start Game transitions to the existing in-game UI and starts the round timer.
- Pressing New Game (reset) returns to idle state; gameplay UI and timer are hidden/stopped.

**Non-Goals:**

- A rules/instructions screen or any additional idle-state content.
- Animated transitions between idle and active states.
- Any changes to round resolution, scoring, or timer logic once the game is running.

## Decisions

1. **Use a `gameStarted` boolean on the app component to gate in-game rendering.**
   - Rationale: A single boolean cleanly drives `*ngIf` on the in-game UI block. No new service or state model needed.
   - Alternative considered: Introduce a formal `GamePhase` enum (`idle | playing | over`). Rejected — over-engineering for a single gating flag; game-over is already handled by `scoreTrackerService.isGameOver`.

2. **`ngOnInit` sets `gameStarted = false` and does NOT call `prepareNextRound`.**
   - Rationale: Keeps the first-render state clean; nothing ticks until the player explicitly opts in.
   - Alternative considered: Start the round silently but hide the timer. Rejected — timer would still be ticking in the background, wasteful and potentially confusing.

3. **`startGame()` method calls `prepareNextRound()` and sets `gameStarted = true`.**
   - Rationale: Centralizes the transition in one clear method that mirrors `resetGame`'s structure.

4. **`resetGame()` calls `clearTimer()`, `scoreTrackerService.resetGame()`, and sets `gameStarted = false`.**
   - Rationale: Returning to idle on reset gives the player a deliberate moment before the next session starts, consistent with first load.

## Risks / Trade-offs

- [Risk] Existing tests rely on `ngOnInit` immediately populating `currentComputerMove` and `currentTargetOutcome`. Those tests would fail.
  → Mitigation: Update tests to call `startGame()` or spy on `ngOnInit` so in-game state is established before assertions.
- [Trade-off] Slightly longer path to first gameplay action; player must press an extra button.
  → Mitigation: Acceptable trade-off stated in the proposal; the timer justifies intentional start.
