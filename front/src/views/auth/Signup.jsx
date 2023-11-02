import React, { useState } from "react";
import InputFilter from "../../components/common/InputFilter";
import submitSignup from "../../components/skeleton/submitSignup";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState({ __html: "" });
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const validation = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });
    setSubmitting(true);

    axiosClient
      .post("/signup", {
        name: username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        city,
        address,
      })
      .then(() => {
        showAlert();
        navigate("/home");
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
            city: errors.city ? errors.city.join("<br>") : "",
            address: errors.address ? errors.address.join("<br>") : "",
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
    return <submitSignup />;
  }

  return (
    <div className="w-screen h-screen mt-10 bg-gray-100">
      <div className="flex justify-center items-center p-4">
        <form onSubmit={validation}>
          <div className="bg-white p-6 flex flex-col gap-2">
            <InputFilter
              htmlFor={"username"}
              labelName={"Username"}
              type={"username"}
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
                name={"passwordConfirmation"}
                id={"passwordConfirmation"}
                placeholder={"Type your password again"}
                inputLimit={14}
                value={passwordConfirmation}
                onChange={(ev) => setPasswordConfirmation(ev.target.value)}
              />
            </div>
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
