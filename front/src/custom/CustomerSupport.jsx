import React from "react";
import chatbot from "../assets/svg/chatbot.svg";
export default function CustomerSupport() {
  return (
    <div className="fixed z-20 bottom-2 text-black text-lg right-2">
      <div className="flex justify-center items-center p-2 py-2.5 hover:scale-95 cursor-pointer transition active:scale-105 rounded-full bg-white">
        <img src={chatbot} alt="" className="w-9 h-9" />
      </div>
    </div>
  );
}
