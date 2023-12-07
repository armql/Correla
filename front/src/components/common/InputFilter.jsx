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
  extraStyling,
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

  const sanitizedValue = value ? value.toString() : "";
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
    <div className="mt-4 flex flex-col gap-2 text-sm">
      <label htmlFor={htmlFor}>{labelName}</label>
      <div className="relative">
        <input
          onFocus={toggleActiva}
          onBlur={toggleActiva}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={
            "w-full rounded-md border-2 px-4 py-2 shadow-sm ring-2 ring-transparent transition active:border-sky-200 active:ring-sky-200" +
            extraStyling
          }
          onChange={handleInputChange}
          value={sanitizedValue.slice(0, inputLimit)}
        />
        <div className="absolute right-1.5 top-1.5 h-7 w-2 rotate-180 rounded-full bg-gray-100">
          <div
            className={`${
              activa || chars > 0 ? "block bg-emerald-200" : "h-2 bg-red-500"
            } w-2 rounded-full transition duration-1000 ${progressBarHeight()} ${
              chars === inputLimit ? "bg-emerald-500" : ""
            } `}
          ></div>
        </div>
      </div>
    </div>
  );
}
