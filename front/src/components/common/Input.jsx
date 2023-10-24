import React from "react";

export default function Input({
  htmlFor,
  labelName,
  type,
  name,
  id,
  placeholder,
}) {
  return (
    <div className="flex gap-2 flex-col mt-4">
      <label htmlFor={htmlFor}>{labelName}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="border-2 ring-2 transition ring-transparent shadow-sm rounded-md py-1.5 px-4"
      />
    </div>
  );
}
