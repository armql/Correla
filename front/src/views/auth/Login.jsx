import React, { useState, useEffect } from "react";
import authentication from "../../assets/svg/authentication.svg";
import InputFilter from "../../components/common/InputFilter";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../api/axios";

export default function Login() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ __html: "" });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    clearURLParameters();
  }, []);

  const clearURLParameters = () => {
    const url = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, url);
  };

  const logging = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });
    setSubmitting(true);

    const request = {
      email,
      password,
    };

    axiosClient
      .post("/login", request)
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
        if (data.user.role === "manager") {
          clearURLParameters();
          navigate("/management");
          Swal.fire(
            `Hello ${data.user.name}!`,
            `Welcome back ${data.user.role}.`,
            "info"
          );
        } else if (data.user.role === "employee") {
          clearURLParameters();
          navigate("/workspace");
          Swal.fire(
            `Hello ${data.user.name}!`,
            `Welcome back ${data.user.role}.`,
            "info"
          );
        } else if (data.user.role === "customer") {
          clearURLParameters();
          navigate("/app");
        } else if (data.user.role === "driver") {
          clearURLParameters();
          navigate("/workdrive");
          Swal.fire(
            `Hello ${data.user.name}!`,
            `Welcome back ${data.user.role}.`,
            "info"
          );
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const errors = error.response.data.errors;
          setError({
            name: errors.name ? errors.name.join("<br>") : "",
            email: errors.email ? errors.email.join("<br>") : "",
            emailex: errors.email ? errors.email[0] : "",
            password: errors.password ? errors.password.join("<br>") : "",
            other: errors.error ? errors.error.join("<br>") : "",
          });
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError({
            email: "",
            password: "",
            other: error.response.data.error,
          });
        } else {
          setError({ other: "An error occurred. Please try again later." });
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="parent flex items-center justify-center w-screen h-screen">
      <form
        onSubmit={logging}
        className="flex lg:flex-row flex-col w-full justify-around bg-gray-100 shadow-sm items-center border py-10 px-4 gap-4"
      >
        <div className="flex items-center gap-4 justify-start flex-col md:flex-row">
          <div className="flex items-center justify-center text-center flex-col">
            <h1 className="text-4xl font-semibold">
              This is where you authenticate mate
            </h1>
            <p className="text-sky-400 tracking-tighter font-light text-xl">
              You learn more and more over our company everyday never changes
            </p>
          </div>
          <div className="">
            <img src={authentication} alt="" className="w-96 h-96" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-4xl text-black">
            Admin Authentication
          </h1>
          <InputFilter
            htmlFor={"email"}
            labelName={"Email"}
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Type your email"}
            inputLimit={28}
          />
          <InputFilter
            htmlFor={"password"}
            labelName={"Password"}
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Type your password"}
            inputLimit={14}
          />

          <div className="flex flex-col">
            <label htmlFor="authenticating">Authenticate</label>
            <div className="flex items-center justify-evenly gap-2 bg-sky-400 text-white font-semibold py-1">
              Check for bot temp
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className="border mt-2 shadow-sm transition duration-200 border-gray-200 px-12 py-2 w-full font-semibold bg-gray-50 hover:bg-sky-100 hover:text-sky-700 hover:border-sky-200"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
