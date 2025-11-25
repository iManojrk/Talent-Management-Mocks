# Talent Management Mocks

Static, interactive mock-ups for Talent Management with the Succession Org Chart as the active experience. Everything runs in the browser—no build tooling required.

## Quick Start

1. From the repo root run one of the static-server options below (or open `mocks/index.html` directly in a browser if your OS allows file-based hash routing).
2. Navigate to <http://localhost:4173/> (or whatever port your server reports).
3. Use `Ctrl+C` to stop the server when done.

### Server options

```zsh
# Node-based
npx serve mocks
```

```zsh
# Python 3
python3 -m http.server 4173 --directory mocks
```

### Cross-platform quick start

No matter which OS you use, the steps are identical: start a lightweight static server that points at the `mocks/` directory, then browse to <http://localhost:4173/>.

- **Linux / macOS**: from the repo root run `python3 -m http.server 4173 --directory mocks` or any other static server (e.g., `npx serve mocks`).  
- **Windows (PowerShell)**: run `py -m http.server 4173 --directory mocks` or `npx serve mocks`.  
- **All OSes**: after the server reports it is listening, open <http://localhost:4173/> in your browser; press `Ctrl+C` (or close the terminal) to stop the server when finished.

## GitHub Pages

This repo currently uses the classic **Deploy from a branch** Pages workflow, pointing at the `main` branch’s root. Because the static site lives inside the `mocks/` folder, the hosted URL is:

<https://iManojRK.github.io/Talent-Management-Mocks/mocks/>

Whenever you push to `main`, Pages automatically updates and serves the latest files from that path. All hash routes (like `#/org` and `#/performance`) behave the same as they do locally.

## Repo Layout

- `mocks/index.html` – entry document with cache-busting for CSS/JS.
- `mocks/styles.css` – light-theme styling and layout rules.
- `mocks/app.js` / `mocks/router.js` – shell, navigation, and hash routing.
- `mocks/screens/orgchart.js` – Succession Org Chart markup and modal wiring.
- `mocks/state.js` – simple in-memory state stub preserved for future enhancements.
- `mocks/screens/talent-assessment-standard-questions.js` – CTA-driven staging tab that reveals the full questions layout reused from Create Talent Planning Cycle (Proposed).

## TODO

1. Add Manage Successors Screenshot
2. Org Chart add tabs on the top and the bottom
3. Standard questions
4. PDF for plan
5. ondemand custom questions

create a new tab called talent assessment standard questions

after elias's talent card, add a new section for All the successors with their readiness levels
After that add the talent card for each successor
