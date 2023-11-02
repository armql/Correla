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
                className="w-6 h-6 opacity-60 hover:scale-105 active:opacity-80"
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
                  className="w-7 h-7 hover:scale-105 opacity-80 active:opacity-100"
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
            <div className="flex justify-center items-center">
              <div
                type="button"
                className="flex gap-6 justify-between items-center py-4 px-2"
              >
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-sky-200">
                    <img src={maleAvatar} alt="" />
                  </div>
                  <div className="text-[15px] font-light">
                    {currentUser.name}
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg">
                  <button
                    type="button"
                    onClick={logout}
                    className="flex justify-center items-center hover:border-gray-200 py-1.5 rounded-lg px-2 border bg-white cursor-pointer border-transparent hover:-translate-x-1 duration-300 transition active:-translate-x-1.5 active:shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
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
                <div className="px-1.5 text-gray-400 font-light text-sm mt-4">
                  Recent Links
                </div>
                <div className="flex flex-col gap-2 py-1 px-2">
                  {recentLinks.map((linkItem) => (
                    <div
                      key={linkItem.to}
                      onClick={() => setActiveLink(linkItem.to)}
                      className={`${
                        activeLink === linkItem.to ? "" : ""
                      } relative flex flex-row group justify-between px-2 hover:text-sky-900 rounded-lg`}
                    >
                      <div
                        className={`${
                          activeLink === linkItem.to ? "" : ""
                        } absolute bottom-0 top-0 left-1.5 duration-300 transition flex justify-center items-center`}
                      >
                        <div
                          className={`${
                            activeLink === linkItem.to ? "" : ""
                          } duration-300 transition absolute w-1.5 h-1.5 rounded-full bg-gray-300 animate-pulse`}
                        ></div>
                      </div>
                      <Link
                        to={linkItem.to}
                        className={`text-black ${
                          activeLink === linkItem.to
                            ? " text-gray-900"
                            : " text-gray-500 group-hover:text-gray-800"
                        } py-2 px-4 text-[13px] font-normal text-start rounded-lg transition duration-300 `}
                      >
                        {linkItem.text}
                      </Link>
                      <div
                        className={`flex justify-center items-center text-gray-300 hover:text-red-200 cursor-pointer ${
                          activeLink === linkItem.to
                            ? "text-gray-900"
                            : "text-transparent "
                        }`}
                        onClick={() => {
                          const updatedLinks = recentLinks.filter(
                            (recentLink) => recentLink.to !== linkItem.to
                          );
                          setRecentLinks(updatedLinks);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-transparent group-hover:text-gray-700 hover:text-black"
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
            <div className="px-1.5 text-gray-400 font-light text-sm mt-2">
              Dashboard
            </div>
            <button
              type="button"
              onClick={toggleManagement}
              className={`text-sm px-2 py-2 w-full active:bg-gray-50 select-none flex justify-evenly text-black items-center ${
                management ? "" : ""
              }`}
            >
              <div
                className={`duration-500 transition ${
                  management ? "rotate-90 text-black" : "text-gray-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`flex justify-center items-center gap-1 ${
                  management ? "text-black" : "text-neutral-600"
                }`}
              >
                <img src={managementIcon} alt="" className="w-5 h-5" />
                Management
              </div>
            </button>
            {management && (
              <div className="flex flex-col gap-2 py-1 px-2">
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
                      } absolute bottom-0 top-0 left-0.5 duration-300 transition flex justify-center items-center`}
                    >
                      <div
                        className={`${
                          activeLink === linkItem.to ? "block" : "hidden"
                        } absolute h-6 rounded-lg w-1 bg-black`}
                      ></div>
                    </div>
                    <Link
                      to={linkItem.to}
                      className={`text-black ${
                        activeLink === linkItem.to
                          ? "translate-x-1 text-gray-900 bg-gray-100"
                          : "-translate-x-3 text-gray-600 hover:text-gray-800"
                      } py-2 px-4 text-[13px] font-normal text-start rounded-lg transition duration-300 `}
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
              className={`text-sm px-2 py-2 w-full active:bg-gray-50 select-none flex justify-evenly text-black items-center ${
                data ? "" : ""
              }`}
            >
              <div
                className={`duration-500 transition ${
                  data ? "rotate-90 text-black" : "text-gray-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`flex justify-center items-center gap-1 ${
                  management ? "text-black" : "text-neutral-600"
                }`}
              >
                <img src={dataManage} alt="" className="w-5 h-5" />
                Data Manage
              </div>
            </button>
            {data && (
              <div className="flex flex-col gap-2 py-1 px-2">
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
                      } absolute bottom-0 top-0 left-0.5 duration-300 transition flex justify-center items-center`}
                    >
                      <div
                        className={`${
                          activeLink === linkItem.to ? "block" : "hidden"
                        } absolute h-6 rounded-lg w-1 bg-black`}
                      ></div>
                    </div>
                    <Link
                      to={linkItem.to}
                      className={`text-black ${
                        activeLink === linkItem.to
                          ? "translate-x-1 text-gray-900 bg-gray-100"
                          : "-translate-x-3 text-gray-600 hover:text-gray-800"
                      } py-2 px-4 text-[13px] font-normal text-start rounded-lg transition duration-300 `}
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
              className={`text-sm px-2 py-2 w-full active:bg-gray-50 select-none flex justify-evenly text-black items-center ${
                pages ? "" : ""
              }`}
            >
              <div
                className={`duration-500 transition ${
                  pages ? "rotate-90 text-black" : "text-gray-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`flex justify-center duration-300 transition items-center gap-1 ${
                  management ? "text-black" : "text-neutral-600"
                }`}
              >
                <img src={pageManage} alt="" className="w-5 h-5" />
                Page Manage
              </div>
            </button>
            {pages && (
              <div className="flex flex-col gap-2 py-1 px-2">
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
                      } absolute bottom-0 top-0 left-0.5 duration-300 transition flex justify-center items-center`}
                    >
                      <div
                        className={`${
                          activeLink === linkItem.to ? "block" : "hidden"
                        } absolute h-6 rounded-lg w-1 bg-black`}
                      ></div>
                    </div>
                    <Link
                      to={linkItem.to}
                      className={`text-black ${
                        activeLink === linkItem.to
                          ? "translate-x-1 text-gray-900 bg-gray-100"
                          : "-translate-x-3 text-gray-600 hover:text-gray-800"
                      } py-2 px-4 text-[13px] font-normal text-start rounded-lg transition duration-300 `}
                    >
                      {linkItem.text}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-md tracking-tight flex justify-center items-center py-2 font-light">
            Your company name ❇︎
          </div>
        </div>
      </div>
    );
  }
}
