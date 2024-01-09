import { lazy } from "react";

const Scheduler = lazy(() => import("../pages/scheduler/Scheduler"));

export const GuestRoutes = { Scheduler };
