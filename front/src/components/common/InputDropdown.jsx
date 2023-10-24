import React, { useState } from "react";

const InputDropdown = ({ options, selected, onSelect }) => {
  const [openGroup, setOpenGroup] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groupEffect, setGroupEffect] = useState(false);

  const handleSelect = (option) => {
    if (option.label) {
      onSelect(option);
    }
    if (option.type === openGroup) {
      setOpenGroup(null);
      setSelectedGroup(null);
      setGroupEffect(!groupEffect);
    } else {
      setOpenGroup(option.type);
      setSelectedGroup(option);
      setIsOpen(true);
    }
  };

  const toggleDropdown = () => {
    if (!openGroup) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
    setOpenGroup(null);
  };

  const groupedOptions = options.reduce((acc, option) => {
    if (!acc[option.type]) {
      acc[option.type] = [];
    }
    acc[option.type].push(option);
    return acc;
  }, {});

  return (
    <div className="relative w-full inline-block text-left">
      <div className="relative w-full h-full flex justify-center items-center">
        <button
          type="button"
          onClick={toggleDropdown}
          className={`py-1.5 px-4 w-full flex flex-row justify-between items-center active:bg-gray-300 transition bg-gray-50 text-start border border-gray-200 rounded-md shadow-sm`}
        >
          {selected
            ? selected.label
            : selectedGroup
            ? selectedGroup.type
            : "Select a procedure"}
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
          }  bg-sky-50 border border-sky-200 top-11 w-full rounded-md`}
        >
          {Object.keys(groupedOptions).map((group) => (
            <div key={group}>
              <button
                type="button"
                onClick={() => handleSelect({ type: group })}
                className={`block w-full text-start hover:cursor-pointer px-4 py-2 font-medium active:bg-sky-50 text-sky-900 transition duration-300`}
              >
                {group}
              </button>
              {openGroup === group && (
                <div className="bg-white">
                  {groupedOptions[group].map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
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
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputDropdown;
