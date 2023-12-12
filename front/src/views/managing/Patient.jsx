import React, { useState } from "react";
import working_bg from "../../assets/svg/working-form.svg";
import Calendar from "../../components/common/Calendar";
import ProcedureDropdown from "../../components/common/ProcedureDropdown";
import Input from "../../components/common/Input";
import NewPatient from "../../components/post/NewPatient";
import RegisteredPatient from "../../components/post/RegisteredPatient";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

export default function Patient() {
  const { currentUser, userToken } = useStateContext();
  const navigate = useNavigate();

  if (!userToken) {
    navigate("123/login");
  } else {
    const [isCalendar, setIsCalendar] = useState(false);
    const [isPatient, setIsPatient] = useState(false);
    const [isNewPatient, setIsNewPatient] = useState(false);
    const procedureOptions = [
      {
        type: "Oral Surgery",
        value: "implant",
        label: "Dental Implant",
        description: "Implanting a dental prosthesis to replace missing teeth.",
        canPerform: "Oral Surgeon",
        demandsResources: true,
      },
      {
        type: "Oral Surgery",
        value: "toothremoval",
        label: "Tooth Removal",
        description: "Extraction of a problematic tooth.",
        canPerform: "Oral Surgeon",
        demandsResources: true,
      },
      {
        type: "Oral Surgery",
        value: "orthognathicsurgery",
        label: "Orthognathic Surgery",
        description: "Surgical correction of jaw and facial deformities.",
        canPerform: "Oral Surgeon",
        demandsResources: true,
      },
      {
        type: "Oral Surgery",
        value: "gumsurgery",
        label: "Gum Surgery",
        description: "Treatment of gum disease and gum-related issues.",
        canPerform: "Oral Surgeon",
        demandsResources: true,
      },
      {
        type: "Oral Surgery",
        value: "extractions",
        label: "Tooth Extractions",
        description: "Removal of damaged or problematic teeth.",
        canPerform: "Oral Surgeon",
        demandsResources: true,
      },
      {
        type: "Preventive Dentistry",
        value: "fluoridetreatment",
        label: "Fluoride Treatment",
        description: "Application of fluoride to strengthen tooth enamel.",
        canPerform: "Dentist",
        demandsResources: false,
      },
      {
        type: "Orthodontics",
        value: "braces",
        label: "Orthodontic Braces",
        description: "Orthodontic treatment with braces for teeth alignment.",
        canPerform: "Orthodontist",
        demandsResources: false,
      },
      {
        type: "Orthodontics",
        value: "pediatricorthodontics",
        label: "Pediatric Orthodontics",
        description: "Orthodontic treatments specifically for children.",
        canPerform: "Pediatric Dentist",
        demandsResources: false,
      },
      {
        type: "Restorative Dentistry",
        value: "crowns",
        label: "Dental Crowns",
        description: "Restoration of damaged or weakened teeth with crowns.",
        canPerform: "Prosthodontist",
        demandsResources: true,
      },
      {
        type: "Restorative Dentistry",
        value: "fillings",
        label: "Dental Fillings",
        description: "Filling cavities with dental restorative materials.",
        canPerform: "Dentist",
        demandsResources: true,
      },
      {
        type: "Restorative Dentistry",
        value: "inlaysandonlays",
        label: "Dental Inlays and Onlays",
        description: "Restorative procedures for damaged or decayed teeth.",
        canPerform: "Prosthodontist",
        demandsResources: true,
      },
      {
        type: "Cosmetic Dentistry",
        value: "cosmeticsurgery",
        label: "Cosmetic Dentistry",
        description: "Procedures to enhance the appearance of teeth and smile.",
        canPerform: "Cosmetic Dentist",
        demandsResources: true,
      },
      {
        type: "Cosmetic Dentistry",
        value: "veneers",
        label: "Dental Veneers",
        description: "Thin shells to improve the appearance of teeth.",
        canPerform: "Cosmetic Dentist",
        demandsResources: true,
      },
      {
        type: "Cosmetic Dentistry",
        value: "teethwhitening",
        label: "Teeth Whitening",
        description: "Professional teeth whitening for a brighter smile.",
        canPerform: "Cosmetic Dentist",
        demandsResources: true,
      },
      {
        type: "Periodontics",
        value: "periodontics",
        label: "Periodontics",
        description: "Treatment of gum and supporting tissue diseases.",
        canPerform: "Periodontist",
        demandsResources: true,
      },
      {
        type: "Endodontics",
        value: "rootcanal",
        label: "Root Canal Therapy",
        description: "Treatment for infected or damaged tooth roots.",
        canPerform: "Endodontist",
        demandsResources: true,
      },
      {
        type: "Endodontics",
        value: "endodontics",
        label: "Endodontics",
        description: "Diagnosis and treatment of dental pulp issues.",
        canPerform: "Endodontist",
        demandsResources: true,
      },
      {
        type: "Prosthodontics",
        value: "dentures",
        label: "Dentures",
        description: "Replacement of missing teeth with removable dentures.",
        canPerform: "Prosthodontist",
        demandsResources: true,
      },
      {
        type: "Prosthodontics",
        value: "bridges",
        label: "Dental Bridges",
        description: "Fixed prosthetic devices to replace missing teeth.",
        canPerform: "Prosthodontist",
        demandsResources: true,
      },
      {
        type: "Pediatric Dentistry",
        value: "pediatricdentistry",
        label: "Pediatric Dentistry",
        description: "Dental care and treatments for children.",
        canPerform: "Pediatric Dentist",
        demandsResources: true,
      },
      {
        type: "Oral Medicine",
        value: "snoringtreatment",
        label: "Snoring Treatment",
        description: "Non-surgical treatments for snoring issues.",
        canPerform: "Oral Medicine Specialist",
        demandsResources: false,
      },
      {
        type: "Dental Hygiene",
        value: "cleaning",
        label: "Dental Cleaning",
        description: "Routine cleaning and plaque removal for oral hygiene.",
        canPerform: "Dental Hygienist",
        demandsResources: false,
      },
      {
        type: "Dental Sleep Medicine",
        value: "dentalsleepmedicine",
        label: "Dental Sleep Medicine",
        description:
          "Treatment of sleep-related breathing disorders, such as snoring and sleep apnea.",
        canPerform: "Dental Sleep Medicine Specialist",
        demandsResources: true,
      },
      {
        type: "Orthodontics",
        value: "orthodonticconsultation",
        label: "Orthodontic Consultation",
        description: "Consultation for braces or orthodontic treatment.",
        canPerform: "Orthodontist",
        demandsResources: false,
      },
      {
        type: "Prosthodontics",
        value: "prosthodontics",
        label: "Prosthodontics",
        description:
          "Restoration and replacement of teeth and oral structures.",
        canPerform: "Prosthodontist",
        demandsResources: true,
      },
      {
        type: "General Dentistry",
        value: "emergencycare",
        label: "Emergency Care",
        description: "Immediate dental care for emergencies.",
        canPerform: "Dentist",
        demandsResources: false,
      },
      {
        type: "General Dentistry",
        value: "dentalsealants",
        label: "Dental Sealants",
        description:
          "Protective coatings to prevent cavities on molars and premolars.",
        canPerform: "Dentist",
        demandsResources: false,
      },
      {
        type: "Orthodontics",
        value: "orthodonticbraces",
        label: "Orthodontic Braces",
        description: "Orthodontic treatment with braces for teeth alignment.",
        canPerform: "Orthodontist",
        demandsResources: false,
      },
      {
        type: "Orthodontics",
        value: "orthodonticconsultation",
        label: "Orthodontic Consultation",
        description: "Consultation for braces or orthodontic treatment.",
        canPerform: "Orthodontist",
        demandsResources: false,
      },
      {
        type: "Pediatric Dentistry",
        value: "pediatricdentistry",
        label: "Pediatric Dentistry",
        description: "Dental care and treatments for children.",
        canPerform: "Pediatric Dentist",
        demandsResources: true,
      },
      {
        type: "Restorative Dentistry",
        value: "fillings",
        label: "Dental Fillings",
        description: "Filling cavities with dental restorative materials.",
        canPerform: "Dentist",
        demandsResources: true,
      },
      {
        type: "General Dentistry",
        value: "dentalconsultation",
        label: "Dental Consultation",
        description: "General dental consultation.",
        canPerform: "Dentist",
        demandsResources: false,
      },
      {
        type: "General Dentistry",
        value: "dentureconsultation",
        label: "Denture Consultation",
        description: "Consultation for dentures.",
        canPerform: "Dentist",
        demandsResources: false,
      },
      {
        type: "General Dentistry",
        value: "oralhygieneinstruction",
        label: "Oral Hygiene Instruction",
        description: "Education on proper oral care and hygiene practices.",
        canPerform: "Dental Hygienist",
        demandsResources: false,
      },
      {
        type: "Prosthodontics",
        value: "inlaysandonlays",
        label: "Dental Inlays and Onlays",
        description: "Restorative procedures for damaged or decayed teeth.",
        canPerform: "Prosthodontist",
        demandsResources: true,
      },
      {
        type: "Oral Surgery",
        value: "dentalsedation",
        label: "Dental Sedation",
        description: "Sedation options for anxious or fearful patients.",
        canPerform: "Oral Surgeon",
        demandsResources: true,
      },
      {
        type: "General Dentistry",
        value: "bruxismtreatment",
        label: "Bruxism (Teeth Grinding) Treatment",
        description: "Treatment for teeth grinding and clenching issues.",
        canPerform: "Dentist",
        demandsResources: true,
      },
    ];

    const toggleCalendar = () => {
      setIsCalendar(!isCalendar);
    };

    const togglePatient = () => {
      setIsPatient(!isPatient);
    };

    const toggleNewPatient = () => {
      setIsNewPatient(!isNewPatient);
    };

    const [selectedProcedure, setSelectedProcedure] = useState(null);

    return (
      <div className="h-full w-full">
        <div className="flex h-[100vh] w-full flex-row items-center justify-center gap-4 rounded-sm bg-gray-50 p-4">
          <img
            src={working_bg}
            alt="working background"
            className={`h-0 w-0 lg:h-[100vh] lg:w-[20vw]`}
          />

          {isPatient === false && isNewPatient === false && (
            <div className="flex h-full w-full items-center justify-center border bg-white shadow-sm">
              <div className="flex h-full w-full flex-col items-center justify-center">
                <h1 className="text-xl">
                  Patient application form, has the patient been here before?
                </h1>
                <p className="text-start font-light text-gray-700">
                  If the patient has been here before pick registered, if not
                  pick new
                </p>
                <div className="flex flex-row items-center justify-center gap-4 py-4">
                  <button
                    onClick={togglePatient}
                    type="button"
                    className="rounded-md border-2 px-6 py-2 text-gray-600 transition hover:scale-90 hover:bg-gray-50 active:scale-100"
                  >
                    Registered
                  </button>
                  <button
                    onClick={toggleNewPatient}
                    type="button"
                    className="rounded-md border-2 border-sky-200 bg-sky-50 px-6 py-2 text-sky-600 transition hover:scale-90 hover:bg-sky-100 active:scale-100"
                  >
                    New
                  </button>
                </div>
              </div>
            </div>
          )}
          {isPatient && (
            <RegisteredPatient
              togglePatient={togglePatient}
              toggleCalendar={toggleCalendar}
              procedureOptions={procedureOptions}
              selectedProcedure={selectedProcedure}
              setSelectedProcedure={setSelectedProcedure}
            />
          )}

          {isNewPatient && (
            <NewPatient
              toggleNewPatient={toggleNewPatient}
              toggleCalendar={toggleCalendar}
              procedureOptions={procedureOptions}
              selectedProcedure={selectedProcedure}
              setSelectedProcedure={setSelectedProcedure}
            />
          )}
        </div>
      </div>
    );
  }
}
