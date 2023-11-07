import React from "react";
import Pagination from "../custom/Pagination";

export default function ProdTable_skeleton() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-6 text-center border-t-2 border-b-2">
        <div className="shadow-md p-4 font-normal tracking-wide">
          Procedure Type
        </div>
        <div className="shadow-md p-4 font-normal tracking-wide">
          Procedure Name
        </div>
        <div className="shadow-md p-4 font-normal tracking-wide">
          Creation Date
        </div>
        <div className="shadow-md p-4 font-normal tracking-wide">
          Created by
        </div>
        <div className="shadow-md p-4 font-normal tracking-wide">
          Edit Procedure
        </div>
        <div className="shadow-md p-4 font-normal tracking-wide">
          Delete Procedure
        </div>
      </div>
      <div className="grid grid-cols-6 text-center border-t border-b">
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-sky-100 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-amber-50 bg-opacity-40 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-100 flex justify-between items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-red-50 bg-opacity-40 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex justify-between items-center gap-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 text-center border-t border-b">
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-sky-100 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-amber-50 bg-opacity-40 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-100 flex justify-between items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-red-50 bg-opacity-40 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex justify-between items-center gap-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 text-center border-t border-b">
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-sky-100 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-amber-50 bg-opacity-40 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-100 flex justify-between items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-red-50 bg-opacity-40 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex justify-between items-center gap-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 text-center border-t border-b">
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-sky-100 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-amber-50 bg-opacity-40 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-100 flex justify-between items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-red-50 bg-opacity-40 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex justify-between items-center gap-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 text-center border-t border-b">
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-sky-100 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-amber-50 bg-opacity-40 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-100 flex justify-between items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-red-50 bg-opacity-40 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex justify-between items-center gap-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 text-center border-t border-b">
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-sky-100 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-amber-50 bg-opacity-40 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-100 flex justify-between items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-red-50 bg-opacity-40 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex justify-between items-center gap-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 text-center border-t border-b">
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-sky-100 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md py-3.5 px-2 font-light text-gray-600 tracking-wide flex items-center justify-center animate-pulse">
          <div className="bg-gray-200 animate-pulse w-40 h-4 rounded-sm"></div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-amber-50 bg-opacity-40 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-100 flex justify-between items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
        <div className="shadow-md px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              disabled
              type="button"
              className="cursor-wait border shadow-sm rounded-md py-1 px-6 text-center bg-red-50 bg-opacity-40 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex justify-between items-center gap-2"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
      <Pagination currentPage={1} totalPages={1} paginate={1} />
    </div>
  );
}
