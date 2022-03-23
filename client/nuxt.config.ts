const path = require("path");
import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    "@components": path.resolve(__dirname, "../ui/components"),
    "@common": path.resolve(__dirname, "../common"),
    "@ui": path.resolve(__dirname, "../ui"),
    "@client": path.resolve(__dirname, "./")
  },
  css: [path.resolve(__dirname, "../ui/css/style.scss")]
});
