## Context

The game currently has no time constraint on player move selection. The challenge format becomes more engaging under time pressure. Adding a 10-second countdown that triggers game over on expiry requires changes to both the app component (timer lifecycle management) and the UI (countdown display). The timer crosses both gameplay flow and presentation concerns, warranting this design doc.

## Goals / Non-Goals

**Goals:**

- Start a 10-second countdown when a round is ready for player input.
- Display the remaining seconds to the player during the countdown.
- Trigger game over if the player does not select a move before the timer reaches zero.
- Restart the timer when a new round begins (after a successful pass) and when the game is reset.
- Cancel the timer whenever game over is entered (either via target mismatch or timeout).

**Non-Goals:**

- Configurable timer duration (10 seconds is hardcoded for this change).
- Pausing the timer during any UI interaction.
- Persisting timer state across browser refresh.
- Changing any existing game-core or score-tracking logic.

## Decisions

1. **Own timer state in the app component, not a service.**
   - Rationale: The timer is a UI lifecycle concern driven by round readiness and reset events, both of which are already coordinated by the app component. Extracting to a service adds unnecessary abstraction for a single consumer.
   - Alternative considered: A dedicated `TimerService`. Rejected because it creates coupling overhead with no reuse benefit at this stage.

2. **Use `setInterval` with a 1-second tick to drive countdown.**
   - Rationale: 1-second granularity matches the requirement for a displayed countdown and is sufficient for a 10-second window.
   - Alternative considered: `setTimeout` for just the expiry event. Rejected because displaying live remaining seconds requires a periodic tick anyway.

3. **Trigger game over via existing `scoreTrackerService.setGameOver(true)` path.**
   - Rationale: Reuses the established game-over entry point; the UI already responds to `isGameOver` and blocks move controls. No new flow needed.
   - Alternative considered: A separate `timedOut` flag on app component. Rejected because it duplicates logic and diverges from the existing game-over contract.

4. **Display remaining time in the app shell template, not inside move-controls.**
   - Rationale: The timer is a game-level concern, not a move-selection concern. Keeping it in the shell preserves component separation.
   - Alternative considered: Pass countdown as an input to `MoveControlsComponent`. Rejected because it unnecessarily widens the move-controls API.

## Risks / Trade-offs

- [Risk] `setInterval` leaks if `ngOnDestroy` is not implemented or timer is not cleared on all game-over paths.
  → Mitigation: Clear the interval in a single `clearTimer()` helper called consistently from all paths that end a round (game over, reset, new round preparation).
- [Risk] Tests that use `fakeAsync`/`tick` may be harder to write for timer-driven state changes.
  → Mitigation: Introduce a `triggerTimeout()` helper method on the component or spy directly on `setInterval`/timer state in tests to avoid relying on real time.
- [Trade-off] Hard-coded 10 seconds means no flexibility for future configurability.
  → Mitigation: Isolate the constant in a named field (`readonly ROUND_TIMEOUT_SECONDS = 10`) so it is easy to adjust or parameterize later.
