import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";

const useToggle = () => {
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
  }, []);

  return { toggleEl, themeToggle };
};

export default useToggle;
