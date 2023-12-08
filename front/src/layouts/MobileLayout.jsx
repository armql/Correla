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
      <div className="group relative bg-white transition duration-500">
        <div className="flex h-24 items-center justify-center bg-white text-3xl font-bold text-sky-500">
          Your company name
        </div>
        {/* <Nav /> */}
        <Outlet />
      </div>
    );
  }
}
