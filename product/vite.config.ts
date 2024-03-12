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
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      filename: "product-entry.js",
      name: "product",
      exposes: {
        "./Products": "./src/components/Products.tsx",
      },
      remotes: {
        shoppingCart:
          "http://localhost:3003/dist/assets/shopping-cart-entry.js",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
});
