"use client";

import { NewspaperContext } from "@/context/NewspaperContext";
import { useContext } from "react";

const Sidebar = () => {
  const ctx = useContext(NewspaperContext);

  if (!ctx) return null; // optional safety

  const { data, activeCategory, setActiveCategory } = ctx;

  return (
    <div className="max-w-60 hidden flex-col gap-2 rounded-xl border border-gray-300 p-2 sm:flex">
      {data.map((item) => (
        <button
          key={item.category}
          onClick={() => setActiveCategory(item.category)}
          className={`cursor-pointer rounded-md px-3 py-2 text-left transition-colors
            ${
              activeCategory === item.category
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
        >
          {item.category}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
