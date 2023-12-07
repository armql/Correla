import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckForm from "./forms/CheckForm";
import molar2 from "../assets/svg/molar2-tooth.png";
import molar from "../assets/svg/molar-tooth.svg";
import canine from "../assets/svg/incisors-tooth.svg";
import premolar from "../assets/svg/premolar-tooth.svg";
import buildingbg from "../assets/images/building-bg.jpeg";
import ServiceCards from "../components/card/ServiceCards";

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
      <div className="mt-4 h-full w-full">
        <div className="grid grid-cols-2 items-center justify-evenly text-center text-2xl text-black lg:grid-cols-5">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => toggleSummary(index)}
              type="button"
              className={`p-4 transition ${
                activeLink === index
                  ? "bg-gray-100 text-sky-800"
                  : "hover:bg-gray-50 hover:text-sky-950"
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
        {activeButtonIndex !== null && (
          <div
            className={`relative grid grid-cols-1 gap-6 bg-white font-normal ${
              showCheckForm
                ? "translate-x-40 transform transition duration-500"
                : "transition duration-500"
            }`}
          >
            <div className="hidden h-full w-full bg-sky-50 lg:block">
              <div className="flex flex-col items-center justify-center">
                <h1 className="w-full bg-sky-500 bg-opacity-90 px-1.5 py-2 text-center text-3xl tracking-wide text-white backdrop-blur-sm">
                  {buttons[activeButtonIndex].modalTitle}
                </h1>
                <p className="bg-sky-200 bg-opacity-40 px-2 py-2 text-lg font-light tracking-tighter backdrop-blur-sm">
                  {buttons[activeButtonIndex].modalContent}
                </p>
              </div>
            </div>
            <div className="absolute flex h-full w-full lg:hidden">
              <div className="flex flex-col items-center justify-center p-12">
                <h1 className="w-full bg-sky-500 bg-opacity-90 px-1.5 py-2 text-center text-3xl tracking-wide text-white backdrop-blur-sm">
                  {buttons[activeButtonIndex].modalTitle}
                </h1>
                <p className="bg-white bg-opacity-30 px-2 py-2 text-lg font-light tracking-tighter backdrop-blur-sm">
                  {buttons[activeButtonIndex].modalContent}
                </p>
              </div>
            </div>
            <div className="flex h-fit w-full items-center justify-center bg-sky-950">
              <img src={buildingbg} alt="" className="block lg:hidden" />
            </div>
          </div>
        )}
        {activeButtonIndex === null && (
          <div className="relative flex flex-col items-start justify-between gap-2 bg-white p-9 text-start font-normal">
            {showCheckForm && (
              <div className="absolute right-2 top-2">
                <button
                  type="button"
                  className="cursor-pointer rounded-full bg-transparent p-2 font-normal transition hover:bg-gray-50 hover:shadow-sm active:scale-105"
                  onClick={() => setShowCheckForm(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="group h-8 w-8 duration-500 active:rotate-90"
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
                  className={`text-3xl font-semibold transition ${
                    showCheckForm ? "translate-y-10 duration-500" : ""
                  }`}
                >
                  Make a reservation now
                </h1>
                <p
                  className={`px-1 text-lg tracking-tighter text-gray-800 transition ${
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
                        ? "ring-none translate-y-4 cursor-default border-none bg-transparent text-transparent shadow-none ring-transparent duration-100"
                        : "hover:bg-gray-50"
                    } rounded-md border px-4 py-2 font-light text-black ring-4 ring-transparent transition active:ring-gray-100`}
                  >
                    Get checked
                  </button>
                </div>
              </div>

              <div
                className={`absolute right-0 z-10 flex items-center justify-center ${
                  showCheckForm ? "translate-y-28 transform duration-500" : ""
                }`}
              >
                <img
                  src={molar}
                  alt=""
                  className="h-14 w-14 -rotate-3 transition duration-300 group-hover:rotate-3"
                />
                <img
                  src={canine}
                  alt=""
                  className="h-12 w-12 translate-x-2 translate-y-10 -rotate-12 transition duration-300 group-hover:rotate-12"
                />
                <img
                  src={premolar}
                  alt=""
                  className="h-10 w-10 translate-x-8 -rotate-2 transition duration-300 group-hover:rotate-2 group-hover:scale-110"
                />
                <img
                  src={molar2}
                  alt=""
                  className="h-12 w-12 -translate-x-6 translate-y-20 -rotate-2 transition duration-300 group-hover:rotate-2 group-hover:scale-110"
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
