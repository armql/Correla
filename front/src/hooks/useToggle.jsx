import React, { useState } from "react";

const useToggle = () => {
  const [effect, setEffect] = useState(false);

  const auto = () => {
    setEffect(!effect);
  };

  const open = () => {
    setEffect(true);
  };

  const close = () => {
    setEffect(false);
  };

  return { auto, effect, open, close };
};

export default useToggle;
