import { Link } from "react-router-dom";
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
      eventName: "SIGMA",
      eventDescription:
        "The IEEE SPS Student Branch Chapter MACE and the IEEE SPS Kerala Chapter hosted a two-day event for students in Kerala to explore signal processing through talks, workshops, and interactions.",
      eventImage: "/images/events/sigma.jpg",
    },
    {
      eventName: ".hack();",
      eventDescription:
        "The 5th edition of IEEE MACE SB's flagship event, .hack24, was a 36-hour coding marathon held from August 30 to September 1, 2024. Sponsored by IEEE HTB  and Accelerate X, the event aimed to address pressing social issues through technology.",
      eventImage: "/images/events/hack23.jpg",
    },
    {
      eventName: "AKComSocSC 2024",
      eventDescription:
        "IEEE MACE SB hosted the All Kerala Communication Society Student Conclave that brought together students, professionals, and tech enthusiasts for two days of learning, networking, and innovation through diverse sessions and workshops.",
      eventImage: "/images/events/akcomsoc.JPG",
    },
    {
      eventName: "HACK-A-ADDICT",
      eventDescription:
        "The Hack-A-Addict hackathon was organized by IEEE MACE SB and Model Lions Club Adoor Emirates, was a 24-hour innovation marathon tackling drug addiction. The event had a prize pool of Rs.1,75,000 with additional support of Rs.50,000 for App Development.",
      eventImage: "/images/events/hackaddict.JPG",
    },
    {
      eventName: "FUSION",
      eventDescription: " IEEE SPS SBC MACE with IEEE SPS Kerala Chapter conducted  FUSION-Future of Signal Understanding through Innovation. The event featured workshops, seminars, and keynote speeches from experts in the field which propelled the future of signal processing research.",
      eventImage: "/images/events/fusion.JPG",
    },
    {
      eventName: "Industrial Visit",
      eventDescription:
        "IEEE PES SBC MACE, IEEE IE/PELS Jt. Chapter MACE and IEEE IAS SBC MACE jointly organized an industrial visit to the Lower Periyar KSEB Substation, Karimanal. The visit provided students with practical exposure and enhanced their understanding of power distribution.",
      eventImage: "/images/events/iv.JPG",
    },
    {
      eventName: "Light the Lives",
      eventDescription:
        "IEEE SIGHT Group MACE volunteers, backed by the IEEE Humanities Technological Board, electrified disadvantaged communities in Kuttampuzha, earning the Amarnath Raja Award.",
      eventImage: "/images/events/LightTheLives.jpg",
    },
    {
      eventName: "ELLENOVE",
      eventDescription: "IEEE WIE AG MACE hosted ELLENOVE , a two-session event combining technical and soft skills training. Supported by  the R10 DEI Grant, the event featured expert-led sessions on front-end development and personal development.",
      eventImage: "/images/events/ellenove.jpg",
    },
    {
      eventName: "SPARC",
      eventDescription:
        "The Student Professional Activities Regional Conclave aimed to bridge the academic-professional gap, allowing students to enhance their expertise and prepare for a brighter future.",
      eventImage: "/images/events/sparc.jpg",
    },
    
  ];

  return (
    <section id="Event" className="event">
      <h1 className="section-heading">Major Events</h1>
      <div className="event-container">
        {eventList.map((event, index) => (
          <Link
            to={`/event/${event.eventName.replace(/\s+/g, "-").toLowerCase()}`}
            key={index}
            className="event-card"
            data-aos="zoom-out"
          >
            <div className="event-image">
              <img src={event.eventImage} alt={event.eventName} />
            </div>
            <div className="event-content">
              <h4>{event.eventName}</h4>
              <p>{event.eventDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
