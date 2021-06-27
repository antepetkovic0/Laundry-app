import { useState, useCallback } from "react";

import { useResize } from "./useResize";

export const useWindowSize = (wait = 250) => {
  const getWindowSize = useCallback(
    () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }),
    []
  );
  const [windowSize, setWindowSize] = useState(getWindowSize);

  useResize(() => {
    setWindowSize(getWindowSize);
  }, wait);

  return windowSize;
};
