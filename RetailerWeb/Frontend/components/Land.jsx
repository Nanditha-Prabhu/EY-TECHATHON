import "../assets/styles/common.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const Land = () => {
  const category = [
    "Demand Forecast",
    "Inventory Management",
    "Dynamic Pricing",
    "Products",
    "Sales",
    "Orders",
  ];

  const ButtonList = () => {
    // Use the map function to create an array of button elements
    const buttons = category.map((item, index) => (
      <div key={index} className=" m-3 sm:m-4">
        <Link to={'/'+item}>
        <button
          className=" shadow-lg menu-btn font-bold text-2xl col-span-1 h-40 w-80 rounded-lg bg-slate-100"
        >
          {item}
        </button>
        </Link>
      </div>
    ));

    return <>{buttons}</>;
  };

  return (
    <>
      <div className="flex flex-row">
        <Navbar />
        <div className=" p-10 box-border place-items-center grid grid-cols-3 min[1300px]:grid-cols-3 gap-6 bg-slate-400 h-screen w-full">
          <h1 className="col-span-3 text-start font-extrabold text-5xl pl-8 w-full">
            Welcome back, Retailer!
          </h1>
          <ButtonList />
        </div>
      </div>
    </>
  );
};

export default Land;
