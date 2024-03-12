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
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  plugins: [
    react(),
    federation({
      filename: "about-entry.js",
      name: "about",
      exposes: {
        "./About": "./src/App.tsx",
      },
      remotes: {},
      shared: ["react", "react-dom"],
    }),
  ],
});
