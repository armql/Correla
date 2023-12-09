import React from "react";
import smiley from "../../../assets/svg/smiley.svg";

export default function Hero() {
  return (
    <div className="group flex flex-col items-center justify-center gap-2 px-4 sm:flex-row sm:gap-0">
      <div className="rounded-md p-4 text-center">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-sky-950 to-sky-800 bg-clip-text text-base font-light tracking-tight text-transparent sm:text-2xl sm:font-normal">
          Personalized appointments just a scroll away
        </div>
        <h1 className="bg-gradient-to-b from-sky-400 to-sky-700 bg-clip-text text-4xl font-medium tracking-tighter text-transparent sm:text-6xl sm:font-semibold">
          Seamless smiles your way
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <img src={smiley} alt="" className="" />
      </div>
    </div>
  );
}
