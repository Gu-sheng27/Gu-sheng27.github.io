import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import expressiveCode from 'astro-expressive-code';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/site';

export default defineConfig({
  // Must match the deployed origin: it is what canonical URLs, RSS and the
  // sitemap are built from. Changing domain = changing this line.
  site: site.url,

  integrations: [
    expressiveCode({
      themes: ['vitesse-light', 'vitesse-dark'],
      // We switch themes ourselves via [data-theme], so Expressive Code must not
      // emit its own prefers-color-scheme media query.
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) => `[data-theme='${theme.type}']`,
      styleOverrides: {
        borderRadius: '2px',
        borderColor: 'var(--rule)',
        codeBackground: 'var(--raised)',
        codeFontFamily: 'var(--font-mono)',
        codeFontSize: '0.875rem',
        uiFontFamily: 'var(--font-mono)',
      },
    }),
    icon(),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});