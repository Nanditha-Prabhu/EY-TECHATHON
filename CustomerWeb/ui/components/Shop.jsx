import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios'
import React from 'react'
import { Star, ChevronDown } from 'lucide-react'
import Cookies from "universal-cookie";

export const Shop = () => {
  const cookies = new Cookies()
  const [clothes, setClothes] = useState([])
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(10)

  useEffect(() => {
    axios.get('http://localhost:3000/getClothes')
      .then(clothes => {
        setClothes(clothes.data)
        console.log(clothes);
      })
  }, [])

  const addToCart = async (item) => {
    // Quantity not there in ui, so by default item quantity in cart will be saved as 1 
    let product_details = {
      productId: item.ItemId,
      quantity: 1,
      name: item.ItemName,
      price: item.Rate,
    }
    console.log(product_details);
    let res = await fetch("http://localhost:3000/addToCart", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookies.get('jwt')}`
      },
      body: JSON.stringify(product_details)
    }).then((data) => data.json())
    
    console.log(res);
    
    if (res.loc) {
      alert("User Not signed in")
      location.href = res.loc
    } else {
      alert(item.ItemName + " is added to cart")
    }
  }

  return (
    <section className="overflow-hidden">
        {
        clothes.slice(prev, next).map(cloth => {
          return(
      <div key={cloth._id} className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={"data:image/png;base64," + cloth.Image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">{cloth.Brand}</h2>
            <h1 className="my-4 text-3xl font-semibold text-gray-200">{cloth.ItemName}</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs text-gray-300 font-semibold">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed text-gray-400">
            {cloth.ItemDesc}

            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex items-center">
                <span className="mr-3 text-gray-300 text-sm font-semibold">Color</span>
                <button className="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
              </div>
              <div className="ml-auto flex items-center">
                <span className="mr-3 text-sm text-gray-300 font-semibold">Size</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <ChevronDown size={16} />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-200">{'₹'+cloth.Rate}</span>
              <button
                type="button"
                className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => addToCart(cloth)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
          )
       })
      }

    </section>
  )
}

export default Shop;
