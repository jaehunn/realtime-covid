import React, { useRef } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const ToggleSwitcher = () => {
  const toggleButtonRef = useRef(null);
  const { theme, setTheme } = useTheme();

  const toggleHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    if (theme === "light") {
      toggleButtonRef.current.classList.remove("bg-yellow-500", "-translate-x-2");
      toggleButtonRef.current.classList.add("bg-gray-700", "translate-x-full");
    } else {
      toggleButtonRef.current.classList.add("bg-yellow-500", "-translate-x-2");
      toggleButtonRef.current.classList.remove("bg-gray-700", "translate-x-full");
    }
  };

  return (
    <button
      className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={toggleHandler}
    >
      <div
        className="w-12 h-10 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white leading-10"
        ref={toggleButtonRef}
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
