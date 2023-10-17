import React, { useState, useEffect } from "react";
import cardDoctor from "../assets/svg/doctors.svg";
import cardFamily from "../assets/svg/family.svg";
import cardHealth from "../assets/svg/health.svg";
import { Link } from "react-router-dom";

export default function CheckForm({ isVisible, onClose }) {
  const [appeared, setAppeared] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setAppeared(true);
      }, 10);
    } else {
      setAppeared(false);
    }
  }, [isVisible]);

  return (
    <div className="h-full bg-transparent">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white px-6">
        <div className="grid-cols-3 hidden lg:grid lg:grid-cols-3 gap-6 justify-center items-center">
          <div
            className={`bg-white rounded-sm ${
              appeared ? "appeared translate-x-4 transition duration-200" : ""
            }`}
            style={{ width: "100%", height: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img
                src={cardFamily}
                alt=""
                style={{ width: "200px", height: "100px" }}
              />
              <div className="text-center">
                <h1 className="font-semibold mt-6 mb-0.5 text-xl">
                  Check+ Family
                </h1>
                <p className="font-normal tracking-tighter text-gray-700">
                  Always make sure to get checked
                </p>
              </div>
            </div>
          </div>
          <div
            className={`bg-white rounded-sm ${
              appeared ? "appeared translate-x-4 transition duration-200" : ""
            }`}
            style={{ width: "100%", height: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img
                src={cardDoctor}
                alt=""
                style={{ width: "200px", height: "100px" }}
              />
              <div className="text-center">
                <h1 className="font-semibold mt-6 mb-0.5 text-xl">
                  Assured quality
                </h1>
                <p className="font-normal tracking-tighter text-gray-700">
                  Our crew is proven to be the best
                </p>
              </div>
            </div>
          </div>
          <div
            className={`bg-white rounded-sm ${
              appeared ? "appeared translate-x-4 transition duration-200" : ""
            }`}
            style={{ width: "100%", height: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img
                src={cardHealth}
                alt=""
                style={{ width: "200px", height: "100px" }}
              />
              <div className="text-center">
                <h1 className="font-semibold mt-6 mb-0.5 text-xl">
                  Stay healthy!
                </h1>
                <p className="font-normal tracking-tighter text-gray-700">
                  Our crew is proven to be the best
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` p-16 px-14 appear-transition bg-white ${
            appeared ? "appeared" : ""
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center items-start">
              <div className="flex justify-center gap-1 items-center">
                <h1 className="font-medium text-lg">
                  Schedule your smile assessment,
                </h1>
                <span className="flex text-lg flex-row gap-2 font-normal tracking-tighter text-sky-400">
                  Quick and Easy
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <h1 className="flex gap-1 justify-center items-center text-lg font-medium">
                or apply for a procedure here{" "}
                <Link
                  to="form"
                  onClick={() => setShowCheckForm(false)}
                  className="hover:border border py-0.5 px-1 hover:text-black border-gray-100 bg-transparent text-sm rounded-md text-black transition hover:scale-105 active:scale-100 hover:bg-gray-50"
                >
                  Apply
                </Link>
              </h1>
            </div>
            <form action="">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col gap-1 font-normal">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="border-2 border-gray-100 rounded-md text-sm shadow-sm py-2 px-1.5 font-normal"
                      id="firstName"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="flex flex-col gap-1 font-normal">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="border-2 border-gray-100 text-sm rounded-md shadow-sm py-2 px-1.5 font-normal"
                      id="lastName"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-normal">
                  <label htmlFor="checkDate" className="text-gray-800">
                    Select Check Date
                  </label>
                  <input
                    type="date"
                    name="checkDate"
                    id="checkDate"
                    className="border-2 border-gray-100 rounded-md shadow-sm py-2 px-1.5 font-normal text-sm text-gray-800"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mt-6">
                <button
                  type="submit"
                  className="bg-emerald-100 text-emerald-900 px-16 rounded-sm py-2 hover:scale-95 hover:bg-emerald-200 transition "
                >
                  Set Check
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
