import React, { useEffect, useState } from "react";
import Input from "../common/Input";
import Calendar from "../common/Calendar";
import InputDropdown from "../common/InputDropdown";
import DentalCrownCard from "../card/DentalCrownCard";
import ImplantCard from "../card/ImplantCard";
import VeneersCard from "../card/VeneersCard";
import RootCanalCard from "../card/RootCanalCard";
import FillingCrownsCard from "../card/FillingCrownsCard";
import FillingToothCard from "../card/FillingToothCard";

export default function RegisteredPatient({
  togglePatient,
  procedureOptions,
  selectedProcedure,
  setSelectedProcedure,
}) {
  const [isCalendar, setIsCalendar] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [demandsResources, setDemandsResources] = useState(false);
  const toggleDoctor = (doctorName) => {
    setSelectedDoctor(doctorName === selectedDoctor ? null : doctorName);
  };

  const toggleCalendar = () => {
    setIsCalendar(!isCalendar);
  };

  const doctors = [
    {
      doctorName: "Dr. John Smith",
      canPerform: [
        "Oral Surgery",
        "Implant Surgery",
        "Orthodontist",
        "Root Canal Therapy",
      ],
    },
    {
      doctorName: "Dr. Emily White",
      canPerform: ["Orthodontist", "Pediatric Dentistry"],
    },
    {
      doctorName: "Dr. Sarah Johnson",
      canPerform: ["Cosmetic Dentist", "Teeth Whitening", "Dental Fillings"],
    },
    {
      doctorName: "Dr. Michael Brown",
      canPerform: ["Periodontist", "Gum Surgery", "Dental Implant"],
    },
    {
      doctorName: "Dr. Jennifer Lee",
      canPerform: ["Endodontist", "Root Canal Therapy", "Dental Fillings"],
    },
    {
      doctorName: "Dr. Laura Miller",
      canPerform: [
        "Prosthodontist",
        "Dental Crowns",
        "Dental Bridges",
        "Orthodontic Braces",
      ],
    },
    {
      doctorName: "Dr. Robert Davis",
      canPerform: ["Orthodontist", "Orthognathic Surgery"],
    },
    {
      doctorName: "Dr. Lisa Clark",
      canPerform: [
        "Oral Surgeon",
        "Tooth Extractions",
        "Dental Implant",
        "Orthognathic Surgery",
      ],
    },
    {
      doctorName: "Dr. David Anderson",
      canPerform: ["Orthodontist", "Pediatric Dentistry"],
    },
  ];

  const getDoctorsForProcedure = (selectedProcedure) => {
    return doctors.filter((doctor) => {
      return doctor.canPerform.includes(selectedProcedure.canPerform);
    });
  };

  useEffect(() => {
    if (selectedProcedure) {
      setDemandsResources(selectedProcedure.demandsResources);
    }
  }, [selectedProcedure]);

  const filteredDoctors = selectedProcedure
    ? getDoctorsForProcedure(selectedProcedure)
    : [];

  return (
    <>
      <div className="relative select-none flex items-center justify-center shadow-sm border bg-white w-full h-full">
        <div className="absolute top-0 right-0 p-4">
          <button type="button" onClick={togglePatient}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 active:rotate-90 hover:text-red-800 hover:scale-110 duration-500 transition`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form action="">
          <h1 className="text-2xl font-semibold">Patient Application Form</h1>
          <div className="flex flex-row gap-4">
            <div className="flex gap-2 flex-col mt-4 w-72">
              <label htmlFor="searchName">Search Patient</label>
              <input
                type="search"
                name="searchName"
                id="searchName"
                placeholder="Search patient by name"
                className="border-2 ring-2 ring-transparent w-full shadow-sm rounded-md py-1.5 px-4"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center mt-4 w-80">
              <label htmlFor="procedure">Procedure</label>
              <InputDropdown
                options={procedureOptions}
                selected={selectedProcedure}
                onSelect={(option) => setSelectedProcedure(option)}
                data={procedureOptions}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full h-full">
            <div
              className={`flex mb-4 transition w-full h-full mt-4 justify-center items-center py-8 ${
                isCalendar ? "bg-gray-50" : "bg-white"
              }`}
            >
              <button
                type="button"
                onClick={toggleCalendar}
                className={`p-2 text-gray-500 bg-gray-200 py-2 px-4  transition ${
                  isCalendar
                    ? "active:scale-100 hover:scale-90 "
                    : "hover:bg-gray-300 duration-100"
                }`}
              >
                Choose a date
              </button>
            </div>
          </div>
          <div className="border-2 overflow-y-auto rounded-md w-full h-60 grid grid-cols-3 gap-2 p-2 justify-center items-center bg-white">
            {filteredDoctors.map((doctor) => (
              <button
                key={doctor.doctorName}
                type="button"
                onClick={() => toggleDoctor(doctor.doctorName)}
                className={`flex text-select w-full h-52 rounded-sm transition duration-300 cursor-pointer justify-evenly items-center shadow-sm flex-col ${
                  doctor.doctorName === selectedDoctor
                    ? "bg-teal-100 border border-teal-200"
                    : "bg-teal-50 hover:bg-teal-100"
                }`}
              >
                <div className="w-24 h-24 rounded-full bg-teal-900"></div>
                <div className="text-teal-900">{doctor.doctorName}</div>
                <div className="flex">
                  {doctor.canPerform.slice(0, 2).map((performTitle, index) => (
                    <p
                      key={index}
                      className="px-0.5 font-light text-teal-400 text-xs truncate-text"
                    >
                      {performTitle.length > 12
                        ? `${performTitle.slice(0, 12)}...`
                        : performTitle}
                    </p>
                  ))}
                </div>
              </button>
            ))}
          </div>
          {demandsResources && (
            <div className="flex gap-2 flex-col mt-4">
              <label htmlFor="demandResources">Resources</label>
              <div className="flex flex-row gap-2 items-center py-3 px-4">
                <button
                  type="button"
                  className="rounded-md shadow-sm border border-sky-200 bg-sky-50 w-8 h-8 text-sky-600 transition hover:border-sky-300 hover:bg-sky-200 active:bg-sky-300"
                >
                  1
                </button>
                <button
                  type="button"
                  className="rounded-md shadow-sm border border-sky-200 bg-sky-50 w-8 h-8 text-sky-600 transition hover:border-sky-300 hover:bg-sky-200 active:bg-sky-300"
                >
                  2
                </button>
                <button
                  type="button"
                  className="rounded-md shadow-sm border border-sky-200 bg-sky-50 w-8 h-8 text-sky-600 transition hover:border-sky-300 hover:bg-sky-200 active:bg-sky-300"
                >
                  3
                </button>
                <button
                  type="button"
                  className="rounded-md shadow-sm border border-sky-200 bg-sky-50 w-8 h-8 text-sky-600 transition hover:border-sky-300 hover:bg-sky-200 active:bg-sky-300"
                >
                  4
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-center items-center mt-7">
            <button
              type="submit"
              className="py-2 px-6 border rounded-md w-80 hover:bg-gray-50"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      {isCalendar && (
        <div className={`right-0 left-0 `}>
          <Calendar toggleCalendar={toggleCalendar} />
        </div>
      )}
    </>
  );
}
