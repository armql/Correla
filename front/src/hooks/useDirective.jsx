import { useEffect, useRef } from "react";

const useDirective = () => {
  const sectionDirector = {
    view_appointmentSection: useRef(null),
    get_checkedSection: useRef(null),
  };

  const scroller = (sectionName) => {
    if (sectionDirector[sectionName] && sectionDirector[sectionName].current) {
      sectionDirector[sectionName].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return { sectionDirector, scroller };
};

export default useDirective;
