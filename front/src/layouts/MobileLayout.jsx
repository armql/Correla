import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../views/nav/Nav";

export default function MobileLayout() {
  return (
    <div className="group relative bg-[rgb(251,248,247)] transition duration-500">
      <Nav />
      <Outlet />
    </div>
  );
}
