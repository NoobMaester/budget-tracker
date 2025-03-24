import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className="p-2 bg-gray-300 rounded dark:bg-gray-700"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
