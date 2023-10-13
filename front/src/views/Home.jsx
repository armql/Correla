import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import calendar from "../assets/svg/calendar.svg";
import Support from "../components/CrewInfo";
import smiley from "../assets/svg/smiley.svg";

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

  const [breaks, setBreak] = useState(false);
  const [currentTime, setCurrentTime] = useState(DateTime.now());
  const [schedule, setSchedule] = useState(initialSchedule);
  const [breakSchedule, setBreakSchedule] = useState({});

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
      <div className="border">
        <div className="text-xl grid-cols-1">
          {Object.keys(schedule[day]).map((time) => (
            <button
              key={time}
              type="button"
              className={`w-full bg-white relative transition text-[14px] p-6 ${
                isReserved(day, time) || isBreakReserved(day, time)
                  ? "cursor-default bg-white"
                  : ""
              }`}
              onClick={() => toggleReservation(day, time)}
            >
              {(isReserved(day, time) || isBreakReserved(day, time)) && (
                <div className="uppercase absolute text-red-900 bg-red-100 px-1 py-0.5 rounded-tl-sm text-sm right-0 bottom-0">
                  reserved
                </div>
              )}
              {isBreakReserved(day, time) && (
                <div className="uppercase absolute text-red-900 bg-red-100 px-1 py-0.5 rounded-tl-sm text-sm right-0 bottom-0">
                  break
                </div>
              )}
              {time}
            </button>
          ))}
        </div>
      </div>
    );
  };

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
    <div className="parent h-full bg-white">
      <div className="relative group flex flex-col items-center justify-center">
        <div className="absolute top-64 text-center p-4 rounded-md">
          <div className="flex flex-col text-sky-900 justify-center items-center text-lg">
            Personalized appointments just a scroll away
          </div>
          <h1 className="font-semibold group-hover:translate-y-48 duration-700 transition group-hover:transition tracking-tighter text-4xl text-sky-300">
            Seamless smiles your way
          </h1>
        </div>
        <img
          src={smiley}
          alt=""
          className="group-hover:scale-105 transition duration-700"
        />
      </div>
      <div className="text-black text-center">
        <div className={`text-9xl mb-4 mt-12`}>
          {currentTime.toFormat("HH:mm")}
        </div>
      </div>
      <div className="flex items-center flex-col justify-center">
        <div className="grid grid-cols-3 lg:grid-cols-6 items-center justify-center text-center">
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              type="button"
              className={`bg-white backdrop-blur-sm bg-opacity-70 px-10 py-8 cursor-default text-xl text-black tracking-tighter font-semibold`}
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
      <div className="bg-white">
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
          <div className="flex justify-center items-center flex-col mt-12 gap-4 lg:py-2 text-center">
            <h1 className="font-semibold text-4xl">
              Extended full transparency with our customers
            </h1>
            <p className="font-light text-xl">
              Check reservations at the date you want to leave a reservation.
            </p>
            <div className="flex flex-row gap-2 mt-6">
              <button
                type="button"
                className="border font-light text-lg shadow-sm rounded-md hover:scale-95 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-950 transition p-2 cursor-pointer active:scale-100 active:bg-sky-100 ring-4 ring-transparent active:ring-sky-200"
              >
                3 Month Schedules
              </button>
              <button
                type="button"
                className="border font-light text-lg shadow-sm rounded-md hover:scale-95 transition p-2 cursor-pointer hover:bg-sky-50 hover:border-sky-200 hover:text-sky-950 active:scale-100 active:bg-sky-100 ring-4 ring-transparent active:ring-sky-200"
              >
                6 Month Schedules
              </button>
              <button
                type="button"
                className="border font-light text-lg shadow-sm rounded-md hover:scale-95 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-950 transition p-2 cursor-pointer hover: active:scale-100 active:bg-sky-100 ring-4 ring-transparent active:ring-sky-200"
              >
                1 Year Schedules
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-96 h-96">
            <img src={calendar} alt="" />
          </div>
        </div>
      </div>
      <Support />
    </div>
  );
}
