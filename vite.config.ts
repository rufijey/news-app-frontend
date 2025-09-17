import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";
import biome from "vite-plugin-biome";
import tailwindcss from '@tailwindcss/vite';
import virtualModules from "./src/plugins/virtual_modules.plugin.ts";

export default defineConfig({
  plugins: [
    react(),
    virtualModules(),
    tailwindcss(),
    svgr(),
    checker({ typescript: true }),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    Inspect(),
    biome(),
  ],

  build: {
    target: "esnext",
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      format: { comments: false },
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      plugins: [
        visualizer({
          filename: "stats.html",
          open: false,
          gzipSize: true,
          brotliSize: true,
        }) as unknown as Plugin,
      ],
    },
  },
});
