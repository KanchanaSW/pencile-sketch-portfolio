# Sketch Portfolio

Personal site for **Kanchana Walagambahu**, a senior frontend engineer in Colombo. One long page, notebook-style: paper grain, hand-drawn marks, and a trail from brief to shipped work.

Live work linked from the page includes [JSON Vibe](https://jsonshare.org) and [CSE Stock Analysis](https://slstocks.netlify.app).

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Deployed as a static site on [Netlify](https://www.netlify.com/)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` | Production static export to `out/` |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

Node 18+ is enough.

## Edit the copy

All names, links, sections, and case studies live in one file:

```
config/site.ts
```

Change that file and the page updates. Layout and motion stay in `app/` and `components/`.

## Layout

```
app/            routes, fonts, global styles
components/     nav, sections, sketch UI, motion
config/site.ts  copy and links
netlify.toml    build command + publish directory (`out`)
```

The site is a single route. Sections: hero, logos, craft, how I ship, testimonials, work, FAQ, CTA.

## Deploy

`next.config.mjs` sets `output: "export"`. Netlify builds with `npm run build` and publishes `out/`.

Connect the GitHub repo to Netlify, or deploy from this folder:

```bash
npx netlify deploy --prod
```

## License

Private portfolio. Content © 2026 Kanchana Walagambahu.
