import React, { useState, useEffect } from "react";

const useDebounce = (value, time) => {
  const [debounceValue, setdebounceValue] = useState("");
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setdebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);
  return debounceValue;
};

export default useDebounce;
