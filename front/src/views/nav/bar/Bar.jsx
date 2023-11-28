import React from "react";
import { NavLink } from "react-router-dom";

export default function Bar({ effect, close }) {
  const navLinks = [
    { to: "home", name: "Home" },
    { to: "about", name: "About us" },
    { to: "contact", name: "Contact us" },
    { to: "services", name: "Our Services" },
  ];

  return (
    <nav className="z-40 flex h-full flex-row items-center justify-center gap-4">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          exact
          className={`text-sm ${effect ? "text-gray-700" : "text-transparent"}`}
          style={({ isActive }) => {
            return { color: isActive ? "black" : "#EE" };
          }}
        >
          {link.name}
        </NavLink>
      ))}
      <div className="absolute -right-2 top-1.5 z-10 flex items-center justify-center rounded-full">
        <div>
          <button
            type="button"
            onClick={close}
            className="h-full w-full rounded-full bg-white p-0.5 transition duration-300 hover:translate-x-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
