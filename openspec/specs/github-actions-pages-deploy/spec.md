### Requirement: GitHub Actions workflow deploys to GitHub Pages

The system SHALL provide a GitHub Actions workflow that builds and deploys the application to GitHub Pages for this repository.

#### Scenario: Deployment runs from primary branch updates

- **WHEN** commits are pushed to the configured primary deployment branch
- **THEN** the workflow SHALL run a production build using the GitHub Pages-compatible build command
- **AND** the workflow SHALL publish the generated artifact to GitHub Pages

### Requirement: Deployment workflow supports controlled manual execution

The system SHALL allow maintainers to trigger the GitHub Pages deployment workflow manually.

#### Scenario: Maintainer triggers workflow dispatch

- **WHEN** a maintainer starts the deployment workflow via manual dispatch
- **THEN** the workflow SHALL execute the same build and publish path as automatic runs
- **AND** the workflow SHALL report deployment status in GitHub Actions logs

### Requirement: Workflow uses required GitHub Pages permissions and artifact handoff

The system SHALL configure the deployment workflow with required permissions and artifact transfer steps for GitHub Pages deployment.

#### Scenario: Workflow publishes artifact through Pages actions

- **WHEN** the deployment workflow runs
- **THEN** it SHALL configure Pages, upload the build artifact, and deploy using GitHub Pages deployment actions
- **AND** workflow permissions SHALL include access required for Pages publish operations
