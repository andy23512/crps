## Context

The current challenge-mode UI uses a scoreboard that displays player wins, computer wins, and draws. In practice, the challenge experience is driven by whether a round satisfies the generated target outcome, so users care more about how many rounds they have passed than outcome-type breakdowns. The change spans UI rendering and score state shape, so a small cross-module design is needed.

## Goals / Non-Goals

**Goals:**

- Replace scoreboard display with a single passed-rounds value.
- Define passed rounds as rounds where the required target outcome is satisfied.
- Keep challenge flow, round resolution, and game-over behavior unchanged.
- Keep reset/new game behavior consistent by resetting passed rounds to zero.

**Non-Goals:**

- Changing round winner computation rules.
- Changing target outcome generation behavior.
- Adding persistence across browser sessions.

## Decisions

1. Use a dedicated passed-rounds counter in score tracking.

- Rationale: A first-class field avoids deriving progress from multiple counters and keeps UI binding simple.
- Alternative considered: Compute passed rounds from historical round results in UI. Rejected because it couples presentation to gameplay history and increases state reconstruction complexity.

2. Keep the scoreboard requirement in game-ui but simplify visible metrics to one value.

- Rationale: The requirement being changed is presentation behavior; the UI contract should clearly state only passed rounds are shown.
- Alternative considered: Keep existing three values and add passed rounds as a fourth metric. Rejected because it conflicts with the simplification goal.

3. Update score-tracker requirements to align with the new session metric.

- Rationale: If the UI contract changes to passed rounds only, score-tracker requirements should explicitly define increment and reset semantics for that metric.
- Alternative considered: Leave score-tracker spec unchanged and treat passed rounds as a UI-only transform. Rejected due to contract mismatch and ambiguous test expectations.

## Risks / Trade-offs

- [Risk] Existing tests may over-assume player/computer/draw rendering in scoreboard.
  → Mitigation: Update UI and service tests to assert passed-rounds behavior only.
- [Trade-off] Loss of detailed outcome breakdown visibility.
  → Mitigation: Keep per-round result details unchanged so users still see immediate outcome context.
- [Risk] Inconsistent increment logic if "passed" is interpreted differently across components.
  → Mitigation: Centralize increment criteria where challenge success is determined and reuse that source for score updates.
