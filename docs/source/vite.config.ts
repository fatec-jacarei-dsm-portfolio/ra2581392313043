import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ra2581392313043/", // Substitua pelo nome exato do repositório
  build: {
    outDir: "../", // Gera o build dentro da pasta /docs
  },
});
