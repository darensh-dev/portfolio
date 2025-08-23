import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
