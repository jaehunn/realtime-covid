import React from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const ToggleSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow">
      <div
        className="w-12 h-12 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </button>
  );
};

export default ToggleSwitcher;
