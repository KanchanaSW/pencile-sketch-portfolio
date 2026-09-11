# Sketch Portfolio

Personal site for **Kanchana Walagambahu**, a senior frontend engineer in Colombo. One long page, notebook-style: paper grain, hand-drawn marks, and a trail from brief to shipped work.

Live work linked from the page includes [JSON Vibe](https://jsonshare.org) and [CSE Stock Analysis](https://slstocks.netlify.app).

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, static export)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Deployed as a static site on [Cloudflare Workers](https://workers.cloudflare.com/)

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
| `npm run deploy` | Build and publish to Cloudflare |

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
wrangler.jsonc  Cloudflare Workers static-asset deploy
netlify.toml    optional Netlify build settings (`out`)
```

The site is a single route. Sections: hero, logos, craft, how I ship, testimonials, work, FAQ, CTA.

## Deploy

`next.config.mjs` sets `output: "export"`. Cloudflare serves the `out/` folder as Workers static assets.

From this folder:

```bash
npm run deploy
```

Or connect [the GitHub repo](https://github.com/KanchanaSW/pencile-sketch-portfolio) to Workers Builds in the Cloudflare dashboard (build command `npm run build`, output `out`).

## License

Private portfolio. Content © 2026 Kanchana Walagambahu.
