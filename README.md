# Portfolio Website (Static HTML + CSS)
This portfolio is intentionally **HTML + CSS only** (no React, no build step).

## Routes (folder-based)
This uses basic “routing” via folders (static hosting friendly):
- `/` → `index.html`
- `/about/` → `about/index.html`
- `/projects/` → `projects/index.html`
- `/contact/` → `contact/index.html`
- `404.html` for missing pages (some hosts require configuration to use it)

Shared styling lives in `css/styles.css`.

Assets are in `assets/`:
- `assets/images/`
- `assets/fonts/`
- `assets/resume/Resume.pdf`

## Run locally
From the repo root:

```bash
npm run dev
```

Then open `http://localhost:8000`.

## Author
John Gray
