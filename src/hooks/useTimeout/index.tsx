import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (fn: () => void, delay?: number) => {

  const fnRef = useRef<Function>(fn);

  fnRef.current = fn;

  const timerRef = useRef<number>();

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    // console.log(fnRef.current)
    timerRef.current = setTimeout(fnRef.current, delay);

    return clear;
  }, [fnRef.current, delay]); // 监听回调函数，保证一直使用最新的回调函数

  return clear;
};

export default useTimeout;
