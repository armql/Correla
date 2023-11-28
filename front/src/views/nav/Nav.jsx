import React from "react";
import useToggle from "../../hooks/useToggle";
import Bar from "./bar/Bar";

export default function Nav() {
  const { effect, auto, open, close } = useToggle();

  return (
    <div className="flex w-full items-center justify-center">
      <div
        className={`absolute top-0 z-10 mt-1 h-10 cursor-pointer rounded-full bg-white shadow-sm ${
          effect
            ? "transition-width w-[90vw] duration-300"
            : "transition-width w-14 duration-300 active:bg-opacity-40"
        }`}
      >
        {effect ? (
          <Bar effect={effect} close={close} />
        ) : (
          <button
            type="button"
            onClick={open}
            className={`flex h-full w-full items-center justify-center text-sky-800 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-5 w-5 transition-transform duration-500 ${
                effect ? "hidden rotate-0" : "rotate-90"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
