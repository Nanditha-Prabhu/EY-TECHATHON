import { useEffect, useState } from "react";
import axios from "axios";

export default function Shop() {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getClothes")
      .then((clothes) => {
        console.log(clothes);
        setClothes(clothes.data)
      });
  }, []);

  return (
    <div className="shop-contents bg-slate-500 h-screen w-screen">
      {/* {clothes.map((cloth) => {
        return <div>
          <p>{cloth.ItemName}</p>
        </div>;
      })} */}
      Hello
    </div>
  );
}
