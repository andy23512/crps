## Why

The Angular implementation currently relies on custom-styled native controls, which increases UI maintenance effort and can lead to inconsistent accessibility and interaction behavior. Adopting Angular Material design components now provides a standardized, accessible UI foundation and improves visual consistency across game states.

## What Changes

- Replace key custom UI controls with Angular Material components while preserving gameplay behavior
- Introduce Angular Material theming for consistent colors, typography, spacing, and component states
- Use Material form and feedback components for round challenge status, game-over messaging, and actions
- Keep existing game logic, score rules, and target-outcome challenge flow unchanged

## Capabilities

### New Capabilities

- `angular-material-theming`: Centralized Angular Material theme configuration for the game shell and components
- `angular-material-component-library`: Material component usage patterns for controls, status display, and feedback messaging

### Modified Capabilities

- `game-ui`: Render game controls and status panels with Angular Material components while preserving existing behavioral requirements
- `angular-app-shell`: Update app shell presentation and structure to align with Angular Material layout and visual standards

## Impact

- Adds Angular Material and related Angular CDK dependencies
- Updates frontend templates/styles and component imports
- No backend or API changes; gameplay logic and state flow remain functionally equivalent
