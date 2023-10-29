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

export default function NewPatient({
  toggleNewPatient,
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
      <div className="relative flex items-center justify-center shadow-sm border bg-white w-full h-full">
        <div className="absolute top-0 right-0 p-4">
          <button type="button" onClick={toggleNewPatient}>
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
            <Input
              htmlFor={"firstName"}
              labelName={"First Name"}
              type={"text"}
              name={"firstName"}
              id={"firstName"}
              placeholder={"Enter your first name"}
            />
            <Input
              htmlFor={"lastName"}
              labelName={"Last Name"}
              type={"text"}
              name={"lastName"}
              id={"lastName"}
              placeholder={"Enter your last name"}
            />
          </div>
          <div className="flex flex-row gap-4">
            <Input
              htmlFor={"phoneNumber"}
              labelName={"Phone Number"}
              type={"number"}
              name={"phoneNumber"}
              id={"phoneNumber"}
              placeholder={"Enter your phone number"}
            />

            <div className="flex flex-col gap-2 justify-center mt-4 w-full">
              <label htmlFor="procedure">Procedure</label>
              <InputDropdown
                options={procedureOptions}
                selected={selectedProcedure}
                onSelect={(option) => setSelectedProcedure(option)}
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
          {demandsResources && CardComponent && (
            <div className="mt-6">
              <div className="">
                <CardComponent />
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
