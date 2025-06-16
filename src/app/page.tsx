import Agenda from "@/components/agenda/Agenda";
import Image from "next/image";
import ScrambleText from "@/components/effects/ScrambleText";

export default function Home() {
  return (
    <div className="max-w-[1728px] w-full justify-self-center flex p-(--space-s) mx-(--space-xs) flex-col justify-center items-center ">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="inline-block md:justify-start mx-auto text-center">
          <ScrambleText className="xl:text-[300px] md:text-[20vw] text-[30vw] bold text-green no_line_height w-fit">
            SOS14
          </ScrambleText>
        </div>
        <div>
          <p className="text-lg md:text-left text-center">
            Welcome to the 14th SOS camp, a preparation camp for SKE23 students.
            We prepare you for the upcoming camp.
          </p>
        </div>
      </div>
      <section id="agenda">
        <Agenda />
      </section>
    </div>
  );
}
