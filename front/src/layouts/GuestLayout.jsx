import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import background from "../assets/svg/form-gray-background.svg";
import CustomerSupport from "../components/custom/CustomerSupport";
import { useResponsive } from "../hooks/useResponsive";
import MobileLayout from "./MobileLayout";

const guestLayoutStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function GuestLayout() {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  if (isMobile) {
    navigate("/app");
    return <MobileLayout />;
  } else {
    return (
      <div className="relative">
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={guestLayoutStyle}
        ></div>
        <div className="relative">
          <CustomerSupport />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  }
}
