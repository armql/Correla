import React from "react";

export default function EmergencyCard() {
  return (
    <div className="border w-full h-full select-none bg-gray-50">
      <div className="grid grid-cols-4 bg-gray-100 text-black items-center text-center font-bold text-xs">
        <h3 className="border-r border-b py-2 ">Patient Name</h3>
        <h3 className="border-r border-b py-2">Coming in on </h3>
        <h3 className="border-r border-b py-2">Emergency</h3>
        <h3 className="border-b py-2">Status</h3>
      </div>
      <div className="grid grid-cols-1 bg-white shadow-sm">
        <div className="grid grid-cols-4 text-center items-center border-b-2 text-xs">
          <h1 className="border-r w-full h-full text-center flex justify-center items-center">
            Username
          </h1>
          <h1 className="border-r w-full h-full text-center flex justify-center items-center text-gray-600">
            13:00PM Today
          </h1>
          <h1 className="border-r w-full h-full text-center flex justify-center items-center">
            Bleeding internally
          </h1>
          <button className="p-3 hover:bg-red-50 hover:text-red-900 active:bg-red-100">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
