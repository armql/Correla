import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckForm from "./CheckForm";
import molar2 from "../assets/svg/molar2-tooth.png";
import molar from "../assets/svg/molar-tooth.svg";
import canine from "../assets/svg/incisors-tooth.svg";
import premolar from "../assets/svg/premolar-tooth.svg";
import buildingbg from "../assets/images/building-bg.jpeg";
import ServiceCards from "../components/ServiceCards";

export default function Navbar() {
  const buttons = [
    {
      text: "Our work",
      modalTitle: "Our Work",
      modalContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.",
    },
    {
      text: "Find us here",
      modalTitle: "Find Us Here",
      modalContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.",
    },
    {
      text: "Services",
      modalTitle: "Services",
      modalContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.",
    },
    {
      text: "Questions",
      modalTitle: "Questions",
      modalContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.",
    },
    {
      text: "Why us",
      modalTitle: "Why us",
      modalContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, nam, error dolores odit id iusto numquam quas veniam facilis delectus? Consequuntur corrupti magni, nihil dignissimos sit voluptatum eius saepe.",
    },
  ];

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const [showCheckForm, setShowCheckForm] = useState(false);

  const toggleSummary = (index) => {
    if (activeButtonIndex === index) {
      setActiveButtonIndex(null);
      setActiveLink(null);
      setShowCheckForm(false);
    } else {
      setActiveButtonIndex(index);
      setActiveLink(index);
      setShowCheckForm(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="h-24 flex justify-center text-sky-500 items-center font-bold text-5xl">
        Your company name
      </div>
      <div className="w-full h-full mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 text-center justify-evenly text-black items-center text-2xl">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => toggleSummary(index)}
              type="button"
              className={`p-4 transition ${
                activeLink === index
                  ? "text-sky-800 bg-gray-100"
                  : "hover:text-sky-950 hover:bg-gray-50"
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
        {activeButtonIndex !== null && (
          <div
            className={`relative bg-white gap-6 grid grid-cols-1 font-normal ${
              showCheckForm
                ? "transform translate-x-40 duration-500 transition"
                : "duration-500 transition"
            }`}
          >
            <div className="lg:block hidden h-full w-full bg-sky-50">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl py-2 px-1.5 text-white bg-sky-500 bg-opacity-90 backdrop-blur-sm tracking-wide w-full text-center">
                  {buttons[activeButtonIndex].modalTitle}
                </h1>
                <p className="tracking-tighter py-2 px-2 text-lg bg-sky-200 bg-opacity-40 backdrop-blur-sm font-light">
                  {buttons[activeButtonIndex].modalContent}
                </p>
              </div>
            </div>
            <div className="absolute h-full w-full flex lg:hidden">
              <div className="p-12 flex flex-col items-center justify-center">
                <h1 className="text-3xl py-2 px-1.5 text-white bg-sky-500 bg-opacity-90 backdrop-blur-sm tracking-wide w-full text-center">
                  {buttons[activeButtonIndex].modalTitle}
                </h1>
                <p className="tracking-tighter py-2 px-2 text-lg bg-white bg-opacity-30 backdrop-blur-sm font-light">
                  {buttons[activeButtonIndex].modalContent}
                </p>
              </div>
            </div>
            <div className="w-full h-fit flex bg-sky-950 justify-center items-center">
              <img src={buildingbg} alt="" className="lg:hidden block" />
            </div>
          </div>
        )}
        {activeButtonIndex === null && (
          <div className="relative bg-white p-9 text-start gap-2 flex items-start justify-between flex-col font-normal">
            {showCheckForm && (
              <div className="absolute top-2 right-2">
                <button
                  type="button"
                  className="hover:bg-gray-50 active:scale-105 bg-transparent hover:shadow-sm p-2 rounded-full font-normal cursor-pointer transition"
                  onClick={() => setShowCheckForm(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="group active:rotate-90 duration-500 w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex flex-row justify-between">
              <div className="">
                <h1
                  className={`text-3xl transition font-semibold ${
                    showCheckForm ? "translate-y-10 duration-500" : ""
                  }`}
                >
                  Make a reservation now
                </h1>
                <p
                  className={`text-lg transition tracking-tighter text-gray-800 px-1 ${
                    showCheckForm ? "translate-y-10 duration-500" : ""
                  }`}
                >
                  If you have problems, get checked now and we will find a
                  solution together!
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => setShowCheckForm(true)}
                    type="button"
                    className={`${
                      showCheckForm
                        ? "translate-y-4 duration-100 bg-transparent text-transparent cursor-default border-none shadow-none ring-none ring-transparent"
                        : "hover:bg-gray-50"
                    } rounded-md border transition text-black py-2 px-4 ring-4 ring-transparent active:ring-gray-100 font-light`}
                  >
                    Get checked
                  </button>
                </div>
              </div>
              <div
                className={`absolute right-0 z-10 flex items-center justify-center ${
                  showCheckForm ? "transform translate-y-28 duration-500" : ""
                }`}
              >
                <img
                  src={molar}
                  alt=""
                  className="w-14 h-14 group-hover:rotate-3 -rotate-3 duration-300 transition"
                />
                <img
                  src={canine}
                  alt=""
                  className="translate-x-2 translate-y-10 group-hover:rotate-12 duration-300 transition -rotate-12 w-12 h-12"
                />
                <img
                  src={premolar}
                  alt=""
                  className="translate-x-8 group-hover:rotate-2 group-hover:scale-110 duration-300 transition -rotate-2 w-10 h-10"
                />
                <img
                  src={molar2}
                  alt=""
                  className="-translate-x-6 translate-y-20 group-hover:rotate-2 group-hover:scale-110 duration-300 transition -rotate-2 w-12 h-12"
                />
              </div>
            </div>
          </div>
        )}
        {showCheckForm && (
          <CheckForm
            isVisible={showCheckForm}
            onClose={() => setShowCheckForm(false)}
          />
        )}
      </div>
    </div>
  );
}
