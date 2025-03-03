import React from "react";
import { Link } from "react-router-dom";
import "./Execom.css";

const Execom = () => {
  const members = [
    {
      name: "Prof. Neethu Salim",
      email: "neethusalim@ieee.org",
      role: "Branch Counselor",
      image: "/images/execom/neethu.png",
    },
    {
      name: "Pranav Vinoy",
      email: "pranavvinoy@ieee.org",
      role: "SB Chair",
      image: "/images/execom/pranav.png",
    },
    {
      name: "Nandhana MJ",
      email: "nandhanamj07.org",
      role: "SB Secretary",
      image: "/images/execom/nandhanamj.png",
    },
    {
      name: "Milan George Mathew",
      email: "milangeorgemathew@ieee.org",
      role: "SB Vice Chair",
      image: "/images/execom/milan.png",
    },
    {
      name: "Harikrishnan Ashok",
      email: "harikrishnanashok@ieee.org.org",
      role: "SB Treasurer",
      image: "/images/execom/harikrishnan.png",
    },
    {
      name: "Nandana Jolly",
      email: "nandanajolly6@ieee.org",
      role: "SB Joint Secretary",
      image: "/images/execom/jolly.png",
    },
  ];

  const ExecomCard = ({ member, style }) => {
    return (
      <div className="execom-card-container" style={style} data-aos="fade-up">
        <div className="role">{member.role}</div>
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
    <div className="execom">
      <h1 className="section-heading">Execom</h1>
      <div className="execom-cards" style={{ paddingBottom: "100px" }}>
        <ExecomCard key={0} member={members[0]} />
      </div>
      <div className="execom-cards">
        {members.slice(1).map((member, index) => (
          <ExecomCard key={index + 1} member={member} />
        ))}
      </div>
      <div className="see-more-container">
        <Link to="/execom" className="see-more-button">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Execom;
