import { useMemo, useState } from "react";

export const useInput = (initialState = "") => {
  const [state, setState] = useState(() => initialState);

  const handlers = useMemo(
    () => ({
      handleInputChange: (event) => {
        setState(event.target.value);
      },
    }),
    []
  );

  return [state, handlers];
};
