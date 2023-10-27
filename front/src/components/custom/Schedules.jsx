import React from "react";
import calendar from "../../assets/svg/calendar.svg";

export default function Schedules() {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
        <div className="flex justify-center items-center flex-col mt-12 gap-4 lg:py-2 text-center">
          <h1 className="font-semibold text-4xl">
            Extended full transparency with our customers
          </h1>
          <p className="font-light text-xl">
            Check reservations at the date you want to leave a reservation.
          </p>
          <div className="flex flex-row gap-2 mt-6">
            <button
              type="button"
              className="border font-light text-lg shadow-sm rounded-md hover:scale-95 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-950 transition p-2 cursor-pointer active:scale-100 active:bg-sky-100 ring-4 ring-transparent active:ring-sky-200"
            >
              3 Month Schedules
            </button>
            <button
              type="button"
              className="border font-light text-lg shadow-sm rounded-md hover:scale-95 transition p-2 cursor-pointer hover:bg-sky-50 hover:border-sky-200 hover:text-sky-950 active:scale-100 active:bg-sky-100 ring-4 ring-transparent active:ring-sky-200"
            >
              6 Month Schedules
            </button>
            <button
              type="button"
              className="border font-light text-lg shadow-sm rounded-md hover:scale-95 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-950 transition p-2 cursor-pointer hover: active:scale-100 active:bg-sky-100 ring-4 ring-transparent active:ring-sky-200"
            >
              1 Year Schedules
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-96 h-96">
          <img src={calendar} alt="" />
        </div>
      </div>
    </div>
  );
}
