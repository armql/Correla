import React, { useState, useEffect } from "react";
import authentication from "../../assets/svg/authentication.svg";
import InputFilter from "../../components/common/InputFilter";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../api/axios";
import Swal from "sweetalert2";
import SubmitLogin from "../../components/skeleton/submitLogin";

export default function Login() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ __html: "" });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

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
        clearURLParameters();
        navigate("/123/dashboard");
        Swal.fire(`Hello ${data.user.name}!`, `Welcome back.`, "info");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const errors = error.response.data.errors;
          setError({
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

  if (submitting) {
    return <SubmitLogin />;
  }

  return (
    <div className="parent flex h-screen w-screen items-center justify-center">
      <form
        onSubmit={logging}
        className="flex w-full flex-col items-center justify-around gap-4 border bg-gray-100 px-4 py-10 shadow-sm lg:flex-row"
      >
        <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
          <div className="group flex flex-col items-center justify-center text-center">
            <h1 className="active select-none text-4xl font-semibold">
              This is where you authenticate mate
            </h1>
            <p className="text-xl font-light tracking-tighter text-sky-400">
              You learn more and more over our company everyday never changes
            </p>
          </div>
          <div className="">
            <img src={authentication} alt="" className="h-96 w-96" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-medium text-black">
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
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <InputFilter
            htmlFor={"password"}
            labelName={"Password"}
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Type your password"}
            inputLimit={14}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          {error.password && (
            <div
              class="mt-4 flex rounded-md bg-red-50 p-2 text-sm text-red-600 shadow-sm dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="mr-3 inline h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Danger</span>
              <div>
                <ul class="ml-4 mt-1.5 list-inside list-disc">
                  <span class="font-medium">
                    Ensure that these requirements are met:
                  </span>
                  {error.email && (
                    <li dangerouslySetInnerHTML={{ __html: error.email }}></li>
                  )}
                  {error.password && (
                    <li
                      dangerouslySetInnerHTML={{ __html: error.password }}
                    ></li>
                  )}
                </ul>
              </div>
            </div>
          )}
          {error.other && (
            <div
              class="mt-4 flex rounded-md bg-red-50 p-2 text-sm text-red-600"
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="mr-3 inline h-5 w-5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Danger</span>
              <div>
                <ul class="ml-4 mt-1.5 list-inside list-disc">
                  <span class="font-medium">
                    Ensure that these requirements are met:
                  </span>
                  {error.other && (
                    <li dangerouslySetInnerHTML={{ __html: error.other }}></li>
                  )}
                </ul>
              </div>
            </div>
          )}
          <div className="">
            <button
              type="submit"
              className="mt-6 w-full border border-gray-200 bg-gray-50 px-12 py-2 font-semibold shadow-sm transition duration-200 hover:border-sky-200 hover:bg-sky-100 hover:text-sky-700"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
