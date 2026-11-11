/**
 * Single source of truth for everything a human would want to change without
 * reading component code. Every TODO here is yours to fill in.
 */
export const site = {
  url: 'https://gu-sheng27.github.io',
  title: 'Gu-sheng27',

  // TODO: your display name as you want it printed on the site.
  author: 'Gu-sheng27',

  // TODO: one sentence. This is the first line a visitor reads; keep it a claim
  // about what you do, not a list of adjectives.
  tagline: 'TODO — one sentence about what you build and for whom.',

  // TODO: used as the default meta description and in the RSS channel.
  description:
    'TODO — a sentence or two describing this site, used as the default meta description and in the RSS channel.',

  nav: [
    { href: '/writing/', label: 'Writing' },
    { href: '/projects/', label: 'Projects' },
    { href: '/about/', label: 'About' },
  ],

  // TODO: replace or extend. `icon` is an Iconify name, e.g. `lucide:github`.
  social: [
    { href: 'https://github.com/Gu-sheng27', label: 'GitHub', icon: 'lucide:github' },
  ],
} as const;

export const nav = site.nav;