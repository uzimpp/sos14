"use client";

import { useState } from "react";
import problemsData from "@/constant/problems";
import Image from "next/image";
import Link from "next/link";
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
  const [CurrentDay, setCurrentDay] = useState(1);

  // push to url (use query params)
  // localStorage (Per browser, Per user) => track progress
  // map matched days
  function mapProblems() {
    const CurrentDayData = problemsData.find(
      (item: DayData) => item.days === CurrentDay
    );
    if (!CurrentDayData) return null;
    const currentDayProblems = CurrentDayData?.problems || [];

    return currentDayProblems.map((problem: Problem, i: number) => (
      <div key={i}>
        <div className="w-50 h-25 flex relative">
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
            className="bg-light-purple px-(--space-s) py-(--space-2xs)"
          >
            View
          </Link>
          <input
            type="checkbox"
            defaultChecked
            className="w-(--space-s) h-(--space-s)"
          />
        </div>
      </div>
    ));
  }

  return (
    <section className="flex flex-col justify-center justify-self-center">
      <div className="flex justify-between w-full container">
        <div className="gap-(--space-m) flex flex-row">
          <button
            onClick={() => setCurrentDay(1)}
            className={`font-medium px-(--space-m) py-(--space-2xs) rounded-(--round-m) pixel-corners-s ${
              CurrentDay === 1 ? "bg-green text-black" : "bg-light-purple"
            }`}
          >
            Day 1
          </button>
          <button
            onClick={() => setCurrentDay(2)}
            className={`font-medium px-(--space-m) py-(--space-2xs) rounded-(--round-m) pixel-corners-s ${
              CurrentDay === 2 ? "bg-green text-black" : "bg-light-purple"
            }`}
          >
            Day 2
          </button>
          <button
            onClick={() => setCurrentDay(3)}
            className={`font-medium px-(--space-m) py-(--space-2xs) rounded-(--round-m) pixel-corners-s ${
              CurrentDay === 3 ? "bg-green text-black" : "bg-light-purple"
            }`}
          >
            Day 3
          </button>
        </div>
        <div className="gap-(--space-m) flex flex-row">
          <button>resources</button>
          <button>hide completed</button>
        </div>
      </div>
      <div className="problems-grid">{mapProblems()}</div>
    </section>
  );
}