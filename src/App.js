import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Reducer from "./components/Reducer";
import React, { Suspense } from "react";
import CounterWithReducer from "./components/CounterWithReducer";

export default function App() {
  // let About = useLazyLoading(() => import("./components/About"));
  // About = About ? <About /> : <>Loading....</>;
  const About = React.lazy(() => import("./components/About"));

  return (
    <div className="App">
      <Suspense fallback={<>EwwLoading....</>}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Reducer />} path="/reducer" />
          <Route element={<CounterWithReducer />} path="/counter" />
        </Routes>
      </Suspense>
    </div>
  );
}
