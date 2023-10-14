import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckForm from "./CheckForm";
import molar from "../assets/svg/molar-tooth.svg";
import canine from "../assets/svg/incisors-tooth.svg";
import premolar from "../assets/svg/premolar-tooth.svg";

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
          <div className="bg-white p-12 text-center gap-6 flex items-center justify-center flex-col font-normal">
            <h1 className="text-2xl">
              {buttons[activeButtonIndex].modalTitle}
            </h1>
            <p>{buttons[activeButtonIndex].modalContent}</p>
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
            <div className="fixed sm:relative z-20 right-0 left-0 top-0 ">
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
                      ? "translate-y-4 duration-100 bg-transparent text-transparent cursor-default"
                      : "hover:bg-gray-200"
                  } bg-gray-100 transition text-black p-4`}
                >
                  Get checked
                </button>
                <div>
                  <img
                    src={molar}
                    alt=""
                    className="absolute -translate-x-24 translate-y-20 w-14 h-14 group-hover:rotate-3 -rotate-3 duration-300 transition"
                  />
                  <img
                    src={canine}
                    alt=""
                    className="absolute -translate-x-48 translate-y-10 group-hover:rotate-12 duration-300 transition -rotate-12 w-12 h-12"
                  />
                  <img
                    src={premolar}
                    alt=""
                    className="absolute -translate-x-28 translate-y-0 group-hover:rotate-2 group-hover:scale-110 duration-300 transition -rotate-2 w-10 h-10"
                  />
                </div>
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
