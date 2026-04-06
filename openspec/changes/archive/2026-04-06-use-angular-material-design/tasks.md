## 1. Material Setup

- [x] 1.1 Add Angular Material and Angular CDK dependencies to the Angular app
- [x] 1.2 Configure Angular Material theming baseline (palette, typography, density)
- [x] 1.3 Verify the app builds and loads with Material styles enabled

## 2. App Shell Migration

- [x] 2.1 Replace root game shell container with Material layout/surface components
- [x] 2.2 Apply consistent Material spacing and hierarchy for scoreboard, round state, and actions

## 3. Control and Action Components

- [x] 3.1 Replace move buttons with Material button variants while preserving move behavior
- [x] 3.2 Replace reset/new-game action with Material action component
- [x] 3.3 Ensure move controls are correctly disabled in terminal game-over state

## 4. Status and Feedback Components

- [x] 4.1 Render current computer move and required target outcome using Material presentation components
- [x] 4.2 Render challenge result state (target met/failed) with Material semantic emphasis
- [x] 4.3 Render game-over status with Material feedback surface

## 5. Behavior Compatibility Verification

- [x] 5.1 Verify game logic behavior is unchanged (RPS resolution and target matching)
- [x] 5.2 Verify score updates and reset behavior remain unchanged
- [x] 5.3 Verify pre-round and post-round state transitions remain unchanged

## 6. Quality Checks

- [x] 6.1 Update or add component tests for Material-rendered controls and feedback states
- [x] 6.2 Run automated tests and confirm all pass
- [x] 6.3 Run production build and confirm successful output
