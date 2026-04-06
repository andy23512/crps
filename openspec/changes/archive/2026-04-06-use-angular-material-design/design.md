## Context

The Angular game currently uses custom CSS and native HTML controls for interaction and state feedback. Functionality is correct, but UI consistency, accessibility defaults, and component scalability can be improved by standardizing on Angular Material.

## Goals / Non-Goals

**Goals:**

- Adopt Angular Material components for the game interface while preserving existing behavior
- Introduce a coherent Material theme for colors, typography, and surface elevation
- Improve accessibility semantics and interaction affordances using Material primitives
- Keep existing game logic and challenge flow untouched

**Non-Goals:**

- Changing game rules, scoring logic, or target-outcome challenge behavior
- Rewriting core services unrelated to UI rendering
- Introducing backend dependencies or data persistence changes
- Building a custom design system outside Angular Material in this change

## Decisions

### Decision 1: Use Angular Material as primary UI component layer

Replace key UI surfaces with Angular Material components (for example buttons, cards, badges/chips, toolbars, and message surfaces).

Rationale:

- Provides standardized interaction patterns and accessibility defaults
- Reduces maintenance burden of bespoke CSS controls

Alternative considered:

- Keep native HTML with incremental CSS refactor. Rejected because it does not achieve consistent design primitives as effectively.

### Decision 2: Introduce centralized Material theme tokens

Define application-level Material theme configuration and consume it in shell/component styles.

Rationale:

- Ensures consistent visual language and easy future customization
- Aligns with Angular Material recommended approach

### Decision 3: Preserve behavioral contracts while changing rendering primitives

UI behavior remains specification-compatible: pre-round state display, challenge feedback, game-over lockout, score visibility, and reset controls.

Rationale:

- Minimizes risk by separating presentation modernization from gameplay semantics

## Risks / Trade-offs

- [Material adoption increases bundle size] -> Mitigation: import only required Material modules and avoid unused components.
- [Visual regressions during component swap] -> Mitigation: map each existing UI requirement to acceptance checks during migration.
- [Theme setup complexity] -> Mitigation: keep initial theme minimal and documented, expand in follow-up changes if needed.

## Migration Plan

1. Add Angular Material/CDK dependencies and baseline theme setup.
2. Replace app shell and interactive controls with Material components.
3. Update status/result/game-over displays to Material presentation components.
4. Verify gameplay behavior remains unchanged while UI primitives change.
5. Validate accessibility and responsive behavior for core interactions.

Rollback strategy:

- Revert component imports/templates to existing native control implementation if regressions are found.

## Open Questions

- Which Material color palette should be primary for game state emphasis?
- Should theme support dark mode in this change or be deferred?
