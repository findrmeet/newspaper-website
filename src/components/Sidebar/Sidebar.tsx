"use client";

import { useEffect, useState } from "react";

interface CategoryGroup {
  category: string;
}

const Sidebar = () => {
  const [categories, setCategories] = useState<CategoryGroup[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/newspapers.json");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-60 hidden flex-col gap-2 rounded-xl border border-gray-300 p-2 sm:flex">
      {categories.map((item) => (
        <button
          key={item.category}
          type="button"
          className="cursor-pointer rounded-md bg-gray-100 px-3 py-2 text-left text-black transition-colors hover:bg-gray-200 focus:bg-indigo-500 focus:text-white"
        >
          {item.category}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
