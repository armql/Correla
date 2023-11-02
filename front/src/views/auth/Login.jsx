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
              class="shadow-sm flex p-2 mt-4 text-sm text-red-600 rounded-md bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 inline w-5 h-5 mr-3"
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
                <ul class="mt-1.5 ml-4 list-disc list-inside">
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
              class="flex p-2 mt-4 text-sm text-red-600 rounded-md bg-red-50"
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 inline w-5 h-5 mr-3"
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
                <ul class="mt-1.5 ml-4 list-disc list-inside">
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
              className="border mt-6 shadow-sm transition duration-200 border-gray-200 px-12 py-2 w-full font-semibold bg-gray-50 hover:bg-sky-100 hover:text-sky-700 hover:border-sky-200"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
