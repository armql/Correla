import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "../error/NotFound";
import Home from "../views/Home";
import GuestLayout from "../layouts/GuestLayout";
import CheckForm from "../views/CheckForm";
import ApplicationForm from "../views/ApplicationForm";

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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
