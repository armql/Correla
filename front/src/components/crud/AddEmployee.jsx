import React, { useEffect, useState } from "react";
import Create from "../common/Create";
import InputFilter from "../common/InputFilter";
import RoleDropdown from "../common/RoleDropdown";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Calendar from "../modal/calendar/Calendar";
import useToggle from "../../hooks/useToggle";

export default function AddEmployee() {
  const { currentUser, userToken, setCurrentUser } = useStateContext();
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    name: "",
    uniqueValue: "",
    type: "",
    description: "",
    selectedRole: null,
    demandResources: false,
  });
  const [inputErrorList, setInputErrorList] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const { effect, auto, close } = useToggle();

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

    const createProcedure = (event) => {
      event.preventDefault();
      setSubmitting(true);
      const demandResourcesValue = inputData.demandResources ? 1 : 0;

      const formData = new FormData();
      formData.append("value", inputData.uniqueValue);
      formData.append("label", inputData.name);
      formData.append("description", inputData.description);
      formData.append("type", inputData.type);
      formData.append("demandResources", demandResourcesValue);
      formData.append(
        "canPerform",
        inputData.selectedRole ? inputData.selectedRole.canPerform : "",
      );
      formData.append("created_by", currentUser.id);

      axiosClient
        .post(`/createprocedure`, formData)
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
            <h1 className="text-center text-2xl text-sky-400">Add Employee</h1>
            <form
              onSubmit={(event) =>
                createProcedure(event, currentUser ? currentUser.id : "")
              }
              className="h-full w-full"
            >
              <div className="mt-4 flex flex-col items-center justify-start gap-4 sm:flex-row sm:gap-10">
                <div className="flex flex-col ">
                  <InputFilter
                    htmlFor={"employeeName"}
                    labelName={"Employee Name"}
                    type={"text"}
                    name={"employeeName"}
                    id={"employeeName"}
                    placeholder={"Type your employee name."}
                    inputLimit={12}
                    value={inputData.employeeName}
                    onChange={handleInputChange}
                  />
                  <div className="mt-4 flex flex-col gap-2">
                    <label htmlFor="workTimespan">Work Timespan</label>
                    <button
                      type="button"
                      onClick={auto}
                      className="flex items-center justify-center rounded-sm border-2 border-black bg-black px-2 py-1.5 text-sm text-white"
                    >
                      Work timespan
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-8 mt-4 flex flex-col gap-2">
                    <div className="flex select-none flex-col gap-2">
                      <div className="flex w-80 flex-col justify-center gap-2">
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
        {effect && <Calendar close={close} />}
      </div>
    );
  }
}
