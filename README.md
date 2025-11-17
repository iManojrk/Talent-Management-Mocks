# Talent Management Mocks

Static, interactive mock-ups for Talent Management with the Succession Org Chart as the active experience. Everything runs in the browser—no build tooling required.

## Quick Start

1. From the repo root run one of the static-server options below (or open `mocks/index.html` directly in a browser if your OS allows file-based hash routing).
2. Navigate to <http://localhost:4173/> (or whatever port your server reports).
3. Use `Ctrl+C` to stop the server when done.

### Server options

```bash
# Node-based
npx serve mocks
```

```bash
# Python 3
python -m http.server 4173 --directory mocks
```

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
