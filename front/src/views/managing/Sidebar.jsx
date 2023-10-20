import React, { useState } from "react";
import { Link } from "react-router-dom";
import sidebar_inactive from "../../assets/svg/sidebar-inactive.svg";
import sidebar_active from "../../assets/svg/sidebar-active.svg";
import options_inactive from "../../assets/svg/options-inactive.svg";

const linkData = [
  { to: "dashboard", text: "Dashboard" },
  { to: "procedureslist", text: "Procedure List" },
  { to: "patientlist", text: "Patient List" },
  { to: "employeeslist", text: "Employee List" },
  { to: "patient", text: "Patient+" },
  { to: "managecrt", text: "ChairsCRT" },
];

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div className="fixed z-40 top-0 right-0 left-0 border-b-2 bg-white h-10 flex group">
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
            className="flex justify-center items-center translate-x-52 top-0 left-0"
          >
            <button className="flex select-none items-center justify-center">
              <img
                src={sidebar_active}
                alt=""
                className="w-7 h-7 hover:scale-105"
              />
            </button>
          </div>
        )}
      </div>
      <div
        className={`fixed flex flex-col border-r-2 shadow-md duration-500 transition justify-between left-0 top-0 bottom-0 bg-white z-40 w-52 ${
          sidebar
            ? "translate-x-0 duration-500 transition"
            : "-translate-x-52 duration-500 transition"
        }`}
      >
        <div className="">
          <div className="flex border-b-2 shadow-sm justify-center items-center bg-gray-100 py-3.5 px-6">
            <h1 className="my-4 text-xl font-medium text-black">
              Company Name
            </h1>
          </div>
          <div className="flex flex-col gap-2 font-light tracking-tight">
            {linkData.map((linkItem) => (
              <div
                key={linkItem.to}
                onClick={() => setActiveLink(linkItem.to)}
                className="relative flex flex-col hover:text-sky-900 border border-transparent hover:border hover:border-sky-200"
              >
                <div
                  className={`${
                    activeLink === linkItem.to
                      ? "translate-x-3"
                      : "-translate-x-3"
                  } absolute bottom-0 top-0 duration-300 transition flex justify-center items-center`}
                >
                  <div className="absolute h-1 rounded-sm w-2.5 bg-black"></div>
                </div>
                <Link
                  to={linkItem.to}
                  className={`text-black ${
                    activeLink === linkItem.to
                      ? "translate-x-4 text-sky-900"
                      : "-translate-x-0"
                  } py-2 pr-2.5 pl-2 text-lg transition duration-300 hover:text-sky-800`}
                >
                  {linkItem.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="py-2 border-t-2 shadow-sm pr-2.5 pl-2 font-md text-md bg-gray-100">
          <div className="flex justify-between items-center gap-4">
            <h1>Username</h1>
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
