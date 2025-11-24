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

## GitHub Actions & GitHub Pages

These Mocks are hosted in GitHub Pages using a GitHub Action

- Push this repo to GitHub and open it in the browser.
- Once the workflow file exists (for example at `.github/workflows/pages.yml`), you can see its runs at <https://github.com/iManojRK/Talent-Management-Mocks/actions/workflows/pages.yml>.
- After the workflow succeeds, open the Pages URL shown in **Settings → Pages** (for this repo: <https://iManojRK.github.io/Talent-Management-Mocks>) to view the mocks. All hash routes (like `#/org` and `#/performance`) work the same as they do locally.

```powershell
# Windows Python launcher
py -m http.server 4173 --directory mocks
```

## Repo Layout

- `mocks/index.html` – entry document with cache-busting for CSS/JS.
- `mocks/styles.css` – light-theme styling and layout rules.
- `mocks/app.js` / `mocks/router.js` – shell, navigation, and hash routing.
- `mocks/screens/orgchart.js` – Succession Org Chart markup and modal wiring.
- `mocks/state.js` – simple in-memory state stub preserved for future enhancements.


## TODO

1. Add Manage Successors Screenshot
2. Org CHart add tabs on the top and the bottom
3. Standard questions
4. PDF for plan
5. ondemand custom questions
