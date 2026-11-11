# Personal Site

A from-scratch English personal site (home / writing / projects / about) for GitHub user `Gu-sheng27`, deployed to GitHub Pages. This glossary fixes the vocabulary used in code, content, and ADRs so the same concept never gets two names.

## Language

**Adoption** (取件):
Bringing a capability into this repo from an open-source project at one of three layers: dependency (an npm package), structure (an information architecture or content schema), or interaction/visual (CSS values and DOM behaviour). Only the dependency layer carries upgrade cost.
_Avoid_: 集成, 融合, Fork

**Dependency layer**:
The adoption layer where code is owned by an upstream maintainer and consumed as a package version.
_Avoid_: 引入库

**Structure layer**:
The adoption layer where the borrowed thing is a shape — file layout, content schema, URL rules — and the code is written here.
_Avoid_: 抄结构

**Interaction layer**:
The adoption layer where the borrowed thing is behaviour or a CSS value reproduced in this repo: motion durations, focus rings, layout rhythm.
_Avoid_: 抄样式

**Writing**:
A published long-form piece. One Markdown file, one URL at `/writing/<slug>/`.
_Avoid_: Post, Blog, Article

**Project**:
A work entry. One Markdown file, one URL at `/projects/<slug>/`, with repository and/or live links.
_Avoid_: Work, Portfolio item, Case

**Meta** (元信息):
Secondary information attached to a Writing or Project — date, tags, reading time. Rendered in the monospace face, never in the body face.
_Avoid_: 附属信息

**Bookish** (书籍感):
The visual direction: single narrow column, serif-led typography, grouping by whitespace and type scale, no cards, no borders, no decoration.
_Avoid_: 极简风, 文艺风, Minimal