import { createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
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
         path: "products/:productId",
            element: <ProductView />
      },
      {
        path: "cart",
        element: <Cart />,
      }
    ],
  }
])

export default router;