import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "../error/NotFound";
import Home from "../views/home/Home";
import GuestLayout from "../layouts/GuestLayout";
import ApplicationForm from "../views/forms/ApplicationForm";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../views/managing/Dashboard";
import Login from "../views/auth/Login";
import ProcedureList from "../views/managing/ProcedureList";
import Patient from "../views/managing/Patient";
import EmployeeList from "../views/managing/EmployeeList";
import PatientList from "../views/managing/PatientList";
import ChairCRT from "../views/managing/ChairCRT";
import PatientHistory from "../components/post/PatientHistory";
import Create from "../components/common/Create";
import Signup from "../views/auth/Signup";
import CreateProcedure from "../components/crud/CreateProcedure";
import TFa from "../views/managing/TFa";
import EditProcedure from "../components/crud/EditProcedure";

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
        path: "signup",
        element: <Signup />,
      },
      {
        path: "procedureslist",
        element: <ProcedureList />,
      },
      {
        path: "procedureslist/createprocedure",
        element: <CreateProcedure />,
      },
      {
        path: "employeeslist",
        element: <EmployeeList />,
      },
      {
        path: "patient",
        element: <Patient />,
      },
      {
        path: "patientlist",
        element: <PatientList />,
      },
      {
        path: "managecrt",
        element: <ChairCRT />,
      },
      {
        path: "patienthistory",
        element: <PatientHistory />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "procedureslist/edit/:id",
        element: <EditProcedure />,
      },
    ],
  },
  {
    path: "tfa",
    element: <TFa />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
