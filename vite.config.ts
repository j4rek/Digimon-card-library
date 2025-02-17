import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@templates": resolve(__dirname, "src/components/templates"),
      "@molecules": resolve(__dirname, "src/components/molecules"),
      "@atoms": resolve(__dirname, "src/components/atoms"),
      "@pages": resolve(__dirname, "src/pages"),
      "@context": resolve(__dirname, "src/context"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@utils": resolve(__dirname, "src/utils"),
      "@assets": resolve(__dirname, "src/assets"),
      "@services": resolve(__dirname, "src/services"),
    },
  },
});
