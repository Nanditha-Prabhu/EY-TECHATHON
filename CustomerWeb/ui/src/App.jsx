import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Footer from "../components/Footer";
import Land from "../components/Land";
import LandContent from "../components/LandContent";
import Navbar from "../components/Navbar";
import Shop from "../components/Shop";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Cart from "../components/Cart";

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
    path: "/Signup",
    element: (
      <>
        <Navbar />
        <Signup />
        <Footer />
      </>
    ),
  },
  {
    path: "/Signin",
    element: (
      <>
        <Navbar />
        <Signin />
        <Footer />
      </>
    ),
  },
  {
    path: "/Cart",
    element: (
      <>
        <Navbar />
        <Cart />
        <Footer />
      </>
    ),
  }
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}

