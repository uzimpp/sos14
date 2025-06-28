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
      <div className="grid grid-cols-[180px_10px_auto] gap-x-4">
        {agenda.map((item: AgendaItemProps, i) => (
          <div className="contents" key={i}>
            {/* Left: Day/Date */}
            <div className="text-right pr-4 flex flex-col items-end">
              <div className="font-bold text-2xl text-green">Day {i + 1}</div>
              <div className="text-green opacity-60">{item.date}</div>
            </div>
            {/* Middle: Dot */}
            <div
              className={`flex flex-col items-center relative z-10 ${
                i !== agenda.length - 1 ? "bg-green/60" : "none"
              }`}
            >
              <div className="w-6 h-6 bg-green rounded-md" />
            </div>
            {/* Right: Events */}
            <div className="bg-[#18141c] text-white rounded-lg p-6 text-lg shadow-lg min-w-[350px] mb-6">
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
