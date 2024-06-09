import React from "react";
import { Link } from "react-router-dom";
import "./Execom.css";

const Execom = () => {
  const members = [
    {
      name: "Prof. Neethu Salim",
      email: "neethusalim@mace.ac.in",
      role: "Branch Counselor",
      image: "/images/execom/neethu.png",
    },
    {
      name: "Hanna Elza John",
      email: "hannaelzajohn@ieee.org",
      role: "SB Chair",
      image: "/images/execom/hanna.png",
    },
    {
      name: "Pranav Vinoy",
      email: "pranavvinoy@ieee.org",
      role: "SB Secretary",
      image: "/images/execom/pranav.png",
    },
    {
      name: "Amrutha R Nair",
      email: "amrutha2003@ieee.org",
      role: "SB Vice Chair",
      image: "/images/execom/amrutha.png",
    },
    {
      name: "Abhinav S Vijayan",
      email: "abhinavsvijayan@ieee.org",
      role: "SB Treasurer",
      image: "/images/execom/abhinav.png",
    },
    {
      name: "Anamika KP",
      email: "anamikakp@ieee.org",
      role: "SB Joint Secretary",
      image: "/images/execom/anamika.png",
    },
  ];

  const ExecomCard = ({ member, style }) => {
    return (
      <div className="execom-card-container" style={style}>
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
