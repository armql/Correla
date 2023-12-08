import React from "react";

export default function Backdrop({ children, opacity }) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-0 bg-black ${
        opacity === "0" ? "bg-opacity-0" : "bg-opacity-20"
      }`}
    >
      {children}
    </div>
  );
}
