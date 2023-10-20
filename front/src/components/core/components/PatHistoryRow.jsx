import React from "react";

function PatHistoryRow({
  performedProcedure,
  scheduledFor,
  demandResources,
  performedBy,
  createdDate,
  isStatus,
}) {
  return (
    <div className="grid grid-cols-6 text-gray-600 text-start">
      <div className="shadow-sm p-4 font-light tracking-wide">
        {performedProcedure}
      </div>
      <div className="shadow-sm p-4 font-light tracking-wide">
        {scheduledFor}
      </div>
      <div className="shadow-sm p-4 font-light tracking-wide">
        {demandResources}
      </div>
      <div className="shadow-sm p-4 font-light tracking-wide underline text-black">
        {performedBy}
      </div>
      <div className="shadow-sm p-4 font-light tracking-wide">
        {createdDate}
      </div>
      <div className="shadow-sm p-4 font-light tracking-wide">{isStatus}</div>
    </div>
  );
}

export default PatHistoryRow;
