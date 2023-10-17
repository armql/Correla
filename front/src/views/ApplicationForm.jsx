import React, { useState } from "react";
import joyride from "../assets/svg/joyride.svg";
import Calendar from "../components/Calendar";
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

  return (
    <div className="bg-white py-10">
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
      <Calendar />
    </div>
  );
}
