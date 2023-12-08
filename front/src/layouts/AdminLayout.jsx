import React from "react";
import Sidebar from "../views/managing/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="relative">
      <div className=" bg-white">
        <Sidebar>
          <Outlet />
        </Sidebar>
      </div>
    </div>
  );
}
