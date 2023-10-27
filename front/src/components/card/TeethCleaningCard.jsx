import React from "react";

export default function TeethWhiteningCard() {
  return (
    <div className="border rounded-md text-sm mt-4 shadow-sm bg-teal-50 border-teal-200 text-teal-800 flex flex-col gap-2">
      <div className="bg-white rounded-t-md p-2 border-b border-teal-200 shadow-sm">
        <div className="font-semibold text-lg">Teeth Cleaning</div>
        <p className="text-gray-700">
          Routine cleaning and plaque removal for oral hygiene.
        </p>
      </div>
      <div className="text-teal-600 px-2 pb-3">
        <h2 className="ml-4 mb-1 text-lg">Resources:</h2>
        <ul className="ml-6 font-light grid grid-cols-2 gap-2">
          <li className="flex gap-2">
            Ultrasonic Scaler:
            <div className="flex flex-row gap-1">
              <button
                type="button"
                className="bg-white border rounded-md py-0 px-2 shadow-sm"
              >
                once
              </button>
              <button
                type="button"
                className="bg-white border rounded-md py-0 px-2 shadow-sm"
              >
                more
              </button>
            </div>
          </li>
        </ul>
        <div className="ml-6 mt-1 font-light">
          Common: Custom dental trays, laser equipment, shade guides, dental
          bibs, protective eyewear and personal protective equipment(PPE).
        </div>
      </div>
    </div>
  );
}
