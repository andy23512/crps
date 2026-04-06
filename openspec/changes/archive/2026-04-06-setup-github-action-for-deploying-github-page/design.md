## Context

The repository already supports manual GitHub Pages deployment through npm scripts, but publishing still depends on a local contributor environment and credentials. A workflow-based deployment path can reduce release friction and improve consistency by running build and publish steps in GitHub-hosted CI.

## Goals / Non-Goals

**Goals:**

- Add a GitHub Actions workflow that builds and deploys the app to GitHub Pages automatically.
- Ensure the workflow uses GitHub Pages-compatible build settings (including `/crps/` base path behavior).
- Document when deployment runs and how to verify successful publication.

**Non-Goals:**

- Rewriting application logic or UI behavior.
- Replacing existing local scripts for optional manual deployments.
- Introducing non-GitHub hosting targets.

## Decisions

1. Use official GitHub Pages Actions (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`) with a Node build job.

- Rationale: official actions minimize maintenance and align with platform expectations.
- Alternative: publishing via `gh-pages` CLI in CI. Rejected due to extra git branch handling and less native Pages integration.

2. Trigger deployment on pushes to the primary branch and allow manual workflow dispatch.

- Rationale: automatic deploy on mainline updates gives predictable release behavior while manual dispatch supports controlled re-runs.
- Alternative: manual-only deploy workflow. Rejected because it keeps unnecessary operational overhead.

3. Build using the existing GitHub Pages build script (`npm run build:github-pages`) and upload output from the generated dist path.

- Rationale: reusing established build command avoids diverging deployment behavior between local and CI paths.
- Alternative: define separate CI-only build commands. Rejected to reduce config drift risk.

4. Keep deployment requirements in `github-pages-deployment` and add a dedicated workflow capability for GitHub Actions orchestration.

- Rationale: deployment behavior and workflow orchestration are related but distinct concerns, and separate capabilities keep specs testable.
- Alternative: only modify the existing deployment capability. Rejected because workflow trigger and execution guarantees deserve independent requirements.

## Risks / Trade-offs

- Workflow permissions may be misconfigured, preventing deployment. -> Mitigation: require explicit Pages and id-token permissions in workflow spec and implementation.
- Wrong artifact path may publish empty or incomplete output. -> Mitigation: enforce the expected dist path and validate it in workflow steps.
- Automatic deployment on push may publish unintended changes. -> Mitigation: constrain triggers to the intended branch and use repository protections.

## Migration Plan

1. Add GitHub Actions workflow file for Pages deployment under `.github/workflows/`.
2. Configure build, artifact upload, and deploy jobs with required permissions.
3. Update README deployment section with CI workflow usage and verification guidance.
4. Validate workflow syntax and execute a manual dispatch or branch push test.
5. If issues occur, disable workflow trigger and continue using existing manual deployment command until fixed.

## Open Questions

- Should deployment run on every push to `main` or only on tagged releases?
- Should manual `gh-pages` publishing remain documented as fallback once workflow is stable?
