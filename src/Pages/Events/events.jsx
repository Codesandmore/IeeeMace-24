import "./events.css";

export default function Events() {
  const eventList = [
    {
      eventName: "Cybosium",
      eventDescription:
        "India’s inaugural Robotic Seasonal School, organized by IEEE RAS SBC MACE, featured hybrid sessions and a three-day offline event, focusing on bridging theory and practice in robotics and automation.",
      eventImage: "/images/events/cybosium.jpg",
    },
    {
      eventName: "TechComm",
      eventDescription:
        "The IEEE ComSoc Student Branch Chapter MACE and IEEE ComSoc Kerala Chapter organized a two-day event for college students in Kerala to explore concepts in signals and communication.",
      eventImage: "/images/events/techcomm.jpg",
    },
    {
      eventName: "SIGMA",
      eventDescription:
        "The IEEE SPS Student Branch Chapter MACE and the IEEE SPS Kerala Chapter hosted a two-day event for students in Kerala to explore signal processing through talks, workshops, and interactions.",
      eventImage: "/images/events/sigma.jpg",
    },
    {
      eventName: ".hack();",
      eventDescription:
        "The annual flagship event of the Student Branch provides resources, encouragement, and mentorship to participants from diverse backgrounds, fostering problem-solving in a dynamic atmosphere through a 3-day hackathon.",
      eventImage: "/images/events/hack23.jpg",
    },
    {
      eventName: "Light the Lives",
      eventDescription:
        "IEEE SIGHT Group MACE volunteers, backed by the IEEE Humanities Technological Board, electrified disadvantaged communities in Kuttampuzha, earning the Amarnath Raja Award.",
      eventImage: "/images/events/LightTheLives.jpg",
    },
    {
      eventName: "SPARC",
      eventDescription:
        "The Student Professional Activities Regional Conclave aimed to bridge the academic-professional gap, allowing students to enhance their expertise and prepare for a brighter future.",
      eventImage: "/images/events/sparc2023.jpg",
    },
    {
      eventName: "Stem Expo '22",
      eventDescription:
        "The IEEE PES Student Branch Chapter MACE organized STEM Expo-2022, giving pre-university students insights into technical facilities and fostering their passion for engineering.",
      eventImage: "/images/events/pulse2023.jpg",
    },
    {
      eventName: "SheCanCode '23",
      eventDescription:
        "Held under the IEEE Women In Engineering Affinity Group MACE, SheCanCode-2023 gave female coders a platform to showcase their skills and upskill in solving advanced problems.",
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
          <div className="event-card" key={index} data-aos="zoom-out">
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
