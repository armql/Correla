import React from "react";

export default function Pagination() {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="bg-white flex justify-between items-center p-2">
        <div>Show 1 of 999</div>
        <div className="flex flex-row gap-1">
          <button
            type="button"
            className="flex justify-center items-center border rounded-md p-1 w-9 h-9 bg-gray-50 shadow-sm text-gray-500 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            className="flex justify-center items-center border rounded-md p-1 w-9 h-9 bg-gray-50 shadow-sm"
          >
            1
          </button>
          <button
            type="button"
            className="flex justify-center items-center border rounded-md p-1 w-9 h-9 bg-gray-50 shadow-sm text-gray-500 hover:text-black"
          >
            2
          </button>
          <button
            type="button"
            className="flex justify-center items-center border rounded-md p-1 w-9 h-9 bg-gray-50 shadow-sm text-gray-500 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
