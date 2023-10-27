import React from "react";

export default function DentalCrownCard() {
  return (
    <div className="border rounded-md text-sm mt-4 shadow-sm bg-teal-50 border-teal-200 text-teal-800 flex flex-col gap-2">
      <div className="bg-white rounded-t-md p-2 border-b border-teal-200 shadow-sm">
        <div className="font-semibold text-lg">Dental Crowns</div>
        <p className="text-gray-700">
          Restoration of damaged or weakened teeth with crowns.
        </p>
      </div>
      <div className="text-teal-600 px-2 pb-3">
        <h2 className="ml-4 mb-1 text-lg">Resources:</h2>
        <ul className="ml-6 font-light grid grid-cols-2 gap-2">
          <li className="flex gap-2">
            Crown Material:
            <div className="flex flex-row gap-1">
              <button
                type="button"
                className="bg-white border rounded-md py-0 px-2 shadow-sm"
              >
                1
              </button>
              <button
                type="button"
                className="bg-white border rounded-md py-0 px-2 shadow-sm"
              >
                2
              </button>
              <button
                type="button"
                className="bg-white border rounded-md py-0 px-2 shadow-sm"
              >
                3
              </button>
              <button
                type="button"
                className="bg-white border rounded-md py-0 px-2 shadow-sm"
              >
                more
              </button>
            </div>
          </li>
          <li className="flex gap-2">
            Local Anesthesia:
            <div className="flex flex-row gap-1">
              <button
                type="button"
                className="bg-white border rounded-md py-0 px-2 shadow-sm"
              >
                Yes
              </button>
              <button
                type="button"
                className="bg-white border rounded-md py-0 px-2 shadow-sm"
              >
                No
              </button>
            </div>
          </li>
        </ul>
        <div className="ml-6 mt-1 font-light">
          Common: Dental lab services, dental drills, curing lights and dental
          impressions.
        </div>
      </div>
    </div>
  );
}
