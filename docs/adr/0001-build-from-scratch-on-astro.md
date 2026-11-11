# Build the site from scratch on Astro instead of forking a theme

We build our own Astro 7 project rather than forking an existing theme (AstroPaper, AstroWind, astro-erudite were the finalists). Forking ships in a day but creates an ownership split: the theme is an Astro project, not a template engine, so upstream updates arrive only by manual cherry-pick, and every later customisation fights the original author's design decisions. The site must be maintainable by one person over years, so we take only the three adoption layers we can own — dependencies (Pagefind, Expressive Code, @astrojs/rss, @astrojs/sitemap), structure (content-collection schemas and URL rules), and interaction/visual values (typography scale, spacing rhythm, motion durations) — and write every line of layout ourselves.

## Considered Options

- **AstroPaper fork** — fastest to first page, best feature coverage (search, dynamic OG, i18n), but inherits an un-mergeable upstream and a recognisable design.
- **AstroWind fork** — more to delete than to add, since it is a marketing skeleton.
- **Hugo PaperMod** — fastest builds, but customisation means Go templates and losing Astro's component model.

## Consequences

No upgrade path when a borrowed theme would have fixed a bug; we are the maintainer of every line. In exchange, deleting any feature is a local change, and the visual identity is ours by construction rather than by overpainting someone else's.