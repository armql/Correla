import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import sidebar_inactive from "../../assets/svg/sidebar-inactive.svg";
import sidebar_active from "../../assets/svg/sidebar-active.svg";
import options_active from "../../assets/svg/options-active.svg";
import options_inactive from "../../assets/svg/options-inactive.svg";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [link, setLink] = useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const toggleLink = () => {
    setLink(!link);
  };

  return (
    <div>
      <div className="fixed top-0 right-0 left-0 bg-white h-10 flex group">
        {sidebar === false && (
          <button
            type="button"
            onClick={toggleSidebar}
            className="select-none px-4"
          >
            <img
              src={sidebar_inactive}
              alt=""
              className="w-6 h-6 hover:scale-105"
            />
          </button>
        )}
        {sidebar && (
          <div
            onClick={toggleSidebar}
            className="flex justify-center items-center translate-x-40 top-0 left-0"
          >
            <button className="flex select-none items-center justify-center">
              <img
                src={sidebar_active}
                alt=""
                className="w-7 h-7 hover:scale-105 "
              />
            </button>
          </div>
        )}
      </div>
      <div
        className={`fixed flex flex-col border-r-2 border-sky-200 duration-500 transition justify-between left-0 top-0 bottom-0 bg-white z-20 ${
          sidebar
            ? "translate-x-0 duration-500 transition"
            : "-translate-x-40 duration-500 transition"
        }`}
      >
        <div className="">
          <div className="bg-sky-200 py-3.5 px-6">
            <h1 className="my-4 text-lg font-semibold text-sky-800">
              Company name
            </h1>
          </div>
          <div className="flex flex-col gap-2 font-light tracking-tight">
            <div
              onClick={toggleLink}
              className="relative flex flex-col hover:text-sky-900 border border-transparent hover:bg-sky-50 hover:border hover:border-sky-200"
            >
              <div
                className={`${
                  link ? "translate-x-3" : "-translate-x-3"
                } absolute bottom-0 top-0 duration-300 transition flex justify-center items-center`}
              >
                <div className="absolute h-1 rounded-full w-4 bg-sky-400"></div>
              </div>
              <Link
                className={`${
                  link ? "translate-x-4" : "-translate-x-0"
                } py-2 pr-2.5 pl-2 transition duration-300`}
              >
                Dashboard
              </Link>
            </div>
            <Link
              to="procedureslist"
              className="hover:text-sky-900 border border-transparent hover:bg-sky-50 hover:border hover:border-sky-200 py-2 pr-2.5 pl-2"
            >
              Procedure List
            </Link>
            <Link
              to="procedureslist"
              className="hover:text-sky-900 border border-transparent hover:bg-sky-50 hover:border hover:border-sky-200 py-2 pr-2.5 pl-2"
            >
              Patient List
            </Link>
            <Link
              to="employeeslist"
              className="hover:text-sky-900 border border-transparent hover:bg-sky-50 hover:border hover:border-sky-200 py-2 pr-2.5 pl-2"
            >
              Employee List
            </Link>
            <Link
              to="patient"
              className="hover:text-sky-900 border border-transparent hover:bg-sky-50 hover:border hover:border-sky-200 py-2 pr-2.5 pl-2"
            >
              Patient+
            </Link>
            <Link
              to="managecrt"
              className="hover:text-sky-900 border border-transparent hover:bg-sky-50 hover:border hover:border-sky-200 py-2 pr-2.5 pl-2"
            >
              ChairsCRT
            </Link>
          </div>
        </div>

        <div className="py-2 pr-2.5 pl-2 font-md text-md">
          <div className="flex justify-between items-center gap-4">
            <h1>User Name</h1>
            <button type="button">
              <img
                src={options_inactive}
                alt=""
                className="w-5 h-5 hover:scale-105"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
