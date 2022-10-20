import { useEffect, useState } from "react";

export default function useInterval(start = 0, stop, step = 1, duration) {
  const [count, setCount] = useState(start);
  let timer;
  const updateCount = () => {
    timer =
      !timer &&
      setInterval(() => {
        if (count < stop) {
          setCount((prev) => prev + step);
        } else {
          setCount(0);
        }
      }, duration);
  };
  useEffect(() => {
    updateCount();
    return () => clearInterval(timer);
  });
  return count;
}
