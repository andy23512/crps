## Context

The current game flow resolves a round only after the player selects a move, and the computer move is shown as part of post-resolution feedback. This change modifies the round lifecycle so the computer move is generated and visible before player input, while keeping winner logic and scoring rules unchanged.

## Goals / Non-Goals

**Goals:**

- Introduce a pre-choice reveal phase where the current computer move is visible to the player
- Ensure each round uses one pre-generated computer move and resolves against the player selection
- Automatically prepare the next round by generating and revealing a new computer move after resolution
- Preserve existing score tracking and reset semantics

**Non-Goals:**

- Changing winner determination rules
- Changing score increment rules
- Introducing multiplayer, backend logic, or persistence changes
- Adding new game modes beyond the reveal-before-choice flow

## Decisions

### Decision 1: Round state includes a current revealed computer move

The game state will track a current computer move that exists before player interaction.

Rationale:

- Makes pre-choice reveal explicit and testable
- Prevents ambiguity about whether a new random move is generated at click time

Alternative considered:

- Generating computer move only for display and generating again for resolution. Rejected because it breaks fairness and predictability.

### Decision 2: Round progression is two-phase

Each round has two phases: reveal phase and resolution phase. On player selection, resolve using the already revealed move, then immediately generate the next revealed move.

Rationale:

- Guarantees one computer move per round
- Keeps gameplay loop consistent and easy to reason about

### Decision 3: Reset initializes reveal state

Reset clears scores and result text, then prepares a fresh revealed computer move for the next player decision.

Rationale:

- Avoids empty or inconsistent UI after reset
- Keeps flow aligned with the new pre-choice requirement

## Risks / Trade-offs

- [Predictability may make gameplay easier] -> Mitigation: This is the intended behavior change; keep previous flow as a separate future mode if needed.
- [State sequencing bugs could use stale revealed move] -> Mitigation: Store revealed move in single source of truth and update only at controlled transition points.
- [UI confusion about when rounds advance] -> Mitigation: Add explicit labels for current computer move and last round result.

## Migration Plan

1. Update computer move lifecycle to initialize and persist the revealed move before player action.
2. Update UI to display current computer move in pre-choice state.
3. Adjust round handler to resolve against current revealed move, then generate the next one.
4. Update reset flow to clear scores/results and initialize a new revealed move.
5. Validate scenarios for pre-choice reveal, round resolution, next-round generation, and reset behavior.

Rollback strategy:

- Revert to previous interaction flow where computer move is generated and displayed during resolution.

## Open Questions

- Should the revealed move be hidden until initial app initialization completes, or show a loading placeholder momentarily?
- Should the UI explicitly distinguish current revealed move from last round computer move to avoid ambiguity?
