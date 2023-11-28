import React, { useEffect, useState } from "react";
import useOnLoad from "../../../hooks/useOnLoad";
import Content from "./content/Content";

export default function MobileHome() {
  const { isOnLoad } = useOnLoad(false);

  return (
    <div className="relative h-screen w-screen bg-transparent">
      <div
        className={`absolute top-14 z-10 h-96 w-96 rounded-full bg-white transition duration-100 ${
          isOnLoad ? "-translate-x-20 ease-in" : "-translate-x-40"
        }`}
      ></div>
      <div
        className={`absolute top-20 h-96 w-96 rounded-full bg-sky-100 transition duration-100 ${
          isOnLoad ? "translate-x-20 ease-in" : "translate-x-40"
        }`}
      ></div>
      <div className="z-20 flex h-full w-full flex-col items-center justify-center gap-4">
        <div
          className={`z-10 bg-gradient-to-t from-zinc-400 to-sky-800 bg-clip-text px-1 text-center text-3xl font-light tracking-tight text-transparent ${
            isOnLoad ? "" : "animate-bounce transition duration-1000"
          }`}
        >
          Because you must smile.
        </div>

        <div className="flex flex-row gap-4">
          <button
            type="button"
            className={`z-10 cursor-pointer rounded-full border border-amber-100 bg-amber-100 px-4 py-2 text-xs font-light text-amber-800 transition duration-300 hover:border-amber-200 hover:bg-amber-200 hover:text-amber-950 active:bg-opacity-60 ${
              isOnLoad
                ? "animate-none"
                : "animate-pulse bg-opacity-70 backdrop-blur-sm"
            }`}
          >
            Need a checkup?
          </button>
          <button
            type="button"
            className={`z-10 rounded-full border border-black bg-transparent px-4 py-2 text-xs font-light text-black transition duration-100 hover:bg-white active:bg-gray-100 ${
              isOnLoad ? "animate-none" : "animate-pulse "
            }`}
          >
            View Appointments
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0"></div>
      <Content />
    </div>
  );
}
