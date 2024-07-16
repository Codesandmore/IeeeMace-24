import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Execom.css";

const WebTeam = () => {
  const webTeam = [
    {
      name: "Chackochan Jose",
      email: "chackochanjose@ieee.org",
      role: "Webmaster",
      image: "/images/execom/chacko.png",
    },
    {
      name: "Bifin James",
      email: "bifinjames2004@gmail.com",
      role: "Webmaster",
      image: "/images/execom/bifin.png",
    },
    {
      name: "Adwaith Raj",
      email: "adwaithraj45654@gmail.com",
      role: "Web Team",
      image: "/images/web/adwaith.png",
    },
    {
      name: "Alan Antony",
      email: "voa.alan@ieee.org",
      role: "Web Team",
      image: "/images/web/alan.png",
    },
    {
      name: "Ajay Susanth",
      email: "ajaysusanth10@gmail.com",
      role: "Web Team",
      image: "/images/web/ajay.png",
    },
    {
      name: "Fidha Ahamed",
      email: "fidhaahamedpp@gmail.com",
      role: "Web Team",
      image: "/images/web/fidha.png",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ExecomCard = ({ member }) => {
    const roleRef = useRef(null);

    useEffect(() => {
      const adjustFontSize = () => {
        const roleElement = roleRef.current;
        if (roleElement) {
          const charLength = member.role.length;
          roleElement.style.setProperty("--char-length", charLength);
          if (charLength > 21) {
            roleElement.classList.add("fit");
          } else {
            roleElement.classList.remove("fit");
          }
        }
      };
      adjustFontSize();
    }, [member.role]);

    return (
      <div className="execom-card-container">
        <div ref={roleRef} className="role">
          {member.role}
        </div>
        <div className="execom-card">
          <div className="image-container">
            <img
              src={member.image}
              alt={`${member.name}`}
              className="profile-image"
            />
            <div className="overlay">
              <div className="text">
                <p className="pname">{member.name}</p>
                <p className="pmail">{member.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="execom execom-full">
      <h1 className="section-heading">Web Team</h1>
      <div className="execom-cards">
        {webTeam.map((member, index) => (
          <ExecomCard key={index} member={member} />
        ))}
      </div>
      <div className="back-container">
        <Link to="/" className="back-button">
          Back
        </Link>
      </div>
    </div>
  );
};

export default WebTeam;
