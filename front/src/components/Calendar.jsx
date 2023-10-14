import React, { useState } from "react";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 9, 14)); // Initial date is October 14th, 2023
  const [isSelectedDay, setIsSelectedDay] = useState(selectedDate.getDate()); // Sync the selected day with the initial date
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  const currentDay = new Date().getDate();
  const currentDate = new Date();

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

  const getDaysInMonth = (year, month) => {
    return new Array(32 - new Date(year, month, 32).getDate())
      .fill(null)
      .map((_, index) => index + 1);
  };

  const changeDay = (day) => {
    if (day <= getDaysInMonth(year, month).length) {
      setSelectedDate(new Date(year, month, day));
      setIsSelectedDay(day);
    } else {
      const newDate = new Date(selectedDate);
      newDate.setMonth(selectedDate.getMonth() + 1);
      setSelectedDate(newDate);
      setIsSelectedDay(1);
    }
  };

  const changeMonth = (increment) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + increment);
    setSelectedDate(newDate);
    setIsSelectedDay(newDate.getDate());
  };

  const changeYear = (increment) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(selectedDate.getFullYear() + increment);
    setSelectedDate(newDate);
    setIsSelectedDay(newDate.getDate());
  };

  const setDayAndMonth = (day, month) => {
    setSelectedDate(new Date(year, month, day));
    setIsSelectedDay(day);
  };

  return (
    <div className="parent bg-white">
      <div className="flex w-full border-t-2 mt-6 flex-col p-4">
        <div className="flex flex-row justify-between mb-4">
          <h1 className="text-5xl font-semibold text-center">Calendar</h1>
          <div className="flex justify-center bg-gray-100 p-4 items-center">
            <div className="text-lg py-2 px-4">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <div className="flex gap-2 bg-white border border-gray-300 font-light text-sm py-1.5 px-4 hover:bg-gray-50 cursor-pointer rounded-md shadow-sm">
                <div className="flex justify-center items-center">
                  <button onClick={() => changeDay(selectedDate.getDate() - 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:-translate-x-1 duration-500 active:-translate-x-3 hover:scale-110 active:scale-150"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                {selectedDate.getDate()}th
                <div className="flex justify-center items-center">
                  <button onClick={() => changeDay(selectedDate.getDate() + 1)}>
                    <svg
                      xmlns="http://w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:translate-x-1 duration-500 active:translate-x-3 hover:scale-110 active:scale-150"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex gap-2 bg-white border border-gray-300 font-light text-sm py-1.5 px-4 hover:bg-gray-50 cursor-pointer rounded-md shadow-sm">
                <div className="flex justify-center items-center">
                  <button onClick={() => changeMonth(-1)}>
                    <svg
                      xmlns="http://w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:-translate-x-1 duration-500 active:-translate-x-3 hover:scale-110 active:scale-150"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                {monthNames[selectedDate.getMonth()]}
                <div className="flex justify-center items-center">
                  <button onClick={() => changeMonth(1)}>
                    <svg
                      xmlns="http://w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:translate-x-1 duration-500 active:translate-x-3 hover:scale-110 active:scale-150"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex gap-2 bg-white border border-gray-300 font-light text-sm py-1.5 px-4 hover:bg-gray-50 cursor-pointer rounded-md shadow-sm">
                <div className="flex justify-center items-center">
                  <button onClick={() => changeYear(-1)}>
                    <svg
                      xmlns="http://w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:-translate-x-1 duration-500 active:-translate-x-3 hover:scale-110 active:scale-150"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                </div>
                {selectedDate.getFullYear()}
                <div className="flex justify-center items-center">
                  <button onClick={() => changeYear(1)}>
                    <svg
                      xmlns="http://w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:translate-x-1 duration-500 active:translate-x-3 hover:scale-110 active:scale-150"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-6">
        {monthNames.map((month, index) => (
          <div key={index} className="search-center">
            <header className="px-1.5 tracking-tighter text-3xl p-2 font-semibold">
              {month}
            </header>
            <div className="text-center">
              <ul className="grid grid-cols-4 text-md border">
                {getDaysInMonth(year, index).map((day) => {
                  const isPassedDay =
                    year < currentDate.getFullYear() ||
                    (year === currentDate.getFullYear() &&
                      index < currentDate.getMonth()) ||
                    (year === currentDate.getFullYear() &&
                      index === currentDate.getMonth() &&
                      day < currentDay);

                  return (
                    <li
                      key={day}
                      className={`py-3 tracking-wide font-light px-6 hover:bg-gray-50 ${
                        index === selectedDate.getMonth() &&
                        day === isSelectedDay
                          ? "bg-gray-200 border border-gray-200"
                          : isPassedDay
                          ? "bg-opacity-20"
                          : ""
                      } border border-transparent rounded-sm shadow-sm hover:border-gray-200 hover:cursor-pointer`}
                      onClick={() => {
                        if (
                          isPassedDay ||
                          (year === selectedDate.getFullYear() &&
                            index === selectedDate.getMonth() &&
                            day < currentDay)
                        ) {
                          // Don't allow navigation to the current month or earlier
                          return;
                        }

                        setDayAndMonth(day, index); // Set both day and month
                      }}
                    >
                      {day}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
