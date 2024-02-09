"use client";

import Five from "@/components/landingPage/Five";
import Four from "@/components/landingPage/Four";
import One from "@/components/landingPage/One";
import Six from "@/components/landingPage/Six";
import Three from "@/components/landingPage/Three";
import Two from "@/components/landingPage/Two";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.sustainobles.com.ng");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // The response is not used here, just making the request
      } catch (err: any) {
        console.error("Error:", err.message);
        // Handle error as needed
      }
    };
    fetchData();
  }, []);
  return (
    <main className=" min-h-screen ">
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
    </main>
  );
}
