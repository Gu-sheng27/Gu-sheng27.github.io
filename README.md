# gu-sheng27.github.io

Personal site: one narrow column, serif-led typography, no trackers.
Live at **https://gu-sheng27.github.io**.

Built with Astro 7, Tailwind CSS 4 and TypeScript. Static HTML out, no server.

## Why it is not a fork

The layout is about fifteen files. That was the point: a forked theme is an
Astro project, not a template engine, so upstream fixes only arrive by hand and
every customisation argues with an absent author. See
[docs/adr/0001](docs/adr/0001-build-from-scratch-on-astro.md).

Open-source code is still used, but only where it does not cost future freedom —
`Pagefind` for search, `Expressive Code` for code blocks, `astro-icon` for icons,
`@astrojs/rss` and `@astrojs/sitemap` for feeds and indexing. Everything visual
is a value in one CSS file.

## Writing

Add a Markdown file to `src/content/writing/`. The file name becomes the URL:
`building-a-thing.md` → `/writing/building-a-thing/`.

```yaml
---
title: Building a thing          # required
description: One sentence.       # required — feeds RSS and share cards
pubDate: 2026-11-10              # required
updatedDate: 2026-11-20          # optional; renders "Updated …"
tags: ['tooling']                # optional
draft: true                      # optional; hides it from build and RSS
---
```

`title` and `description` are enforced by the schema in `src/content.config.ts`:
a typo in a field name fails the build instead of silently rendering nothing.

## Projects

Same idea, in `src/content/projects/`:

```yaml
---
name: Tool name
summary: One sentence on what it is and who it is for.
stack: ['Astro', 'TypeScript']
repo: https://github.com/Gu-sheng27/tool   # optional, must be a full URL
live: https://tool.example                 # optional
year: 2026
featured: true                             # true = shown on the home page
order: 1                                   # lower sorts first
---
```

Only `featured: true` entries appear on the home page; everything appears on
`/projects/`. `src/content/projects/example-project.md` is a template with
inline instructions — delete it once you have a real second project.

## Changing your identity

`src/site.ts` is the only file that knows who you are: display name, tagline,
meta description, navigation and social links. Every `TODO` in the repo is
either there or in `src/content/pages/about.md`.

## Changing the look

`src/styles/global.css` holds the whole design system:

- **Palette** — `--surface`, `--ink`, `--ink-muted`, `--rule`, `--accent`,
  `--ring`, defined once for light and once under `[data-theme='dark']`.
- **Type** — `Newsreader Variable` for body, `JetBrains Mono Variable` for
  meta information (dates, tags). Both self-hosted, no CDN request.
- **Measure** — `.wrap` caps the column at `65ch`, the book-equivalent width.

Changing `--surface` changes the whole site's paper. That is the intended
blast radius; there is no second place to edit.

## Commands

```bash
pnpm install     # once
pnpm dev         # local dev server, http://localhost:4321
pnpm build       # type-check, build, then index for search into dist/
pnpm preview     # serve the built site exactly as deployed
pnpm check       # types only
```

`pnpm build` chains three things on purpose: `astro check` (fails on schema
errors), `astro build`, then `pagefind` (builds the static search index from the
finished HTML). Search only exists in a production build — dev mode tells you so
on `/search/`.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds with pnpm on Node 24 and
publishes `dist/` to GitHub Pages. Nothing is committed to a `gh-pages` branch;
the artefact goes straight to Pages through OIDC.

## Decisions

- [ADR-0001](docs/adr/0001-build-from-scratch-on-astro.md) — build from scratch on Astro instead of forking a theme
- [ADR-0002](docs/adr/0002-adopt-bookish-visual-direction.md) — adopt the bookish visual direction
- [GLOSSARY.md](GLOSSARY.md) — the vocabulary this repo uses (Writing, Project, Meta, the three adoption layers)