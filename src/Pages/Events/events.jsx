import "./events.css";

export default function Events() {
  const eventList = [
    {
      eventName: "Cybosium",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/cybosium.jpg",
    },
    {
      eventName: "TechComm",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/techcomm.jpg",
    },
    {
      eventName: "Sigma",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/sigma.jpg",
    },
    {
      eventName: ".hack();'23",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/hack23.jpg",
    },
    {
      eventName: "SPARC 2022",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/sparc2022.jpg",
    },
    {
      eventName: "SPARC 2023",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/sparc2023.jpg",
    },
    {
      eventName: "PULSE 2023",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/pulse2023.jpg",
    },
    {
      eventName: "SheCanCode2023",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/she_can_code.jpg",
    },
    {
      eventName: "Web.abc",
      eventDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quaerat eveniet cupiditate voluptas voluptatum incidunt quidem explicabo dolorum voluptate similique dicta iure unde.",
      eventImage: "/images/events/webabc.jpg",
    },
  ];

  return (
    <section id="Event" className="event">
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
