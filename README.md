# Talent Management Mocks

Interactive, static mock-ups for the Succession Org Chart experience. Open the mocks locally or view the live GitHub Pages build.

## Prerequisites

- Python 3.x available as `python` or `py` (for the built-in HTTP server).  
  _Alternatively, use any static server such as `npx serve` if you prefer Node.js._

## Run Locally

1. Open a terminal in the project root.
2. Start a static server (choose one):

   ```powershell
   # Windows (Python launcher)
   py -m http.server 4173
   ```

   ```zsh
   # macOS/Linux (Python)
   python -m http.server 4173
   ```

3. In your browser, navigate to <http://localhost:4173/mocks/>.
4. Use `Ctrl+C` in the terminal to stop the server when finished.

## Live Preview (GitHub Pages)

- <https://iManojrk.github.io/Talent-Management-Mocks/mocks/>

## Notes

- The sidebar intentionally shows only **Succession Org Chart**.
- Caching is disabled via query parameters and HTTP headers, so every reload fetches fresh assets.
