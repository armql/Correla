import React from "react";
import useToggle from "../../../hooks/useToggle";
import Information from "../../../assets/svg/Information";

export default function Appointments() {
  const { auto, effect } = useToggle();

  return (
    <div className="mx-auto flex h-full w-full items-center justify-center">
      <div className="mx-auto flex h-full w-full items-center justify-center">
        <div className="flex w-full flex-row justify-between gap-4">
          <div className="relative flex h-80 w-80 flex-col rounded-r-sm border-b-2 border-r-2 border-t-2 border-sky-950 bg-sky-50 text-sky-900">
            <div className="px-3 py-[7px] text-start text-lg font-normal uppercase">
              Monday
            </div>
            <div className="flex flex-row justify-around px-4 py-[7px] text-start font-light">
              <div>9:00 - 10:00</div>
              <div className="rounded-l-sm border-l-4 border-teal-400 bg-white px-2 text-black">
                Dr.Arlind
              </div>
              <div className="rounded-l-sm border-l-4 border-rose-400 bg-white px-2 text-black">
                Dr.Rinor
              </div>
            </div>
            <div className="px-4 py-[7px] text-start font-light">
              10:00 - 11:00
            </div>
            <div className="px-4 py-[7px] text-start font-light">
              11:00 - 12:00
            </div>
            <div className="px-4 py-[7px] text-start font-light text-red-600">
              12:00 - 13:00
            </div>
            <div className="px-4 py-[7px] text-start font-light">
              13:00 - 14:00
            </div>
            <div className="px-4 py-[7px] text-start font-light">
              14:00 - 15:00
            </div>
            <div className="px-4 py-[7px] text-start font-light">
              15:00 - 16:00
            </div>
            <div className="absolute right-1 top-1 z-10">
              <button
                type="button"
                onClick={auto}
                className={`ring-none outline-none active:opacity-70`}
              >
                <Information />
              </button>
            </div>
            {effect && (
              <div className="absolute h-full w-full bg-sky-50 p-2">
                <div className="">
                  This is an appointment table each specific appointment is
                  shown and labeled as such:
                </div>
                <div className="flex flex-col gap-4 py-2">
                  <div className="flex flex-row gap-2">
                    <div className="flex items-center justify-center text-xs font-light italic text-black">
                      Available doctors have a green label
                    </div>
                    <div className="rounded-l-sm border-l-4 border-teal-400 bg-white px-2 text-black shadow-sm">
                      Dr.Arnold
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 py-2">
                    <div className="flex items-center justify-center text-xs font-light italic text-black">
                      Unavailable doctors have a red label
                    </div>
                    <div className="rounded-l-sm border-l-4 border-rose-400 bg-white px-2 text-black shadow-sm">
                      Dr.Arnold
                    </div>
                  </div>

                  <div className="flex flex-row justify-between gap-2">
                    <div className="flex items-center justify-center text-xs font-light italic text-black">
                      Doctors usually have a break on
                    </div>
                    <div className="text-start font-light text-red-600">
                      12:00 - 13:00
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          type="button"
          className="flex h-24 w-10 items-center justify-center rounded-l-full bg-sky-900 transition-all duration-300 hover:w-12"
        >
          <div className="text-sky-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
            next
          </div>
        </button>
      </div>
    </div>
  );
}
