### Requirement: Distinct SVG icons exist for rock, paper, and scissors

The system SHALL provide three distinct SVG icons mapped to the move controls: one icon for rock, one icon for paper, and one icon for scissors.

#### Scenario: Icon assets are available for all moves

- **WHEN** the move controls are rendered
- **THEN** each move control SHALL have its corresponding SVG icon

### Requirement: SVG icons are style-compatible with button states

The system SHALL render SVG icons so they remain legible in normal, hover/focus, and disabled states.

#### Scenario: Icon remains visible while control is disabled

- **WHEN** move controls are disabled (for example during game-over state)
- **THEN** each SVG icon SHALL remain visible with a clear disabled-state presentation
