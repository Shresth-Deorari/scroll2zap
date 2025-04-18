import { useState, useEffect } from "react";
import { Theme } from "../../types/types";
import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";

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
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === Theme.Dark);
    localStorage.setItem("theme", newTheme);
    console.log("Theme toggled to:", newTheme);
  };

  return (
    <Around
      aria-label="Toggle Theme"
      title="Toggle Theme"
      toggled={theme === Theme.Dark}
      onToggle={toggleTheme}
      duration={750}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

export default ThemeToggle;
