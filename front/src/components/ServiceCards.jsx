import React, { useState, useEffect } from "react";
import twtnCard from "../assets/images/twtn-card.jpeg";
import tclnCard from "../assets/images/tcln-card.jpeg";
import wstxCard from "../assets/images/wstx-card.jpeg";
import impcCard from "../assets/images/impc-card.jpeg";
import dentcCard from "../assets/images/dentc-card.jpeg";

export default function ServiceCards() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    // Delay the text transition to avoid showing it before the image transition
    if (imageLoaded) {
      const timeout = setTimeout(() => {
        setShowText(true);
      }, 40000); // Adjust the delay time as needed
      return () => clearTimeout(timeout);
    }
  }, [imageLoaded]);

  return (
    <div className="parent bg-sky-100 p-4">
      <h1 className="text-center text-3xl font-semibold">Our Services</h1>
      <div className="grid pt-2 lg:grid-cols-7 grid-cols-4 justify-center items-center gap-2">
        {[
          { image: twtnCard, title: "Teeth Whitening" },
          { image: tclnCard, title: "Teeth Cleaning" },
          { image: wstxCard, title: "Wisdom Teeth Extraction" },
          { image: impcCard, title: "Implant Consultation" },
          { image: dentcCard, title: "Dental Consultation" },
        ].map((service, index) => (
          <div className="relative group bg-transparent p-2" key={index}>
            <div
              className={`absolute left-0 z-10 right-0 p-2 translate-y-10 bg-transparent bottom-0 group-hover:bg-white group-hover:backdrop-blur-sm group-hover:text-black text-transparent group-hover:bg-opacity-10 group-hover:-translate-y-0 duration-300 transition ${
                imageLoaded ? "" : "rounded-full"
              }`}
            >
              <h1 className="border-b-2 border-transparent group-hover:border-sky-900">
                {service.title}
              </h1>
              <p
                className={`font-light text-sm transition-opacity ${
                  showText ? "opacity-100" : "opacity-0"
                }`}
              >
                We give the best treatment for certain teeth procedures such as
                orthodontic.
              </p>
            </div>
            <div className="overflow-hidden cursor-pointer group">
              <img
                src={service.image}
                alt=""
                className={`rounded-t-full group-hover:scale-105 transition duration-500 group-hover:shadow-md ${
                  imageLoaded ? "" : ""
                }`}
                onLoad={handleImageLoad}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
