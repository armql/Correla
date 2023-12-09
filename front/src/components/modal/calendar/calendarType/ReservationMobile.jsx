import React, { useState } from "react";
import Backdrop from "../../backdrop/Backdrop";
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

export default function ReservationMobile({ close }) {
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

  // const [selectedDMY, setSelectedDMY] = useState({
  //   day: setCurrentDMY(day),
  //   month: setCurrentDMY(month),
  //   year: setCurrentDMY(year),
  // });

  return (
    <Backdrop opacity={"0"}>
      <div className="z-10 flex h-full w-full select-none items-center justify-center">
        <div className="flex flex-col gap-2 border-2 border-gray-200 bg-white p-2">
          <div className="flex flex-row items-center justify-between">
            <div className="px-2 py-1.5">Work timespan table</div>
            <button
              type="button"
              onClick={close}
              className="rounded-sm bg-sky-100 px-4 py-2 text-sm text-sky-900 active:bg-sky-200"
            >
              Done
            </button>
          </div>
          <div className="grid h-24 grid-cols-1">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between px-2 py-1 text-[15px]">
                <div className="">Started in</div>
                <div className="text-sky-900">
                  {currentDMY.day}th {currentDMY.month} {currentDMY.year}
                </div>
              </div>
              <div className="flex h-full flex-row items-center justify-center gap-2 text-sm">
                <div className="w-10 rounded-sm border border-sky-200 p-1 text-center">
                  {currentDMY.day === defaultDate.day
                    ? currentDMY.day
                    : currentDMY.day}
                </div>
                <div className="rounded-sm border border-sky-200 p-1">
                  {currentDMY.month === defaultDate.month
                    ? currentDMY.month
                    : currentDMY.month}
                </div>
                <div className="rounded-sm border border-sky-200 p-1">
                  {currentDMY.year === defaultDate.year
                    ? "Year"
                    : currentDMY.year}
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[24vh] w-[24vw] flex-row items-center justify-center gap-4">
            <button
              type="button"
              className={`${
                currentDMY.month === defaultDate.month
                  ? "cursor-not-allowed opacity-25"
                  : "cursor-pointer"
              }`}
              onClick={prevMonth}
              disabled={currentDMY.month === defaultDate.month}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
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
                    className={`border border-gray-50 px-1 py-2 text-center ${
                      day === currentDMY.day
                        ? "bg-gray-100"
                        : "active:bg-gray-50"
                    } ${
                      day < defaultDate.day &&
                      currentDMY.month === defaultDate.month
                        ? "cursor-not-allowed opacity-40"
                        : ""
                    }`}
                    disabled={
                      day < defaultDate.day &&
                      currentDMY.month === defaultDate.month
                    }
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div type="button" className="cursor-pointer" onClick={nextMonth}>
              next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}
