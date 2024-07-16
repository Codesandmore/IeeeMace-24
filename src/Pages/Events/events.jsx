import "./events.css";

export default function Events() {
  const eventList = [
    {
      eventName: "Cybosium",
      eventDescription:
        "India’s inaugural Robotic Seasonal School, organized by IEEE RAS SBC MACE, combined hybrid sessions and a three-day offline event. It emphasized bridging theory and practice in robotics and automation.",
      eventImage: "/images/events/cybosium.jpg",
    },
    {
      eventName: "TechComm",
      eventDescription:
        "The IEEE ComSoc Student Branch Chapter MACE and IEEE ComSoc Kerala Chapter organized a two-day event, offering college students from Kerala the opportunity to explore various concepts in signals and communication.",
      eventImage: "/images/events/techcomm.jpg",
    },
    {
      eventName: "Sigma",
      eventDescription:
        "The IEEE SPS Student Branch Chapter MACE, in collaboration with the IEEE SPS Kerala Chapter, hosted a two-day event for Kerala students to delve into signal processing through talks, workshops, and interactions.",
      eventImage: "/images/events/sigma.jpg",
    },
    {
      eventName: ".hack();",
      eventDescription:
        "The annual flagship event of the Student Branch offers resources, encouragement, and mentorship to participants from diverse technical backgrounds, fostering problem-solving in a dynamic atmosphere.",
      eventImage: "/images/events/hack23.jpg",
    },
    {
      eventName: "Light the Lives",
      eventDescription:
        "IEEE SIGHT Group MACE volunteers, backed by the IEEE Humanities Technological Board, brought electricity to socially disadvantaged communities in Kuttampuzha, earning the esteemed Amarnath Raja Award.",
      eventImage: "/images/events/LightTheLives.jpg",
    },
    {
      eventName: "SPARC",
      eventDescription:
        "The Student Professional Activities Regional Conclave aimed to bridge the academic-professional gap, allowing students to enhance their expertise and prepare for a brighter future.",
      eventImage: "/images/events/sparc2023.jpg",
    },
    {
      eventName: "Stem Expo 2022",
      eventDescription:
        "The IEEE PES Student Branch Chapter MACE organized a STEM Expo, providing pre-university students with insights into technical facilities and fostering their passion for engineering.",
      eventImage: "/images/events/pulse2023.jpg",
    },
    {
      eventName: "SheCanCode2023",
      eventDescription:
        "Held under the banner of IEEE Women In Engineering Affinity Group MACE, She Can Code gave female coders a unique platform to showcase their skills as seasoned coders and upskills themselves in solving advanced problems.",
      eventImage: "/images/events/she_can_code.jpg",
    },
    {
      eventName: "web.abc",
      eventDescription:
        "web.abc, organized by the IEEE Computer Society Student Branch Chapter MACE, offered a one-day workshop for pre-university students to delve into concepts like web design and UI/UX.",
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
