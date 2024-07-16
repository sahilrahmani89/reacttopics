import React from "react";
import useLazyLoading from "../hooks/useLazyLoading";
// import AboutContent from "./AboutContent";

const About = () => {
  const AboutContent = useLazyLoading(() => import("./AboutContent"));
  return (
    <>
      <p>About sdheksfkwebsfjkbdsjkjksdjk</p>
      {AboutContent ? <AboutContent /> : <p>wait ......</p>}
    </>
  );
};

export default About;
