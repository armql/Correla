import React from "react";

export default function QuickCards() {
  return (
    <div>
      <div className="grid gap-2 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex h-full w-full flex-row items-center justify-around gap-2 rounded-sm bg-white p-2 shadow-sm">
          <div className="flex flex-col items-center justify-center bg-white py-1 text-center text-[26px] tracking-wide text-emerald-950">
            Schedule
            <p className="text-xs font-light tracking-normal text-gray-600">
              Make a schedule
            </p>
          </div>
          <button
            type="button"
            className="cursor-pointer select-none rounded-md border bg-emerald-50 bg-opacity-40 px-6 py-1.5 text-[12px] font-light text-emerald-950 shadow-sm ring-emerald-200 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 active:bg-emerald-100 active:ring-2"
          >
            <div className="flex items-center justify-around gap-4">
              <div>Create</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="flex h-full w-full flex-row items-center justify-around gap-2 rounded-sm bg-white p-2 shadow-sm">
          <div className="flex flex-col items-center justify-center bg-white py-1 text-center text-[26px] tracking-wide text-rose-950">
            Procedure
            <p className="text-xs font-light tracking-normal text-gray-600">
              Create a procedure
            </p>
          </div>
          <button
            type="button"
            className="cursor-pointer select-none rounded-md border bg-rose-50 bg-opacity-40 px-6 py-1.5 text-[12px] font-light text-rose-950 shadow-sm ring-rose-200 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 active:bg-rose-100 active:ring-2"
          >
            <div className="flex items-center justify-around gap-4">
              <div>Create</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="flex h-full w-full flex-row items-center justify-around gap-2 rounded-sm bg-white p-2 shadow-sm">
          <div className="flex flex-col items-center justify-center bg-white py-1 text-center text-[26px] tracking-wide text-amber-950">
            Programme
            <p className="text-xs font-light tracking-normal text-gray-600">
              Weekly planprogram
            </p>
          </div>
          <div className="cursor-pointer select-none rounded-md border bg-amber-50 bg-opacity-40 px-6 py-1.5 text-[12px] font-light text-amber-950 shadow-sm transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700">
            <div className="flex items-center justify-around gap-4">
              <div>View</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-row items-center justify-around gap-2 rounded-sm bg-white p-2 shadow-sm">
          <div className="flex flex-col items-center justify-center bg-white py-1 text-center text-[26px] tracking-wide text-sky-950">
            ChairCRT
            <p className="text-xs font-light tracking-normal text-gray-600">
              idel System
            </p>
          </div>
          <div className="cursor-pointer select-none rounded-md border bg-sky-50 bg-opacity-40 px-6 py-1.5 text-[12px] font-light text-sky-950 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700">
            <div className="flex items-center justify-around gap-4">
              <div>View</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
