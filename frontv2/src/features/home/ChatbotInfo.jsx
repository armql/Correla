import TopLeftShape from "../../assets/top-left-shape.jsx";
import BottomLeftShape from "../../assets/bottom-left-shape.jsx";
import BottomRightShape from "../../assets/bottom-right-shape.jsx";
import TopRightShape from "../../assets/top-right-shape.jsx";
import RobotShape from "../../assets/robot-shape.jsx";

export default function ChatbotInfo() {
  return (
    <section className="main">
      <article className="flex h-full w-full flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4 text-center z-10">
          <h1 className="w-full lg:w-[30vw] text-6xl font-semibold px-2">
            Learn more about your health with AI
          </h1>
          <p className="lg:w-[24vw] w-full text-base text-zinc-600 px-2">
            Well documented AI available for our customers to get fast responses
            with real documentations of informations
          </p>
          <button
            type="button"
            className="rounded-lg border-4 border-teal-600 bg-teal-200 px-2 py-1.5 text-teal-900 shadow-lg shadow-teal-200 transition hover:shadow-xl hover:ring-2 hover:ring-black active:bg-teal-300 active:ring-0"
          >
            Chat with out chatbot 🤖
          </button>
        </div>
        <figure className="sm:w-[35vw] lg:w-[30vw] w-96 flex justify-center z-10 ">
          <RobotShape />
        </figure>
      </article>
      <TopLeftShape />
      <TopRightShape />
      <BottomLeftShape />
      <BottomRightShape />
    </section>
  );
}
