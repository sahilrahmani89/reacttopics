import React, { useState, useEffect, useRef } from "react";

const useThrottle = (value, delay) => {
  const [throttleValue, setthrottleValue] = useState("");
  const lastRan = useRef(Date.now());
  console.log("lastRRan", lastRan.current);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= delay) {
        setthrottleValue(value);
        lastRan.current = Date.now();
      }
    }, delay - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return throttleValue;
};

export default useThrottle;
