import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";
import Navbar from "../pages/header/Navbar";

export default function GuestLayout() {
  return (
    <Fragment>
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}
