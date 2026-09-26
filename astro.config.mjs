// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://masacheung.github.io/portfolio/',
  // Site lives at the /portfolio/ subpath of the user site
  base: '/portfolio/',
  integrations: [tailwind()],
});
