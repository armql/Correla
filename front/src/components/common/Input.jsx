import React from "react";

export default function Input({
  htmlFor,
  labelName,
  type,
  name,
  id,
  placeholder,
  className,
}) {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <label htmlFor={htmlFor}>{labelName}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}
// "border-2 ring-2 transition ring-transparent shadow-sm rounded-md py-1.5 px-4"
