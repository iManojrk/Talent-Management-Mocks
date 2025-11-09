# AGENTS.md

This file is for AI agents and contributors. It explains how to work in this repository and captures conventions, commands, and constraints. Update it as the project evolves.

## Scope
- Applies to the entire repository rooted at this folder.

## Purpose
- Provide fast orientation for agents and humans.
- Point to exact commands, paths, and configs.
- Capture decisions, tradeoffs, and open questions.

## Guardrails (Very Important)
- Do NOT create new mocks, screens, or sample data unless explicitly requested and specified by the Product Manager.
- Keep content static unless interactions are explicitly requested.
- Confirm scope and acceptance criteria before implementing any new screen or interaction.
- UI theme is locked to light mode; remove any dark-mode toggles if reintroduced accidentally.

## Quick Start (for agents)
- Primary machine-readable source: `agent.context.json`.
- Prefer exact commands from JSON over ad‑hoc guesses.
- Ask before making destructive changes or changing structure.
- Mock app entry: `mocks/index.html` (hash routing works via file://).

## Mocks Overview
- A static, interactive mock app lives in `mocks/`.
- No build step required; open `mocks/index.html` in a browser.
- Active hash route: `/org` — Succession Org Chart (only supported screen).
- Legacy screen files (dashboard, candidates, etc.) remain for reference but are not wired into the UI.
- Components provided: Table (filter/sort), Modal (forms), Kanban (drag & drop).

## Mocks Structure
- `mocks/index.html` — entry file.
- `mocks/styles.css` — theme + layout styles.
- `mocks/app.js` — app shell, header/sidebar, routes (only `#/org` linked).
- `mocks/router.js` — hash router.
- `mocks/state.js` — in-memory state with localStorage persistence and seed data.
- `mocks/components/*` — UI building blocks (Table, Modal, Kanban).
- `mocks/screens/orgchart.js` — Succession Org Chart module. Other screen files are unused unless explicitly re-enabled.

## Run/Build Commands
- Start (local): open `mocks/index.html` in your browser.
- Optional static server: `npx serve mocks` or `python -m http.server` (if available).

## Stack
- Languages/Runtimes: TODO
- Package managers: TODO

## Run/Build Commands
- Build: TODO (or see `agent.context.json.commands.build`)
- Test: TODO (or see `agent.context.json.commands.test`)
- Start: TODO (or see `agent.context.json.commands.start`)
- Lint/Format: TODO (or see `agent.context.json.commands.lint`)

## Repository Layout
- Entry point(s): TODO
- Source directory: TODO
- Tests directory: TODO
- Notable configs: TODO

## Conventions
- Code style/formatting: TODO
- Lint rules: TODO
- Naming: TODO
- Commit/branch strategy: TODO

### Adding New Screens
- Requires explicit PM approval. Default experience must remain the Succession Org Chart.
- If approved, create `mocks/screens/<name>.js`, register it inside `mocks/app.js`, and document the route.

## Environment & Constraints
- OS targets: TODO
- Required environment variables: TODO
- Tooling versions: TODO
- Sandboxing/approvals/network: see `agent.context.json.constraints`

## Tasks & Acceptance Criteria
- Track current tasks and criteria in `agent.context.json.tasks`.
- High-level roadmap or decisions can be summarized here.

## Agent Notes
- Prefer minimal, targeted changes respecting existing structure.
- Do not introduce new dependencies without confirmation.
- Validate using the provided commands; do not invent new workflows.
