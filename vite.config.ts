import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: './', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ["bippy/dist/jsx-dev-runtime", "bippy/dist/jsx-runtime"],
  },
});
