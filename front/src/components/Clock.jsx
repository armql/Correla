import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import molar from "../assets/svg/molar-tooth.svg";
import canine from "../assets/svg/incisors-tooth.svg";
import premolar from "../assets/svg/premolar-tooth.svg";

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
      className={`flex group flex-row justify-between relative text-9xl py-12 tracking-widest text-center font-semibold mb-4 mt-10`}
    >
      <div>
        <img
          src={molar}
          alt=""
          className="absolute translate-x-10 translate-y-20 w-14 h-14 group-hover:-rotate-3 rotate-3 duration-300 transition"
        />
        <img
          src={canine}
          alt=""
          className="absolute translate-x-40 translate-y-10 duration-300 transition group-hover:-rotate-12 rotate-12 w-12 h-12"
        />
        <img
          src={premolar}
          alt=""
          className="absolute translate-x-20 translate-y-0 duration-300 transition group-hover:-rotate-2 group-hover:scale-110 rotate-2 w-10 h-10"
        />
      </div>
      {currentTime.toFormat("HH:mm")}
      <div>
        <img
          src={molar}
          alt=""
          className="absolute -translate-x-24 translate-y-20 w-14 h-14 group-hover:rotate-3 -rotate-3 duration-300 transition"
        />
        <img
          src={canine}
          alt=""
          className="absolute -translate-x-48 translate-y-10 group-hover:rotate-12 duration-300 transition -rotate-12 w-12 h-12"
        />
        <img
          src={premolar}
          alt=""
          className="absolute -translate-x-28 translate-y-0 group-hover:rotate-2 group-hover:scale-110 duration-300 transition -rotate-2 w-10 h-10"
        />
      </div>
    </div>
  );
}
