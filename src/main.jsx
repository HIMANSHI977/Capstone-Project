import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import router from "./router/router";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <WishlistProvider>

        <CartProvider>

          <RouterProvider router={router} />

        </CartProvider>

      </WishlistProvider>

    </QueryClientProvider>
  </StrictMode>
);