"use client";

import Card from "@/components/Card/Card";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface Newspaper {
  imageLink: string;
  altTag: string;
}

export default function Home() {
  const [newspaperData, setNewspaperData] = useState<Newspaper[] | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch newspaper data
    const fetchNewspaperData = async () => {
      try {
        const response = await fetch("/newspapers.json");
        const data: Newspaper[] = await response.json();
        setNewspaperData(data);
      } catch (error) {
        console.error("Error fetching newspaper data:", error);
      }
    };

    fetchNewspaperData();
  }, []);

  // GSAP Animation Effect
  useEffect(() => {
    if (!newspaperData || !gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".card-item");

    // Initial state: invisible + below
    gsap.set(cards, { opacity: 0, y: 50 });

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          amount: 1,
          from: "start",
          grid: "auto",
        },
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, gridRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, [newspaperData]);

  return (
    <>
      <h2 className="p-2 bg-[#0064F71A] sm:hidden">All Bangla Newspapers</h2>
      <div className="w-[50%] bg-[#0064F7] h-0.5 sm:hidden"></div>

      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 sm:mt-0 mt-4"
      >
        {newspaperData &&
          newspaperData.map((newspaper, index) => (
            <div key={index} className="card-item">
              <Card imageLink={newspaper.imageLink} altTag={newspaper.altTag} />
            </div>
          ))}
      </div>
    </>
  );
}
