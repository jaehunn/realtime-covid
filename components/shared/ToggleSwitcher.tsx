import React, { useRef } from "react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle } from "../../hooks";

const ToggleSwitcher = () => {
  const toggleEl = useRef(null);
  const { theme, themeToggle } = useToggle(toggleEl);

  return (
    <button
      className="w-20 h-10 mt-10 rounded-full bg-gray-200 flex items-center transition duration-300 focus:outline-none"
      onClick={themeToggle}
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

export default React.memo(ToggleSwitcher);
