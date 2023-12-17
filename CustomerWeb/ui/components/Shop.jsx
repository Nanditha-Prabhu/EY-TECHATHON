import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios'

export default function Shop() {

  const [clothes, setClothes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/getClothes')
      .then(clothes => {
        setClothes(clothes.data)
      })
  }, [])

  return (
    <div className="shop-contents bg-slate-500 h-screen w-screen">
      {
        clothes.map(cloth => {
          return <div key={cloth._id}>
            <a href={cloth.ImgAdrs}>{cloth.ItemName}</a>
          </div>
        })
      }
    </div>
  );
}
