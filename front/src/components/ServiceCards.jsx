import React from "react";
import twtnCard from "../assets/images/twtn-card.jpeg";
import tclnCard from "../assets/images/tcln-card.jpeg";
import wstxCard from "../assets/images/wstx-card.jpeg";
import impcCard from "../assets/images/impc-card.jpeg";
import dentcCard from "../assets/images/dentc-card.jpeg";

export default function ServiceCards() {
  return (
    <div className="grid pt-2 grid-cols-4 justify-center items-center gap-2">
      <div className="relative group bg-white p-2 cursor-pointer">
        <div className="absolute left-0 z-10 right-0 p-2 translate-y-10 bg-transparent bottom-0 hover:bg-white group-hover:backdrop-blur-sm group-hover:text-black text-transparent group-hover:bg-opacity-10 group-hover:-translate-y-0 duration-300 transition">
          <h1 className="border-b-2 border-transparent group-hover:border-sky-900">
            Teeth Whitening
          </h1>
          <p className="font-light text-sm">
            We give best treatment for certain teeth procedures such as
            orthodontic
          </p>
        </div>
        <div className="">
          <img
            src={twtnCard}
            alt=""
            className="group-hover:scale-110 transition duration-500 group-hover:shadow-md"
          />
        </div>
      </div>
      <div className="relative group bg-white p-2 cursor-pointer">
        <div className="absolute left-0 z-10 right-0 p-2 translate-y-10 bg-transparent bottom-0 hover:bg-white group-hover:backdrop-blur-sm group-hover:text-black text-transparent group-hover:bg-opacity-10 group-hover:-translate-y-0 duration-300 transition">
          <h1 className="border-b-2 border-transparent group-hover:border-sky-900">
            Teeth Cleaning
          </h1>
          <p className="font-light text-sm">
            We give best treatment for certain teeth procedures such as
            orthodontic
          </p>
        </div>
        <div className="">
          <img
            src={tclnCard}
            alt=""
            className="group-hover:scale-110 transition duration-500 group-hover:shadow-md"
          />
        </div>
      </div>
      <div className="relative group bg-white p-2 cursor-pointer">
        <div className="absolute left-0 z-10 right-0 p-2 translate-y-10 bg-transparent bottom-0 hover:bg-white group-hover:backdrop-blur-sm group-hover:text-black text-transparent group-hover:bg-opacity-10 group-hover:-translate-y-0 duration-300 transition">
          <h1 className="border-b-2 border-transparent group-hover:border-sky-900">
            Wisdom Teeth Extraction
          </h1>
          <p className="font-light text-sm">
            We give best treatment for certain teeth procedures such as
            orthodontic
          </p>
        </div>
        <div className="">
          <img
            src={wstxCard}
            alt=""
            className="group-hover:scale-110 transition duration-500 group-hover:shadow-md"
          />
        </div>
      </div>
      <div className="relative group bg-white p-2 cursor-pointer">
        <div className="absolute left-0 z-10 right-0 p-2 translate-y-10 bg-transparent bottom-0 hover:bg-white group-hover:backdrop-blur-sm group-hover:text-black text-transparent group-hover:bg-opacity-10 group-hover:-translate-y-0 duration-300 transition">
          <h1 className="border-b-2 border-transparent group-hover:border-sky-900">
            Implant Consultation
          </h1>
          <p className="font-light text-sm">
            We give best treatment for certain teeth procedures such as
            orthodontic
          </p>
        </div>
        <div className="">
          <img
            src={impcCard}
            alt=""
            className="group-hover:scale-110 transition duration-500 group-hover:shadow-md"
          />
        </div>
      </div>
      <div className="relative group bg-white p-2 cursor-pointer">
        <div className="absolute left-0 z-10 right-0 p-2 translate-y-10 bg-transparent bottom-0 hover:bg-white group-hover:backdrop-blur-sm group-hover:text-black text-transparent group-hover:bg-opacity-10 group-hover:-translate-y-0 duration-300 transition">
          <h1 className="border-b-2 border-transparent group-hover:border-sky-900">
            Dental Consultation
          </h1>
          <p className="font-light text-sm">
            We give best treatment for certain teeth procedures such as
            orthodontic
          </p>
        </div>
        <div className="">
          <img
            src={dentcCard}
            alt=""
            className="group-hover:scale-110 transition duration-500 group-hover:shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
