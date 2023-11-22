import "../assets/styles/common.css";
import React, { useEffect } from "react";

const Land = () => {
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
    <div className="bg-slate-900 border-y-2 -z-10 border-solid border-slate-900 flex flex-col sm:flex-row ">
      <div className="welcome-text text-center sm:text-start p-8 sm:p-0 bg-[#F2FEFE] flex flex-col justify-center sm:pl-10 ">
        <h1 className="text-slate-900 text-4xl font-semibold">What do you want to buy today, Consumer?</h1>
        <h2 className="text-slate-900 text-xl my-2">Welcome to <span className=" font-semibold text-[#00C3E1]">Stylify-AI!</span></h2>
        <h3 className="text-slate-900">Revolutionizing Retail with AI-Driven Experiences</h3>
      </div>
      <img
        className="w-0 sm:w-1/4 sm:rounded-r-full justify-center mr-7"
        src="./assets/images/company_logo.jpeg"
        alt="Company logo"
      />
    </div>
  );
};

export default Land;
