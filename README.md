# IndicBiz

Premium agency website built with React and Vite.

## Requirements

- Node.js 22.16 or newer
- npm 10.9 or newer

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run validate
```

`npm run validate` is the local release gate and runs lint followed by a production build.

## Architecture

```text
src/
  app/          application shell, routes, metadata and layout
  components/   reusable presentation primitives
  data/         all site content and domain datasets
  features/     route-specific sections and behavior
  hooks/        reusable stateful behavior
  pages/        thin route composers
  services/     external integration adapters
  styles/       global tokens, reset and base styles
```

Components do not own marketing copy, navigation definitions, card collections, pricing, team, service, or form-option data. Update content through the matching module in `src/data`.

CSS is split between global design foundations in `src/styles` and colocated CSS Modules. Inline styles are reserved for values that are genuinely dynamic at runtime.

## Adding real work

Portfolio entries are managed in `src/data/work.js`.

1. Add an optimized project screenshot to `public/work` (WebP or AVIF preferred).
2. Replace the entry's `image` and `imageAlt`.
3. Replace the representative title, summary, challenge, approach and outcome with verified project information.
4. Add `websiteUrl` when the live website is public.

Use a consistent 16:9 image ratio and avoid publishing confidential client information or unsupported performance claims.

## Contact delivery

The form uses a frontend adapter in `src/services/contactService.js`.

- Without configuration, it creates a prefilled email fallback.
- To connect an API, set `VITE_CONTACT_API_URL` to an endpoint that accepts a JSON `POST`.

## Deployment

Vercel serves the Vite `dist` output. `vercel.json` provides the SPA route fallback.

## Workflow

1. Branch from `stage` using `feature/<name>`.
2. Run `npm run validate`.
3. Merge into `stage` for review, then promote verified work to `main`.
