import agenda from "@/constant/agenda";
import ScrambleText from "@/components/effects/ScrambleText";

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
      className="flex flex-col items-center w-full gap-y-(--space-l)"
    >
      <h3>
        <ScrambleText className="text-4 font-medium no_line_height glow glow-pink">
          Agenda
        </ScrambleText>
      </h3>
      <div className="grid grid-cols-[180px_10px_auto] gap-x-(--space-xl)">
        {agenda.map((item: AgendaItemProps, i) => (
          <div className="contents" key={i}>
            {/* Left: Day/Date */}
            <div className="text-right pr-4 flex flex-col items-end">
              <h2 className="text-green font-bold no_line_height pb-1">
                Day {i + 1}
              </h2>
              <h6 className="text-green/20 font-medium">{item.date}</h6>
            </div>
            {/* Middle: Dot */}
            <div
              className={`flex flex-col items-center relative z-10 bg-green/40 mt-5
                ${i !== agenda.length - 1 ? "h-full" : "h-fit"}`}
            >
              <div className="w-6 h-6 bg-green pixel-corners-s" />
            </div>
            {/* Right: Events */}
            <div className="w-fit bg-[#18141c] text-white pixel-corners-s p-6 text-lg shadow-lg min-w-[350px] mb-(--space-xl)">
              {item.events.map((event: EventProps, i) => (
                <div key={i}>
                  <span className="font-bold">{event.time}</span> {event.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
