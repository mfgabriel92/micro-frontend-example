import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
  plugins: [
    react(),
    federation({
      filename: "shopping-cart-entry.js",
      name: "shopping-cart",
      exposes: {
        "./Cart": "./src/App.tsx",
        "./store": "./src/stores/shopping-cart.ts",
      },
      remotes: {},
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
});
