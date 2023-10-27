import React from "react";
import ProcedureRow from "../core/ProcedureRow";

export default function ProcedureTable() {
  const rows = [
    {
      procedureName: "Dental Checkup",
      creationDate: "2023-10-20",
      createdBy: "Dr. Smith",
    },
    {
      procedureName: "Teeth Cleaning",
      creationDate: "2023-10-21",
      createdBy: "Dr. Johnson",
    },
    {
      procedureName: "Tooth Extraction",
      creationDate: "2023-10-22",
      createdBy: "Dr. Brown",
    },
    {
      procedureName: "Root Canal Therapy",
      creationDate: "2023-10-23",
      createdBy: "Dr. Davis",
    },
    {
      procedureName: "Dental Fillings",
      creationDate: "2023-10-24",
      createdBy: "Dr. Wilson",
    },
    {
      procedureName: "Braces Installation",
      creationDate: "2023-10-25",
      createdBy: "Dr. Martinez",
    },
    {
      procedureName: "Teeth Whitening",
      creationDate: "2023-10-26",
      createdBy: "Dr. Anderson",
    },
    {
      procedureName: "Dental Implants",
      creationDate: "2023-10-27",
      createdBy: "Dr. Taylor",
    },
    {
      procedureName: "Wisdom Tooth Removal",
      creationDate: "2023-10-28",
      createdBy: "Dr. Lewis",
    },
    {
      procedureName: "Gum Disease Treatment",
      creationDate: "2023-10-29",
      createdBy: "Dr. Clark",
    },
    {
      procedureName: "Orthodontic Consultation",
      creationDate: "2023-10-30",
      createdBy: "Dr. Turner",
    },
    // You can add more procedures as needed
  ];

  return (
    <div className="bg-white">
      <div className="grid grid-cols-5 text-center border-t-2 border-b-2">
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Procedure Name
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Creation Date
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Created by
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Edit Procedure
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Delete Procedure
        </div>
      </div>

      {rows.map((row, index) => (
        <ProcedureRow
          key={index}
          procedureName={row.procedureName}
          creationDate={row.creationDate}
          createdBy={row.createdBy}
          onEdit={() => handleEdit(row.id)}
          onDelete={() => handleDelete(row.id)}
        />
      ))}
    </div>
  );
}
