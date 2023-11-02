import React from "react";
import authentication from "../../assets/svg/authentication.svg";
import InputFilter from "../../components/common/InputFilter";

export default function Login() {
  return (
    <div className="parent flex items-center justify-center w-screen h-screen">
      <form
        action=""
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
