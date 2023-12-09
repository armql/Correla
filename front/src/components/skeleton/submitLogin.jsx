import React from "react";
import InputFilter from "../common/InputFilter";
import authentication from "../../assets/svg/authentication.svg";

export default function SubmitLogin() {
  return (
    <div className="parent flex h-screen w-screen items-center justify-center">
      <form
        action=""
        className="flex w-full flex-col items-center justify-around gap-4 border bg-gray-50 px-4 py-10 lg:flex-row"
      >
        <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-semibold">
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
        <div className="flex cursor-wait flex-col gap-3">
          <h1 className="text-4xl font-medium text-black">
            Admin Authentication
          </h1>
          <InputFilter
            htmlFor={"username"}
            labelName={"Username"}
            type={"username"}
            name={"username"}
            id={"username"}
            placeholder={"Type your username"}
            inputLimit={14}
          />
          <InputFilter
            htmlFor={"password"}
            labelName={"Password"}
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder={"Type your password"}
            inputLimit={12}
          />

          <div className="flex flex-col">
            <label htmlFor="authenticating">Authenticate</label>
            <div className="flex items-center justify-evenly gap-2 bg-sky-400 py-1 font-semibold text-white">
              Check for bot temp
              <input type="checkbox" name="" id="" />
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              disabled
              className="mt-2 w-full cursor-wait border border-gray-200 bg-gray-50 px-12 py-2 font-semibold shadow-sm transition duration-200 hover:border-sky-200 hover:bg-sky-100 hover:text-sky-700"
            >
              Logging in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
