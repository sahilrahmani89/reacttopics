import React, { useEffect, useState } from "react";

const useLazyLoading = (file) => {
  console.log("file", file);
  const [component, setcomponent] = useState(null);
  useEffect(() => {
    let isMounted = true;

    file().then((module) => {
      if (isMounted) {
        setcomponent(() => module.default);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [file]);
  return component;
};
export default useLazyLoading;
