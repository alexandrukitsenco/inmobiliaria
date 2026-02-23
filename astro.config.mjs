// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.bpmiamiplaya.es',
  integrations: [
    vue({ appEntrypoint: '/src/pages/_app' }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
          cat: 'ca-ES',
          fr: 'fr-FR',
        },
      },
      filter: (page) => !page.includes('/cookies-rejected'),
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  i18n: {
    locales: ["es", "en", "cat", "fr"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});