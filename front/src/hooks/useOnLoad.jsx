import { useState, useEffect } from "react";

const useOnLoad = () => {
  const [isOnLoad, setIsOnLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOnLoad(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return { isOnLoad };
};

export default useOnLoad;
