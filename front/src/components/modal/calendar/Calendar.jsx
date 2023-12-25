import React, { useState } from "react";
import Backdrop from "../backdrop/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeft,
  ArrowRight,
  DefArrowLeft,
  DefArrowRight,
} from "../../../assets/svg/arrows/arrows";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Calendar({ close }) {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return {
      day: currentDate.getDate(),
      month: monthNames[currentDate.getMonth()],
      year: currentDate.getFullYear(),
    };
  };

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const nextMonth = () => {
    let { month, year } = currentDMY;
    let nextMonthIndex = monthNames.indexOf(month) + 1;
    let nextYear = year;

    if (nextMonthIndex === 12) {
      nextMonthIndex = 0;
      nextYear++;
    }

    setCurrentDMY({
      day: currentDMY.day,
      month: monthNames[nextMonthIndex],
      year: nextYear,
    });

    const newDays = generateDays(nextYear, nextMonthIndex);
    setDaysOfMonth(newDays);
  };

  const prevMonth = () => {
    let { month, year } = currentDMY;
    let prevMonthIndex = monthNames.indexOf(month) - 1;
    let prevYear = year;

    if (prevMonthIndex === -1) {
      prevMonthIndex = 11;
      prevYear--;
    }

    setCurrentDMY({
      day: currentDMY.day,
      month: monthNames[prevMonthIndex],
      year: prevYear,
    });

    const newDays = generateDays(prevYear, prevMonthIndex);
    setDaysOfMonth(newDays);
  };

  const generateDays = (year, monthIndex) => {
    const totalDays = daysInMonth(year, monthIndex);
    const daysArray = [];
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }
    return daysArray;
  };

  const [currentDMY, setCurrentDMY] = useState(getCurrentDate());
  const [defaultDate] = useState(getCurrentDate());
  const [startedDMY, setStartedDMY] = useState(getCurrentDate());
  const [finishedDMY, setFinishedDMY] = useState(getCurrentDate());
  const [setting, setSetting] = useState({
    started: false,
    finished: false,
  });
  const [daysOfMonth, setDaysOfMonth] = useState(
    generateDays(currentDMY.year, monthNames.indexOf(currentDMY.month)),
  );

  const changeDMY = (type, value) => {
    if (type === "day") {
      setCurrentDMY({ ...currentDMY, day: value });
    } else if (type === "month") {
      setCurrentDMY({ ...currentDMY, month: value });
      const newDays = generateDays(currentDMY.year, monthNames.indexOf(value));
      setDaysOfMonth(newDays);
    } else if (type === "year") {
      setCurrentDMY({ ...currentDMY, year: value });
    }
  };

  const changeDate = (type, direction) => {
    const { day, month, year } = currentDMY;

    if (type === "day") {
      const newDay = direction === "increment" ? day + 1 : day - 1;
      setCurrentDMY({ ...currentDMY, day: newDay });
    } else if (type === "month") {
      const currentMonthIndex = monthNames.indexOf(month);
      const newMonthIndex =
        direction === "increment"
          ? currentMonthIndex + 1
          : currentMonthIndex - 1;

      let newYear = year;
      let newMonth = monthNames[newMonthIndex];

      if (newMonthIndex === 12) {
        newMonth = monthNames[0];
        newYear++;
      } else if (newMonthIndex === -1) {
        newMonth = monthNames[11];
        newYear--;
      }

      setCurrentDMY({ day, month: newMonth, year: newYear });
      setStartedDMY({ day, month: newMonth, year: newYear });
      setFinishedDMY({ day, month: newMonth, year: newYear });

      const newDays = generateDays(newYear, newMonthIndex);
      setDaysOfMonth(newDays);
    } else if (type === "year") {
      const newYear = direction === "increment" ? year + 1 : year - 1;
      setCurrentDMY({ ...currentDMY, year: newYear });
    }
  };

  const inputHandler = (type) => {
    if (type === "started") {
      setStartedDMY({ ...currentDMY });
      setSetting({ ...setting, started: true });
      console.log("active started");
    } else if (type === "finished") {
      console.log("active finished");
      setFinishedDMY({ ...currentDMY });
      setSetting({ ...setting, finished: true });
    }
  };

  // const [selectedDMY, setSelectedDMY] = useState({
  //   day: setCurrentDMY(day),
  //   month: setCurrentDMY(month),
  //   year: setCurrentDMY(year),
  // });

  return (
    <Backdrop opacity={"0"}>
      <div className="z-10 flex h-full w-full select-none items-center justify-center">
        <div className="flex flex-col gap-2 border-2 border-gray-200 bg-white p-2 p-6">
          <div className="flex flex-row items-center justify-between">
            <div className="px-2 py-1.5">Work timespan table</div>
            <button
              type="button"
              onClick={close}
              className="rounded-full px-1 py-1 text-sm text-black hover:bg-red-100 hover:text-red-800 active:bg-red-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
          <div className="grid h-24 grid-cols-1">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between py-1 text-[15px]">
                <div className="flex items-center justify-center px-2">
                  {setting.finished
                    ? `Finished in ${
                        finishedDMY.day +
                        "th " +
                        finishedDMY.month +
                        " " +
                        finishedDMY.year
                      }`
                    : `Started in ${
                        startedDMY.day +
                        "th " +
                        startedDMY.month +
                        " " +
                        startedDMY.year
                      }`}
                </div>
                <div className="flex items-center justify-center">
                  {!setting.started && !setting.finished && (
                    <button
                      type="button"
                      onClick={() => inputHandler("started")}
                      className="rounded-sm border border-gray-300 bg-gray-50 px-2.5 py-1.5 text-sm text-black transition duration-100 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900 active:bg-sky-100"
                    >
                      Apply
                    </button>
                  )}

                  {setting.started && !setting.finished && (
                    <button
                      type="button"
                      onClick={() => inputHandler("finished")}
                      className="rounded-sm border border-gray-300 bg-gray-50 px-2.5 py-1.5 text-sm text-black transition duration-100 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900 active:bg-sky-100"
                    >
                      Apply
                    </button>
                  )}
                </div>
              </div>
              <div className="flex h-full flex-row items-center justify-center gap-2 text-sm">
                <div
                  className={`group flex w-[4vw] gap-1 rounded-sm border p-1 text-center ${
                    currentDMY.day === defaultDate.day &&
                    currentDMY.year === defaultDate.year
                      ? "border-sky-200"
                      : "border-sky-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => changeDate("day", "decrement")}
                    className={`h-5 w-5 text-gray-200 transition duration-100 group-hover:text-black`}
                  >
                    <ArrowLeft />
                  </button>
                  {currentDMY.day === defaultDate.day
                    ? currentDMY.day
                    : currentDMY.day}
                  <button
                    type="button"
                    onClick={() => changeDate("day", "increment")}
                    className={`h-5 w-5 text-gray-200 transition duration-100 group-hover:text-black`}
                  >
                    <ArrowRight />
                  </button>
                </div>
                <div
                  className={`group flex w-[7vw] items-center justify-center gap-1 rounded-sm border p-1 text-center ${
                    currentDMY.month === defaultDate.month &&
                    currentDMY.year === defaultDate.year
                      ? "border-sky-200"
                      : "border-sky-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => changeDate("month", "decrement")}
                    className={`flex h-5 w-5 items-center justify-between text-gray-200 transition duration-100 group-hover:text-black`}
                  >
                    <ArrowLeft />
                  </button>
                  {currentDMY.month === defaultDate.month
                    ? currentDMY.month
                    : currentDMY.month}
                  <button
                    type="button"
                    onClick={() => changeDate("month", "increment")}
                    className={`h-5 w-5 text-gray-200 transition duration-100 group-hover:text-black`}
                  >
                    <ArrowRight />
                  </button>
                </div>
                <div
                  className={`group flex w-[5vw] items-center justify-center gap-1 rounded-sm border p-1 text-center ${
                    currentDMY.year === defaultDate.year &&
                    currentDMY.month === defaultDate.month
                      ? "border-sky-200"
                      : "border-sky-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => changeDate("year", "decrement")}
                    className={`h-5 w-5 text-gray-200 transition duration-100 group-hover:text-black`}
                  >
                    <ArrowLeft />
                  </button>
                  {currentDMY.year === defaultDate.year
                    ? currentDMY.year
                    : currentDMY.year}
                  <button
                    type="button"
                    onClick={() => changeDate("year", "increment")}
                    className={`h-5 w-5 text-gray-200 transition duration-100 group-hover:text-black`}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[24vh] w-[24vw] flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevMonth}
              className={`${
                setting.started &&
                currentDMY.month === startedDMY.month &&
                currentDMY.year === startedDMY.year
                  ? "cursor-not-allowed opacity-40"
                  : ""
              }`}
              disabled={
                setting.started &&
                currentDMY.month === startedDMY.month &&
                currentDMY.year === startedDMY.year
                  ? true
                  : false
              }
            >
              <DefArrowLeft
                extraStyling={`${
                  setting.started
                    ? ""
                    : "active:-translate-x-1 transition duration-100"
                }`}
              />
            </button>
            <div className="flex h-full w-full flex-col items-center justify-center gap-2">
              <div className="grid w-full grid-cols-7 items-center text-center text-xs">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>TH</div>
                <div>F</div>
                <div>S</div>
              </div>
              <div className="grid w-full grid-cols-7 items-center justify-center">
                {daysOfMonth.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => changeDMY("day", day)}
                    className={`border px-1 py-2 text-center ${
                      day === currentDMY.day
                        ? "border-gray-200 bg-gray-50"
                        : "border-gray-50 "
                    } ${
                      day < defaultDate.day &&
                      currentDMY.month === defaultDate.month
                        ? ""
                        : ""
                    } ${
                      setting.finished &&
                      currentDMY.month === finishedDMY.month &&
                      currentDMY.year === finishedDMY.year
                        ? day === finishedDMY.day &&
                          finishedDMY.month === currentDMY.month
                          ? "border-sky-300 bg-sky-100"
                          : ""
                        : ""
                    } ${
                      setting.started &&
                      currentDMY.month === startedDMY.month &&
                      currentDMY.year === startedDMY.year
                        ? day === startedDMY.day &&
                          startedDMY.month === currentDMY.month
                          ? "border-sky-200 bg-sky-50"
                          : ""
                        : ""
                    } ${
                      setting.started &&
                      currentDMY.month === startedDMY.month &&
                      currentDMY.year === startedDMY.year
                        ? day < startedDMY.day
                          ? "cursor-not-allowed opacity-40"
                          : ""
                        : ""
                    } :  }`}
                    disabled={
                      setting.started &&
                      currentDMY.month === startedDMY.month &&
                      currentDMY.year === startedDMY.year
                        ? day <= startedDMY.day || day >= finishedDMY
                        : false
                    }
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div type="button" className="cursor-pointer" onClick={nextMonth}>
              <DefArrowRight extraStyling="active:translate-x-1 transition duration-100" />
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}
