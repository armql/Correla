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
    <div className="relative inline-block w-full text-left">
      <div className="relative flex h-full w-full items-center justify-center">
        <button
          type="button"
          onClick={toggleDropdown}
          className={`flex w-full flex-row items-center justify-between rounded-md border-2 border-gray-200 px-4 py-2 text-start text-sm shadow-sm transition active:bg-gray-50 ${
            selected === selectedGroup ? "text-gray-400" : "text-black"
          }`}
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
          }  top-11 w-full rounded-md border border-sky-200 bg-sky-50 transition-all duration-300`}
        >
          {Object.keys(groupedOptions).map((group) => (
            <div key={group}>
              <button
                type="button"
                onClick={() => handleSelect({ type: group })}
                className={`block w-full px-4 py-2 text-start font-medium text-sky-900 transition duration-300 hover:cursor-pointer active:bg-sky-50`}
              >
                {group}
              </button>
              {openGroup === group && (
                <div className={`bg-white`}>
                  {groupedOptions[group].map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => handleSelect(option)}
                        className="block w-full px-4 py-2 text-start hover:cursor-pointer hover:bg-sky-100 hover:text-sky-900"
                      >
                        {option.label}
                        <div className="text-xs font-light text-gray-500">
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
