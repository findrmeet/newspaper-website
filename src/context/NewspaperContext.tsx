"use client";
import { createContext, useState, ReactNode, useEffect } from "react";

interface CardItem {
  name: string;
  imageLink: string;
  altTag: string;
}

interface CategoryGroup {
  category: string;
  cards: CardItem[];
}

interface NewspaperContextType {
  data: CategoryGroup[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const NewspaperContext = createContext<NewspaperContextType | null>(
  null
);

export const NewspaperProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CategoryGroup[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  // fetch once on mount
  useEffect(() => {
    const fetchNewspaperData = async () => {
      try {
        const response = await fetch("/newspapers.json");
        const json: CategoryGroup[] = await response.json();
        setData(json);
        setActiveCategory(json[0]?.category || "");
      } catch (err) {
        console.error(err);
      }
    };
    fetchNewspaperData();
  }, []);

  return (
    <NewspaperContext.Provider
      value={{ data, activeCategory, setActiveCategory }}
    >
      {children}
    </NewspaperContext.Provider>
  );
};
