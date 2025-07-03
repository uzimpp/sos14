"use client";

import problemsData from "@/constant/problems";
import Link from "next/link";
import DropdownBtn from "@/components/ui/DropdownBtn";
import slides from "@/constant/slides";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Problem {
  number: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

interface ProblemCardProps {
  problem: Problem;
  completed?: boolean;
  onChange: () => void;
}

function ProblemCard({
  problem,
  completed = false,
  onChange,
}: ProblemCardProps) {
  return (
    <div className="pixel-corners-s bg-[#3a2e3f] w-full aspect-[3/4] flex flex-col justify-between p-4 relative">
      <div className="bg-gray-300 rounded-md w-full h-32 mb-4" />
      <h6 className="font-semibold text-1 mb-1">
        {problem.number}. {problem.name}
      </h6>
      <p className="text-0 mb-4">{problem.description}</p>
      <div className="flex flex-row items-center justify-between mt-auto">
        <Link
          target="_blank"
          href={problem.url}
          className="bg-black text-white w-32 py-1 rounded pixel-corners-s"
        >
          View
        </Link>
        <input
          type="checkbox"
          checked={completed}
          onChange={onChange}
          className="w-5 h-5 accent-green-400 ml-2"
        />
      </div>
    </div>
  );
}

// Map matched days  [done]
function mapProblems(
  CurrentDay: number,
  completedStatus: { [key: string]: boolean },
  handleCheckboxChange: (problemNumber: string) => void
) {
  let problemsToShow: Problem[] = [];
  if (CurrentDay === 0) {
    problemsToShow = problemsData.flatMap((day) => day.problems);
  } else {
    const dayData = problemsData.find((day) => day.days === CurrentDay);
    problemsToShow = dayData?.problems || [];
  }
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-(--space-l) justify-items-center">
      {problemsToShow.map((problem) => (
        <ProblemCard
          key={problem.number}
          problem={problem}
          completed={!!completedStatus[problem.number]}
          onChange={() => handleCheckboxChange(problem.number)}
        />
      ))}
    </div>
  );
}

export default function ProblemList() {
  // get day from router
  const validDays = [0, 1, 2, 3];
  const router = useRouter();
  const searchParams = useSearchParams();
  const dayParam = searchParams.get("day");
  const parsedDay = parseInt(dayParam ?? "", 10);

  useEffect(() => {
    if (Number.isNaN(parsedDay) || !validDays.includes(parsedDay)) {
      router.push("/404");
    }
  }, [parsedDay, router]);

  const CurrentDay = parsedDay;

  // localStorage (Per browser, Per user) => track progress [In progress]
  //   try to getitem => pass => display
  //                     failed =>  create one
  const [completedStatus, setCompletedStatus] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const stored = localStorage.getItem("problemCompletion");
    if (stored) {
      setCompletedStatus(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("problemCompletion", JSON.stringify(completedStatus));
  }, [completedStatus]);

  const handleCheckboxChange = (problemNumber: string) => {
    setCompletedStatus((prev) => ({
      ...prev,
      [problemNumber]: !prev[problemNumber],
    }));
  };

  // push to url (use query params) [done]
  function handleClick(day: number) {
    if (!validDays.includes(day)) day = 0;
    router.push(`/problems?day=${day}`);
  }

  return (
    <section className="flex flex-col justify-center justify-self-center">
      <div className="flex justify-between w-full container">
        <div className="gap-(--space-s) flex flex-row">
          <button
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 0 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => handleClick(0)}
          >
            All
          </button>
          <button
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 1 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => handleClick(1)}
          >
            Day 1
          </button>
          <button
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 2 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => handleClick(2)}
          >
            Day 2
          </button>
          <button
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 3 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => handleClick(3)}
          >
            Day 3
          </button>
          <DropdownBtn label="Resources">
            <Link
              href={slides.Day1}
              target="_blank"
              className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple pixel-corners-s"
            >
              Slide day 1
            </Link>
            <Link
              href={slides.Day2}
              target="_blank"
              className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple pixel-corners-s"
            >
              Slide day 2
            </Link>
            <Link
              href={slides.Day3}
              target="_blank"
              className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple pixel-corners-s"
            >
              Slide day 3
            </Link>
          </DropdownBtn>
        </div>
      </div>
      <div className="problems-grid">
        {mapProblems(CurrentDay, completedStatus, handleCheckboxChange)}
      </div>
    </section>
  );
}