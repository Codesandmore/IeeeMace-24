import "./events.css";

export default function Events() {
  const eventList = [
    {
      eventName: "Cybosium",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
    {
      eventName: "TechComm",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
    {
      eventName: "Sigma",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
    {
      eventName: ".hack();'23",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
    {
      eventName: "SPARC 2022",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
    {
      eventName: "SPARC 2023",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
    {
      eventName: "Stem Expo 2022",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
    {
      eventName: "SheCanCode2023",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
    {
      eventName: "Web.abc",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "src/assets/events/NSS_PACE.png",
    },
  ];

  return (
    <section className="event">
      <h1 className="section-heading">Major Events</h1>
      <div className="event-container">
        {eventList.map((events, index) => (
          <div className="event-card" key={index}>
            <div className="event-image">
              <img src={events.eventImage} alt={events.eventName} />
            </div>
            <div className="event-content">
              <h4>{events.eventName}</h4>
              <p>{events.eventDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
