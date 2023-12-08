import React, { useEffect, useState } from "react";
import InputFilter from "../common/InputFilter";
import RoleDropdown from "../common/RoleDropdown";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditProcedure() {
  const { currentUser, userToken, setCurrentUser } = useStateContext();
  const [loadingUser, setLoadingUser] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    label: "",
    value: "",
    type: "",
    description: "",
    selectedRole: null,
    demandResources: false,
  });
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

  if (!userToken) {
    navigate("../123/login");
  } else {
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setInputData({
        ...inputData,
        [name]: value,
      });
    };

    const toggleCanPerform = () => {
      setInputData({ ...inputData, demandResources: true });
    };

    const toggleCannotPerform = () => {
      setInputData({ ...inputData, demandResources: false });
    };

    useEffect(() => {
      axiosClient
        .get(`procedure/${id}`)
        .then((res) => {
          const {
            label,
            value,
            type,
            description,
            demandResources,
            canPerform,
          } = res.data.procedure;

          setInputData({
            label,
            value,
            type,
            description,
            selectedRole: { canPerform },
            demandResources: demandResources === 1,
          });
          setLoadingUser(false);
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
            if (error.response.status === 500) {
              alert(error.response.data);
            }
          }
        });
    }, [id]);

    const editProcedure = (event) => {
      event.preventDefault();
      setSubmitting(true);
      const demandResourcesValue = inputData.demandResources ? 1 : 0;

      const formData = {
        value: inputData.value,
        label: inputData.label,
        description: inputData.description,
        type: inputData.type,
        demandResources: demandResourcesValue,
        canPerform: inputData.selectedRole
          ? inputData.selectedRole.canPerform
          : "",
        created_by: currentUser.id,
      };

      axiosClient
        .put(`procedure/${id}/edit`, formData)
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: res.data.message,
          }).then(() => {
            navigate("../procedureslist");
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

    if (loadingUser) {
      return <div className="text-3xl font-bold">Loading</div>;
    }

    return (
      <div className="h-screen w-full bg-gray-100">
        <div className="flex h-full w-full items-center justify-center">
          <div className="rounded-md border-4 border-sky-200 bg-white p-10">
            <h1 className="text-center text-2xl text-sky-400">
              Edit Procedure
            </h1>
            <form
              onSubmit={(event) =>
                editProcedure(event, currentUser ? currentUser.id : "")
              }
              className="h-full w-full"
            >
              <div className="mt-4 flex flex-col items-center justify-start gap-4 sm:flex-row sm:gap-10">
                <div className="flex flex-col">
                  <InputFilter
                    htmlFor={"value"}
                    labelName={"Procedure unique value"}
                    type={"text"}
                    name={"value"}
                    id={"value"}
                    placeholder={"Type your procedure UV"}
                    inputLimit={12}
                    value={inputData.value}
                    onChange={handleInputChange}
                  />
                  <InputFilter
                    htmlFor={"type"}
                    labelName={"Procedure type"}
                    type={"text"}
                    name={"type"}
                    id={"type"}
                    placeholder={"Type your procedure type"}
                    inputLimit={24}
                    value={inputData.type}
                    onChange={handleInputChange}
                  />

                  <InputFilter
                    htmlFor={"label"}
                    labelName={"Procedure name"}
                    type={"text"}
                    name={"label"}
                    id={"label"}
                    placeholder={"Type your procedure name"}
                    inputLimit={24}
                    value={inputData.label}
                    onChange={handleInputChange}
                  />

                  <div className="mt-4 text-center sm:text-start">
                    <div className="text-md group mt-2 flex items-center justify-center">
                      <button
                        onClick={toggleCanPerform}
                        type="button"
                        className={`px-4 py-1 transition duration-300 ${
                          inputData.demandResources
                            ? "bg-teal-100 text-teal-400"
                            : "bg-white"
                        } `}
                      >
                        In demand
                      </button>
                      <button
                        onClick={toggleCannotPerform}
                        type="button"
                        className={`px-4 py-1 transition duration-300 ${
                          inputData.demandResources
                            ? "bg-white"
                            : "bg-red-100 text-red-400"
                        } `}
                      >
                        No demand
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-8 mt-4 flex flex-col gap-2">
                    <div className="flex select-none flex-col gap-2">
                      <div className="flex w-full flex-col justify-center gap-2">
                        <label htmlFor="selectedRole">
                          Procedure performed by
                        </label>
                        <RoleDropdown
                          selected={inputData.selectedRole}
                          onSelect={(option) =>
                            setInputData({ ...inputData, selectedRole: option })
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                      <label htmlFor="description">Procedure Description</label>
                      <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="3"
                        value={inputData.description}
                        onChange={handleInputChange}
                        className="rounded-md border-2 px-4 py-2 shadow-sm"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-4 flex h-full w-full items-center justify-center">
                    <button className="group h-11 w-11 rounded-lg bg-gray-100 text-gray-400 hover:text-sky-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-full w-full rounded-lg bg-white transition duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
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
