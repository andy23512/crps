## Context

The game currently renders move controls with text labels (Rock, Paper, Scissors). Gameplay behavior, challenge flow, and terminal game-over handling are already implemented and validated. This change is a presentation-focused enhancement to improve control recognizability and UI quality by introducing SVG icons.

## Goals / Non-Goals

**Goals:**

- Replace text-first move control labels with SVG icons for rock, paper, and scissors
- Keep current move selection behavior and disabled-state behavior unchanged
- Preserve keyboard accessibility and screen reader clarity via accessible labels
- Ensure icon styling integrates with existing Angular Material button rendering

**Non-Goals:**

- Any gameplay logic or state transition changes
- Any changes to score tracking, target generation, or game-over rules
- Any backend/API integration
- Introducing third-party icon runtime dependencies if local inline SVG is sufficient

## Decisions

### Decision 1: Use inline SVG assets in component template or local SVG map

Use embedded/local SVG sources for each move icon rather than external icon fonts.

Rationale:

- Predictable rendering quality and sizing
- No network or external dependency cost
- Easier control over stroke/fill colors for button states

### Decision 2: Keep semantic labels separate from visual icon content

Buttons will include accessible labels (`aria-label` and/or visually hidden text) while visible content prioritizes icons.

Rationale:

- Preserves accessibility despite reduced visible text
- Keeps testability and semantic intent explicit

### Decision 3: Maintain existing event/output contract for move controls

Icon rendering should not change output events (`moveSelected`) or disabled behavior.

Rationale:

- Ensures game logic and tests remain stable
- Constrains scope to visual layer only

## Risks / Trade-offs

- [Icons may be ambiguous without textual context] -> Mitigation: use familiar silhouettes and keep accessible labels.
- [SVG styling may conflict with Material button styles] -> Mitigation: constrain icon size and inherit `currentColor` where possible.
- [Regression in keyboard/screen reader behavior] -> Mitigation: validate focus/activation and ARIA labels in tests.

## Migration Plan

1. Add SVG icon assets/definitions for rock, paper, and scissors move buttons.
2. Update move control template to render SVG icon content while preserving click handlers.
3. Update styles for icon sizing, alignment, and disabled/hover state readability.
4. Update tests to assert icon controls render and existing behavior remains unchanged.
5. Run full test and build verification.

Rollback strategy:

- Revert control template to previous text labels without touching game logic.

## Open Questions

- Should small text captions remain under icons for first-time usability, or be icon-only?
- Should SVGs be inline in template or centralized in a dedicated icon constant file?
