import React, { useState, useMemo } from "react";

const DateCell = ({ day, isSelected, isPassedDay, onClick }) => (
  <li
    className={`py-3 bg-white tracking-wide font-light px-6 shadow-sm select-none ${
      isSelected
        ? "bg-gray-50 font-bold border border-slate-300"
        : isPassedDay
        ? "opacity-50 bg-gray-50 hover:cursor-not-allowed"
        : "hover:bg-gray-50 hover:cursor-pointer border border-transparent hover:border-gray-200"
    } `}
    onClick={onClick}
  >
    {day}
  </li>
);

const Calendar = ({ toggleCalendar }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSelectedDay, setIsSelectedDay] = useState(selectedDate.getDate());
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

  const monthsData = useMemo(() => {
    const data = [];
    for (let i = 0; i < 12; i++) {
      const daysInMonth = new Array(32 - new Date(year, i, 32).getDate())
        .fill(null)
        .map((_, index) => index + 1);

      data.push(daysInMonth);
    }
    return data;
  }, [year]);

  const changeDay = (day) => {
    if (day >= 1 && day <= monthsData[month].length) {
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

  const setDayAndMonth = (day, newMonth) => {
    if (day >= 1 && day <= monthsData[newMonth].length) {
      setSelectedDate(new Date(year, newMonth, day));
      setIsSelectedDay(day);
    }
  };

  return (
    <div className="absolute right-0 left-0 parent bg-gray-100 border-t-2">
      <div onClick={toggleCalendar} className="absolute right-4 top-4 text-sm">
        <button className="hover:text-black text-gray-600">Close</button>
      </div>
      <div className="flex w-full mt-6 flex-col p-4">
        <div className="flex lg:flex-row flex-col items-center gap-6 justify-between mb-4">
          <h1 className="text-5xl font-semibold text-center">Calendar</h1>
          <div className="flex lg:flex-row flex-col justify-center bg-gray-100 p-4 items-center">
            <div className="text-lg py-2 px-4">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <div className="flex gap-2 bg-white border border-gray-300 w-28 items-center justify-between font-light text-sm py-1.5 px-4 hover:bg-gray-50 cursor-pointer rounded-md shadow-sm">
                <div className="flex justify-center items-center">
                  <button onClick={() => changeDay(selectedDate.getDate() - 1)}>
                    <svg
                      xmlns="http://w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:-translate-x-1 duration-300 active:-translate-x-2 hover:scale-105 active:scale-110"
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
                      className="w-4 h-4 transition hover:translate-x-1 duration-300 active:translate-x-2 hover:scale-105 active:scale-110"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex gap-2 bg-white border border-gray-300 font-light w-40 items-center justify-between text-sm py-1.5 px-4 hover:bg-gray-50 cursor-pointer rounded-md shadow-sm">
                <div className="flex justify-center items-center">
                  <button onClick={() => changeMonth(-1)}>
                    <svg
                      xmlns="http://w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:-translate-x-1 duration-300 active:-translate-x-2 hover:scale-105 active:scale-110"
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
                      className="w-4 h-4 transition hover:translate-x-1 duration-300 active:translate-x-2 hover:scale-105 active:scale-110"
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

              <div className="flex gap-2 bg-white border border-gray-300 w-32 items-center justify-center font-light text-sm py-1.5 px-4 hover:bg-gray-50 cursor-pointer rounded-md shadow-sm">
                <div className="flex justify-center items-center ">
                  <button onClick={() => changeYear(-1)}>
                    <svg
                      xmlns="http://w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 transition hover:-translate-x-1 duration-300 active:-translate-x-2 hover:scale-105 active:scale-110"
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
                      className="w-4 h-4 transition hover:translate-x-1 duration-300 active:translate-x-2 hover:scale-105 active:scale-110"
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
        {monthsData.map((monthData, index) => (
          <div key={index} className="search-center">
            <header className="px-1.5 tracking-tighter text-3xl p-2 font-semibold">
              {monthNames[index]}
            </header>
            <div className="text-center">
              <ul className="grid grid-cols-4 text-md border bg-gray-50">
                {monthData.map((day) => {
                  const isPassedDay =
                    year < currentDate.getFullYear() ||
                    (year === currentDate.getFullYear() &&
                      index < currentDate.getMonth()) ||
                    (year === currentDate.getFullYear() &&
                      index === currentDate.getMonth() &&
                      day < currentDay);

                  return (
                    <DateCell
                      key={day}
                      day={day}
                      isSelected={
                        index === selectedDate.getMonth() &&
                        day === isSelectedDay
                      }
                      isPassedDay={isPassedDay}
                      onClick={() => {
                        if (
                          isPassedDay ||
                          (year === selectedDate.getFullYear() &&
                            index === selectedDate.getMonth() &&
                            day < currentDay)
                        ) {
                          return;
                        }

                        setDayAndMonth(day, index);
                      }}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
