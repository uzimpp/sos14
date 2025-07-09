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
    <div className="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:grid flex flex-col gap-(--space-l) justify-items-center">
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
      className={`relative h-full w-full flex flex-col p-(--space-s-m) bg-light-purple/44 pixel-corners-s ${
        completed ? "opacity-33 scale-99" : ""
      } transition-transform transform hover:-translate-y-1 hover:shadow-2xl gap-(--space-m)`}
    >
      {completed && (
        <button
          className="right-(--space-s) top-(--space-s) absolute z-100 bg-green text--1 text-black px-(--space-2xs) py-(--space-4xs) pixel-corners-xs"
          onClick={onChange}
        >
          Completed
        </button>
      )}
      <div className="flex md:flex-col flex-row gap-(--space-m)">
        {/* Image Section */}
        <div className="flex relative items-center justify-center ">
          <div className="flex flex-shrink-0 relative md:w-[61.8%] w-(--space-2xl) aspect-square items-center justify-center pixel-corners-xs">
            <Image
              fill
              className="object-contain "
              src={problem.image}
              alt={problem.name}
            />
          </div>
        </div>
        {/* Texts */}
        <div className="flex flex-col gap-(--space-2xs) w-full">
          <h6 className="flex flex-row w-full justify-between">
            <Link
              target="_blank"
              href={problem.url}
              className="text-0 font-semibold text-white truncate"
            >
              {problem.number}. {problem.name}
            </Link>

            {/* Checkbox for Mobile */}
            <fieldset className="md:hidden flex items-center justify-center ">
              <input
                id={`m-${problem.number}`}
                type="checkbox"
                checked={completed}
                onChange={onChange}
                className="w-(--space-s) h-(--space-s) bg-green accent-green cursor-pointer"
              />
            </fieldset>
          </h6>
          <p className="text--1 text-white/61">{problem.description}</p>
        </div>
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
        {/* Checkbox for non-mobile */}
        <fieldset className="hidden md:flex items-center justify-center ">
          <input
            id={`non-m-${problem.number}`}
            type="checkbox"
            checked={completed}
            onChange={onChange}
            className="w-(--space-s) h-(--space-s) bg-green accent-green cursor-pointer"
          />
        </fieldset>
      </div>
    </div>
  );
}
