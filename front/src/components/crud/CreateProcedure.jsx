import React, { useState } from "react";
import Create from "../common/Create";
import InputFilter from "../common/InputFilter";

export default function CreateProcedure() {
  const [name, setName] = useState("");
  const [uniqueValue, setUniqueValue] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [valcanPerform, setValCanPerform] = useState("");

  const [canPerform, setCanPerform] = useState(false);
  const [whoPerforms, setWhoPerforms] = useState(false);

  const toggleWhoPerforms = () => {
    setWhoPerforms(!whoPerforms);
  };

  const toggleCanPerform = () => {
    setCanPerform(true);
  };

  const toggleCannotPerform = () => {
    setCanPerform(false);
  };

  return (
    <div className="w-screen h-screen mt-10 bg-gray-100">
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-white p-10 border-4 border-sky-200 rounded-md">
          <h1 className="text-2xl text-sky-400 text-center">
            Create Procedure
          </h1>
          <form method="">
            <div className="flex flex-row items-center gap-10 justify-center">
              <div className="flex flex-col">
                <InputFilter
                  htmlFor={"value"}
                  labelName={"Procedure unique value"}
                  type={"text"}
                  name={"uniqueValue"}
                  id={"uniqueValue"}
                  placeholder={"Type your procedure UV"}
                  inputLimit={12}
                  value={uniqueValue}
                  onChange={(ev) => setUniqueValue(ev.target.value)}
                />
                <InputFilter
                  htmlFor={"type"}
                  labelName={"Procedure type"}
                  type={"text"}
                  name={"type"}
                  id={"type"}
                  placeholder={"Type your procedure type"}
                  inputLimit={48}
                  value={type}
                  onChange={(ev) => setType(ev.target.value)}
                />

                <InputFilter
                  htmlFor={"procedure"}
                  labelName={"Procedure name"}
                  type={"text"}
                  name={"name"}
                  id={"name"}
                  placeholder={"Type your procedure name"}
                  inputLimit={16}
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <InputFilter
                  htmlFor={"description"}
                  labelName={"Procedure description"}
                  type={"text"}
                  name={"description"}
                  id={"description"}
                  placeholder={"Type your description"}
                  inputLimit={48}
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
                />
                <div className="relative">
                  <div>
                    <InputFilter
                      htmlFor={"canPerform"}
                      labelName={"Procedure performed by"}
                      type={"text"}
                      name={"canPerform"}
                      id={"canPerform"}
                      placeholder={"Who can perform the procedure?"}
                      inputLimit={12}
                      value={valcanPerform}
                      onChange={(ev) => setValCanPerform(ev.target.value)}
                      onClick={toggleWhoPerforms}
                    />
                  </div>
                  {whoPerforms === true && (
                    <div className="absolute left-0 right-0 top-0.5 rounded-md py-1.5 px-4 text-md text-gray-400 bg-white border">
                      <div>Assistant</div>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="demandResources">
                    Does it demand resources?
                  </label>
                  <div className="flex p-4 group text-md">
                    <button
                      onClick={toggleCanPerform}
                      type="button"
                      className={`py-1 px-4 transition duration-300 ${
                        canPerform ? "bg-teal-100 text-teal-400" : "bg-white"
                      } `}
                    >
                      In demand
                    </button>
                    <button
                      onClick={toggleCannotPerform}
                      type="button"
                      className={`py-1 px-4 transition duration-300 ${
                        canPerform ? "bg-white" : "bg-red-100 text-red-400"
                      } `}
                    >
                      No demand
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="text-gray-400 bg-gray-100 rounded-lg hover:text-sky-400 group w-9 h-9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="group-hover:-translate-x-0.5 group-hover:translate-y-0.5 rounded-lg bg-white w-full h-full transition duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
