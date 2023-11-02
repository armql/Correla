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
  if (loadingUser) {
    return <div className="font-bold text-3xl">Loading</div>;
  }
  if (!userToken) {
    navigate("123/login");
  } else {
    return (
      <div className="w-full h-full mt-10 bg-gray-100">
        <QuickCards />
        <div className="flex justify-between items-center py-4 px-2">
          <div className="flex flex-col tracking-wide text-3xl text-center">
            <h1>Statistics containing our activity and overall in clinic.</h1>
            <p className="text-sm font-light text-gray-700 tracking-normal">
              For more statistics go into{" "}
              <Link className="underline hover:text-gray-600">
                Statistics Page
              </Link>{" "}
              employees can fully manage their activity ambient by ChairCRT.
            </p>
          </div>
          <img src={teamwork} alt="" />
        </div>
        <div className="w-full h-full">
          {/* TODO: Charts */}

          <div className="p-4 grid xl:grid-cols-3 grid-cols-1 gap-2 font-light text-2xl">
            <div className="flex flex-col gap-3 border justify-center p-4 bg-white items-center rounded-lg shadow-sm">
              <h1>Activity Chart</h1>
              <ActivityChart />
            </div>
            <div className="flex border flex-col gap-3 justify-center p-4 bg-white items-center rounded-lg shadow-sm">
              <h1>Procedure Chart</h1>
              <ProcedureChart />
            </div>
            <div className="flex border flex-col gap-3 justify-center bg-white items-center rounded-lg shadow-sm">
              <h1 className="p-4 text-black">Incoming Emergencies</h1>
              <div className="w-full h-full p-2">
                <EmergencyCard />
              </div>
            </div>
          </div>
          <div className="p-4 h-full w-full">
            <div className="border p-4 bg-white items-center rounded-lg shadow-sm w-full h-full">
              <h1>CRT System</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
