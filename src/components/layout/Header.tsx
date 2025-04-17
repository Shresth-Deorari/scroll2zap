import { FC } from "react";
import { HeaderProps } from "../../types/types";
import ThemeToggle from "../theme/ThemeToggle";

const Header: FC<HeaderProps> = ({ title = "Scroll 2 Zap" }) => {
  return (
    <header className="w-screen bg-emerald-500">
      <div className="flex justify-between items-center px-1 sm:px-2 md:px-3 py-2 text-2xl font-bold font-sans mx-auto max-w-7xl">
        <span>{title}</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
