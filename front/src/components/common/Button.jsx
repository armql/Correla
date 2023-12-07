import React from "react";

export default function Button({ type, name, onClick, className }) {
  return (
    <div className="mt-7 flex items-center justify-center">
      <button onClick={onClick} type={type} className={className}>
        {name}
      </button>
    </div>
  );
}
