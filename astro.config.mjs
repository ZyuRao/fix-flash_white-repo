// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { mdxVoidHtmlPlugin } from './src/utils/mdx-void-html.js';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    plugins: [mdxVoidHtmlPlugin()],
  },
});
