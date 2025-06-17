import Agenda from "@/components/agenda/Agenda";
import ScrambleText from "@/components/effects/ScrambleText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) max-w-[1728px] w-full flex justify-self-center flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row gap-(--space-l) justify-between mt-(--space-m)">
        <div className="inline-block md:justify-start mx-auto text-center">
          <ScrambleText className="xl:text-[300px] md:text-[20vw] text-[30vw] bold text-green no_line_height w-fit">
            SOS14
          </ScrambleText>
        </div>
        <div className="flex items-center">
          <p className="text-2 md:text-left text-center text-white/60">
            Welcome to the 14th SOS camp, a preparation camp for SKE23 students.
            We will take you through Python programming fundamentals
          </p>
        </div>
      </div>

      <section>
        <h3>What is SOS camp?</h3>
        <div></div>
      </section>

      <section id="benefits">
        <h3>What will you get?</h3>
        <div>
          <Image src={"star.svg"} alt="fun" width={200} height={200} />
          <h6>Fun</h6>
          <p></p>
        </div>
        <div>
          <Image src={"friend.svg"} alt="friends" width={200} height={200} />
          <h6>Friends</h6>
          <p></p>
        </div>
        <div>
          <Image src={"coding.svg"} alt="codings" width={200} height={200} />
          <h6>Basic</h6>
          <p></p>
        </div>
      </section>

      <section id="agenda">
        <Agenda />
      </section>

      <section>
        <h2 className="font-medium">
          We are looking forward to seeing{" "}
          <span className="text-pink font-semibold">SKE23</span> at{" "}
          <span className="font-semibold text-green">SOS14</span>
        </h2>
      </section>
    </div>
  );
}
