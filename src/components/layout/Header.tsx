import { FC } from "react";
import { HeaderProps } from "../types/types";
import ThemeToggle from "./ThemeToggle";

const Header: FC<HeaderProps> = ({ title = "Scroll 2 Zap" }) => {
  return (
    <header className="flex justify-between items-center px-1 sm:px-2 md:px-3 py-2 text-2xl font-bold font-sans">
      <span>{title}</span>
      <ThemeToggle/>
    </header>
  );
};

export default Header;
