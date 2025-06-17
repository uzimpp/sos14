import Image from "next/image";
import Link from "next/link";
interface Problem {
  number: number;
  image: string;
  name: string;
  description: string;
  url: string;
  completed: string;
}

export default function ProblemCard({
  number = 0,
  name = "none",
  description = "none",
  image = "none",
  url = "none",
  completed = "false",
}: Problem) {
  //   const isCompleted = completed === "true";

  return (
    <div>
      <Image src={image} alt={name} />
      <h6 className="font-semibold text-1">
        {number}. {name}
      </h6>
      <p className="text-0">{description}</p>
      <div className="flex flex-row">
        <Link
          target="_blank"
          href={url}
          className="bg-light-purple px-(--space-s) py-(--space-2xs)"
        >
          View
        </Link>
        <input type="checkbox w-(--space-s) h-(--space-s)"></input>
      </div>
    </div>
  );
}
