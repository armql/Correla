import React, { useState } from "react";
import Chart from "react-apexcharts";

const ActivityChart = () => {
  const [timePeriod, setTimePeriod] = useState("all");
  const [filter, setFilter] = useState(false);

  const generateClinicData = () => {
    const startDate = new Date("2022-01-01 09:00:00");
    const endDate = new Date("2023-12-31 17:00:00");
    const data = [];
    let patientCount = 0;

    for (let date = startDate; date <= endDate; ) {
      if (
        date.getDay() >= 1 &&
        date.getDay() <= 6 &&
        date.getHours() >= 9 &&
        date.getHours() < 12
      ) {
        const fluctuation = Math.random() > 0.5 ? 1 : -1;
        patientCount += fluctuation;

        patientCount = Math.max(0, patientCount);

        data.push({ x: date.toISOString(), y: patientCount });
      }

      if (date.getHours() === 12) {
        date.setHours(13);
      } else {
        date.setMinutes(date.getMinutes() + 15);
      }
    }

    return data;
  };
  const clinicData = generateClinicData();

  const filterDataByYear = (year) => {
    return clinicData.filter((item) => item.x.startsWith(year));
  };

  const filterDataAllTime = () => {
    return clinicData;
  };

  let filteredData;

  if (timePeriod === "all") {
    filteredData = filterDataAllTime();
  } else if (timePeriod === "year") {
    filteredData = filterDataByYear("2023");
  } else if (timePeriod === "month") {
    filteredData = clinicData.filter((item) => item.x.startsWith("2022-12"));
  }

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const series = [
    {
      name: "series1",
      data: filteredData,
    },
  ];

  const options = {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
  };

  return (
    <div className="">
      <div className="">
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
                <div className="py-1.5 px-4 text-gray-500 flex flex-col items-start gap-2">
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

        <Chart
          options={options}
          series={series}
          type="area"
          width="500"
          height="350"
        />
      </div>
    </div>
  );
};

export default ActivityChart;
