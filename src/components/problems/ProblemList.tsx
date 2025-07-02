"use client";

import { useState } from "react";
import problemsData from "@/constant/problems";
import Image from "next/image";
import Link from "next/link";
import BgBtn from "@/components/ui/BackgroundBtn";

interface Problem {
  number: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

interface DayData {
  days: number;
  problems: Problem[];
}

export default function ProblemList() {
  const [CurrentDay, setCurrentDay] = useState(0);

  // push to url (use query params)
  // localStorage (Per browser, Per user) => track progress
  // map matched days
  function mapProblems() {
    let problemsToShow = [];
    if (CurrentDay === 0) {
      problemsToShow = problemsData.flatMap((day) => day.problems);
    } else {
      const dayData = problemsData.find((day) => day.days === CurrentDay);
      problemsToShow = dayData?.problems || [];
    }
    return problemsToShow.map((problem: Problem, i: number) => (
      <div key={i}>
        <div className="w-(--space-4xl) h-(--space-4xl) flex relative">
          <Image src={problem.image} alt={problem.name} fill />
        </div>
        <h6 className="font-semibold text-1">
          {problem.number}. {problem.name}
        </h6>
        <p className="text-0">{problem.description}</p>
        <div className="flex flex-row">
          <Link
            target="_blank"
            href={problem.url}
            className="bg-light-purple px-(--space-s) py-(--space-2xs) pixel-corners-s"
          >
            View
          </Link>
          <input type="checkbox" className="w-(--space-s) h-(--space-s)" />
        </div>
      </div>
    ));
  }

  return (
    <section className="flex flex-col justify-center justify-self-center">
      <div className="flex justify-between w-full container">
        <div className="gap-(--space-m) flex flex-row">
          <BgBtn
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 1 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => setCurrentDay(1)}
          >
            Day 1
          </BgBtn>
          <button
            onClick={() => setCurrentDay(2)}
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 2 ? "bg-green text-black" : "bg-light-purple"
            }`}
          >
            Day 2
          </button>
          <button
            onClick={() => setCurrentDay(3)}
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 3 ? "bg-green text-black" : "bg-light-purple"
            }`}
          >
            Day 3
          </button>
          <button>resources</button>
        </div>
      </div>
      <div className="problems-grid">{mapProblems()}</div>
    </section>
  );
}