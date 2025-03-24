import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
      <h2 className="text-2xl font-bold">💰 Budget App</h2>
      <nav className="mt-6 space-y-2">
        <Link href="/" className="block px-4 py-2 bg-gray-200 rounded">Dashboard</Link>
        <Link href="/transactions" className="block px-4 py-2 hover:bg-gray-200 rounded">Transactions</Link>
        <Link href="/budget" className="block px-4 py-2 hover:bg-gray-200 rounded">Budget Goals</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;