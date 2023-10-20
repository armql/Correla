import React from "react";
import PatHistoryRow from "./core/components/PatHistoryRow";

export default function PatientHistory() {
  const rows = [
    {
      performedProcedure: "Dental Checkup",
      scheduledFor: "2023-10-25",
      demandResources: "1",
      createdDate: "2023-10-20",
      performedBy: "Dr. Johnson",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Teeth Cleaning",
      scheduledFor: "2023-11-03",
      demandResources: "1",
      createdDate: "2023-10-21",
      performedBy: "Dr. Anderson",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Tooth Extraction",
      scheduledFor: "2023-10-27",
      demandResources: "1",
      createdDate: "2023-10-22",
      performedBy: "Dr. Patel",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Root Canal Therapy",
      scheduledFor: "2023-11-10",
      demandResources: "1",
      createdDate: "2023-10-23",
      performedBy: "Dr. Ramirez",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Dental Fillings",
      scheduledFor: "2023-10-30",
      demandResources: "1",
      createdDate: "2023-10-24",
      performedBy: "Dr. Johnson",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Braces Installation",
      scheduledFor: "2023-11-12",
      demandResources: "2",
      createdDate: "2023-10-25",
      performedBy: "Dr. Anderson",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Teeth Whitening",
      scheduledFor: "2023-11-20",
      demandResources: "1",
      createdDate: "2023-10-26",
      performedBy: "Dr. Patel",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Dental Implants",
      scheduledFor: "2023-11-01",
      demandResources: "4",
      createdDate: "2023-10-27",
      performedBy: "Dr. Ramirez",
      isStatus: "Postponed",
    },
    {
      performedProcedure: "Wisdom Tooth Removal",
      scheduledFor: "2023-11-14",
      demandResources: "2",
      createdDate: "2023-10-28",
      performedBy: "Dr. Johnson",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Gum Disease Treatment",
      scheduledFor: "2023-11-05",
      demandResources: "1",
      createdDate: "2023-10-29",
      performedBy: "Dr. Anderson",
      isStatus: "Successful",
    },
    {
      performedProcedure: "Orthodontic Consultation",
      scheduledFor: "2023-11-08",
      demandResources: "1",
      createdDate: "2023-10-30",
      performedBy: "Dr. Patel",
      isStatus: "Cancelled",
    },
  ];

  return (
    <div className="bg-gray-200 w-screen h-screen mt-10 p-4">
      <div className=" flex flex-col justify-center items-center bg-white rounded-md shadow-sm">
        <div className="flex flex-row justify-between w-full items-center p-4">
          <div className="text-4xl">Patient History</div>
          <div className="text-gray-600 tracking-wide text-xl">
            Russ Collins
          </div>
        </div>
        <div className="border-2 rounded-b-md w-full h-full">
          <div className="grid grid-cols-6 bg-gray-100 text-start">
            <div className="shadow-sm py-3.5 px-4">Patient Procedure</div>
            <div className="shadow-sm py-3.5 px-4">Scheduled for</div>
            <div className="shadow-sm py-3.5 px-4">Resources</div>
            <div className="shadow-sm py-3.5 px-4">Performed by</div>
            <div className="shadow-sm py-3.5 px-4">Created Date</div>
            <div className="shadow-sm py-3.5 px-4">Status</div>
          </div>
          {rows.map((row, index) => (
            <PatHistoryRow
              key={index}
              performedProcedure={row.performedProcedure}
              scheduledFor={row.scheduledFor}
              demandResources={row.demandResources}
              performedBy={row.performedBy}
              createdDate={row.createdDate}
              isStatus={row.isStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
