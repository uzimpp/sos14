interface AgendaItemProps {
  day: number;
  events: EventProps[];
}

interface EventProps {
  name: string;
  time: string;
  location: string;
}

export default function AgendaItem({ day, events }: AgendaItemProps) {
  return (
    <div className="flex flex-col">
      <h4>{day}</h4>
      {events.map((event: EventProps) => (
        <div>
          {/* Render event details here */}
          <p>{event.name}</p>
          <p>{event.time}</p>
        </div>
      ))}
    </div>
  );
}
