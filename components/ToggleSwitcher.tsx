import React, { useEffect, useRef } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const ToggleSwitcher = () => {
  const toggleEl = useRef(null);
  const { theme, setTheme } = useTheme();

  const toggleHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    if (theme === "light") {
      toggleEl.current.classList.remove("bg-yellow-500", "-translate-x-2");
      toggleEl.current.classList.add("bg-gray-700", "translate-x-full");
    } else {
      toggleEl.current.classList.add("bg-yellow-500", "-translate-x-2");
      toggleEl.current.classList.remove("bg-gray-700", "translate-x-full");
    }
  };

  // TODO)
  useEffect(() => {
    if (theme === "dark") toggleEl.current.classList.add("bg-gray-700", "translate-x-full");
    else toggleEl.current.classList.add("bg-yellow-500", "-translate-x-2");
  }, []);

  return (
    <button
      className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300"
      onClick={toggleHandler}
    >
      <div
        className="w-12 h-10 relative rounded-full transition duration-500 transform p-1 text-white leading-10"
        ref={toggleEl}
      >
        {!theme || theme === "light" ? (
          <FontAwesomeIcon icon={faSun} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="2x" />
        )}
      </div>
    </button>
  );
};

export default ToggleSwitcher;
