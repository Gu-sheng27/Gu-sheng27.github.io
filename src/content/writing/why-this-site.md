---
title: Why this site is built this way
description: The stack, the visual direction, and the rule that decided both — worth writing down before the reasons get lost.
pubDate: 2026-11-10
tags: ['meta', 'design']
---

Every personal site starts with a decision that is easy to make and expensive to
reverse. This one was: build it from scratch, or fork a theme that already looks
finished.

## The fork temptation

There are excellent themes. AstroPaper has search, dynamic share images and
i18n wired up. AstroWind ships a dozen landing sections. Either would have put a
page online in an afternoon.

The problem is what you inherit. A theme is not a template engine: it is someone
else's project, with their layout decisions and their idea of what a page is.
Forking is cheap to start and expensive to diverge from — upstream updates only
arrive by hand, and every customisation is an argument with an author who is not
in the room.

## Three layers of borrowing

What made the decision tractable was splitting "using open source" into three
layers with very different costs:

| Layer | What you take | Who maintains it |
| --- | --- | --- |
| Dependency | an npm package | the upstream author |
| Structure | a schema, a URL rule, a file layout | you |
| Interaction | CSS values, motion durations | you |

Only the first layer carries an upgrade burden, so it is the only one worth
minimising. This site runs on eight dependencies and borrows its visual values
from sites whose code it does not contain.

```ts
// The typographic contract, in one place.
const tokens = {
  measure: '65ch',
  paper: '#fcfbf8',
  ink: '#1b1b19',
  lineHeight: 1.7,
};
```

## Why bookish

Three directions were on the table, each with live references: editorial,
terminal, and product. The terminal look dates itself as an identity claim by
the third article. The product look reads as a landing page. Typography is the
one language that stays legible for a decade, which is the only property that
matters for something you intend to keep.

So: one narrow column, serif-led type, grouping by whitespace instead of boxes,
and monospace reserved for dates and tags.[^meta]

[^meta]: The monospace face is the one thing borrowed from the terminal
    direction. It earns its place because tabular figures stop dates from
    shifting as they change.