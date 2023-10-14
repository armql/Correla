import React, { useState } from "react";
import joyride from "../assets/svg/joyride.svg";
const CustomDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`py-1.5 px-2.5 flex flex-row justify-between items-center active:bg-gray-300 transition bg-gray-50 w-full text-start border border-gray-200 rounded-md shadow-sm text-sm`}
        >
          {selected ? selected.label : "Select a procedure"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition duration-500 ${
              isOpen ? "rotate-180 text-transparent" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <ul
          className={`absolute z-10 ${
            isOpen ? "" : "hidden"
          } bg-white border border-gray-300 mt-1 w-full rounded-md`}
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button" // Use type="button" to prevent form submission
                onClick={() => handleSelect(option)}
                className="block w-full hover:bg-sky-100 text-start hover:text-sky-900 hover:cursor-pointer px-4 py-2"
              >
                {option.label}
                <div className="font-light text-xs text-gray-500">
                  {option.description}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function ApplicationForm() {
  const procedureOptions = [
    {
      value: "twtn",
      label: "Teeth Whitening",
      description: "Whiten your teeth.",
    },
    {
      value: "tcln",
      label: "Teeth Cleaning",
      description: "Clean and remove plaque from teeth.",
    },
    {
      value: "wstx",
      label: "Wisdom Teeth Extraction",
      description: "Remove troublesome wisdom teeth.",
    },
    {
      value: "impc",
      label: "Implant Consultation",
      description: "Consultation for dental implants.",
    },
    {
      value: "denx",
      label: "Dental Consultation",
      description: "General dental consultation.",
    },
    {
      value: "ortc",
      label: "Orthodontic Consultation",
      description: "Consultation for braces or orthodontic treatment.",
    },
    {
      value: "dentc",
      label: "Denture Consultation",
      description: "Consultation for dentures.",
    },
    {
      value: "emgc",
      label: "Emergency Care",
      description: "Immediate dental care for emergencies.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Here, you can handle form submission logic or make an API call
    // based on the selectedProcedure and other form fields.
  };

  const [selectedProcedure, setSelectedProcedure] = useState(null);

  // Function to generate an array of days in a month
  const getDaysInMonth = (year, month) => {
    return new Array(32 - new Date(year, month, 32).getDate())
      .fill(null)
      .map((_, index) => index + 1);
  };

  // Generate an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="flex justify-center items-center lg:justify-around gap-6 flex-col lg:flex-row text-center pt-2 px-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-semibold">Application form</h1>
            <h1 className="text-lg tracking-tighter text-center">
              This is where you submit your form for a procedure
            </h1>
          </div>
          <img src={joyride} alt="" className="h-70 w-96" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-12 justify-center p-4">
            <div className="gap-2 flex flex-col">
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Your first name"
                  className="py-1.5 px-2.5 border shadow-sm text-sm rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  className="py-1.5 px-2.5 border shadow-sm text-sm rounded-md"
                />
              </div>
            </div>
            <div className="gap-2 flex flex-col">
              <div className="flex flex-col gap-2 justify-center">
                <label htmlFor="procedure">Procedure</label>
                <CustomDropdown
                  options={procedureOptions}
                  selected={selectedProcedure}
                  onSelect={(option) => setSelectedProcedure(option)}
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Your phone number"
                  className="py-1.5 px-2.5 border text-sm shadow-sm rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-4">
              <label htmlFor="calendar">Choose your reservation date</label>
              <input
                type="date"
                className="text-center tracking-widest text-sm bg-white px-2.5 py-1.5 border rounded-md shadow-sm w-full text-black placeholder-black caret-black"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border bg-gray-100 cursor-pointer shadow-sm py-3 px-6 rounded-sm hover:bg-gray-300 active:bg-gray-100 transition"
            >
              Reserve
            </button>
          </div>
        </form>
      </div>
      <div className="flex w-full border-t-2 mt-6 flex-col p-4">
        <div className="flex flex-row justify-between mb-4">
          <h1 className="text-5xl font-semibold text-center">Calendar</h1>
          <div className="flex gap-2 bg-white border border-gray-300 font-light text-lg py-2 px-4 hover:bg-gray-50 cursor-pointer rounded-md shadow-sm">
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 transition hover:-translate-x-1 duration-500 active:-translate-x-3 hover:scale-110 active:scale-150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            Year
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 transition hover:translate-x-1 duration-500 active:translate-x-3 hover:scale-110 active:scale-150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-6">
        {monthNames.map((month, index) => (
          <div key={index} className="search-center">
            <header className="px-1.5 text-2xl p-2 font-semibold">
              {month}
            </header>
            <div className="text-center ">
              <ul className="grid grid-cols-4 text-md">
                {getDaysInMonth(2023, index).map((day) => (
                  <li
                    key={day}
                    className="border py-3 font-light px-6 hover:bg-gray-50"
                  >
                    {day}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
