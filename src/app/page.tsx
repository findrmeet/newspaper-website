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
    <div className="sm:flex gap-4 grid grid-cols-2 sm:flex-wrap">
      {newspaperData &&
        newspaperData.map((newspaper, index) => (
          <Card
            key={index}
            imageLink={newspaper.imageLink}
            altTag={newspaper.altTag}
          />
        ))}
    </div>
  );
}
