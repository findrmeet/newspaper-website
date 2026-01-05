"use client";

import Card from "@/components/Card/Card";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NewspaperContext } from "@/context/NewspaperContext";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ctx = useContext(NewspaperContext);

  if (!ctx) return null;

  const { data, activeCategory } = ctx;

  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const emptyRefs = useRef<HTMLParagraphElement[]>([]);

  const filteredData = data.filter(
    (group) => group.category === activeCategory
  );

  useEffect(() => {
    // Animate card grids
    sectionRefs.current.forEach((section) => {
      if (!section) return;

      const cards = section.querySelectorAll(".card-item");
      gsap.set(cards, { opacity: 0, y: 50 });

      const ctxGsap = gsap.context(() => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      }, section);

      return () => ctxGsap.revert();
    });

    // Animate empty messages
    emptyRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        }
      );
    });
  }, [filteredData]);

  return (
    <>
      {filteredData.map((group, groupIndex) => (
        <section key={groupIndex} className="mb-10">
          <h2 className="bg-[#0064F71A] p-2 sm:hidden">{group.category}</h2>
          <div className="h-0.5 w-1/2 bg-[#0064F7] sm:hidden mb-4"></div>

          {group.cards.length === 0 ? (
            <p
              ref={(el) => {
                if (el) emptyRefs.current[groupIndex] = el;
              }}
              className="text-center text-sm text-gray-500 py-10"
            >
              No newspaper available for this category
            </p>
          ) : (
            <div
              ref={(el) => {
                if (el) sectionRefs.current[groupIndex] = el;
              }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {group.cards.map((card, index) => (
                <div key={index} className="card-item">
                  <Card imageLink={card.imageLink} altTag={card.altTag} />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
}
