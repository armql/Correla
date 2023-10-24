import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ServiceCards() {
  const [cards, setCards] = useState(false);
  const toggleCards = () => {
    setCards(!cards);
  };

  return (
    <div
      className={`parent flex flex-col gap-1 px-12 py-5 transition duration-300 ${
        cards ? "bg-sky-200" : "bg-sky-100 active:bg-sky-200"
      }`}
    >
      <div className="w-full h-full">
        <button
          type="button"
          onClick={toggleCards}
          className="flex flex-row gap-1 items-center justify-between w-full"
        >
          <h1 className="text-center text-3xl font-semibold">More Details</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-8 h-8 duration-500 transition ${
              cards
                ? "rotate-180 hover:translate-y-1"
                : "rotate-0 hover:-translate-y-1"
            }`}
          >
            <path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {cards && (
        <div className="mt-3">
          <div className="w-full">
            <h1 className="text-lg">
              We are committed to providing comprehensive dental care to improve
              your oral health and enhance your smile. Our services include:
            </h1>
            <ul className="flex flex-col gap-2 mt-2 font-light">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="h-1 w-2 bg-sky-500 rounded-full"></div>
                Our clinic offers professional teeth whitening using the latest
                technology from
                <Link
                  to="#"
                  className="text-amber-700 hover:underline hover:text-amber-600"
                >
                  iSmile
                </Link>
                brand. You can achieve a brighter and more radiant smile with
                our advanced whitening techniques.
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="h-1 w-2 bg-sky-500 rounded-full"></div>
                specializes in safe and efficient wisdom teeth extraction. We
                ensure minimal discomfort and prioritize your family's oral
                health.
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="h-1 w-2 bg-sky-500 rounded-full"></div>
                If you're missing teeth, our dental implant services provide a
                permanent and natural-looking solution. Regain your smile and
                confidence with our implant treatments.
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="h-1 w-2 bg-sky-500 rounded-full"></div>
                Tooth Cleaning and Hygiene whilst maintaining good oral hygiene
                is crucial. Our professional cleanings and hygiene services help
                prevent dental issues and ensure your teeth and gums stay
                healthy.
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="h-1 w-2 bg-sky-500 rounded-full"></div>
                In General Dentistry we offer a wide range of general dental
                services, from routine check-ups to fillings and more. Our
                skilled dentists are here to address all your oral health needs.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// const [imageLoaded, setImageLoaded] = useState(false);
// const [showText, setShowText] = useState(false);

// const handleImageLoad = () => {
//   setImageLoaded(true);
// };

// useEffect(() => {
//   // Delay the text transition to avoid showing it before the image transition
//   if (imageLoaded) {
//     const timeout = setTimeout(() => {
//       setShowText(true);
//     }, 40000); // Adjust the delay time as needed
//     return () => clearTimeout(timeout);
//   }
// }, [imageLoaded]);

{
  /* {[
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
        ))} */
}
