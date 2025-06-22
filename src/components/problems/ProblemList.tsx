export default function ProblemList() {
  return (
    <section className="flex justify-center">
      <div className="flex justify-between">
        <div className="gap-(--space-l) flex flex-row">
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
      </div>
    </section>
  );
}
