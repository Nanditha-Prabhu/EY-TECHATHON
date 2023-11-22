import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Footer from "../components/Footer";
import Land from "../components/Land";
import LandContent from "../components/LandContent";
import Navbar from "../components/Navbar";
import Shop from "../components/Shop";
import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Land />
        <LandContent />
        <Footer />
      </>
    ),
  },
  {
    path: "/Shop",
    element: (
      <>
        <Navbar />
        <Shop />
        <Footer />
      </>
    ),
  },
  {
    path: "/Login",
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}

