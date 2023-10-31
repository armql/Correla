import React from "react";
import Input from "./Input";

export default function Edit({
  editFor,
  firstInputHTMLF,
  firstInputLabel,
  firstInputType,
  firstInputID,
  firstInputName,
  firstInputPlaceholder,
  secondInputHTMLF,
  secondInputLabel,
  secondInputType,
  secondInputID,
  secondInputName,
  secondInputPlaceholder,
}) {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-white p-4">
          <h1 className="text-2xl text-center">Edit {editFor}</h1>
          <form action="">
            <div className="flex flex-col gap-4">
              <Input
                htmlFor={firstInputHTMLF}
                labelName={firstInputLabel}
                type={firstInputType}
                id={firstInputID}
                name={firstInputName}
                placeholder={firstInputPlaceholder}
              />
              <Input
                htmlFor={secondInputHTMLF}
                labelName={secondInputLabel}
                type={secondInputType}
                id={secondInputID}
                name={secondInputName}
                placeholder={secondInputPlaceholder}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
