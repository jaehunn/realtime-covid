import { useEffect } from "react";
import { useTheme } from "next-themes";

const useToggle = (element) => {
  const { theme, setTheme } = useTheme();

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    if (theme === "light") {
      element.current.classList.remove("bg-yellow-500", "-translate-x-2");
      element.current.classList.add("bg-gray-700", "translate-x-full");
    } else {
      element.current.classList.add("bg-yellow-500", "-translate-x-2");
      element.current.classList.remove("bg-gray-700", "translate-x-full");
    }
  };

  useEffect(() => {
    if (theme === "light") element.current.classList.add("bg-yellow-500", "-translate-x-2");
    else element.current.classList.add("bg-gray-700", "translate-x-full");
  }, []);

  return { theme, themeToggle };
};

export default useToggle;
