import "./events.css";

export default function Events() {
  const eventList = [
    {
      eventName: "Cybosium",
      eventDescription:
        "India's First-ever Robotic Seasonal School, by IEEE RAS SBC MACE, with the support of the RAS Technical Education Program Grant, delved into robotics and automation of the current world. Held as a hybrid event comprising month-long sessions by industrial pioneers and a three-day offline event with exhibitions and workshops, the event bridged theory and practice to provide the utmost assistance.",
      eventImage: "/images/events/cybosium.jpg",
    },
    {
      eventName: "TechComm",
      eventDescription:
        "Organized under the banner of IEEE ComSoc Student Branch Chapter MACE in collaboration with the IEEE ComSoc Kerala Schapter, the two-day event focused on providing students from colleges across Kerala with an opportunity to explore a plethora of concepts on Signals and Communication.",
      eventImage: "/images/events/techcomm.jpg",
    },
    {
      eventName: "Sigma",
      eventDescription:
        "Held by the IEEE SPS Student Branch Chapter MACE, the two-day event held in collaboration with the IEEE SPS Kerala Chapter  served as a stage for students from all across Kerala to delve into their interests of signal processing through interactive talk sessions, workshops, games and lively interactions with like-minded individuals and professionals.",
      eventImage: "/images/events/sigma.jpg",
    },
    {
      eventName: ".hack();",
      eventDescription:
        "The flagship event of the Student Branch is held every year providing resources and encouragement to its participants from varied technical backgrounds to solve real-world problems in an interactive and stimulative atmosphere with technical support and mentorship.",
      eventImage: "/images/events/hack23.jpg",
    },
    {
      eventName: "Light the Lives",
      eventDescription:
        "Conducted by the volunteers for the IEEE SIGHT Group MACE, the event with the support of the IEEE Humanities Technological Board provided facilities for electricity to the socially backward communities of Kuttampuzha, paving the way for better living standards. The event earned the prestigious Amarnath Raja Award for the Best Humanitarian Initiative.",
      eventImage: "/images/events/LightTheLives.jpg",
    },
    {
      eventName: "SPARC",
      eventDescription:
        "The Student Professional Activities Regional Conclave was held to provide a platform to bridge the gap between academic and professional environments for students to polish their professional expertise and pave their way into a brighter future.",
      eventImage: "/images/events/sparc2023.jpg",
    },
    {
      eventName: "Stem Expo 2022",
      eventDescription:
        "To provide awareness of the importance of STEM education, IEEE PES Student Branch Chapter MACE conducted the STEM Expo, where pre-university students gained an insight into the technical facilities of the institution and gained a comprehensive understanding about its uses, helping them to shape their passion to be engineers at an earlier stage.",
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
        "Held by the IEEE Computer Society Student Branch Chapter MACE, web.abc promoted STEM education through a one-day workshop for pre-university students to explore varied concepts such as web design, UI/UX and many more.",
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
