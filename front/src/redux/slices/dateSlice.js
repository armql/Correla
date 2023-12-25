import { createSlice } from "@reduxjs/toolkit";
const getCurrentDate = () => {
  const currentDate = new Date();
  return {
    day: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  };
};

const generateDays = (year, monthIndex) => {
  const totalDays = daysInMonth(year, monthIndex);
  const daysArray = [];
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i);
  }
  return daysArray;
};

const currentDMY = getCurrentDate();
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

const dateSlice = createSlice({
  name: "date",
  initialState: {
    currentDMY: currentDMY,
    defaultDate: getCurrentDate(),
    startedDMY: getCurrentDate(),
    finishedDMY: getCurrentDate(),
    setting: {
      started: false,
      finished: false,
    },
    daysOfMonth: generateDays(
      currentDMY.year,
      monthNames.indexOf(monthNames[currentDMY.month]),
    ),
  },
  reducers: {
    setCurrentDMY: (state, action) => {
      state.currentDMY = action.payload;
    },
    setStartedDMY: (state, action) => {
      state.startedDMY = action.payload;
    },
    setFinishedDMY: (state, action) => {
      state.finishedDMY = action.payload;
    },
    setSetting: (state, action) => {
      state.setting = action.payload;
    },
    setDaysOfMonth: (state, action) => {
      state.daysOfMonth = action.payload;
    },
  },
});

export const {
  setCurrentDMY,
  setStartedDMY,
  setFinishedDMY,
  setSetting,
  setDaysOfMonth,
} = dateSlice.actions;

export default dateSlice.reducer;
