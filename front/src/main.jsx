import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ContextProvider } from "./contexts/ContextProvider";
import App from "./App";
// import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider> */}
  </React.StrictMode>,
);
