import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLinkItem = ({ link, addRecentLink, setActiveLink }) => {
  return (
    <div className="flex flex-col gap-2 px-2 py-1">
      <div
        onClick={() => {
          addRecentLink(link);
          setActiveLink(link.to);
        }}
        className="relative flex flex-col hover:text-sky-900"
      >
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `text-black ${
              isActive
                ? "translate-x-1 border-l-2 border-gray-400 bg-gray-100 text-gray-900"
                : "-translate-x-3 text-gray-600 hover:text-gray-800"
            } rounded-sm px-4 py-2 text-start text-[13px] font-normal transition duration-300`
          }
        >
          {link.text}
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarLinkItem;
