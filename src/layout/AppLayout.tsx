import { LayoutProps } from "../types";
import Header from "../components/Header";

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen p-8 flex flex-col bg-bg-light dark:bg-bg-dark transition:colors duration:300">
      <Header title="Scroll 2 Zap"/>
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-6">{children}</main>
      {/* Footer */}
    </div>
  );
}
