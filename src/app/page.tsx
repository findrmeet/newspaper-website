"use client";

import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [newspaperData, setNewspaperData] = useState(
    null as null | Array<{
      imageLink: string;
      altTag: string;
    }>
  );
  useEffect(() => {
    // Fetch newspaper data from the JSON file
    const fetchNewspaperData = async () => {
      try {
        const response = await fetch("/newspapers.json");
        const data = await response.json();
        setNewspaperData(data);
      } catch (error) {
        console.error("Error fetching newspaper data:", error);
      }
    };

    fetchNewspaperData();
  }, []);

  return (
    <>
      <h2 className="p-2 bg-[#0064F71A] sm:hidden">All Bangla Newspapers</h2>
      <div className="w-[50%] bg-[#0064F7] h-0.5  sm:hidden"></div>
      <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 sm:mt-0 mt-4">
        {newspaperData &&
          newspaperData.map((newspaper, index) => (
            <Card
              key={index}
              imageLink={newspaper.imageLink}
              altTag={newspaper.altTag}
            />
          ))}
      </div>
    </>
  );
}
