import React, { useState } from "react";

export default function Questions({ questionTitle, questionAnswer }) {
  const [question, setQuestion] = useState(false);

  const toggleQuestion = () => {
    setQuestion(!question);
  };

  return (
    <div className="">
      <div className="">
        <button
          onClick={toggleQuestion}
          className="h-24 hover:bg-gray-50 hover:border-gray-300 flex items-center justify-between text-lg w-full font-light text-gray-800 text-start border p-2 active:bg-gray-100 transition duration-300"
        >
          {questionTitle}
        </button>
        <div
          className={`p-3 bg-gray-50 text-gray-700 text-md tracking-tighter font-extralight ${
            question ? "block border transition duration-500" : "hidden"
          }`}
        >
          {questionAnswer}
        </div>
      </div>
    </div>
  );
}
