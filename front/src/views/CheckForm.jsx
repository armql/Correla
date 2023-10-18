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
                <h1 className="font-medium text-2xl">
                  Schedule your smile assessment,
                </h1>
                <span className="flex text-2xl flex-row gap-2 font-normal tracking-tighter text-sky-400">
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
              <h1 className="flex gap-4 justify-center items-center text-2xl font-medium">
                or apply for a procedure here{" "}
                <Link
                  to="form"
                  onClick={() => setShowCheckForm(false)}
                  className="border font-normal text-xl shadow-sm rounded-md hover:scale-95 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-950 transition py-0.5 px-4 cursor-pointer active:scale-100 active:bg-sky-100 ring-4 ring-transparent active:ring-sky-200"
                >
                  Apply
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
