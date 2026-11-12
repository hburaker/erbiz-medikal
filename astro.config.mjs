import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://erbizmedikal.com',
  // Fontu Google'dan build sırasında indirip siteyle birlikte sunar (render'ı engelleyen harici CSS yok)
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'], // latin-ext: ğ, ş, İ için gerekli
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
  ],
  integrations: [
    sitemap({
      namespaces: { news: false, video: false, image: false, xhtml: false },
    }),
  ],
});
