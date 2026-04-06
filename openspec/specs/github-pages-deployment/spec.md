### Requirement: GitHub Pages deployment workflow is defined

The system SHALL define a repeatable workflow for publishing the Angular app to GitHub Pages at `https://andy23512.github.io/crps`.

#### Scenario: Contributor performs deployment

- **WHEN** a contributor follows the documented deployment workflow
- **THEN** the built static site SHALL be published to the configured GitHub Pages source for this repository
- **AND** the published site SHALL be reachable at `https://andy23512.github.io/crps`

### Requirement: Deployment documentation includes prerequisites and verification

The system SHALL provide contributor-facing deployment guidance that includes prerequisites, publish steps, and post-deploy verification checks.

#### Scenario: Contributor follows deployment documentation

- **WHEN** a contributor reads the deployment section in repository documentation
- **THEN** the documentation SHALL include required tools/permissions and exact deployment commands
- **AND** the documentation SHALL include verification steps for checking page accessibility and static asset loading at the GitHub Pages URL
