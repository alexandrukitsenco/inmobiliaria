// @ts-check
import { defineConfig } from 'astro/config';


import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [vue({ appEntrypoint: '/src/pages/_app' })],
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