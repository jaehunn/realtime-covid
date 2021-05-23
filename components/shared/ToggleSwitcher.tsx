import React, { useRef } from "react";
import { useToggle } from "../../hooks";

const ToggleSwitcher = () => {
  const { toggleEl, themeToggle } = useToggle();

  return (
    <button className="w-20 h-10 mt-10 rounded-full bg-gray-200 flex items-center transition duration-300 focus:outline-none" onClick={themeToggle}>
      <div className="w-12 h-10 relative rounded-full transition duration-500 transform p-1 text-white leading-10" ref={toggleEl}></div>
    </button>
  );
};

export default React.memo(ToggleSwitcher);
