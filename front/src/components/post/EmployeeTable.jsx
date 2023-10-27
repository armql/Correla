import React from "react";
import EmployeeRow from "../core/EmployeeRow";

export default function EmployeeTable() {
  const rows = [
    {
      employeeName: "John Doe",
      employeeRole: "Dental Assistant",
      creationDate: "2023-10-20",
      createdBy: "Administrator",
    },
    {
      employeeName: "Alice Johnson",
      employeeRole: "Dental Assistant",
      creationDate: "2023-10-21",
      createdBy: "Administrator",
    },
    {
      employeeName: "Robert Brown",
      employeeRole: "Dental Assistant",
      creationDate: "2023-10-22",
      createdBy: "Administrator",
    },
    {
      employeeName: "Emily Davis",
      employeeRole: "Dental Assistant",
      creationDate: "2023-10-23",
      createdBy: "Administrator",
    },
    {
      employeeName: "Sarah Wilson",
      employeeRole: "Dental Assistant",
      creationDate: "2023-10-24",
      createdBy: "Administrator",
    },
    {
      employeeName: "Russ Collins",
      employeeRole: "Orthodontist",
      creationDate: "2023-10-25",
      createdBy: "Administrator",
    },
    {
      employeeName: "Olivia Anderson",
      employeeRole: "Dental Assistant",
      creationDate: "2023-10-26",
      createdBy: "Administrator",
    },
    {
      employeeName: "David Taylor",
      employeeRole: "Oral Surgeon",
      creationDate: "2023-10-27",
      createdBy: "Administrator",
    },
    {
      employeeName: "Linda Lewis",
      employeeRole: "Oral Surgeon",
      creationDate: "2023-10-28",
      createdBy: "Administrator",
    },
    {
      employeeName: "James Clark",
      employeeRole: "Periodontist",
      creationDate: "2023-10-29",
      createdBy: "Administrator",
    },
    {
      employeeName: "Emma Turner",
      employeeRole: "Orthodontist",
      creationDate: "2023-10-30",
      createdBy: "Administrator",
    },
  ];

  return (
    <div className="bg-white">
      <div className="grid grid-cols-6 text-center border-t-2 border-b-2">
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Employee Name
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Employee Role
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Creation Date
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Created by
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Edit Patient Data
        </div>
        <div className="shadow-sm p-4 font-normal tracking-wide">
          Delete Patient
        </div>
      </div>

      {rows.map((row, index) => (
        <EmployeeRow
          key={index}
          employeeName={row.employeeName}
          employeeRole={row.employeeRole}
          creationDate={row.creationDate}
          createdBy={row.createdBy}
          onEdit={() => handleEdit(row.id)}
          onDelete={() => handleDelete(row.id)}
        />
      ))}
    </div>
  );
}
