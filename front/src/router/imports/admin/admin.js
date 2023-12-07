import { lazy } from "react";
import CreateProcedure from "../../../components/crud/CreateProcedure";
import AddEmployee from "../../../components/crud/AddEmployee";
import EditProcedure from "../../../components/crud/EditProcedure";
import Dashboard from "../../../views/managing/Dashboard";
import Login from "../../../views/auth/Login";
const ProcedureList = lazy(() =>
  import("../../../views/managing/ProcedureList"),
);
const Patient = lazy(() => import("../../../views/managing/Patient"));
const EmployeeList = lazy(() => import("../../../views/managing/EmployeeList"));
const PatientList = lazy(() => import("../../../views/managing/PatientList"));
const PatientHistory = lazy(() =>
  import("../../../components/post/PatientHistory"),
);
const ChairCRT = lazy(() => import("../../../views/managing/ChairCRT"));

export {
  Dashboard,
  Login,
  ProcedureList,
  ChairCRT,
  Patient,
  EmployeeList,
  PatientList,
  PatientHistory,
  CreateProcedure,
  EditProcedure,
  AddEmployee,
};
