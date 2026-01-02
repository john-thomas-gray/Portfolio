# Portfolio Website (React)
This portfolio is now a **React + Vite** app using **React Router** with nested routes.

## Routing (nested layout)
Shared layout (header/nav) lives at the top level, and pages render as children via `<Outlet />`:
- `/` → Home
- `/projects` → Projects
- `/about` → About
- `*` → 404 (client-side)

## Styling + assets
- CSS: `css/home.css` (imported from `src/main.jsx`)
- Images/fonts: `assets/` (import from React as needed)
- Favicon: `public/favicon.png`

## Run locally
From the repo root:

```bash
npm install
npm run dev
```

Vite will print the local URL in your terminal.
