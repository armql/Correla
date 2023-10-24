import React from "react";

export default function Button({ type, name, onClick }) {
  return (
    <div className="flex justify-center items-center mt-7">
      <button
        onClick={onClick}
        type={type}
        className="py-2 px-6 border rounded-md w-80 hover:bg-gray-50"
      >
        {name}
      </button>
    </div>
  );
}
