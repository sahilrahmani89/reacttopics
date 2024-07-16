import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useThrottle from "../hooks/useThrottle";

const Home = () => {
  const [input, setinput] = useState("");
  const [input2, setinput2] = useState("");
  const debounceValue = useDebounce(input, 300);
  const throttleValue = useThrottle(input2, 5000);
  const handleChange = (e) => {
    const value = e.target.value;
    setinput(value);
  };
  const handleThrottleChange = (e) => {
    const value = e.target.value;
    setinput2(value);
  };
  console.log("debounceValue", debounceValue);
  console.log("throllted Balied", throttleValue);
  return (
    <>
      <input
        type={"text"}
        onChange={handleChange}
        value={input}
        placeholder="Deboiuncing things"
      />

      <input
        type={"text"}
        onChange={handleThrottleChange}
        value={input2}
        placeholder="Throttling things"
      />
    </>
  );
};

export default Home;
