import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
// import { useToggle } from "../../hooks";

// TODO) 토글될때 움직임이 나타나지않음 Hook 수정
const ToggleSwitcher = () => {
  const toggleEl = useRef(null);
  const { theme, setTheme } = useTheme();

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    if (theme === "light") {
      toggleEl.current.classList.remove("bg-yellow-500", "-translate-x-2");
      toggleEl.current.classList.add("bg-gray-700", "translate-x-full");
    } else {
      toggleEl.current.classList.add("bg-yellow-500", "-translate-x-2");
      toggleEl.current.classList.remove("bg-gray-700", "translate-x-full");
    }
  };

  useEffect(() => {
    if (theme === "light") toggleEl.current.classList.add("bg-yellow-500", "-translate-x-2");
    else toggleEl.current.classList.add("bg-gray-700", "translate-x-full");
  }, [toggleEl, theme]);

  return (
    <button className="w-20 h-10 mt-10 rounded-full bg-gray-200 flex items-center transition duration-300 focus:outline-none" onClick={themeToggle}>
      <div className="w-12 h-10 relative rounded-full transition duration-500 transform p-1 leading-10" ref={toggleEl}></div>
    </button>
  );
};

export default React.memo(ToggleSwitcher);
