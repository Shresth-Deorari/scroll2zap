import { FC } from "react";
import { HeaderProps } from "../types";

const Header: FC<HeaderProps> = ({ title = "Scroll 2 Zap" }) => {
  return (
    <header className="p4 flex justify-between items-center">
      <span className="font-sans">{title}</span>
      <button className="p2 rounded-full bg-text-light dark:bg-text-dark text-bg-light dark:text-bg-dark">
        🌙
      </button>
    </header>
  );
};

export default Header;
