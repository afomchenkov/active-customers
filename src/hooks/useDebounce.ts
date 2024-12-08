import { useRef } from "react";

type UseDebounce<T = any> = (
  callback: (params: T) => void,
  delay: number
) => (params: T) => any;

const useDebounce: UseDebounce = (callback, delay) => {
  const ref = useRef<NodeJS.Timeout>();

  return (...params) => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => callback(...params), delay);
  };
};

export default useDebounce;
