import React, { useState } from "react";
import Chart from "react-apexcharts";
import data from "./data/procedureData";

const ProcedureChart = () => {
  const [timePeriod, setTimePeriod] = useState("all");
  const [filter, setFilter] = useState(false);
  const [selectedProcedures, setSelectedProcedures] = useState([
    "Implants",
    "Whitening",
    "Braces",
    "Checkups",
    "Cleaning",
    "Extractions",
    "Fillings",
    "Orthodontics",
  ]);

  let filteredData;
  if (timePeriod === "all") {
    filteredData = Object.values(data);
  } else if (timePeriod === "year") {
    filteredData = Object.values(data).filter((item, index) => index >= 11);
  } else if (timePeriod === "month") {
    filteredData = [Object.values(data)[11]];
  }

  const getFilteredSeriesData = (selectedNames) => {
    return selectedNames.map((name) => ({
      name,
      data: filteredData.map((item) => item[name.toLowerCase()]),
    }));
  };

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const generateXAxisCategories = (interval) => {
    const allCategories = Object.keys(data);
    const filteredCategories = allCategories.filter(
      (_, index) => index % interval === 1
    );
    return filteredCategories;
  };

  const xAxisCategories = generateXAxisCategories(1);

  const series = getFilteredSeriesData(selectedProcedures);

  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "100%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      categories: xAxisCategories,
    },
    yaxis: {
      title: {
        text: "Number of Procedures",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter(val) {
          return val + " procedures";
        },
      },
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="relative justify-center items-start flex flex-col px-4">
          <button
            onClick={toggleFilter}
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="text-center justify-between gap-1 items-center flex text-sm py-0.5 px-2 hover:bg-gray-50 rounded-sm shadow-sm border"
          >
            Filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-3 h-3 transition duration-500 ${
                filter ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            {filter && (
              <div className="absolute text-xs font-light bg-white border shadow-md top-8 left-4 rounded-sm z-10 ">
                <h1 className="border-b-2 p-2 font-normal">Filter by Time</h1>
                <div className="py-1.5 px-6 text-gray-500 text-start text-xs flex flex-col items-start gap-2">
                  <div
                    onClick={() => setTimePeriod("all")}
                    className="hover:text-black"
                  >
                    All Time
                  </div>
                  <div
                    onClick={() => setTimePeriod("year")}
                    className="hover:text-black"
                  >
                    This Year
                  </div>
                  <div
                    onClick={() => setTimePeriod("month")}
                    className="hover:text-black"
                  >
                    This Month
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
        width={500}
      />
    </div>
  );
};

export default ProcedureChart;
