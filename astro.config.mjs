import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), sitemap()],
  site: 'https://augustinmartin.com',

  i18n: {
    defaultLocale: "sk",
    locales: ["sk", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});