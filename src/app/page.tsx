import Agenda from "@/components/agenda/Agenda";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="grid-cols-2 gap-4 justify-between">
        <div>
          <Image
            src="/SOS14.png"
            alt="SOS14"
            width={1369}
            height={325}
            className="h-full w-auto"
          />
        </div>
        <p className="text-lg">
          Welcome to the 14th SOS camp, a preparation camp for SKE23 students.
          We prepare you for the upcoming camp.
        </p>
      </div>
      <section id="agenda">
        <Agenda />
      </section>
    </div>
  );
}
