import { LayoutProps } from "../types";

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light dark:bg-bg-dark transition:colors duration:300">
      {/* Header */}
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-6">{children}</main>
      {/* Footer */}
    </div>
  );
}
