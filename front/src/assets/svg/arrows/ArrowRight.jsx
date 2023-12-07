import React, { Fragment } from "react";

export default function ArrowRight() {
  return (
    <Fragment>
      <svg
        xmlns="http://w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4 transition duration-300 hover:translate-x-1 hover:scale-105 active:translate-x-2 active:scale-110"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </Fragment>
  );
}
