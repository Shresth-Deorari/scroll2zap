import { useContext, useEffect } from "react";
import { Theme } from "../../types/types";
import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      document.documentElement.classList.toggle(
        "dark",
        storedTheme === Theme.Dark,
      );
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const defaultTheme = systemPrefersDark ? Theme.Dark : Theme.Light;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

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
