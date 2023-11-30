import React, { useEffect, useState } from "react";
import useOnLoad from "../../../hooks/useOnLoad";
import Content from "./content/Content";
import useDirective from "../../../hooks/useDirective";
import HeroSection from "../../home/hero/Hero";
import Clock from "../../../components/common/Clock";
import smiley from "../../../assets/svg/smiley.svg";
import Schedules from "../../../components/custom/Schedules";

export default function MobileHome() {
  const { isOnLoad } = useOnLoad(false);
  const { sectionDirector, scroller } = useDirective();

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
          className={`z-10 bg-gradient-to-t from-sky-400 to-sky-800 bg-clip-text px-1 text-center text-3xl font-light tracking-tight text-transparent ${
            isOnLoad ? "" : "animate-bounce transition duration-1000"
          }`}
        >
          Because you must smile.
        </div>

        <div className="flex flex-row gap-4">
          <button
            type="button"
            onClick={() => scroller("get_checkedSection")}
            className={`z-10 cursor-pointer rounded-full border border-amber-200 bg-amber-200 px-4 py-2 text-xs font-light text-amber-900 transition duration-300 hover:border-amber-300 hover:bg-amber-300 hover:text-amber-950 active:bg-opacity-60 ${
              isOnLoad
                ? "animate-none"
                : "animate-bounce bg-opacity-70 backdrop-blur-sm"
            }`}
          >
            Need a checkup?
          </button>
          <button
            type="button"
            onClick={() => scroller("view_appointmentSection")}
            className={`z-10 rounded-full border border-black bg-transparent px-4 py-2 text-xs font-light text-black transition duration-100 hover:bg-black hover:text-white active:bg-opacity-70 ${
              isOnLoad ? "animate-none" : "animate-bounce "
            }`}
          >
            View Appointments
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className={`"transition w-full bg-white duration-500 ${
            isOnLoad ? "h-40 rounded-tl-full" : "h-0"
          }`}
        ></div>
      </div>
      <div className="mt-20">
        <div className="flex flex-col gap-4">
          <div className="relative px-4 text-base font-light text-sky-950">
            Personalized appointments just a click away!
            <div className="absolute -top-[12px] right-[90px] -z-10 h-14 w-14 animate-pulse rounded-full border-2 border-sky-100 bg-transparent"></div>
            <div className="absolute -top-[12px] right-[85px] -z-10 h-14 w-14 rounded-full border-2 border-sky-400 bg-transparent transition duration-300 hover:border-sky-800"></div>
          </div>
          <div className="h-full w-full p-1">
            <div className="text-center text-4xl font-medium text-black">
              Seamless smiles your way
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <img src={smiley} alt="" className="h-70 w-80 sm:h-96 sm:w-96" />
          </div>
        </div>
        <Schedules />
        {/* <HeroSection />
        <Clock /> */}
        {/* <Content sectionDirector={sectionDirector} /> */}
      </div>
    </div>
  );
}
