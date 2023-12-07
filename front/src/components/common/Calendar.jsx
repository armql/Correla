import React, { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight } from "../../assets/svg/arrows/arrows";

const DateCell = ({ day, isSelected, isPassedDay, onClick }) => (
  <li
    className={`select-none bg-white px-6 py-3 font-light tracking-wide shadow-sm ${
      isSelected
        ? "border border-slate-300 bg-gray-50 font-bold"
        : isPassedDay
        ? "bg-gray-50 opacity-50 hover:cursor-not-allowed"
        : "border border-transparent hover:cursor-pointer hover:border-gray-200 hover:bg-gray-50"
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
    <div className="parent absolute left-0 right-0 border-t-2 bg-gray-100">
      <div onClick={toggleCalendar} className="absolute right-4 top-4 text-sm">
        <button className="text-gray-600 hover:text-black">Close</button>
      </div>
      <div className="mt-6 flex w-full flex-col p-4">
        <div className="mb-4 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h1 className="text-center text-5xl font-semibold">Calendar</h1>
          <div className="flex flex-col items-center justify-center bg-gray-100 p-4 lg:flex-row">
            <div className="px-4 py-2 text-lg">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex flex-row items-center justify-center gap-1">
              <div className="flex w-28 cursor-pointer items-center justify-between gap-2 rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm font-light shadow-sm hover:bg-gray-50">
                <div className="flex items-center justify-center">
                  <button onClick={() => changeDay(selectedDate.getDate() - 1)}>
                    <ArrowLeft />
                  </button>
                </div>
                {selectedDate.getDate()}th
                <div className="flex items-center justify-center">
                  <button onClick={() => changeDay(selectedDate.getDate() + 1)}>
                    <ArrowRight />
                  </button>
                </div>
              </div>

              <div className="flex w-40 cursor-pointer items-center justify-between gap-2 rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm font-light shadow-sm hover:bg-gray-50">
                <div className="flex items-center justify-center">
                  <button onClick={() => changeMonth(-1)}>
                    <ArrowLeft />
                  </button>
                </div>
                {monthNames[selectedDate.getMonth()]}
                <div className="flex items-center justify-center">
                  <button onClick={() => changeMonth(1)}>
                    <ArrowRight />
                  </button>
                </div>
              </div>

              <div className="flex w-32 cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm font-light shadow-sm hover:bg-gray-50">
                <div className="flex items-center justify-center ">
                  <button onClick={() => changeYear(-1)}>
                    <ArrowLeft />
                  </button>
                </div>
                {selectedDate.getFullYear()}
                <div className="flex items-center justify-center">
                  <button onClick={() => changeYear(1)}>
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {monthsData.map((monthData, index) => (
          <div key={index} className="search-center">
            <header className="p-2 px-1.5 text-3xl font-semibold tracking-tighter">
              {monthNames[index]}
            </header>
            <div className="text-center">
              <ul className="text-md grid grid-cols-4 border bg-gray-50">
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
