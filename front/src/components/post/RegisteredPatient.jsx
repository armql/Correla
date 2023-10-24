import React, { useState } from "react";
import Input from "../common/Input";
import Calendar from "../common/Calendar";
import InputDropdown from "../common/InputDropdown";

export default function RegisteredPatient({
  togglePatient,
  procedureOptions,
  selectedProcedure,
  setSelectedProcedure,
}) {
  const [isCalendar, setIsCalendar] = useState(false);
  const toggleCalendar = () => {
    setIsCalendar(!isCalendar);
  };

  return (
    <>
      <div className="relative flex items-center justify-center shadow-sm border bg-white w-full h-full">
        <div className="absolute top-0 right-0 p-4">
          <button type="button" onClick={togglePatient}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 active:rotate-90 hover:text-red-800 hover:scale-110 duration-500 transition`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form action="">
          <h1 className="text-2xl font-semibold">Patient Application Form</h1>
          <div className="flex gap-2 flex-col mt-4 w-full">
            <label htmlFor="searchName">Search Patient</label>
            <input
              type="search"
              name="searchName"
              id="searchName"
              placeholder="Search patient by name"
              className="border-2 ring-2 ring-transparent w-full shadow-sm rounded-md py-1.5 px-4"
            />
          </div>
          <div className="flex flex-col gap-2 justify-center mt-4 w-full">
            <label htmlFor="procedure">Procedure</label>
            <InputDropdown
              options={procedureOptions}
              selected={selectedProcedure}
              onSelect={(option) => setSelectedProcedure(option)}
              data={procedureOptions}
            />
          </div>
          <div className="flex flex-row gap-4 w-full h-full">
            <div
              className={`flex mb-4 transition w-full h-full mt-4 justify-center items-center py-8 ${
                isCalendar ? "bg-gray-50" : "bg-white"
              }`}
            >
              <button
                type="button"
                onClick={toggleCalendar}
                className={`p-2 text-gray-500 bg-gray-200 py-2 px-4  transition ${
                  isCalendar
                    ? "active:scale-100 hover:scale-90 "
                    : "hover:bg-gray-300 duration-100"
                }`}
              >
                Choose a date
              </button>
            </div>
            <div className="flex gap-2 flex-col mt-4">
              <label htmlFor="firstName">Will be performed by</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                className="border-2 ring-2 ring-transparent shadow-sm rounded-md py-1.5 px-4"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-col mt-4">
            <label htmlFor="demandResources">Demand Resources</label>
            <input
              type="number"
              name="demandResources"
              id="demandResources"
              className="border-2 ring-2 ring-transparent shadow-sm rounded-md py-1.5 px-4"
            />
          </div>
          <div className="flex justify-center items-center mt-7">
            <button
              type="submit"
              className="py-2 px-6 border rounded-md w-80 hover:bg-gray-50"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      {isCalendar && (
        <div className={`right-0 left-0 `}>
          <Calendar toggleCalendar={toggleCalendar} />
        </div>
      )}
    </>
  );
}
