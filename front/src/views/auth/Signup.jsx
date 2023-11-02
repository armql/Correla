import React, { useState } from "react";
import InputFilter from "../../components/common/InputFilter";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";
import SubmitSignup from "../../components/skeleton/submitSignup";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({ __html: "" });
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const validation = (ev) => {
    ev.preventDefault();
    console.log("validating");
    setError({ __html: "" });
    setSubmitting(true);
    console.log(username, email, password, password_confirmation);
    axiosClient
      .post("/signup", {
        name: username,
        email,
        password,
        password_confirmation: password_confirmation,
      })
      .then(() => {
        navigate("../home");
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
            password_confirmation: errors.password_confirmation
              ? errors.password_confirmation.join("<br>")
              : "",
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
    return <SubmitSignup />;
  }

  return (
    <div className="w-screen h-screen mt-10 bg-gray-100">
      <div className="flex justify-center items-center p-4">
        <form onSubmit={validation}>
          <div className="bg-white p-6 flex flex-col gap-2">
            <InputFilter
              htmlFor={"username"}
              labelName={"Username"}
              type={"text"}
              name={"username"}
              id={"username"}
              placeholder={"Type your username"}
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              inputLimit={14}
            />
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
            <div className="flex flex-row gap-4">
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
              <InputFilter
                htmlFor={"password"}
                labelName={"Password Confirmation"}
                type={"password"}
                name={"password_confirmation"}
                id={"password_confirmation"}
                placeholder={"Type your password again"}
                inputLimit={14}
                value={password_confirmation}
                onChange={(ev) => setPasswordConfirmation(ev.target.value)}
              />
            </div>

            {error.password && (
              <div
                className="flex p-2 mt-4 text-sm text-red-600 rounded-lg bg-red-50"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Danger</span>
                <div>
                  <span className="font-medium">
                    Ensure that these requirements are met:
                  </span>
                  <ul className="mt-1.5 ml-4 list-disc list-inside">
                    {error.name && (
                      <li dangerouslySetInnerHTML={{ __html: error.name }}></li>
                    )}
                    {error.email && (
                      <li
                        dangerouslySetInnerHTML={{ __html: error.email }}
                      ></li>
                    )}
                    {error.city && (
                      <li dangerouslySetInnerHTML={{ __html: error.city }}></li>
                    )}
                    {error.address && (
                      <li
                        dangerouslySetInnerHTML={{ __html: error.address }}
                      ></li>
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
                className="flex p-2 mt-4 text-sm text-red-600 rounded-lg bg-red-50"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Danger</span>
                <div>
                  <span className="font-medium">
                    Ensure that these requirements are met:
                  </span>
                  <ul className="mt-1.5 ml-4 list-disc list-inside">
                    {error.other && (
                      <li
                        dangerouslySetInnerHTML={{ __html: error.other }}
                      ></li>
                    )}
                  </ul>
                </div>
              </div>
            )}

            <div className="p-4 flex justify-center items-center w-full h-full">
              <button
                type="submit"
                className="border text-gray-700 hover:bg-gray-50 active:bg-white hover:text-black shadow-sm rounded-md py-2 px-6"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
