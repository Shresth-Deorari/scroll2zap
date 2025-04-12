import { useState, useEffect } from "react";
import { Theme } from "../types";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle(
        "dark",
        storedTheme === Theme.Dark,
      );
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const defaultTheme = systemPrefersDark ? Theme.Dark : Theme.Light;
      setTheme(defaultTheme);
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  });

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === Theme.Dark);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p2 rounded-full text-2xl bg-text-light dark:bg-text-dark text-bg-light dark:text-bg-dark"
    >
      {theme === Theme.Dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
