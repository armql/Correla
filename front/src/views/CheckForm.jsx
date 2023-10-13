import React, { useState, useEffect } from "react";
import cardDoctor from "../assets/svg/doctors.svg";
import cardFamily from "../assets/svg/family.svg";
import cardHealth from "../assets/svg/health.svg";

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
      <div className="flex justify-between items-center bg-white px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center items-center">
          <div
            className="bg-white rounded-sm"
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
                style={{ width: "240px", height: "100px" }}
              />
              <div className="font-normal">
                <h1 className="font-semibold mb-2 border-b-2 border-gray-800 text-lg">
                  Check Family
                </h1>
                <p className="text-gray-700">Always make sure to get checked</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-sm"
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
                style={{ width: "100px", height: "100px" }}
              />
              <div className="font-normal">
                <h1 className="font-semibold mb-2 border-b-2 border-gray-800 text-lg">
                  Assured quality
                </h1>
                <p className="text-gray-700">
                  Our crew is proven to be the best
                </p>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-sm"
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
                style={{ width: "100px", height: "100px" }}
              />
              <div className="font-normal">
                <h1 className="font-semibold mb-2 border-b-2 border-gray-800 text-lg">
                  Stay healthy!
                </h1>
                <p className="text-gray-700">
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
          <form action="">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-1 font-normal">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="border-2 border-gray-100 rounded-md shadow-sm py-2 px-1.5 font-normal"
                    id="firstName"
                    placeholder="Your first name"
                  />
                </div>
                <div className="flex flex-col gap-1 font-normal">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="border-2 border-gray-100 rounded-md shadow-sm py-2 px-1.5 font-normal"
                    id="lastName"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 font-normal">
                <label htmlFor="checkDate" className="text-gray-800">
                  Select Check Date
                </label>
                <input
                  type="date"
                  name="checkDate"
                  id="checkDate"
                  className="border-2 border-gray-100 rounded-md shadow-sm py-2 px-1.5 font-normal text-gray-800"
                />
              </div>
            </div>
            <div className="flex justify-center items-center mt-6">
              <button
                type="submit"
                className="bg-emerald-100 text-emerald-900 px-16 rounded-sm py-3 hover:scale-95 hover:bg-emerald-200 transition "
              >
                Set Check
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
