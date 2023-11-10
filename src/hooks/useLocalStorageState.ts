import { useEffect, useState } from "react";

export function useLocalStorageState<T>(
  key: string,
  initialState: T | (() => T),
) {
  const [state, setState] = useState<T>(() => {
    const hasState = localStorage.getItem(key);

    if (hasState) {
      return JSON.parse(hasState);
    }

    if (typeof initialState === "function") {
      return (initialState as () => T)();
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
}
