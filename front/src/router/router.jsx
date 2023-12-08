import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../views/home/Home";
import GuestLayout from "../layouts/GuestLayout";
import ApplicationForm from "../views/forms/ApplicationForm";
import AdminLayout from "../layouts/AdminLayout";
import MobileLayout from "../layouts/MobileLayout";
import MobileHome from "../views/mobile/home/MobileHome";
import { NotFound, LazyLoading } from "./imports/global/global";
import {
  Dashboard,
  Login,
  ProcedureList,
  Patient,
  EmployeeList,
  ChairCRT,
  PatientList,
  PatientHistory,
  CreateProcedure,
  EditProcedure,
  AddEmployee,
} from "./imports/admin/admin";
import { Suspense } from "react";

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
    path: "/app",
    element: <MobileLayout />,
    children: [
      {
        path: "/app",
        element: <Navigate to={"home"} />,
      },
      {
        path: "home",
        element: <MobileHome />,
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
        path: "123",
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "procedureslist",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <ProcedureList />
          </Suspense>
        ),
      },
      {
        path: "procedureslist/createprocedure",
        element: <CreateProcedure />,
      },
      {
        path: "employeeslist",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <EmployeeList />
          </Suspense>
        ),
      },
      {
        path: "patient",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <Patient />
          </Suspense>
        ),
      },
      {
        path: "patientlist",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <PatientList />
          </Suspense>
        ),
      },
      {
        path: "managecrt",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <ChairCRT />
          </Suspense>
        ),
      },
      {
        path: "patienthistory",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <PatientHistory />
          </Suspense>
        ),
      },
      {
        path: "procedureslist/edit/:id",
        element: <EditProcedure />,
      },
      {
        path: "employeeslist/addemployee",
        element: <AddEmployee />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
