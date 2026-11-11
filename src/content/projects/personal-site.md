---
name: gu-sheng27.github.io
summary: This site. A static Astro build with hand-written layout, deployed to GitHub Pages by a single workflow.
stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'GitHub Actions']
repo: https://github.com/Gu-sheng27/Gu-sheng27.github.io
live: https://gu-sheng27.github.io
year: 2026
featured: true
order: 1
---

The site you are reading. Built from scratch rather than forked from a theme, so
the whole layout is about fifteen files you can reason about in one sitting.

## What it is

A static site generator renders every page at build time. There is no server, no
database and no runtime JavaScript on an article page — the only script that
ships is a small inline block that sets the colour theme before first paint, so
dark mode never flashes white.

## How it deploys

Push to `main`, a GitHub Actions workflow builds with pnpm and publishes `dist/`
to Pages. No manual step, no build artefacts in the repository.

## What is deliberately missing

Analytics, comments, a cookie banner, a newsletter modal, and any third-party
script. Every one of those was a choice to not have, on the grounds that a
reading surface should be quiet.