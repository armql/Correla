import { NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataLinks = [
    { id: 1, to: "scheduler", title: "Weekly schedules" },
    { id: 2, to: "checkup", title: "Make an checkup" },
    { id: 3, to: "specialisations", title: "Our specialisations" },
  ];

  return (
    <nav className="center">
      <div className="nav-box">
        <p className="nav-logo-mobile">Correla</p>
        <div className="flex w-full items-center justify-center sm:gap-4 gap-2 px-4 sm:justify-between sm:px-4">
          <div className="flex flex-row justify-between gap-4">
            <p className="nav-logo">Correla</p>
            <div className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
              {dataLinks.map((items) => (
                <NavLink
                  key={items.id}
                  to={items.to}
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "border-b border-zinc-300"
                        : "border-b-[3.5px] hover:border-b-2 active:border-b active:border-zinc-300"
                    }`
                  }
                >
                  {items.title}
                </NavLink>
              ))}
              {location.pathname !== "/home" && (
                <button
                  type="button"
                  onClick={() => navigate("..")}
                  className="nav-link-back"
                >
                  Go home
                </button>
              )}
            </div>
          </div>
          <div className="nav-side-btn">Appoint a Checkup</div>
        </div>
        <div className="nav-side-mobile-btn">Appoint a Checkup</div>
      </div>
    </nav>
  );
}
