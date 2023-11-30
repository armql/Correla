import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import molar from "../../assets/svg/molar-tooth.svg";
import canine from "../../assets/svg/incisors-tooth.svg";
import premolar from "../../assets/svg/premolar-tooth.svg";

export default function Clock() {
  const [breaks, setBreak] = useState(false);
  const [currentTime, setCurrentTime] = useState(DateTime.now());

  const updateCurrentTime = () => {
    const userTimeZone = "Europe/Belgrade";
    const currentTimeInTimeZone = DateTime.now().setZone(userTimeZone);
    setCurrentTime(currentTimeInTimeZone);
  };

  useEffect(() => {
    updateCurrentTime();

    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`group relative mb-0 mt-0 flex flex-row justify-between py-2 text-center text-8xl font-semibold tracking-widest sm:mb-4 sm:mt-10 sm:py-12 sm:text-9xl`}
    >
      <div>
        <img
          src={molar}
          alt=""
          className="absolute h-10 w-10 translate-x-10 translate-y-20 rotate-3 transition duration-300 group-hover:-rotate-3 sm:h-14 sm:w-14"
        />
        <img
          src={canine}
          alt=""
          className="absolute h-10 w-10 translate-x-40 translate-y-10 rotate-12 transition duration-300 group-hover:-rotate-12 sm:h-12 sm:w-12"
        />
        <img
          src={premolar}
          alt=""
          className="absolute h-10 w-10 translate-x-20 translate-y-0 rotate-2 transition duration-300 group-hover:-rotate-2 group-hover:scale-110"
        />
      </div>
      <div className="transition duration-500 group-hover:scale-110">
        {currentTime.toFormat("HH:mm")}
      </div>
      <div>
        <img
          src={molar}
          alt=""
          className="absolute h-10 w-10 -translate-x-24 translate-y-20 -rotate-3 transition duration-300 group-hover:rotate-3 sm:h-14 sm:w-14"
        />
        <img
          src={canine}
          alt=""
          className="absolute h-10 w-10 -translate-x-48 translate-y-10 -rotate-12 transition duration-300 group-hover:rotate-12 sm:h-12 sm:w-12"
        />
        <img
          src={premolar}
          alt=""
          className="absolute h-8 w-8 -translate-x-28 translate-y-0 -rotate-2 transition duration-300 group-hover:rotate-2 group-hover:scale-110 sm:h-10 sm:w-10"
        />
      </div>
    </div>
  );
}
