import React, { useEffect, useState } from "react";
import EmployeeTable from "../../components/post/EmployeeTable";
import { Link, useNavigate } from "react-router-dom";
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
    return <div className="text-3xl font-bold">Loading</div>;
  }
  if (!userToken) {
    navigate("123/login");
  } else {
    return (
      <div className="h-screen w-full bg-gray-200">
        <div className="flex justify-between bg-white p-4">
          <div className="flex flex-row items-center justify-start">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for procedure"
              className="z-10 rounded-l-md border-2 bg-white px-2 py-[7px] font-light shadow-sm ring-2 ring-transparent"
            />
            <button className="rounded-r-md border bg-gray-200 px-4 py-2 text-black ring-2 ring-transparent hover:border-sky-100 hover:bg-sky-100 hover:ring-sky-100">
              Search
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="">
              <Link
                to="addemployee"
                className="rounded-md border border-rose-200 bg-white px-4 py-2 text-rose-400 shadow-sm transition duration-300 hover:bg-rose-50 active:bg-white"
              >
                Add an employee
              </Link>
            </div>
          </div>
        </div>
        <EmployeeTable />
      </div>
    );
  }
}
