import { FC } from "react";
import { HeaderProps } from "../types";
import ThemeToggle from "./ThemeToggle";

const Header: FC<HeaderProps> = ({ title = "Scroll 2 Zap" }) => {
  return (
    <header className="p4 flex justify-between items-center">
      <span className="font-sans">{title}</span>
      <ThemeToggle/>
    </header>
  );
};

export default Header;
