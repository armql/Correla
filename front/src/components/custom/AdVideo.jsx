import React, { useState, useEffect } from "react";
import video from "../../assets/videos/ad-video.mp4";
import ServiceCards from "../card/ServiceCards";

export default function AdVideo() {
  const serviceItems = [
    {
      title: "Dental Checkups",
      description: "Regular checkups for healthy smiles.",
    },
    {
      title: "Teeth Whitening",
      description: "Brighten your smile with our whitening services.",
    },
    {
      title: "Orthodontics",
      description: "Get your teeth in proper alignment.",
    },
    {
      title: "Dental Implants",
      description: "Replace missing teeth with durable implants.",
    },
    {
      title: "Emergency Dentistry",
      description: "We're here when you need urgent dental care.",
    },
    {
      title: "Oral Surgery",
      description: "Expert oral surgery procedures for your needs.",
    },
    {
      title: "Children's Dentistry",
      description: "Specialized care for your little ones.",
    },
    {
      title: "Gum Disease Treatment",
      description: "Comprehensive treatment for gum issues.",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with cosmetic procedures.",
    },
    {
      title: "Root Canal Therapy",
      description: "Effective root canal treatments for pain relief.",
    },
    {
      title: "Dentures and Partials",
      description: "Customized solutions for missing teeth.",
    },
    {
      title: "TMJ Disorder Treatment",
      description: "Relief from TMJ-related pain and discomfort.",
    },
    {
      title: "Sedation Dentistry",
      description: "Relax and be comfortable during your visit.",
    },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [visibleServiceIndex, setVisibleServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) =>
        prevIndex === serviceItems.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [serviceItems]);

  useEffect(() => {
    const changeService = setTimeout(() => {
      setVisibleServiceIndex(currentServiceIndex);
    }, 300);

    return () => {
      clearTimeout(changeService);
    };
  }, [currentServiceIndex]);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <video
          src={video}
          className="h-full w-full object-cover"
          loop
          autoPlay
          muted
        ></video>
      </div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-30 text-black backdrop-blur-md">
        <div className="absolute left-0 right-0 top-0 bg-white p-6 text-center text-7xl font-bold">
          Our Services
        </div>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-around gap-4 p-4 text-center">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1
              className={`text-6xl font-semibold tracking-tighter text-white duration-300 ${
                visibleServiceIndex === currentServiceIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {serviceItems[visibleServiceIndex].title}
            </h1>
            <p
              className={`text-xl tracking-wider text-sky-400 duration-300 ${
                visibleServiceIndex === currentServiceIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {serviceItems[visibleServiceIndex].description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <ServiceCards />
        </div>
      </div>
    </div>
  );
}
