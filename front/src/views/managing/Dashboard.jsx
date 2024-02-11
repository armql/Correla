import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ActivityChart from "../../components/custom/ActivityChart";
import ProcedureChart from "../../components/custom/ProcedureChart";
import EmergencyCard from "../../components/card/EmergencyCard";
import QuickCards from "../../components/card/QuickCards";
import teamwork from "../../assets/svg/teamwork.svg";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../api/axios";

export default function Dashboard() {
  const { currentUser, userToken, setCurrentUser } = useStateContext();
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axiosClient
      .get("/me")
      .then(({ data }) => {
        setCurrentUser(data);
        setLoadingUser(false);
      })
      .catch(() => {
        setLoadingUser(false);
      });
  }, []);
  // if (loadingUser) {
  //   return <div className="text-3xl font-bold">Loading</div>;
  // }
  // if (!userToken) {
  //   navigate("123/login");
  // } else {
  return (
    <div className="h-[100vh] w-full bg-gray-100">
      <QuickCards />
      {/* <div className="flex items-center justify-between bg-white px-4 py-4">
          <div className="flex flex-col text-center text-3xl tracking-wide">
            <h1>Statistics containing our activity and overall in clinic.</h1>
            <p className="text-sm font-light tracking-normal text-gray-700">
              For more statistics go into{" "}
              <div className="underline hover:text-gray-600">
                Statistics Page
              </div>
              employees can fully manage their activity ambient by ChairCRT.
            </p>
          </div>
          <img src={teamwork} alt="" />
        </div> */}
      {/* TODO: Charts */}

      <div className="grid grid-cols-1 gap-2 p-4 text-2xl font-light xl:grid-cols-3">
        {/* <div className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-white p-4 shadow-sm">
              <h1>Activity Chart</h1>
              <ActivityChart />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-white p-4 shadow-sm">
              <h1>Procedure Chart</h1>
              <ProcedureChart />
            </div> */}
        <div className="flex flex-col items-center justify-center gap-3 rounded-lg border bg-white shadow-sm">
          <h1 className="p-4 text-black">Incoming Emergencies</h1>
          <div className="h-[30vh] w-full p-2">
            <EmergencyCard />
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="h-full w-full items-center rounded-lg border bg-white p-4 shadow-sm">
          <h1>CRT System</h1>
        </div>
      </div>
    </div>
  );
}
// }
