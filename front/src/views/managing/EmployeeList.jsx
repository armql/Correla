import React, { useEffect, useState } from "react";
import EmployeeTable from "../../components/post/EmployeeTable";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../api/axios";

export default function EmployeeList() {
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
    return <div className="font-bold text-3xl">Loading</div>;
  }
  if (!userToken) {
    navigate("123/login");
  } else {
    return (
      <div className="w-full h-screen mt-10 bg-gray-200">
        <div className="bg-white p-4">
          <div className="flex justify-start items-center flex-row">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for employee"
              className="border-2 py-[7px] z-10 px-2 shadow-sm rounded-l-md bg-white font-light ring-2 ring-transparent"
            />
            <button className="bg-gray-200 border ring-2 ring-transparent text-black py-2 px-4 rounded-r-md hover:bg-sky-100 hover:ring-sky-100 hover:border-sky-100">
              Search
            </button>
          </div>
        </div>
        <EmployeeTable />
      </div>
    );
  }
}
