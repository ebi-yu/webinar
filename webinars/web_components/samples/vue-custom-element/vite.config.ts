import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: "samples/vue-custom-element",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Custom Elementsを認識させる
          isCustomElement: (tag: string) => tag.includes("-"),
        },
      },
    }),
  ],
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
  build: {
    lib: {
      entry: "./vue-button.ts",
      name: "VueButton",
      fileName: "vue-button",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
