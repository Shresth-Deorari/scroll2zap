import { LayoutProps } from "../types/types";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen py-1 px-52 flex flex-col bg-bg-light dark:bg-bg-dark transition:colors duration:300">
      <Header title="S2Z" />
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-6">{children}</main>
      <Footer />
    </div>
  );
}
