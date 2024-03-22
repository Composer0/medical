import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "normalize.css/normalize.css";`,
      },
    },
    // Explicitly specify the path to node_modules
    include: [/node_modules/],
  },
});
