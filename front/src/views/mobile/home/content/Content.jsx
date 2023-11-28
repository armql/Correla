import React from "react";

export default function Content() {
  return (
    <div className="h-full w-full bg-[rgb(251,248,247)]">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="h-80 w-80 rounded-2xl bg-gradient-to-tl from-gray-200 to-sky-700">
          <div className="flex h-full w-full -translate-x-2 -translate-y-2 items-center justify-center rounded-2xl bg-white">
            <div className="bg-gradient-to-tl from-gray-200 to-sky-700 bg-clip-text text-center text-3xl font-bold text-transparent">
              Testing myself everyday for everything possibly needed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
