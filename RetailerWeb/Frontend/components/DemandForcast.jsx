import React from "react";
import Navbar from "./Navbar";
import "../assets/styles/common.css";

function DemandForcast() {
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
