import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "../error/NotFound";
import Home from "../views/Home";
import GuestLayout from "../layouts/GuestLayout";
import CheckForm from "../views/CheckForm";
import ApplicationForm from "../views/ApplicationForm";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../views/managing/Dashboard";
import Login from "../auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"home"} />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "form",
        element: <ApplicationForm />,
      },
    ],
  },
  {
    path: "123",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
