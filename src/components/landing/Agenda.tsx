import agenda from "@/constant/agenda";
import ScrambleText from "@/components/effects/ScrambleText";
import { Fragment } from "react";
interface AgendaItemProps {
  date: string;
  events: EventProps[];
}

interface EventProps {
  name: string;
  time: string;
}

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="flex flex-col items-center w-full gap-y-(--space-2xl)"
    >
      <h3>
        <ScrambleText className="font-medium no_line_height glow glow-pink">
          Agenda
        </ScrambleText>
      </h3>
      <div className="grid md:grid-cols-[1fr_var(--space-2xs)_auto] md:gap-x-(--space-xl) grid-cols-[var(--space-2xs)_auto] gap-x-(--space-l) grid-area:1/2/2/3">
        {agenda.map((item: AgendaItemProps, i) => (
          <Fragment key={i}>
            {/* Left: Day/Date */}
            <div
              className={`md:col-start-${i + 1} col-start-${i + 2} row-start-${
                i + 1
              }`}
            >
              <h4 className="text-green font-bold no_line_height pb-1">
                Day {i + 1}
              </h4>
              <h6 className="text-green/20 font-medium">{item.date}</h6>
            </div>
            {/* Middle: Dot */}
            <div
              className={`flex flex-col items-center relative z-10 bg-green/40 mt-5 
                md:col-start-${i + 2} col-start-${i + 1} row-start-${i + 1}
                ${i !== agenda.length - 1 ? "h-full" : "h-fit"}`}
            >
              <div className="w-6 h-6 bg-green pixel-corners-s" />
            </div>
            {/* Right: Events */}
            <div
              className={`w-fit bg-[#18141c] text-white pixel-corners-s p-(--space-m) text-lg shadow-lg min-w-[350px] mb-(--space-3xl)
                md:col-start-${i + 3} md:row-start-${i + 1} col-start-${
                i + 2
              } row-start-${i + 2}`}
            >
              {item.events.map((event: EventProps, i) => (
                <div key={i}>
                  <span className="font-bold">{event.time}</span> {event.name}
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
