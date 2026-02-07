// @ts-check
import { defineConfig } from 'astro/config';


import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [vue()],
  i18n: {
    locales: ["es", "en", "cat"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});