<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Base44 Sandbox Setup

- **No `src/` directory exists.** The actual app is a self-contained static
  `index.html` with inline CSS. The `package.json`, `vite.config.ts`,
  `tsconfig.json`, and `bun.lock` are from a Lovable TanStack Start template,
  but the React/TanStack source code was never uploaded.
- **`vite.config.ts` cannot be used as-is** — it imports
  `@lovable.dev/vite-tanstack-config` which sets up TanStack Start SSR and
  expects `src/server.ts` and `src/routes/`. A minimal
  `vite.base44.config.ts` is used instead to serve `index.html` as a static
  page. Switch back to the original config once `src/` is added.
- **Package manager:** the project uses bun (`bun.lock`, `bunfig.toml`) but
  npm works fine for dev — `npm install` + `npx vite dev`.
- **No external secrets needed.** The `.env` file contains Supabase
  publishable keys (not secret) already committed to the repo. The static
  page does not use them.
- **Verify the app:** `docker compose -f docker-compose.base44.yml ps` should
  show `healthy`; `curl -s http://localhost:3000/` should return the HTML
  with "Studio Solutions Hub" in the title.
