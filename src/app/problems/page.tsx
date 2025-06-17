import ScrambleText from "@/components/effects/ScrambleText";
import ProgressBar from "@/components/problems/ProgressBar";
import ProblemList from "@/components/problems/ProblemList";

export default function Problems() {
  return (
    <div className="w-full">
      <ProgressBar />
      <div className="max-w-[1728px] w-full flex px-(--space-m) py-(--space-s) justify-self-center justify-center">
        <div className="flex flex-col mt-(--space-l) mb-(--space-l)">
          <ScrambleText className="text-6 text-white no_line_height font-bold text-center flex mx-auto mb-(--space-s)">
            PROBLEMS
          </ScrambleText>
          <div className="max-w-[calc(5.5*var(--space-4xl))] flex">
            <p className="text-0 text-center opacity-60">
              A fundamental Python exercise often focuses on introducing and
              reinforcing core programming concepts and syntax in the Python
              programming language. It typically involves solving a specific
              problem or completing a task using Python code.
            </p>
          </div>
          <div className="gap-(--space-2xl) flex flex-row">
            <button className="font-medium bg-light-purple px-(--space-m) py-(--space-2xs) rounded-(--round-m)">
              Day 1
            </button>
            <button className="font-medium bg-light-purple px-(--space-m) py-(--space-2xs) rounded-(--round-m)">
              Day 2
            </button>
            <button className="font-medium bg-light-purple px-(--space-m) py-(--space-2xs) rounded-(--round-m)">
              Day 3
            </button>
          </div>
          <ProblemList />
        </div>
      </div>
    </div>
  );
}
