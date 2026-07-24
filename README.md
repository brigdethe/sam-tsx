# Sam TypeScript Site

Localized multi-page React and TypeScript site organized as reusable page sections and layout components.

The page is composed in `src/App.tsx`. Reusable sections live in `src/components/sections`, shared layout components live in `src/components/layout`, and small UI building blocks live in `src/components/ui`.

## Run

```powershell
npm install
npm run dev
```

Open `http://localhost:8080`.

Production:

```powershell
npm run build
npm start
```

Set `PORT` to override port `8080`.

## Check

```powershell
npm run typecheck
npm run build
```

Images, SVGs, responsive image sets, videos, posters, embedded media, PDFs, and ordinary outbound links remain external. Stylesheets, fonts, and executable JavaScript are local under `public/`.
