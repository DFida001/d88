import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,
    proxy: {
      "/api": "http://localhost:3000",
      "/login": "http://localhost:3000",
    },
  },
});
