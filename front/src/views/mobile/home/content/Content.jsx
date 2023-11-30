import React from "react";
import Appointments from "../../appointments/appointments";

export default function Content({ sectionDirector }) {
  return (
    <div className="h-full w-full">
      <section
        ref={sectionDirector.view_appointmentSection}
        className="h-screen w-screen bg-white"
      >
        <Appointments />
      </section>
      <div className="h-40 w-full rounded-bl-full bg-white"></div>
      <section
        ref={sectionDirector.get_checkedSection}
        className="h-screen w-screen bg-red-400"
      >
        Get checked
      </section>
    </div>
  );
}
