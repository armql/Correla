import React, { useState } from "react";

const RoleDropdown = ({ selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      canPerform: "Cosmetic Dentist",
    },
    {
      canPerform: "Endodontist",
    },
    {
      canPerform: "Oral Medicine Specialist",
    },
    {
      canPerform: "Dental Sleep Medicine Specialist",
    },
    {
      canPerform: "Orthodontist",
    },
    {
      canPerform: "Pediatric Dentist",
    },
    {
      canPerform: "Dental Hygienist",
    },
    {
      canPerform: "Prosthodontist",
    },
    {
      canPerform: "Dentist",
    },
    {
      canPerform: "Oral Surgeon",
    },
  ];

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full text-left">
      <div className="relative flex h-full w-full items-center justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex w-full flex-row items-center justify-between rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-start text-sm shadow-sm transition active:bg-gray-50`}
        >
          {selected ? selected.canPerform : "Select a role"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-5 w-5 transition duration-500 ${
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
          } top-11 grid w-full grid-rows-3 rounded-md border border-gray-300 bg-white`}
        >
          {options.map((option) => (
            <li key={option.canPerform}>
              <button
                type="button"
                onClick={() => handleSelect(option)}
                className="block w-full px-4 py-2 text-start hover:cursor-pointer hover:bg-sky-100 hover:text-sky-900"
              >
                {option.canPerform}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoleDropdown;
