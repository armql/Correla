import React, { useState, useRef } from "react";
import male from "../assets/svg/male-avatar.svg";
import female from "../assets/svg/female-avatar.svg";

const crewMembers = [
  {
    name: "Robert Anthony",
    image: male,
    specialization: "Orthodontist, Oral Surgeon, Endodontist",
    experience: "30+ years of experience",
  },
  {
    name: "Bella Anthony",
    image: female,
    specialization: "Orthodontist, Cosmetic Dentist (lip filling)",
    experience: "5+ years of experience",
  },
  {
    name: "Lara Anthony",
    image: female,
    specialization: "Orthodontist, Oral Surgery Assistant",
    experience: "4 years of experience",
  },
  {
    name: "Sierra Ardana",
    image: female,
    specialization: "Dental Assistant, Receptionist",
    experience: "5+ years of experience",
  },
  {
    name: "Lisa Nelle",
    image: female,
    specialization: "Dental Assistant, Receptionist",
    experience: "2+ years of experience",
  },
];

const extendedCrewMembers = [...crewMembers, ...crewMembers, ...crewMembers];

export default function CrewInfo() {
  const carouselRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.clientX - startX;
    carouselRef.current.scrollLeft = scrollLeft - x;
  };

  return (
    <div className="parent bg-white">
      <div className="font-semibold text-4xl py-4 text-center">Our Crew</div>
      <div
        ref={carouselRef}
        className="items-center flex relative flex-col lg:flex-row py-6 gap-6 justify-center px-4 overflow-x-auto overflow-auto active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {extendedCrewMembers.map((member, index) => (
          <div
            key={index}
            className="select-none w-full flex flex-row lg:flex-col gap-6 items-center justify-evenly"
          >
            <img
              src={member.image}
              alt="member profile"
              className="w-64 h-64 pointer-events-none"
            />
            <div className="flex flex-row md:flex-col items-center justify-center text-center">
              <h1 className="text-2xl py-1.5">{member.name}</h1>
              <div className="text-gray-700">
                {member.specialization}
                <div className="bg-gray-200 text-sky-900 font-light mt-2 w-80">
                  {member.experience}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
