// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    // Configurações do Vite
    build: {
      // Opções de build
      cssCodeSplit: true,
      minify: true,
    },
    // Outras configurações do Vite, se necessário
    css: {
      // Opções para processamento de CSS
      devSourcemap: true,
    },
    // Plugins do Vite podem ser adicionados aqui
    plugins: [],
  },
});
