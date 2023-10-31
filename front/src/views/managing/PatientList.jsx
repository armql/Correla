import React from "react";
import PatientTable from "../../components/post/PatientTable";

export default function PatientList() {
  return (
    <div className="w-full h-screen mt-10 bg-gray-200">
      <div className="bg-white p-4">
        <div className="flex justify-start items-center flex-row">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for patient"
            className="border-2 py-[7px] z-10 px-2 shadow-sm rounded-l-md bg-white font-light ring-2 ring-transparent"
          />
          <button className="bg-gray-200 border ring-2 ring-transparent text-black py-2 px-4 rounded-r-md hover:bg-sky-100 hover:ring-sky-100 hover:border-sky-100">
            Search
          </button>
        </div>
      </div>
      <PatientTable />
    </div>
  );
}
