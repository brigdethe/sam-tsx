# Sam TypeScript Site

Localized multi-page React and TypeScript site organized as reusable page sections and layout components.

The page is composed in `src/App.tsx`. Reusable sections live in `src/components/sections`, shared layout components live in `src/components/layout`, and small UI building blocks live in `src/components/ui`.

## Services and technologies catalogue

The Services and Technologies mega menus, the practice-area pages (`/services/<area>`), every sub-service page (`/services/<area>/<service>`) and the technology pages (`/technologies/<domain>`) are all generated from `src/content/catalog/`:

- `categories-*.ts`: practice areas and their sub-services (copy, capabilities, deliverables)
- `technologies.ts`: security technology domains and the services that deliver them
- `icons.ts`, `images.ts`: the line icons and brand photography they use

Add or edit an entry there and the menus, pages, sitemap, structured data and `llms.txt` follow. `npm run build` runs `scripts/check-catalog.ts`, which fails on duplicate slugs, broken cross-links or missing images.

## Run

Requires Node 22 (`.nvmrc`).

```sh
npm install
npm run dev
```

Open `http://localhost:8080`. Set `PORT` to use another port.

Production build:

```sh
npm run build
npm start
```

## Check

```sh
npm run check       # typecheck, lint, formatting and build
npm run test:e2e    # browser tests (first run: npx playwright install chromium)
npm run format      # fix formatting
```

The same checks run on every pull request. Merging to `master` deploys to production on Vercel. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.

Images, SVGs, responsive image sets, videos, posters, embedded media, PDFs, and ordinary outbound links remain external. Stylesheets, fonts, and executable JavaScript are local under `public/`.
