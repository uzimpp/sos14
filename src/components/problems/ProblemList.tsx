"use client";

import { Router } from "next/router";
import { useState, useEffect, } from "react";

export default function ProblemList() {
  const [CurrentDay, setCurrentDay] = useState("day1");
  // push to url (use query params)
  // cookies => track progress
  // map matched days
  return (
    <section className="flex justify-center justify-self-center">
      <div className="flex justify-between w-full container">
        <div className="gap-(--space-m) flex flex-row">
          <button
            onClick={() => setCurrentDay("day1")}
            className="font-medium bg-light-purple px-(--space-m) py-(--space-2xs) rounded-(--round-m) pixel-corners-s"
          >
            Day 1
          </button>
          <button
            onClick={() => setCurrentDay("day2")}
            className="font-medium bg-light-purple px-(--space-m) py-(--space-2xs) rounded-(--round-m) pixel-corners-s"
          >
            Day 2
          </button>
          <button
            onClick={() => setCurrentDay("day3")}
            className="font-medium bg-light-purple px-(--space-m) py-(--space-2xs) rounded-(--round-m) pixel-corners-s"
          >
            Day 3
          </button>
        </div>
        <div className="gap-(--space-m) flex flex-row">
          <button>resources</button>
          <button>hide completed</button>
        </div>
      </div>
      <div></div>
    </section>
  );
}
