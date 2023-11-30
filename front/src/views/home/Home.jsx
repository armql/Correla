import React, { useEffect, useState } from "react";
import Support from "../../components/custom/CrewInfo";
import Clock from "../../components/common/Clock";
import Schedules from "../../components/custom/Schedules";
import ALLQuestions from "../../components/custom/ALLQuestions";
import AdVideo from "../../components/custom/AdVideo";
import Hero from "./hero/Hero";

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
        <div className="grid-cols-1 text-xl">
          {Object.keys(schedule[day]).map((time) => {
            const isBreakTime = time.includes("BREAK");
            const displayedTime = isBreakTime
              ? time.replace("BREAK", "")
              : time;

            return (
              <button
                key={time}
                type="button"
                className={`relative w-full px-0.5 text-xs tracking-widest transition sm:p-6 sm:text-[18px] ${
                  isReserved(day, time) ? "cursor-default" : "bg-white"
                } ${isBreakTime ? "bg-rose-50" : ""}`}
                onClick={() => toggleReservation(day, time)}
              >
                {isReserved(day, time) && (
                  <div className="absolute bottom-0 right-0 rounded-tl-sm bg-rose-100 px-1 py-0.5 text-sm uppercase tracking-tighter text-rose-900">
                    reserved
                  </div>
                )}
                {isBreakReserved(day, time) && (
                  <div className="absolute bottom-0 right-0 rounded-tl-sm bg-red-900 px-1 py-0.5 text-sm uppercase text-white">
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
    <div className="parent h-full bg-white">
      <Hero />
      <Clock />
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="grid grid-cols-6 items-center justify-center bg-white text-center">
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              type="button"
              className={`cursor-default bg-white px-6 py-2.5 text-xs font-semibold text-black sm:text-2xl`}
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
      <AdVideo />
      <ALLQuestions />
      <Support />
    </div>
  );
}
