import { useMemo, useEffect } from "react";
import { debounce } from "lodash";

export const useResize = (callback, wait = 250) => {
  const handleResize = useMemo(
    () =>
      wait !== 0
        ? debounce((event) => callback(event), wait)
        : (event) => callback(event),
    [wait, callback]
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
};
