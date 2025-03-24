import { ReactNode } from "react";
import DarkModeToggle from "./DarkModeToggle";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      <aside className="w-64 bg-white dark:bg-gray-800 p-4 shadow-md hidden md:block">
        <h2 className="text-2xl font-bold dark:text-white">💰 Budget App</h2>
        <DarkModeToggle />
        <nav className="mt-6 space-y-2">
          <a href="#" className="block px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Dashboard</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Transactions</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 dark:text-white">{children}</main>
    </div>
  );
}
