import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/abnercosta/", // Substitua pelo nome exato do repositório
});
