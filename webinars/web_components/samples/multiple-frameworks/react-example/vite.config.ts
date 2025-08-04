import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "samples/multiple-frameworks/react-example",
  server: {
    port: 3001,
  },
});
