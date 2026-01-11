// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({ imageService: true }),
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), db()],
});