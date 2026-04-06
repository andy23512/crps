## Context

The Angular workspace is currently nested under `game-angular/`, requiring path-prefixing for development, build, and CI operations. This structure adds friction for tooling that assumes a root workspace and makes repository-level scripts less intuitive. The change is a structural relocation, not a feature rewrite, so the main constraint is preserving all app behavior while moving workspace files to root.

## Goals / Non-Goals

**Goals:**
- Relocate Angular workspace files and directories from `game-angular/` to repository root.
- Keep the same application behavior, commands, and artifact outputs from a user perspective.
- Update path-sensitive configs, scripts, and docs to root-based paths.

**Non-Goals:**
- Rewriting game components, services, or gameplay rules.
- Introducing new frameworks, package managers, or build systems.
- Redesigning UI/UX or Angular architecture.

## Decisions

1. Perform relocation in one coherent migration step.
- Rationale: Splitting relocation across many commits increases broken-intermediate states for scripts and CI.
- Alternative: Keep `game-angular/` as wrapper and add forwarding scripts. Rejected because it preserves unnecessary indirection.

2. Preserve existing Angular CLI project identity and targets.
- Rationale: Keeping project naming stable minimizes downstream changes in tests and deployment tooling.
- Alternative: Rename project while relocating. Rejected due to extra risk and broad blast radius.

3. Update all path-based references as part of migration validation.
- Rationale: The move touches docs, npm scripts, and any CI instructions that reference `game-angular/`.
- Alternative: Defer doc and path cleanup to a follow-up change. Rejected to avoid inconsistent guidance.

## Risks / Trade-offs

- Risk: Hidden references to `game-angular/` remain in scripts/docs and break workflows. -> Mitigation: run repository-wide search and update path references.
- Risk: Move operation drops or misplaces files. -> Mitigation: perform file-by-file verification of required Angular workspace artifacts post-move.
- Trade-off: Large structural diff can reduce review readability. -> Mitigation: keep change limited to relocation and reference updates only.

## Migration Plan

1. Move Angular workspace contents to repo root while preserving file contents.
2. Remove the now-empty `game-angular/` folder.
3. Update any root-level docs/scripts/config references to new paths.
4. Run development and production workflows from root to verify behavior parity.

## Open Questions

- Should root-level README be added in the same change to centralize run/build instructions, or should this remain inside existing Angular README content after relocation?
