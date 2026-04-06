## 1. SVG Icon Assets

- [x] 1.1 Define or add SVG icon data for rock, paper, and scissors
- [x] 1.2 Map each move control to its corresponding SVG icon source
- [x] 1.3 Ensure icon sizing and viewBox configuration are consistent across all three icons

## 2. Move Control Rendering

- [x] 2.1 Update move control template to render SVG icon-first button content
- [x] 2.2 Keep existing move selection output behavior unchanged (`moveSelected` contract)
- [x] 2.3 Preserve accessibility semantics (ARIA labels and keyboard activation)

## 3. Styling and States

- [x] 3.1 Update control styles for icon alignment with Angular Material button layout
- [x] 3.2 Ensure hover/focus states keep icons legible
- [x] 3.3 Ensure disabled state keeps icons visible and clearly inactive

## 4. Behavior Compatibility

- [x] 4.1 Verify move controls still trigger correct gameplay actions
- [x] 4.2 Verify controls remain blocked in game-over state
- [x] 4.3 Verify reset/new game behavior remains unchanged

## 5. Quality Checks

- [x] 5.1 Update/add component tests to validate icon-rendered controls and accessibility labels
- [x] 5.2 Run automated tests and confirm all pass
- [x] 5.3 Run production build and confirm successful output
