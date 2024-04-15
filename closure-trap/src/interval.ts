import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export const useInterval = (fn: Function, time: number) => {
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  let cleanUpFnRef = useRef<Function>();

  const clean = useCallback(() => {
    cleanUpFnRef.current?.();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => ref.current(), time);

    cleanUpFnRef.current = () => {
      clearInterval(timer);
    };

    return clean;
  }, []);

  return clean;
};
