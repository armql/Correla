import React from "react";
import calendar from "../../assets/svg/calendar.svg";

export default function Schedules() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center lg:py-2">
          <h1 className="text-2xl font-semibold sm:text-4xl">
            Extended full transparency with our customers
          </h1>
          <p className="text-sm font-light sm:text-xl">
            Check reservations at the date you want to leave a reservation.
          </p>
          <div className="mt-0 flex flex-row gap-2 sm:mt-6">
            <button
              type="button"
              className="cursor-pointer rounded-md border p-1.5 text-xs font-light shadow-sm ring-4 ring-transparent transition hover:scale-95 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-950 active:scale-100 active:bg-sky-100 active:ring-sky-200 sm:p-2 sm:text-lg"
            >
              3 Month Schedules
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-md border p-1.5 text-xs font-light shadow-sm ring-4 ring-transparent transition hover:scale-95 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-950 active:scale-100 active:bg-sky-100 active:ring-sky-200 sm:p-2 sm:text-lg"
            >
              6 Month Schedules
            </button>
            <button
              type="button"
              className="hover: cursor-pointer rounded-md border p-1.5 text-xs font-light shadow-sm ring-4 ring-transparent transition hover:scale-95 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-950 active:scale-100 active:bg-sky-100 active:ring-sky-200 sm:p-2 sm:text-lg"
            >
              1 Year Schedules
            </button>
          </div>
        </div>
        <div className="h-70 flex w-80 items-center justify-center sm:h-96 sm:w-96">
          <img src={calendar} alt="" />
        </div>
      </div>
    </div>
  );
}
