import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  useEffect(() => {
    const setSize = () => {
      if (window !== undefined) {
        setWidth(document.documentElement.clientWidth);
        setHeight(document.documentElement.clientHeight);
      }
    };

    window.addEventListener("resize", setSize);
    window.addEventListener("orientationchange", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("orientationchange", setSize);
    };
  }, []);
  return [width, height];
}
