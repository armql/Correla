import React, { useEffect, useState } from "react";
import Create from "../common/Create";
import InputFilter from "../common/InputFilter";
import RoleDropdown from "../common/RoleDropdown";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CreateProcedure() {
  const { currentUser, userToken, setCurrentUser } = useStateContext();
  const [loadingUser, setLoadingUser] = useState(true);
  const [name, setName] = useState("");
  const [uniqueValue, setUniqueValue] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [demandResources, setDemandResources] = useState(false);
  const navigate = useNavigate();
  const [inputErrorList, setInputErrorList] = useState({});

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axiosClient
      .get("/me")
      .then(({ data }) => {
        setCurrentUser(data);
        setLoadingUser(false);
      })
      .catch(() => {
        setLoadingUser(false);
      });
  }, []);
  if (loadingUser) {
    return <div className="font-bold text-3xl">Loading</div>;
  }
  if (!userToken) {
    navigate("../123/login");
  } else {
    const createProcedure = (event) => {
      event.preventDefault();
      setSubmitting(true);
      const demandResourcesValue = demandResources ? 1 : 0;

      const formData = new FormData();
      formData.append("value", uniqueValue);
      formData.append("label", name);
      formData.append("description", description);
      formData.append("type", type);
      formData.append("demandResources", demandResourcesValue);
      formData.append(
        "canPerform",
        selectedRole ? selectedRole.canPerform : ""
      );
      formData.append("created_by", currentUser.id);
      console.log();
      axiosClient
        .post(`/createprocedure`, formData)
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: res.data.message,
          }).then(() => {
            navigate("../procedurelist");
          });
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              setInputErrorList(error.response.data.errors);
            }
            if (error.response.status === 500) {
              alert(error.response.data);
            }
          }
        })
        .finally(() => {
          setSubmitting(false);
        });
    };

    const toggleCanPerform = () => {
      setDemandResources(true);
    };

    const toggleCannotPerform = () => {
      setDemandResources(false);
    };

    return (
      <div className="w-screen h-screen mt-10 bg-gray-100">
        <div className="flex justify-center items-center w-full h-full">
          <div className="bg-white p-10 border-4 border-sky-200 rounded-md">
            <h1 className="text-2xl text-sky-400 text-center">
              Create Procedure
            </h1>
            <form
              onSubmit={(event) =>
                createProcedure(event, currentUser ? currentUser.id : "")
              }
              className="w-full h-full"
            >
              <div className="flex flex-col sm:flex-row mt-4 items-center gap-4 sm:gap-10 justify-start">
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
                    inputLimit={24}
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
                    inputLimit={24}
                    value={name}
                    onChange={(ev) => setName(ev.target.value)}
                  />

                  <div className="mt-4 sm:text-start text-center">
                    <div className="flex mt-2 group text-md justify-center items-center">
                      <button
                        onClick={toggleCanPerform}
                        type="button"
                        className={`py-1 px-4 transition duration-300 ${
                          demandResources
                            ? "bg-teal-100 text-teal-400"
                            : "bg-white"
                        } `}
                      >
                        In demand
                      </button>
                      <button
                        onClick={toggleCannotPerform}
                        type="button"
                        className={`py-1 px-4 transition duration-300 ${
                          demandResources
                            ? "bg-white"
                            : "bg-red-100 text-red-400"
                        } `}
                      >
                        No demand
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col gap-2 mb-8 mt-4">
                    <div className="flex flex-col gap-2 select-none">
                      <div className="flex flex-col gap-2 justify-center w-full">
                        <label htmlFor="canPerform">
                          Procedure performed by
                        </label>
                        <RoleDropdown
                          selected={selectedProcedure}
                          onSelect={(option) => setSelectedRole(option)} // Use setSelectedRole
                          onChange={(ev) => setSelectedRole(ev.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <label htmlFor="description">Procedure Description</label>
                      <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="3"
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                        className="border-2 rounded-md shadow-sm py-2 px-4"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-full h-full mt-4">
                    <button className="text-gray-400 bg-gray-100 rounded-lg hover:text-sky-400 group w-11 h-11">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
