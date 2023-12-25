import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/common.css";

function DemandForcast() {
  const [itemId, setItemId] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: "your_date_here",
          item_type: "your_item_type_here",
          gender: "your_gender_here",
          sleeve: "your_sleeve_here",
          materials_used: "your_materials_used_here",
          season: "your_season_here",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      // Handle error state in your component
    }
  };


  return (
    <div className="flex flex-row">
      <Navbar />

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text-[#00C3E1] font-bold sm:text-3xl">
            Forecast Demand for your products right away!
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Item ID
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Item ID of the product"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-block rounded-lg menu-btn bg-[#FEA52B] px-5 py-3 text-sm font-medium text-white"
            >
              Forecast
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DemandForcast;
