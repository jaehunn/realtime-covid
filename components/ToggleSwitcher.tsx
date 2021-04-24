const ToggleSwitcher = ({ setTheme }) => {
  const toggleHandler = () => {
    let theme = localStorage.getItem("theme");
    localStorage.setItem("theme", `${theme === "dark" ? "light" : "dark"}`);

    setTheme(localStorage.getItem("theme"));
    document.documentElement.classList.toggle("dark");
  };

  // TODO)
  return <div onClick={toggleHandler}>Dark</div>;
};

export default ToggleSwitcher;
