import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sidebar_inactive from "../../assets/svg/sidebar-inactive.svg";
import sidebar_active from "../../assets/svg/sidebar-active.svg";
import options_inactive from "../../assets/svg/options-inactive.svg";
import maleAvatar from "../../assets/svg/male-avatar.svg";
import managementIcon from "../../assets/svg/users-management.svg";
import dataManage from "../../assets/svg/data-manage.svg";
import pageManage from "../../assets/svg/pages-manage.svg";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../api/axios";

const linkRecent = [
  { to: "##", text: "Patient List" },
  { to: "#", text: "Employee List" },
];

const linkData = [
  { to: "procedureslist", text: "Procedure List" },
  { to: "patientlist", text: "Patient List" },
  { to: "employeeslist", text: "Employee List" },
];

const linkDashboard = [
  { to: "dashboard", text: "Dashboard" },
  { to: "managecrt", text: "ChairsCRT" },
  { to: "patient", text: "Patient+" },
];

const linkPages = [
  { to: "home", text: "Home" },
  { to: "applyform", text: "Application form" },
  { to: "schedulesdmy", text: "Timetable DMY" },
];

export default function Sidebar() {
  const { currentUser, userToken, setUserToken, setCurrentUser } =
    useStateContext();
  const [recentLinks, setRecentLinks] = useState(linkRecent);
  const [sidebar, setSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");
  const [management, setManagement] = useState(false);
  const [data, setData] = useState(false);
  const [pages, setPages] = useState(false);
  const [recent, setRecent] = useState(false);

  if (!userToken) {
    return <div className="parent"></div>;
  } else {
    const addRecentLink = (link) => {
      // Check if the link is already in the recent links
      if (!recentLinks.some((recentLink) => recentLink.to === link.to)) {
        // Add the link to the beginning of the recent links
        const updatedLinks = [link, ...recentLinks.slice(0, 2)]; // Limit to 2-3 links
        setRecentLinks(updatedLinks);
        setRecent(true); // Show the "Recent Links" section
      }
    };

    const logout = (ev) => {
      ev.preventDefault();

      axiosClient.post("/logout").then(() => {
        setCurrentUser({});
        setUserToken(null);
        navigate("123/login");
      });
    };

    const toggleManagement = () => {
      setManagement(!management);
    };

    const toggleData = () => {
      setData(!data);
    };

    const togglePages = () => {
      setPages(!pages);
    };

    const toggleSidebar = () => {
      setSidebar(!sidebar);
    };

    return (
      <div className="select-none">
        <div className="group fixed left-0 right-0 top-0 z-40 flex h-10 border-b-2 bg-white">
          {sidebar === false && (
            <button
              type="button"
              onClick={toggleSidebar}
              className="select-none px-4"
            >
              <img
                src={sidebar_inactive}
                alt=""
                className="h-6 w-6 opacity-60 hover:scale-105 active:opacity-80"
              />
            </button>
          )}
          {sidebar && (
            <div
              onClick={toggleSidebar}
              className="left-0 top-0 flex translate-x-52 items-center justify-center"
            >
              <button className="flex select-none items-center justify-center">
                <img
                  src={sidebar_active}
                  alt=""
                  className="h-7 w-7 opacity-80 hover:scale-105 active:opacity-100"
                />
              </button>
            </div>
          )}
        </div>
        <div
          className={`fixed bottom-0 left-0 top-0 z-40 flex w-52 flex-col justify-between border-r-2 bg-white shadow-md transition duration-500 ${
            sidebar
              ? "translate-x-0 transition duration-500"
              : "-translate-x-52 transition duration-500"
          }`}
        >
          <div className="">
            <div className="flex items-center justify-center">
              <div
                type="button"
                className="flex items-center justify-between gap-6 px-2 py-4"
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-sky-200">
                    <img src={maleAvatar} alt="" />
                  </div>
                  <div className="text-[15px] font-light">
                    {currentUser.name}
                  </div>
                </div>
                <div className="rounded-lg bg-gray-100">
                  <button
                    type="button"
                    onClick={logout}
                    className="flex cursor-pointer items-center justify-center rounded-lg border border-transparent bg-white px-2 py-1.5 transition duration-300 hover:-translate-x-1 hover:border-gray-200 active:-translate-x-1.5 active:shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {recent && recentLinks.length > 0 && (
              <>
                <div className="mt-4 px-1.5 text-sm font-light text-gray-400">
                  Recent Links
                </div>
                <div className="flex flex-col gap-2 px-2 py-1">
                  {recentLinks.map((linkItem) => (
                    <div
                      key={linkItem.to}
                      onClick={() => setActiveLink(linkItem.to)}
                      className={`${
                        activeLink === linkItem.to ? "" : ""
                      } group relative flex flex-row justify-between rounded-lg px-2 hover:text-sky-900`}
                    >
                      <div
                        className={`${
                          activeLink === linkItem.to ? "" : ""
                        } absolute bottom-0 left-1.5 top-0 flex items-center justify-center transition duration-300`}
                      >
                        <div
                          className={`${
                            activeLink === linkItem.to ? "" : ""
                          } absolute h-1.5 w-1.5 animate-pulse rounded-full bg-gray-300 transition duration-300`}
                        ></div>
                      </div>
                      <Link
                        to={linkItem.to}
                        className={`text-black ${
                          activeLink === linkItem.to
                            ? " text-gray-900"
                            : " text-gray-500 group-hover:text-gray-800"
                        } rounded-lg px-4 py-2 text-start text-[13px] font-normal transition duration-300 `}
                      >
                        {linkItem.text}
                      </Link>
                      <div
                        className={`flex cursor-pointer items-center justify-center text-gray-300 hover:text-red-200 ${
                          activeLink === linkItem.to
                            ? "text-gray-900"
                            : "text-transparent "
                        }`}
                        onClick={() => {
                          const updatedLinks = recentLinks.filter(
                            (recentLink) => recentLink.to !== linkItem.to,
                          );
                          setRecentLinks(updatedLinks);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5 text-transparent hover:text-black group-hover:text-gray-700"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="mt-2 px-1.5 text-sm font-light text-gray-400">
              Dashboard
            </div>
            <button
              type="button"
              onClick={toggleManagement}
              className={`flex w-full select-none items-center justify-evenly px-2 py-2 text-sm text-black active:bg-gray-50 ${
                management ? "" : ""
              }`}
            >
              <div
                className={`transition duration-500 ${
                  management ? "rotate-90 text-black" : "text-gray-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`flex items-center justify-center gap-1 ${
                  management ? "text-black" : "text-neutral-600"
                }`}
              >
                <img src={managementIcon} alt="" className="h-5 w-5" />
                Management
              </div>
            </button>
            {management && (
              <div className="flex flex-col gap-2 px-2 py-1">
                {linkDashboard.map((linkItem) => (
                  <div
                    key={linkItem.to}
                    onClick={() => {
                      addRecentLink(linkItem);
                      setActiveLink(linkItem.to);
                    }}
                    className="relative flex flex-col hover:text-sky-900"
                  >
                    <div
                      className={`${
                        activeLink === linkItem.to ? "" : ""
                      } absolute bottom-0 left-0.5 top-0 flex items-center justify-center transition duration-300`}
                    >
                      <div
                        className={`${
                          activeLink === linkItem.to ? "block" : "hidden"
                        } absolute h-6 w-1 rounded-lg bg-black`}
                      ></div>
                    </div>
                    <Link
                      to={linkItem.to}
                      className={`text-black ${
                        activeLink === linkItem.to
                          ? "translate-x-1 bg-gray-100 text-gray-900"
                          : "-translate-x-3 text-gray-600 hover:text-gray-800"
                      } rounded-lg px-4 py-2 text-start text-[13px] font-normal transition duration-300 `}
                    >
                      {linkItem.text}
                    </Link>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={toggleData}
              className={`flex w-full select-none items-center justify-evenly px-2 py-2 text-sm text-black active:bg-gray-50 ${
                data ? "" : ""
              }`}
            >
              <div
                className={`transition duration-500 ${
                  data ? "rotate-90 text-black" : "text-gray-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`flex items-center justify-center gap-1 ${
                  management ? "text-black" : "text-neutral-600"
                }`}
              >
                <img src={dataManage} alt="" className="h-5 w-5" />
                Data Manage
              </div>
            </button>
            {data && (
              <div className="flex flex-col gap-2 px-2 py-1">
                {linkData.map((linkItem) => (
                  <div
                    key={linkItem.to}
                    onClick={() => {
                      addRecentLink(linkItem);
                      setActiveLink(linkItem.to);
                    }}
                    className="relative flex flex-col hover:text-sky-900"
                  >
                    <div
                      className={`${
                        activeLink === linkItem.to ? "" : ""
                      } absolute bottom-0 left-0.5 top-0 flex items-center justify-center transition duration-300`}
                    >
                      <div
                        className={`${
                          activeLink === linkItem.to ? "block" : "hidden"
                        } absolute h-6 w-1 rounded-lg bg-black`}
                      ></div>
                    </div>
                    <Link
                      to={linkItem.to}
                      className={`text-black ${
                        activeLink === linkItem.to
                          ? "translate-x-1 bg-gray-100 text-gray-900"
                          : "-translate-x-3 text-gray-600 hover:text-gray-800"
                      } rounded-lg px-4 py-2 text-start text-[13px] font-normal transition duration-300 `}
                    >
                      {linkItem.text}
                    </Link>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={togglePages}
              className={`flex w-full select-none items-center justify-evenly px-2 py-2 text-sm text-black active:bg-gray-50 ${
                pages ? "" : ""
              }`}
            >
              <div
                className={`transition duration-500 ${
                  pages ? "rotate-90 text-black" : "text-gray-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`flex items-center justify-center gap-1 transition duration-300 ${
                  management ? "text-black" : "text-neutral-600"
                }`}
              >
                <img src={pageManage} alt="" className="h-5 w-5" />
                Page Manage
              </div>
            </button>
            {pages && (
              <div className="flex flex-col gap-2 px-2 py-1">
                {linkPages.map((linkItem) => (
                  <div
                    key={linkItem.to}
                    onClick={() => {
                      addRecentLink(linkItem);
                      setActiveLink(linkItem.to);
                    }}
                    className="relative flex flex-col hover:text-sky-900"
                  >
                    <div
                      className={`${
                        activeLink === linkItem.to ? "" : ""
                      } absolute bottom-0 left-0.5 top-0 flex items-center justify-center transition duration-300`}
                    >
                      <div
                        className={`${
                          activeLink === linkItem.to ? "block" : "hidden"
                        } absolute h-6 w-1 rounded-lg bg-black`}
                      ></div>
                    </div>
                    <Link
                      to={linkItem.to}
                      className={`text-black ${
                        activeLink === linkItem.to
                          ? "translate-x-1 bg-gray-100 text-gray-900"
                          : "-translate-x-3 text-gray-600 hover:text-gray-800"
                      } rounded-lg px-4 py-2 text-start text-[13px] font-normal transition duration-300 `}
                    >
                      {linkItem.text}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-md flex items-center justify-center py-2 font-light tracking-tight">
            Your company name ❇︎
          </div>
        </div>
      </div>
    );
  }
}
