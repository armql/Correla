import React, { useEffect, useState } from "react";
import Support from "../components/CrewInfo";
import smiley from "../assets/svg/smiley.svg";
import Clock from "../components/Clock";
import Schedules from "../components/Schedules";
import ServiceCards from "../components/ServiceCards";
import Questions from "../components/Questions";
import ALLQuestions from "./ALLQuestions";

export default function Home() {
  const initialSchedule = {
    Monday: {
      "9:00 - 10:00": true,
      "10:00 - 11:00": false,
      "11:00 - 12:00": false,
      "12:00 - 13:00 BREAK": true,
      "14:00 - 15:00": false,
      "15:00 - 16:00": false,
      "16:00 - 17:00": false,
    },
    Tuesday: {
      "9:00 - 10:00": false,
      "10:00 - 11:00": false,
      "11:00 - 12:00": false,
      "12:00 - 13:00 BREAK": true,
      "14:00 - 15:00": false,
      "15:00 - 16:00": false,
      "16:00 - 17:00": false,
    },
    Wednesday: {
      "9:00 - 10:00": false,
      "10:00 - 11:00": false,
      "11:00 - 12:00": false,
      "12:00 - 13:00 BREAK": true,
      "14:00 - 15:00": false,
      "15:00 - 16:00": false,
      "16:00 - 17:00": false,
    },
    Thursday: {
      "9:00 - 10:00": false,
      "10:00 - 11:00": false,
      "11:00 - 12:00": false,
      "12:00 - 13:00 BREAK": true,
      "14:00 - 15:00": false,
      "15:00 - 16:00": false,
      "16:00 - 17:00": false,
    },
    Friday: {
      "9:00 - 10:00": false,
      "10:00 - 11:00": false,
      "11:00 - 12:00": false,
      "12:00 - 13:00 BREAK": true,
      "14:00 - 15:00": false,
      "15:00 - 16:00": false,
      "16:00 - 17:00": false,
    },
    Saturday: {
      "9:00 - 10:00": false,
      "10:00 - 11:00": false,
      "11:00 - 12:00": false,
      "12:00 - 13:00 BREAK": true,
      "14:00 - 15:00": false,
      "15:00 - 16:00": false,
      "16:00 - 17:00": false,
    },
  };
  const [schedule, setSchedule] = useState(initialSchedule);
  const [breakSchedule, setBreakSchedule] = useState({});

  // Load the break schedule from local storage when the component mounts
  useEffect(() => {
    const storedBreakSchedule = localStorage.getItem("breakSchedule");
    if (storedBreakSchedule) {
      setBreakSchedule(JSON.parse(storedBreakSchedule));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("breakSchedule", JSON.stringify(breakSchedule));
  }, [breakSchedule]);

  const toggleReservation = (day, time) => {
    if (time.includes("BREAK")) {
      setBreakSchedule((prevBreakSchedule) => ({
        ...prevBreakSchedule,
        [day]: {
          ...prevBreakSchedule[day],
          [time]: !prevBreakSchedule[day]?.[time],
        },
      }));
    } else {
      setSchedule((prevSchedule) => ({
        ...prevSchedule,
        [day]: {
          ...prevSchedule[day],
          [time]: !prevSchedule[day]?.[time],
        },
      }));
    }
  };

  const isReserved = (day, time) => {
    if (time.includes("BREAK")) {
      return false;
    }
    return schedule[day]?.[time];
  };

  const isBreakReserved = (day, time) => {
    if (time.includes("BREAK")) {
      return breakSchedule[day]?.[time];
    }
    return false;
  };

  const renderScheduler = (day) => {
    return (
      <div className="">
        <div className="text-xl grid-cols-1">
          {Object.keys(schedule[day]).map((time) => {
            const isBreakTime = time.includes("BREAK");
            const displayedTime = isBreakTime
              ? time.replace("BREAK", "")
              : time;

            return (
              <button
                key={time}
                type="button"
                className={`w-full relative tracking-widest transition sm:text-[18px] text-xs sm:p-6 px-0.5 ${
                  isReserved(day, time) ? "cursor-default" : "bg-white"
                } ${isBreakTime ? "bg-rose-50" : ""}`}
                onClick={() => toggleReservation(day, time)}
              >
                {isReserved(day, time) && (
                  <div className="uppercase tracking-tighter absolute text-rose-900 bg-rose-100 px-1 py-0.5 rounded-tl-sm text-sm right-0 bottom-0">
                    reserved
                  </div>
                )}
                {isBreakReserved(day, time) && (
                  <div className="uppercase absolute text-white bg-red-900 px-1 py-0.5 rounded-tl-sm text-sm right-0 bottom-0">
                    break
                  </div>
                )}
                {displayedTime}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="parent h-full py-2 bg-white">
      <div className="group flex sm:flex-row flex-col items-center justify-evenly">
        <div className="text-center p-4 rounded-md">
          <div className="flex flex-col text-sky-900 tracking-tight justify-center items-center text-2xl">
            Personalized appointments just a scroll away
          </div>
          <h1 className="font-semibold tracking-tighter text-6xl text-sky-500">
            Seamless smiles your way
          </h1>
        </div>
        <div className="">
          <img src={smiley} alt="" className="" />
        </div>
      </div>
      <Clock />
      <div className="flex items-center flex-col justify-center bg-white">
        <div className="grid grid-cols-6 items-center justify-center text-center bg-white">
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              type="button"
              className={`bg-white px-6 py-2.5 cursor-default sm:text-2xl text-xs text-black font-semibold`}
            >
              {day}
            </button>
          ))}
          {Object.keys(schedule).map((day) => (
            <div key={day} className="">
              {renderScheduler(day)}
            </div>
          ))}
        </div>
      </div>
      <Schedules />
      <ServiceCards />
      <ALLQuestions />
      <Support />
    </div>
  );
}
