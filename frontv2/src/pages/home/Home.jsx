import { Fragment } from "react";
import Background from "../../assets/background.jsx";
import ChatbotInfo from "../../features/home/ChatbotInfo.jsx";

export default function Home() {
  return (
    <Fragment>
      <section>
        <div className="center pt-2 w-full h-full">
          <Background />
        </div>
        <div className="absolute overflow-hidden w-[510px] hover:z-20 hover:border-zinc-300 hover:shadow-lg cursor-pointer transition select-none bg-zinc-50 border-zinc-200 h-[370px] border-l-4 border-b-4 top-0 right-0 rounded-bl-lg">
          <div className="grid grid-cols-3 text-center py-4 border-b-2 border-zinc-200 bg-opacity-60">
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
          </div>
          <div className="grid-cols-3 grid text-center bg-white">
            <div className="grid h-full items-center justify-center">
              <div className="py-3 px-10 text-sm shadow-sm">9:00 - 10:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">10:00 - 11:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">11:00 - 12:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">12:00 - 13:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">13:00 - 14:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">14:00 - 15:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">15:00 - 16:00</div>
            </div>
            <div className="grid h-full items-center justify-center">
              <div className="py-3 px-10 text-sm shadow-sm">9:00 - 10:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">10:00 - 11:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">11:00 - 12:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">12:00 - 13:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">13:00 - 14:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">14:00 - 15:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">15:00 - 16:00</div>
            </div>
            <div className="grid h-full items-center justify-center">
              <div className="py-3 px-10 text-sm shadow-sm">9:00 - 10:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">10:00 - 11:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">11:00 - 12:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">12:00 - 13:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">13:00 - 14:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">14:00 - 15:00</div>
              <div className="py-3 px-10 text-sm shadow-sm">15:00 - 16:00</div>
            </div>
          </div>
          <div className="flex justify-start p-4 font-medium items-end w-full h-full hover:underline">
            See more
          </div>
        </div>
        <div className="flex flex-start items-end ml-8">
          <h1 className="hero-header">Seamless smiles your way</h1>
        </div>
      </section>
      <ChatbotInfo />
    </Fragment>
  );
}
