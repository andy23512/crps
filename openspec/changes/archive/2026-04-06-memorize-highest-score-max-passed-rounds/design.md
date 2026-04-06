## Context

The current score tracker only manages in-memory session score and resets to zero for each new game or new session. Players have no persistent indicator of their best run, even though the game is replay-oriented and score progression is central to engagement.

## Goals / Non-Goals

**Goals:**

- Persist the highest passed-round count across browser sessions.
- Keep current session score behavior unchanged for round progression and reset flow.
- Display highest score clearly in the scoreboard UI alongside current session score.

**Non-Goals:**

- Introducing user accounts or server-side score storage.
- Synchronizing scores across devices/browsers.
- Changing game rules, target-outcome logic, or timer behavior.

## Decisions

1. Store highest score in browser localStorage with a dedicated key.

- Rationale: localStorage is lightweight, persistent, and requires no backend.
- Alternative: sessionStorage. Rejected because it would not persist across browser restarts.

2. Keep current session score state separate from persisted highest score.

- Rationale: prevents reset/new game from accidentally clearing best score while preserving existing game flow.
- Alternative: derive both from one mutable object in storage. Rejected due to increased coupling and reset complexity.

3. Update highest score only when current passed rounds exceed stored best.

- Rationale: this preserves max semantics and avoids unnecessary writes.
- Alternative: update storage every round regardless of comparison. Rejected as redundant writes without behavioral gain.

4. Extend scoreboard UI to render both current passed rounds and highest score.

- Rationale: visibility of both values makes progress and best performance clear.
- Alternative: show highest score only on game-over. Rejected because continuous visibility is more motivating and simpler to validate.

## Risks / Trade-offs

- localStorage access can fail in restricted contexts. -> Mitigation: include safe fallback to in-memory default and avoid hard crashes.
- Invalid stored values may corrupt display. -> Mitigation: validate parsed values and clamp to non-negative integers.
- Additional scoreboard row could affect compact layouts. -> Mitigation: keep visual style consistent and verify on small screens.

## Migration Plan

1. Add persisted highest-score read/write logic to score tracking service.
2. Update score update/reset logic to maintain max score semantics.
3. Extend scoreboard component contract and template to render highest score.
4. Update tests to verify persistence and UI behavior.
5. Run full test suite and rollback if regressions are detected.

## Open Questions

- Should there be a user-facing control to clear the highest score in a future change?
