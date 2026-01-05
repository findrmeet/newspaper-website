"use client";

import Card from "@/components/Card/Card";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  name: string;
  imageLink: string;
  altTag: string;
}

interface CategoryGroup {
  category: string;
  cards: CardItem[];
}

export default function Home() {
  const [newspaperData, setNewspaperData] = useState<CategoryGroup[] | null>(
    null
  );
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNewspaperData = async () => {
      try {
        const response = await fetch("/newspapers.json");
        const data: CategoryGroup[] = await response.json();
        setNewspaperData(data);
      } catch (error) {
        console.error("Error fetching newspaper data:", error);
      }
    };

    fetchNewspaperData();
  }, []);

  useEffect(() => {
    if (!newspaperData || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".card-item");

    gsap.set(cards, { opacity: 0, y: 50 });

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, [newspaperData]);

  return (
    <>
      {newspaperData?.map((group, groupIndex) => (
        <section key={groupIndex} className="mb-10">
          {/* Category Header */}
          <h2 className="bg-[#0064F71A] p-2 sm:hidden">{group.category}</h2>
          <div className="h-0.5 w-1/2 bg-[#0064F7] sm:hidden mb-4"></div>

          {/* Cards Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {group.cards.map((card, index) => (
              <div key={index} className="card-item">
                <Card imageLink={card.imageLink} altTag={card.altTag} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
