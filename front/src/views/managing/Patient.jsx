import React, { useState } from "react";
import working_bg from "../../assets/svg/working-form.svg";
import Calendar from "../../components/Calendar";
import ProcedureDropdown from "../../components/core/components/ProcedureDropdown";

export default function Patient() {
  const [isCalendar, setIsCalendar] = useState(false);
  const procedureOptions = [
    {
      value: "twtn",
      label: "Teeth Whitening",
      description: "Whiten your teeth.",
    },
    {
      value: "tcln",
      label: "Teeth Cleaning",
      description: "Clean and remove plaque from teeth.",
    },
    {
      value: "wstx",
      label: "Wisdom Teeth Extraction",
      description: "Remove troublesome wisdom teeth.",
    },
    {
      value: "impc",
      label: "Implant Consultation",
      description: "Consultation for dental implants.",
    },
    {
      value: "denx",
      label: "Dental Consultation",
      description: "General dental consultation.",
    },
    {
      value: "ortc",
      label: "Orthodontic Consultation",
      description: "Consultation for braces or orthodontic treatment.",
    },
    {
      value: "dentc",
      label: "Denture Consultation",
      description: "Consultation for dentures.",
    },
    {
      value: "emgc",
      label: "Emergency Care",
      description: "Immediate dental care for emergencies.",
    },
  ];

  const toggleCalendar = () => {
    setIsCalendar(!isCalendar);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Here, you can handle form submission logic or make an API call
    // based on the selectedProcedure and other form fields.
  };

  const [selectedProcedure, setSelectedProcedure] = useState(null);

  return (
    <div className="w-screen h-screen mt-10">
      <div className="bg-gray-50 p-4 gap-4 w-full h-full rounded-sm flex justify-center items-center flex-row">
        <img src={working_bg} alt="working background" />
        <div className="flex items-center justify-center shadow-sm border bg-white w-full h-full">
          <form action="">
            <h1 className="text-2xl font-semibold">Patient Application Form</h1>
            <div className="flex flex-row gap-4">
              <div className="flex gap-2 flex-col mt-4">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="border-2 ring-2 ring-transparent shadow-sm rounded-md py-1.5 px-4"
                />
              </div>
              <div className="flex gap-2 flex-col mt-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="border-2 ring-2 ring-transparent shadow-sm rounded-md py-1.5 px-4"
                />
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex gap-2 flex-col mt-4">
                <label htmlFor="firstName">Phone Number</label>
                <input
                  type="number"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your phone number"
                  className="border-2 ring-2 ring-transparent shadow-sm rounded-md py-1.5 px-4"
                />
              </div>

              <div className="flex flex-col gap-2 justify-center mt-4 w-full">
                <label htmlFor="procedure">Procedure</label>
                <ProcedureDropdown
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
              <div className="flex gap-2 flex-col mt-4">
                <label htmlFor="firstName">Will be performed by</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="border-2 ring-2 ring-transparent shadow-sm rounded-md py-1.5 px-4"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-col mt-4">
              <label htmlFor="demandResources">Demand Resources</label>
              <input
                type="number"
                name="demandResources"
                id="demandResources"
                className="border-2 ring-2 ring-transparent shadow-sm rounded-md py-1.5 px-4"
              />
            </div>
            <div className="flex justify-center items-center mt-7">
              <button
                type="submit"
                className="py-2 px-6 border rounded-md w-80 hover:bg-gray-50"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        {isCalendar && (
          <div className={`right-0 left-0 `}>
            <Calendar toggleCalendar={toggleCalendar} />
          </div>
        )}
      </div>
    </div>
  );
}
