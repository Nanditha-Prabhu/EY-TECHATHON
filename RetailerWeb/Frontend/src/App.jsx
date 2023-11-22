import Land from "../components/Land";
import Login from "../components/Login";
import DemandForcast from "../components/DemandForcast";
import InventoryManagement from "../components/InventoryManagement";
import DynamicPricing from "../components/DynamicPricing"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Land />
      </>
    ),
  },
  {
    path: "/Login",
    element: (
      <>
        <Login/>
      </>
    ),
  },
  {
    path: "/Demand Forecast",
    element: (
      <>
        <DemandForcast/>
      </>
    ),
  },
  {
    path: "/Inventory Management",
    element: (
      <>
        <InventoryManagement/>
      </>
    ),
  },
  {
    path: "/Dynamic Pricing",
    element: (
      <>
        <DynamicPricing/>
      </>
    ),
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
