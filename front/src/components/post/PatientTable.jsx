import React from "react";
import PatientRow from "../core/components/PatientRow";
import Pagination from "../common/Pagination";

export default function PatientTable() {
  const rows = [
    {
      patientName: "John Doe",
      procedureName: "Dental Checkup",
      creationDate: "2023-10-20",
      phoneNumber: "044138813",
      createdBy: "Dr. Smith",
    },
    {
      patientName: "Alice Johnson",
      procedureName: "Teeth Cleaning",
      creationDate: "2023-10-21",
      phoneNumber: "044138813",
      createdBy: "Dr. Johnson",
    },
    {
      patientName: "Robert Brown",
      procedureName: "Tooth Extraction",
      creationDate: "2023-10-22",
      phoneNumber: "044138813",
      createdBy: "Dr. Brown",
    },
    {
      patientName: "Emily Davis",
      procedureName: "Root Canal Therapy",
      creationDate: "2023-10-23",
      phoneNumber: "044138813",
      createdBy: "Dr. Davis",
    },
    {
      patientName: "Sarah Wilson",
      procedureName: "Dental Fillings",
      creationDate: "2023-10-24",
      phoneNumber: "044138813",
      createdBy: "Dr. Wilson",
    },
    {
      patientName: "Russ Collins",
      procedureName: "Braces Installation",
      creationDate: "2023-10-25",
      phoneNumber: "044138813",
      createdBy: "Dr. Martinez",
    },
    {
      patientName: "Olivia Anderson",
      procedureName: "Teeth Whitening",
      creationDate: "2023-10-26",
      phoneNumber: "044138813",
      createdBy: "Dr. Anderson",
    },
    {
      patientName: "David Taylor",
      procedureName: "Dental Implants",
      creationDate: "2023-10-27",
      phoneNumber: "044138813",
      createdBy: "Dr. Taylor",
    },
    {
      patientName: "Linda Lewis",
      procedureName: "Wisdom Tooth Removal",
      creationDate: "2023-10-28",
      phoneNumber: "044138813",
      createdBy: "Dr. Lewis",
    },
    {
      patientName: "James Clark",
      procedureName: "Gum Disease Treatment",
      creationDate: "2023-10-29",
      phoneNumber: "044138813",
      createdBy: "Dr. Clark",
    },
    {
      patientName: "Emma Turner",
      procedureName: "Orthodontic Consultation",
      creationDate: "2023-10-30",
      phoneNumber: "044138813",
      createdBy: "Dr. Turner",
    },
  ];

  return (
    <div className="bg-white">
      <div className="grid grid-cols-7 text-center border-t-2 border-b-2">
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Patient Name
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Patient History
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Creation Date
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Phone Number
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Created by
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Edit Patient Data
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide ">
          Delete Patient
        </div>
      </div>

      {rows.map((row, index) => (
        <PatientRow
          key={index}
          patientName={row.patientName}
          creationDate={row.creationDate}
          phoneNumber={row.phoneNumber}
          createdBy={row.createdBy}
          onEdit={() => handleEdit(row.id)}
          onDelete={() => handleDelete(row.id)}
        />
      ))}
      <Pagination />
    </div>
  );
}
