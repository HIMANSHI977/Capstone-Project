import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../pages/public/ProductDetails";
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/public/Home";
import Products from "../pages/public/Products";
import Login from "../pages/public/Login";
import Dashboard from "../pages/public/admin/Dashboard";

import ProtectedRoute from "../Components/ProtectedRoute";
import Cart from "../pages/public/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
  path: "products/:id",
  element: <ProductDetails />,
},
      {
        path: "login",
        element: <Login />,
      },
      {
  path: "cart",
  element: <Cart />,
},
    ],
  },

  {
  path: "/admin",
  element: (
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      index: true,
      element: <Dashboard />,
    },
  ],
}
]);

export default router;