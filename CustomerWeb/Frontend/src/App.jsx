// Import React and other necessary dependencies
// import React, { useState } from 'react';
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

// // Product component represents each product in the list
// const Product = ({ product, onAddToCart }) => (
//   <div className="product">
//     <h3>{product.name}</h3>
//     <p>Price: ${product.price}</p>
//     <button onClick={() => onAddToCart(product)}>Add to Cart</button>
//   </div>
// );

// // ShoppingCart component displays the list of items in the cart
// const ShoppingCart = ({ cartItems, onRemoveFromCart }) => (
//   <div className="shopping-cart">
//     <h2>Shopping Cart</h2>
//     <ul>
//       {cartItems.map((item, index) => (
//         <li key={index}>
//           {item.name} - ${item.price}{' '}
//           <button onClick={() => onRemoveFromCart(index)}>Remove</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // Main App component
// const App = () => {
//   // Sample product data
//   const products = [
//     { id: 1, name: 'Product 1', price: 20 },
//     { id: 2, name: 'Product 2', price: 30 },
//     { id: 3, name: 'Product 3', price: 25 },
//   ];

//   // State to manage the items in the shopping cart
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add a product to the shopping cart
//   const handleAddToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   // Function to remove a product from the shopping cart
//   const handleRemoveFromCart = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   return (
//     <div className="app">
//       <h1>Retail Website</h1>

//       {/* Display the list of products */}
//       <div className="product-list">
//         {products.map((product) => (
//           <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
//         ))}
//       </div>

//       {/* Display the shopping cart */}
//       <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
//     </div>
//   );
// };

// export default App;
