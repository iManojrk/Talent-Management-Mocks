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

## GitHub Actions & GitHub Pages

To host these mocks with GitHub Pages using a GitHub Action:

- Push this repo to GitHub and open it in the browser.
- In the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
- Use the GitHub Pages static HTML template to create a workflow (or create `.github/workflows/pages.yml`) that uploads the `mocks/` folder as the Pages artifact.
- Commit the workflow to your default branch; each push will run the GitHub Action and redeploy GitHub Pages. If the workflow includes `workflow_dispatch`, you can also trigger it manually from the **Actions** tab.
- After the workflow succeeds, open the Pages URL shown in **Settings → Pages** (for this repo: `https://iManojRK.github.io/Talent-Management-Mocks/`) to view the mocks. All hash routes (like `#/org` and `#/performance`) work the same as they do locally.
- Once the workflow file exists (for example at `.github/workflows/pages.yml`), you can see its runs at `https://github.com/iManojRK/Talent-Management-Mocks/actions/workflows/pages.yml`.

```powershell
# Windows Python launcher
py -m http.server 4173 --directory mocks
```

## Routes & Behavior

- `#/org` loads the Succession Org Chart (default).
- `#/performance` and `#/cycle` are placeholder routes accessible via the mock navigation.
- VP, Fleet Operations exposes the only interactive successor list; selecting a successor opens the Talent Card modal with Latest/Trend toggles plus Assign Learning flows.

## Repo Layout

- `mocks/index.html` – entry document with cache-busting for CSS/JS.
- `mocks/styles.css` – light-theme styling and layout rules.
- `mocks/app.js` / `mocks/router.js` – shell, navigation, and hash routing.
- `mocks/screens/orgchart.js` – Succession Org Chart markup and modal wiring.
- `mocks/state.js` – simple in-memory state stub preserved for future enhancements.

## Guardrails

- Do not add new screens, sample data, or interactions without Product Owner approval.
- Keep the experience locked to light mode.
- Any updates should still open the Talent Card modal through the successor rows only.
