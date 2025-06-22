import ScrambleText from "@/components/effects/ScrambleText";
import ProgressBar from "@/components/problems/ProgressBar";
import ProblemList from "@/components/problems/ProblemList";

export default function Problems() {
  return (
    <div className="w-full">
      <ProgressBar />
      <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) max-w-[1728px] w-full flex flex-col justify-self-center justify-center">
        <div className="flex flex-col my-(--space-l) gap-(--space-s) items-center">
          <ScrambleText className="text-4 text-white no_line_height font-bold text-center flex mx-auto glow glow-pink">
            PROBLEMS
          </ScrambleText>
          <div className="max-w-[calc(5.5*var(--space-4xl))] flex justify-center">
            <p className="text-0 text-center opacity-60">
              A fundamental Python exercise often focuses on introducing and
              reinforcing core programming concepts and syntax in the Python
              programming language. It typically involves solving a specific
              problem or completing a task using Python code.
            </p>
          </div>
        </div>
        <ProblemList />
      </div>
    </div>
  );
}
