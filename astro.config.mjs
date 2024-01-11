import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()],
  i18n: {
    defaultLocale: "sk",
    locales: ["sk", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});