import React, { useState } from "react";

export default function Questions({ questionTitle, questionAnswer }) {
  const [question, setQuestion] = useState(false);

  const toggleQuestion = () => {
    setQuestion(!question);
  };

  return (
    <div className="overflow-hidden">
      <button
        onClick={toggleQuestion}
        className={`flex h-36 w-full items-center justify-between border p-2 text-start text-lg font-light text-gray-800 transition duration-300 hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100 ${
          question ? "hidden" : "block"
        }`}
      >
        {questionTitle}
      </button>
      <button
        type="button"
        onClick={toggleQuestion}
        className={`h-36 overflow-y-auto bg-gray-50 p-3 text-lg  font-extralight tracking-tighter text-gray-700 ${
          question ? "block border transition duration-500" : "hidden"
        }`}
      >
        {questionAnswer}
      </button>
    </div>
  );
}
