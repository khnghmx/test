import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@store": "/src/store",
      "@app-types": "/src/app-types",
      "@core": "/src/shared/core",
      "@elements": "/src/shared/elements",
      "@components": "/src/components",
      "@assets": "/src/assets",
    },
  },
  plugins: [react()],
});
