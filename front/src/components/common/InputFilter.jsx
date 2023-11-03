import React, { useState } from "react";

export default function InputFilter({
  htmlFor,
  labelName,
  type,
  name,
  id,
  placeholder,
  inputLimit,
  onChange,
  value,
}) {
  const [activa, setActiva] = useState(false);
  const [chars, setChars] = useState(0);

  const toggleActiva = () => {
    setActiva(!activa);
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    const limitedInput = inputText.slice(0, inputLimit);
    setChars(limitedInput.length);

    if (onChange) {
      onChange(e);
    }
  };

  // Calculate the height of the progress bar based on the character count
  const progressBarHeight = () => {
    const maxChars = inputLimit;
    const maxHeight = 7;
    const minHeight = 2;
    const calculatedHeight = (
      (chars / maxChars) * (maxHeight - minHeight) +
      minHeight
    ).toFixed(0);
    return `h-${calculatedHeight}`;
  };

  return (
    <div className="flex gap-2 flex-col mt-4">
      <label htmlFor={htmlFor}>{labelName}</label>
      <div className="relative">
        <input
          onFocus={toggleActiva}
          onBlur={toggleActiva}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="w-full border-2 ring-2 transition ring-transparent shadow-sm rounded-md py-1.5 px-4"
          onChange={handleInputChange}
          value={value}
        />
        <div className="absolute h-7 rounded-full rotate-180 right-1.5 top-1.5 w-2 bg-gray-100">
          <div
            className={`${
              activa || chars > 0 ? "bg-emerald-200 block" : "bg-red-400"
            } transition duration-1000 rounded-full ${progressBarHeight()} w-2 ${
              chars === inputLimit ? "bg-emerald-500" : ""
            } `}
          ></div>
        </div>
      </div>
    </div>
  );
}
