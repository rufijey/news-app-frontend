import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { type Plugin, defineConfig } from "vite";
import biome from "vite-plugin-biome";
import checker from "vite-plugin-checker";
import viteCompression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";
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
