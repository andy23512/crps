## Context

The current UI includes a dedicated round-result panel that displays winner, moves, and challenge outcome after every round. The requested change is to remove this panel from gameplay presentation while preserving challenge mechanics, score progression, and game-over enforcement.

## Goals / Non-Goals

**Goals:**

- Remove round-result rendering from the main game interface.
- Keep round resolution and target-matching logic unchanged.
- Preserve score updates and game-over state behavior.
- Update tests so they no longer depend on result-area rendering.

**Non-Goals:**

- Changing move selection controls or computer move reveal behavior.
- Changing passed-round scoring rules.
- Removing internal round state unless it is proven unused by game logic.

## Decisions

1. Remove round-result component usage from the app shell.

- Rationale: The visibility requirement is a UI composition concern and can be satisfied by removing the component from template composition.
- Alternative considered: Keep component mounted but hidden with CSS. Rejected because it retains unnecessary DOM and test complexity.

2. Keep round state production in game flow unless cleanup is trivial and safe.

- Rationale: Round state still supports internal logic continuity and can be retained without visible rendering impact.
- Alternative considered: Remove round state entirely. Rejected for this change because it risks widening scope beyond display removal.

3. Replace result-panel assertions in tests with behavioral assertions.

- Rationale: Tests should validate expected gameplay outcomes (score, game-over, reset flow) independent of removed UI surface.
- Alternative considered: Delete related tests. Rejected because behavior still needs regression coverage.

## Risks / Trade-offs

- [Risk] Existing tests may fail due to selectors tied to removed result UI.
  -> Mitigation: Update tests to assert score/game-over/reset outcomes via remaining UI signals.
- [Trade-off] Users lose per-round move/outcome narrative details.
  -> Mitigation: Keep current computer move and required outcome displays for decision context.
- [Risk] Retained latest-round state may appear redundant.
  -> Mitigation: Accept temporary redundancy to keep change focused; revisit in a future cleanup change.
