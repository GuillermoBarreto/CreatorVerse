# CreatorVerse

A React and Supabase application for organizing and managing content creators. Built as a full-stack CRUD learning project.

## What it does

- Browse creators and open individual detail pages
- Add a creator with a name, URL, description, and optional image
- Edit existing creator information
- Delete creators from the collection

## Tech stack

- **Frontend:** React, Vite, JavaScript
- **Data:** Supabase
- **Styling:** Pico CSS (where used in the app)

## Run locally

```bash
git clone https://github.com/GuillermoBarreto/CreatorVerse.git
cd CreatorVerse
npm ci
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

### Supabase setup

This project needs a Supabase project and a matching creators table. Inspect `src/client.js` and the components' database queries to confirm the required table and columns before configuring a new project.

Use only the **public anon/publishable key** in browser-side code. Never put a Supabase service-role key or other privileged secret in the frontend. Configure your Supabase Row Level Security policies for the intended access model before deploying.

The existing project documents configuration in `src/client.js`. Do not commit private credentials.

## Architecture at a glance

The React interface handles creator listing, details, and edit forms. Supabase provides persistent data access. The project is intentionally small and is a demonstration of CRUD workflows rather than a production-ready multi-user service.

## Future improvements

- Add automated component and data-access tests
- Provide a reproducible Supabase schema and migration instructions
- Add loading, empty, and error-state coverage
- Document authentication and Row Level Security before public deployment
- Add screenshots and a verified live demo link

## Project status

Portfolio/learning project. No production reliability or security guarantees are claimed.
