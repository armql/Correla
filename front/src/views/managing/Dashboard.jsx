import React from "react";
import QuickCards from "../../components/QuickCards";
import { Link } from "react-router-dom";
import ActivityChart from "../../components/ActivityChart";
import ProcedureChart from "../../components/ProcedureChart";
import EmergencyCard from "../../components/EmergencyCard";

export default function Dashboard() {
  return (
    <div className="w-screen h-screen text-4xl mt-10">
      <QuickCards />
      <div className=" bg-gray-200 w-full h-full">
        <div className="font-light text-2xl p-2 bg-white shadow-sm">
          <h1>Statistics containing our activity and overall in clinic.</h1>
          <p className="text-[15px] tracking-tighter font-extralight">
            For more statistics go into{" "}
            <Link className="underline hover:text-gray-600">
              Statistics Page
            </Link>{" "}
            employees can fully manage their activity ambient by ChairCRT.
          </p>
        </div>

        {/* TODO: Charts */}
        <div className="border-t-2 p-4 grid xl:grid-cols-3 grid-cols-1 gap-2">
          <div className="flex flex-col gap-3 border justify-center p-4 bg-white items-center rounded-lg shadow-sm">
            <h1>Activity Chart</h1>
            <ActivityChart />
          </div>
          <div className="flex border flex-col gap-3 justify-center p-4 bg-white items-center rounded-lg shadow-sm">
            <h1>Procedure Chart</h1>
            <ProcedureChart />
          </div>
          <div className="flex border flex-col gap-3 justify-center bg-white items-center rounded-lg shadow-sm">
            <h1 className="p-4">Incoming Emergencies</h1>
            <div className="w-full h-full p-2">
              <EmergencyCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
