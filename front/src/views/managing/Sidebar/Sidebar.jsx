import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sidebarIcon from "../../../assets/svg/sidebar-active.svg";
import axiosClient from "../../../api/axios";
import { useStateContext } from "../../../contexts/ContextProvider";
import maleAvatar from "../../../assets/svg/male-avatar.svg";
import Login from "../../auth/Login";
import {
  managementIcon,
  dataIcon,
  pageIcon,
  tableIcon,
} from "../../../assets/svg/duotone/duotone";
import SidebarLinkItem from "./SidebarLink/SidebarLinkItem";

const linkRecent = [{ to: "dashboard", text: "Dashboard" }];

const allLinks = [
  {
    category: "Management",
    img: managementIcon,
    links: [
      { to: "dashboard", text: "Dashboard" },
      { to: "managecrt", text: "ChairsCRT" },
      { to: "patient", text: "Patient+" },
    ],
  },
  {
    category: "Data Manage",
    img: dataIcon,
    links: [
      { to: "procedureslist", text: "Procedure List" },
      { to: "patientlist", text: "Patient List" },
      { to: "employeeslist", text: "Employee List" },
    ],
  },
  {
    category: "Page Manage",
    img: pageIcon,
    links: [
      { to: "/home", text: "Home" },
      { to: "/applyform", text: "Application form" },
      { to: "/schedulesdmy", text: "Timetable DMY" },
    ],
  },
  {
    category: "Table Manage",
    img: tableIcon,
    links: [
      { to: "/schedules", text: "Our Schedules" },
      { to: "/timetable", text: "Guest Timetable" },
      { to: "/worker", text: "Workspace" },
    ],
  },
];

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");
  const { currentUser, userToken, setUserToken, setCurrentUser } =
    useStateContext();
  const [recentLinks, setRecentLinks] = useState(linkRecent);
  const [loadingUser, setLoadingUser] = useState(true);
  const [recent, setRecent] = useState(true);
  const [activeCategories, setActiveCategories] = useState(["Management"]);

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

  const addRecentLink = (link) => {
    if (!recentLinks.some((recentLink) => recentLink.to === link.to)) {
      const updatedLinks = [link, ...recentLinks.slice(0, 2)];
      setRecentLinks(updatedLinks);
      setRecent(true);
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

  const toggleNav = (type) => {
    const updatedCategories = activeCategories.includes(type)
      ? activeCategories.filter((category) => category !== type)
      : [...activeCategories, type];
    setActiveCategories(updatedCategories);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // if (userToken) {
  return (
    <div className="z-10 flex flex-row bg-white">
      <div
        className={`z-40 border-r-2 transition-all duration-300 ${
          sidebarOpen ? "w-56" : "h-0 w-0"
        }`}
      >
        <div className="flex items-center justify-center">
          <div
            type="button"
            className="flex items-center justify-between gap-6 px-2 py-4"
          >
            {sidebarOpen && (
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="h-6 w-6 rounded-full bg-sky-200">
                  <img src={maleAvatar} alt="" />
                </div>
                <div className="text-[15px] font-light">{currentUser.name}</div>
              </div>
            )}
            {sidebarOpen && (
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
            )}
          </div>
        </div>
        {sidebarOpen && recent && recentLinks.length > 0 && (
          <>
            <div className="mt-4 px-1.5 text-sm font-light text-gray-400">
              Recent Links
            </div>
            <div className="flex flex-col gap-2 px-2 py-1">
              {sidebarOpen &&
                recentLinks.map((linkItem) => (
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
        {sidebarOpen && (
          <div className="mt-2 px-1.5 text-sm font-light text-gray-400">
            Dashboard
          </div>
        )}

        {sidebarOpen &&
          allLinks.map((link) => (
            <div>
              <button
                key={link.category}
                type="button"
                onClick={() => toggleNav(link.category)}
                className={`flex w-full select-none items-center justify-evenly px-2 py-2 text-sm text-black active:bg-gray-50 `}
              >
                <div
                  className={`transition duration-500 ${
                    activeCategories.includes(link.category)
                      ? "rotate-90 text-black"
                      : "text-gray-400"
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
                    activeCategories.includes(link.category)
                      ? "text-black"
                      : "text-neutral-600"
                  }`}
                >
                  <img src={link.img} alt="" className="h-5 w-5" />
                  {link.category}
                </div>
              </button>
              {sidebarOpen &&
                activeCategories.includes(link.category) &&
                link.links.map((link) => (
                  <SidebarLinkItem
                    key={link.to}
                    link={link}
                    addRecentLink={addRecentLink}
                    setActiveLink={setActiveLink}
                  />
                ))}
            </div>
          ))}
      </div>
      <div className="h-full w-full flex-col">
        <div className="z-40 h-14 w-full">
          <button
            type="button"
            onClick={toggleSidebar}
            className="z-40 flex h-14 w-full items-center justify-start border-b-2 bg-gray-50 px-2"
          >
            <img
              src={sidebarIcon}
              alt=""
              className={`transition duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-70"
              }`}
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
  // } else {
  //   return (
  //     <div className="h-screen w-screen">
  //       <Login />
  //     </div>
  //   );
  // }
}
