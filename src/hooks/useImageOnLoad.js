import { useState } from "react";
import { theme } from "../styled/theme";

export const useImageOnLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Triggered when full image will be loaded.
  const handleImageOnLoad = () => {
    setIsLoaded(true);
  };

  const css = {
    thumbnail: {
      visibility: isLoaded ? "hidden" : "visible",
      backgroundColor: `${theme.neutral.two}`,
      borderRadius: "8px",
      transition: "visibility 0ms ease-out 700ms",
    },
    fullSize: {
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 700ms ease-in 0ms",
    },
  };

  return { isLoaded, handleImageOnLoad, css };
};
