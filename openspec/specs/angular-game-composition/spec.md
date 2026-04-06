### Requirement: Game interactions are composed through Angular components and services

The system SHALL route player interactions through Angular components that delegate game decisions and state transitions to Angular services.

#### Scenario: Player action triggers service-driven resolution

- **WHEN** a player selects a move from an Angular UI control
- **THEN** the component SHALL call service logic to resolve the round and update displayed state

### Requirement: UI state reflects service state updates

The system SHALL update score and round-result displays from Angular-managed state after each round.

#### Scenario: Service state change updates bound template

- **WHEN** round resolution updates service-held game state
- **THEN** the Angular template SHALL reflect the updated score and latest result
