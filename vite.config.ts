// vite.config.ts
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "SamUIMobile",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"] // ✅ only ESM
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    },
    sourcemap: true
  },
  plugins: [
    dts({
      entryRoot: "src",
      outDir: "dist",
      insertTypesEntry: true
    })
  ]
});
