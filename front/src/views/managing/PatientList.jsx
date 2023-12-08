import React, { useEffect, useState } from "react";
import PatientTable from "../../components/post/PatientTable";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";

export default function PatientList() {
  const { currentUser, userToken, setCurrentUser } = useStateContext();
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();

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
    return <div className="text-3xl font-bold">Loading</div>;
  }
  if (!userToken) {
    navigate("123/login");
  } else {
    return (
      <div className="h-screen w-full bg-gray-200">
        <div className="bg-white p-4">
          <div className="flex flex-row items-center justify-start">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for patient"
              className="z-10 rounded-l-md border-2 bg-white px-2 py-[7px] font-light shadow-sm ring-2 ring-transparent"
            />
            <button className="rounded-r-md border bg-gray-200 px-4 py-2 text-black ring-2 ring-transparent hover:border-sky-100 hover:bg-sky-100 hover:ring-sky-100">
              Search
            </button>
          </div>
        </div>
        <PatientTable />
      </div>
    );
  }
}
