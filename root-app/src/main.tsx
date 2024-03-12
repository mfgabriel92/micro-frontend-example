import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages";
import { RootLayout } from "./layouts/RootLayout.tsx";
import { ShoppingCartPage } from "./pages/ShoppingCartPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            path="/"
            element={<App />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/shopping-cart"
            element={<ShoppingCartPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
