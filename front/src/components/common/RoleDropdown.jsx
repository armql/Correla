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
    <div className="relative w-full inline-block text-left">
      <div className="relative w-full h-full flex justify-center items-center">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`py-1.5 px-4 w-full flex flex-row justify-between items-center active:bg-gray-300 transition bg-gray-50 text-start border-2 border-gray-200 rounded-md shadow-sm`}
        >
          {selected ? selected.canPerform : "Select a role"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-5 h-5 transition duration-500 ${
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
          } bg-white border border-gray-300 top-11 w-full rounded-md grid grid-rows-3`}
        >
          {options.map((option) => (
            <li key={option.canPerform}>
              <button
                type="button"
                onClick={() => handleSelect(option)}
                className="block w-full hover:bg-sky-100 text-start hover:text-sky-900 hover:cursor-pointer px-4 py-2"
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
