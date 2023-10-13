import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../views/Navbar";
import Footer from "../views/Footer";
import background from "../assets/images/form-gray-background.svg";
import CustomerSupport from "../custom/CustomerSupport";

const guestLayoutStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function GuestLayout() {
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
