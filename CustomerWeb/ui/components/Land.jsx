import "../assets/styles/common.css";
import React, { useEffect } from "react";
import { currentPage } from "./Navbar";
import { Link } from "react-router-dom";

const Land = () => {
  currentPage(0);

  useEffect(() => {
    function reveal1() {
      let r1 = document.querySelectorAll(".reveal1");
      for (let i = 0; i < r1.length; i++) {
        let wh = window.innerHeight;
        let th = r1[i].getBoundingClientRect().top;
        let vh = 150;
        if (th < wh - vh) {
          r1[i].classList.add("active1");
        } else {
          r1[i].classList.remove("active1");
        }
      }
    }

    function reveal2() {
      let r2 = document.querySelectorAll(".reveal2");
      for (let i = 0; i < r2.length; i++) {
        let wh = window.innerHeight;
        let th = r2[i].getBoundingClientRect().top;
        let vh = 150;
        if (th < wh - vh) {
          r2[i].classList.add("active2");
        } else {
          r2[i].classList.remove("active2");
        }
      }
    }

    window.addEventListener("scroll", reveal1);
    window.addEventListener("scroll", reveal2);

    let digits = document.querySelectorAll(".digit");
    let delay = 1000;
    let totalTime;

    digits.forEach((element, index) => {
      if (index === digits.length - 1) {
        totalTime = (index + 1) * delay;
      }

      setTimeout(() => {
        element.style.animationDelay = `${(index + 1) * delay}ms`;
      }, 0);
    });

    setTimeout(() => {
      let numbers = document.querySelector(".numbers");
      if (numbers) {
        numbers.classList.toggle("dispNone");
      }
    }, totalTime + delay);

    setTimeout(() => {
      let options = document.querySelector(".options");
      if (options) {
        options.classList.toggle("dispNone");
      }
    }, totalTime + delay);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", reveal1);
      window.removeEventListener("scroll", reveal2);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <section className="relative bg-[url(../assets/images/welcome_image.jpg)] bg-cover bg-center bg-no-repeat">
      <div className=" absolute inset-0  bg-slate-800/75 sm:bg-transparent  sm:bg-gradient-to-r   sm:from-slate-800/90 sm:to-slate-800/60 "></div>

      <div className="relative mx-auto max-w-screen-xl land-greeting px-4 py-32 lg:items-center ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-[#00C3E1] via-[#fcfcfc] to-yellow-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            🌟Welcome to Stylify-AI🌟
            <span className="block"> Your Ultimate Style Destination </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-100 sm:text-xl/relaxed">
            Ever felt a bit lost in the fashion maze of Janpath and Sarojini
            Nagar, with more twists and turns than a puzzle? Fear not!
            Stylify-AI is here to be your fashion buddy in this stylish journey✨
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-yellow-500 bg-yellow-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              to="/Shop"
            >
              Get Started
            </Link>

            <a
              className="block w-full rounded border border-yellow-600 px-12 py-3 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring active:bg-yellow-600 sm:w-auto"
              href ="#About"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Land;

{
  /* <div className="bg-slate-900 border-y-2 border-solid border-slate-900 flex flex-col sm:flex-row ">
      <div className="welcome-text text-center sm:text-start p-8 sm:p-0 bg-[#F2FEFE] flex flex-col justify-center sm:pl-10 ">
        <h1 className="text-slate-900 text-4xl font-semibold">
          What do you want to buy today, Consumer?
        </h1>
        <h2 className="text-slate-900 text-xl my-2">
          Welcome to{" "}
          <span className=" font-semibold text-[#00C3E1]">Stylify-AI!</span>
        </h2>
        <h3 className="text-slate-900">
          Revolutionizing Retail with AI-Driven Experiences
        </h3>
      </div>
      <img
        className="w-0 sm:w-1/4 sm:rounded-r-full justify-center mr-7"
        src="./assets/images/company_logo.jpeg"
        alt="Company logo"
      />
    </div> */
}

{
  /* <section className=" text-white  ">
      <div className="mx-auto max-w-screen-xl land-greeting px-4 py-32 lg:items-center ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-[#00C3E1] via-[#fcfcfc] to-yellow-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            🌟Welcome to Stylify-AI🌟
            <span className="sm:block"> Your Ultimate Style Destination </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-yellow-500 bg-yellow-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-yellow-600 px-12 py-3 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring active:bg-yellow-600 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section> */
}
