import React from "react";
import background from "../assets/svg/form-gray-background.svg";
import Sidebar from "../views/managing/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const guestLayoutStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={guestLayoutStyle}
      ></div>
      <div className="relative bg-white backdrop-blur-xl bg-opacity-25">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
