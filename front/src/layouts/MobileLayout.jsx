import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../views/nav/Nav";
import GuestLayout from "./GuestLayout";
import { useResponsive } from "../hooks/useResponsive";

export default function MobileLayout() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  if (!isMobile) {
    navigate("../");
    return <GuestLayout />;
  } else {
    return (
      <div className="group relative bg-[rgb(251,248,247)] transition duration-500">
        <Nav />
        <Outlet />
      </div>
    );
  }
}
