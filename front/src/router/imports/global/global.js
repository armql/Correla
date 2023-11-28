import { lazy } from "react";
import LazyLoading from "../loader/LazyLoader";
const NotFound = lazy(() => import("../../../layouts/NotFound"));

export { LazyLoading, NotFound };
