import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Utilise des chemins relatifs pour les assets
  plugins: [vue()],
  build: {
    // Spécifie le répertoire de sortie pour satisfaire à GitHub Pages
    outDir: "docs",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
