"use client";

import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import ArRum from "./components/ArRum";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import WeddingEvents from "./components/WeddingEvents";
import Reservation from "./components/Reservation";

export default function Home() {
  const [currentOverflow, setCurrentOverflow] = useState("hidden");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflowY = currentOverflow;
  }, [currentOverflow]);

  return (
    <main className="max-w-[28.125rem] mx-auto">
      <Hero setCurrentOverflow={setCurrentOverflow} />
      <Countdown />
      <ArRum />
      <Profile />
      <WeddingEvents />
      <Reservation />
    </main>
  );
}
