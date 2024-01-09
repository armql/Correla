import { Navigate, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./pages/home/Home";
import { GuestRoutes } from "./routes/routes";
import { Suspense } from "react";

const { Scheduler } = GuestRoutes;

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
        path: "scheduler",
        element: (
          <Suspense>
            <Scheduler />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
