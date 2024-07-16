import React, { useReducer } from "react";

const intialState = {
  count: 0,
};

const CounterWithReducer = () => {
  function reducer(state, action) {
    if (action.type == "inc") {
      return { count: state.count + 1 };
    } else if (action.type == "dec") {
      return { count: state.count - 1 };
    } else {
      state.count = 0;
    }
  }
  const [state, dispatch] = useReducer(reducer, intialState);
  const increment = () => {
    dispatch({ type: "inc" });
  };
  const decrement = () => {
    dispatch({ type: "dec" });
  };
  return (
    <>
      <button onClick={increment}>Increase</button>
      <p>{state.count}</p>
      <button onClick={decrement}>Decrease</button>
    </>
  );
};

export default CounterWithReducer;
