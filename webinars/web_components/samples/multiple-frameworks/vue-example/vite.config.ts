import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  root: "samples/multiple-frameworks/vue-example",
  server: {
    port: 3002,
  },
});
