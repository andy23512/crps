## 1. Add GitHub Actions Pages Workflow

- [x] 1.1 Create a GitHub Actions workflow file under `.github/workflows/` for GitHub Pages deployment
- [x] 1.2 Configure workflow triggers for primary branch pushes and manual `workflow_dispatch`

## 2. Implement Build and Deploy Jobs

- [x] 2.1 Configure Node setup and install/build steps to run `npm ci` and `npm run build:github-pages`
- [x] 2.2 Configure Pages deployment steps using official actions (`configure-pages`, `upload-pages-artifact`, `deploy-pages`) and required permissions

## 3. Align Deployment Documentation

- [x] 3.1 Update README deployment guidance to include GitHub Actions workflow path and trigger behavior
- [x] 3.2 Document how to verify workflow runs and deployment status in GitHub Actions and at `https://andy23512.github.io/crps`

## 4. Validate Workflow Configuration

- [x] 4.1 Validate workflow syntax and referenced script/path consistency for build artifact upload
- [x] 4.2 Run a local dry validation of deployment-related scripts and confirm no regressions to manual deployment commands
