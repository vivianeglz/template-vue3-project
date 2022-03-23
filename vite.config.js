const path = require("path");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom"
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./ui/components"),
      "@common": path.resolve(__dirname, "./common"),
      "@ui": path.resolve(__dirname, "./ui"),
      "@client": path.resolve(__dirname, "./client")
    }
  },
  dedupe: ["vue"]
});
