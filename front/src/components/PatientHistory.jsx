import React from "react";

export default function PatientHistory() {
  return (
    <div className="bg-gray-200 w-screen h-screen mt-10 p-4">
      <div className=" flex flex-col justify-center items-center bg-white rounded-md shadow-sm">
        <div className="text-4xl p-4">Patient History</div>
        <div className="border-2 rounded-b-md w-full h-full">
          <div className="grid grid-cols-5 bg-gray-100 text-start">
            <div className="shadow-sm py-3.5 px-4">Patient Procedure</div>
            <div className="shadow-sm py-3.5 px-4">Scheduled for</div>
            <div className="shadow-sm py-3.5 px-4">Resources</div>
            <div className="shadow-sm py-3.5 px-4">Created Date</div>
            <div className="shadow-sm py-3.5 px-4">Status</div>
          </div>
          <div className="grid grid-cols-5 text-start font-light text-gray-700">
            <div className="shadow-sm py-3 px-5">Implants</div>
            <div className="shadow-sm py-3 px-5">12</div>
            <div className="shadow-sm py-3 px-5">12 October 2023</div>
            <div className="shadow-sm py-3 px-5">1 October 2023</div>
            <div className="shadow-sm py-3 px-5">Success</div>
          </div>
        </div>
      </div>
    </div>
  );
}
