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

interface ProblemCardProps {
  problem: Problem;
  completed?: boolean;
  onChange: () => void;
}

// Map matched days  [done]
export default function MapProblems(
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
    <div className="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:grid flex flex-col gap-(--space-l) justify-items-center py-(--space-l)">
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

function ProblemCard({
  problem,
  completed = false,
  onChange,
}: ProblemCardProps) {
  return (
    <div
      className={`relative h-full w-full flex flex-col p-(--space-m) bg-light-purple/44 pixel-corners-s ${
        completed ? "opacity-33 scale-99" : ""
      } transition-transform transform hover:-translate-y-1 hover:shadow-2xl`}
    >
      {completed && (
        <div className="right-(--space-s) top-(--space-s) absolute z-100 bg-green text--1 text-black px-(--space-2xs) py-(--space-4xs) pixel-corners-xs">
          Completed
        </div>
      )}
      {/* Image Section */}
      <div className="flex relative w-full items-center justify-center mb-(--space-m)">
        <div className="flex flex-shrink-0 relative w-[61.8%] aspect-square items-center justify-center pixel-corners-xs">
          <Image
            fill
            className="object-contain "
            src={problem.image}
            alt={problem.name}
          />
        </div>
      </div>
      {/* Texts */}
      <div className="flex flex-col mb-(--space-m) gap-(--space-2xs)">
        <h6>
          <Link
            target="_blank"
            href={problem.url}
            className="text-0 font-semibold text-white truncate"
          >
            {problem.number}. {problem.name}
          </Link>
        </h6>
        <p className="text--1 text-white/61">{problem.description}</p>
      </div>
      {/* Actions */}
      <div className="flex flex-row mt-auto items-center justify-end gap-(--space-xs)">
        <Link
          target="_blank"
          href={problem.url}
          className="text-center text--1 text-white px-(--space-s) py-(--space-2xs) w-full font-semibold pixel-corners-s bg-black"
        >
          Solve
        </Link>
        {/* aspect-square pixel-corners-s h-full bg-black */}
        <fieldset className="flex items-center justify-center ">
          <input
            id={problem.number}
            type="checkbox"
            checked={completed}
            onChange={onChange}
            className="w-(--space-s) h-(--space-s) bg-green accent-green cursor-pointer"
          />
          {/* <label
            className="text--1 text-white/80 select-none"
            htmlFor={problem.number}
            onChange={onChange}
          >
          </label> */}
        </fieldset>
      </div>
    </div>
  );
}
