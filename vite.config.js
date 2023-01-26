import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": "http://localhost:6000/",
      "/static": "http://localhost:6000/",
    },
  },
  root: "./client",
  build: {
    outDir: "../dist",
  },
  plugins: [react()],
});
