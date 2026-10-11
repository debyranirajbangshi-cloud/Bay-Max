// Minimal Vite config for Base44 sandbox — serves the static index.html
// without the Lovable TanStack Start config (which requires src/ files
// that are not present in this repo). The original vite.config.ts is
// preserved for when the full TanStack Start app is added.
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
    strictPort: true,
  },
});
