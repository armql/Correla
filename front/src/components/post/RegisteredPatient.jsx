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
  const [card, setCard] = useState(null);

  const toggleDoctor = (doctorName) => {
    setSelectedDoctor(doctorName === selectedDoctor ? null : doctorName);
  };

  // Function to determine the card component based on the value property
  const determineCardComponent = (value) => {
    switch (value) {
      case "implant":
        return ImplantCard;
      case "veneers":
        return VeneersCard;
      case "rootcanal":
        return RootCanalCard;
      case "fillingcrowns":
        return FillingCrownsCard;
      case "fillingtooth":
        return FillingToothCard;
      default:
        return null;
    }
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
      setCard(selectedProcedure.value);
    }
  }, [selectedProcedure]);

  const filteredDoctors = selectedProcedure
    ? getDoctorsForProcedure(selectedProcedure)
    : [];

  const CardComponent = determineCardComponent(card);

  return (
    <>
      <div className="relative flex h-full w-full select-none items-center justify-center border bg-white shadow-sm">
        <div className="absolute right-0 top-0 p-4">
          <button type="button" onClick={togglePatient}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`h-6 w-6 transition duration-500 hover:scale-110 hover:text-red-800 active:rotate-90`}
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
            <div className="mt-4 flex w-72 flex-col gap-2">
              <label htmlFor="searchName">Search Patient</label>
              <input
                type="search"
                name="searchName"
                id="searchName"
                placeholder="Search patient by name"
                className="w-full rounded-md border-2 px-4 py-1.5 shadow-sm ring-2 ring-transparent"
              />
            </div>
            <div className="mt-4 flex w-80 flex-col justify-center gap-2">
              <label htmlFor="procedure">Procedure</label>
              <InputDropdown
                options={procedureOptions}
                selected={selectedProcedure}
                onSelect={(option) => setSelectedProcedure(option)}
                data={procedureOptions}
              />
            </div>
          </div>
          <div className="flex h-full w-full flex-row gap-4">
            <div
              className={`mb-4 mt-4 flex h-full w-full items-center justify-center py-8 transition ${
                isCalendar ? "bg-gray-50" : "bg-white"
              }`}
            >
              <button
                type="button"
                onClick={toggleCalendar}
                className={`bg-gray-200 p-2 px-4 py-2 text-gray-500  transition ${
                  isCalendar
                    ? "hover:scale-90 active:scale-100 "
                    : "duration-100 hover:bg-gray-300"
                }`}
              >
                Choose a date
              </button>
            </div>
          </div>
          <div className="grid h-60 w-full grid-cols-3 items-center justify-center gap-2 overflow-y-auto rounded-md border-2 bg-white p-2">
            {filteredDoctors.map((doctor) => (
              <button
                key={doctor.doctorName}
                type="button"
                onClick={() => toggleDoctor(doctor.doctorName)}
                className={`text-select flex h-52 w-full cursor-pointer flex-col items-center justify-evenly rounded-sm shadow-sm transition duration-300 ${
                  doctor.doctorName === selectedDoctor
                    ? "border border-teal-200 bg-teal-100"
                    : "bg-teal-50 hover:bg-teal-100"
                }`}
              >
                <div className="h-24 w-24 rounded-full bg-teal-900"></div>
                <div className="text-teal-900">{doctor.doctorName}</div>
                <div className="flex">
                  {doctor.canPerform.slice(0, 2).map((performTitle, index) => (
                    <p
                      key={index}
                      className="truncate-text px-0.5 text-xs font-light text-teal-400"
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
          {demandsResources && CardComponent && (
            <div className="mt-6">
              <div className="">
                <CardComponent />
              </div>
            </div>
          )}
          <div className="mt-7 flex items-center justify-center">
            <button
              type="submit"
              className="w-80 rounded-md border px-6 py-2 hover:bg-gray-50"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      {isCalendar && (
        <div className={`absolute left-0 right-0`}>
          <Calendar toggleCalendar={toggleCalendar} />
        </div>
      )}
    </>
  );
}
