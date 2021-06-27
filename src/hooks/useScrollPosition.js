/* eslint-disable consistent-return */
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { throttle } from "lodash";

// TODO export in utils
export const getRefElement = (element) => {
  if (element && "current" in element) {
    return element.current;
  }

  return element;
};

// TODO this not working
export const useEventListener = (type, listener, element = window, options) => {
  const savedListener = useRef();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  const handleEventListener = useCallback((event) => {
    savedListener.current?.(event);
  }, []);

  useEffect(() => {
    const target = getRefElement(element);
    target?.addEventListener(type, handleEventListener, options);
    return () => target?.removeEventListener(type, handleEventListener);
  }, [type, element, options, handleEventListener]);
};

export const useScroll = (options) => {
  const { wait, element } = useMemo(
    () => ({
      wait: 250,
      element: window,
      ...options,
    }),
    [options]
  );

  const getScrollOffset = useCallback(
    (direction) => {
      const target = getRefElement(element);

      if (!target) {
        return undefined;
      }

      if ("window" in target) {
        return direction === "y" ? target.pageYOffset : target.pageXOffset;
      }

      if ("nodeType" in target) {
        return direction === "y" ? target.scrollTop : target.scrollLeft;
      }
    },
    [element]
  );

  const [scroll, setScroll] = useState({
    y: getScrollOffset("y"),
    x: getScrollOffset("x"),
  });

  const scrollFunc = useCallback(() => {
    const yOffset = getScrollOffset("y");
    const xOffset = getScrollOffset("x");

    setScroll(() => ({
      y: yOffset,
      x: xOffset,
    }));
  }, [getScrollOffset]);

  const handleScroll = useMemo(
    () =>
      wait !== 0 ? throttle(() => scrollFunc(), wait) : () => scrollFunc(),
    [wait, scrollFunc]
  );

  // useEventListener({
  //   type: "scroll",
  //   listener: handleScroll,
  //   element,
  //   options: { passive: true },
  // });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return scroll;
};
