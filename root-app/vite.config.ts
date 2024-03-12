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
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "root-app",
      filename: "root-app-entry.js",
      remotes: {
        product: "http://localhost:3001/dist/assets/product-entry.js",
        about: "http://localhost:3002/dist/assets/about-entry.js",
        shoppingCart:
          "http://localhost:3003/dist/assets/shopping-cart-entry.js",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
});
