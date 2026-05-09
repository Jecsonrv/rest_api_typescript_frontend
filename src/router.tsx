import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NewProduct, action as newProductAction } from "./views/NewProduct";
import { action as updateAvailabilityAction , Products, loader as productsLouder } from "./views/Products";
import { EditProduct, loader as editProductLoader, action as editProductAction } from "./views/editProduct";
import { action as deleteProductAction} from "./components/ProductDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLouder,
        action: updateAvailabilityAction
      },
      {
        path: "productos/nuevo",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "productos/:id/editar", // ROA Pattern - Resource oriented design
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      },
      {
        path: "productos/:id/eliminar", // ROA Pattern - Resource oriented design
        action: deleteProductAction
      }
    ],
  },
]);
