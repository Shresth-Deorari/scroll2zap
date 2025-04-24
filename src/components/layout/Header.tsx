import { FC } from "react";
import { HeaderProps } from "../../types/types";
import ThemeToggle from "../theme/ThemeToggle";

const Header: FC<HeaderProps> = ({ title = "Scroll 2 Zap" }) => {
  return (
    <header className="bg-[var(--color-header-bg)] text-[var(--color-header-text)]">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-60 max-w-7xl flex justify-between items-center px-2 sm:px-4 md:px-6 py-3 text-2xl font-bold font-sans">
        <span>{title}</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
