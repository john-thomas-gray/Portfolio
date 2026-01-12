# Portfolio

A fast, responsive personal portfolio built with **React + Vite** and **React Router**. It includes a projects index with **detail pages** (`/projects/:slug`), an About page, and a client-side 404.

## Tech stack

- **React 18** (UI)
- **Vite** (dev server + build)
- **React Router** (nested routes + layout)
- **Vanilla CSS** (`css/index.css`)

## Routes

The app uses a shared layout (header/nav) with nested routes via `<Outlet />`:

- `/` → Home
- `/projects` → Projects
- `/projects/:slug` → Project detail
- `/about` → About
- `*` → 404 (client-side)

## Project structure (high level)

- `src/` — React app source
- `src/pages/` — route-level pages
- `src/components/` — reusable UI components + layout
- `src/data/projects.js` — project metadata/content
- `css/index.css` — global styles (imported from `src/main.jsx`)
- `assets/` — images/icons
- `public/` — static files (e.g. `favicon.png`)

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL in your terminal.

## Build / preview

```bash
npm run build
npm run preview
```
