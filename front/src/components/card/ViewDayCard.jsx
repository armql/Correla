import React from "react";

export default function ViewDayCard() {
  return (
    <div className="mx-auto h-80 w-80 rounded-t-xl bg-white">
      <div className="flex w-full flex-col">
        <div className="w-full border-b-2 py-2 text-center font-light uppercase">
          Monday
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-2 py-2 text-center text-sm font-light">
          <div className="py-1 shadow-sm">9:00 - 10:00</div>
          <div className="py-1 shadow-sm">9:00 - 10:00</div>
          <div className="py-1 shadow-sm">9:00 - 10:00</div>
          <div className="py-1 shadow-sm">9:00 - 10:00</div>
          <div className="py-1 shadow-sm">9:00 - 10:00</div>
        </div>
      </div>
    </div>
  );
}
