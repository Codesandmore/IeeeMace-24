import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Execom.css";

const ExecomFull = () => {
  const members = [
    {
      name: "Pranav Vinoy",
      email: "pranavvinoy@ieee.org",
      role: "SB Chair",
      image: "/images/execom/pranav.png",
    },
    {
      name: "Nandhana MJ",
      email: "nandhanamj07@ieee.org",
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
      email: "harikrishnanashok@ieee.org",
      role: "SB Treasurer",
      image: "/images/execom/harikrishnan.png",
    },
    {
      name: "Nandana Jolly",
      email: "nandanajolly6@ieee.org",
      role: "SB Joint Secretary",
      image: "/images/execom/jolly.png",
    },
    {
      name: "Mohammed Aflah",
      email: "mohammedaflaht99@ieee.org",
      role: "Program Coordinator",
      image: "/images/execom/aflah.png",
    },
    {
      name: "Muhammed Shabeeb CT",
      email: "cmshabee@ieee.org",
      role: "Technical Coordinator",
      image: "/images/execom/shabeeb.png",
    },
    {
      name: "Abhishek K M",
      email: "abhishekkm.email@gmail.com",
      role: "Projects and Lab Coordinator",
      image: "/images/execom/abhishekh.png",
    },
    {
      name: "Joseph Hamlin",
      email: "jhamlin@ieee.org",
      role: "MDC",
      image: "/images/execom/hamlin.png",
    },
    {
      name: "Abil Biju",
      email: "abilbijuvp@ieee.org",
      role: "Social Media Manager",
      image: "/images/execom/abil.png",
    },
    {
      name: "Sivapriya PH",
      email: "sivapriya2005@ieee.org",
      role: "Social Media",
      image: "/images/execom/sivapriya.png",
    },
    {
      name: "Fidha Ahamed",
      email: "fidhaahamed@ieee.org",
      role: "Webmaster",
      image: "/images/execom/fidha.png",
    },
    {
      name: "Jeslin James",
      email: "jeslinjames@ieee.org",
      role: "Webmaster",
      image: "/images/execom/jeslin.png",
    },
    {
      name: "Shakthi Sathish Krishnan",
      email: "shakthi05@ieee.org",
      role: "ECC",
      image: "/images/execom/shakthi.png",
    },
    {
      name: "Dheeraj",
      email: "",
      role: "ECC",
      image: "/images/execom/dheeraj.png",
    },
  ];
  const societies = [
    {
      name: "Computer Society",
      members: [
        {
          name: "Aharon Johnson",
          email: "aharonjohnson@ieee.org",
          role: "Chair",
          image: "/images/execom/aharon.png",
        },
        {
          name: "Leethiya Francis",
          email: "leethiya@ieee.org",
          role: "Secretary",
          image: "/images/execom/leethiya.png",
        },
      ],
    },
    {
      name: "Communications Society",
      members: [
        {
          name: "Neha Savy",
          email: "nehasavy22@ieee.org",
          role: "Chair",
          image: "/images/execom/neha.png",
        },
        {
          name: "Madhav K Anil",
          email: "madhavkanil@ieee.org",
          role: "Secretary",
          image: "/images/execom/madhav.png",
        },
      ],
    },
    {
      name: "Industry Applications Society",
      members: [
        {
          name: "Lakshmi Dineshkumar",
          email: "lakshmidineshkumar@ieee.org",
          role: "Chair",
          image: "/images/execom/lakshmipriya.png",
        },

        {
          name: "Shilpa Santosh Nair",
          email: "shilpanair@ieee.org",
          role: "Secretary",
          image: "/images/execom/shilpa.png",
        },
      ],
    },
    {
      name: "Power and Energy Society",
      members: [
        {
          name: "Jes Gigo",
          email: "jesgigo10@gmail.com",
          role: "Chair",
          image: "/images/execom/jess.png",
        },
        {
          name: "Ryan Nelson",
          email: "ryannelson@ieee.org",
          role: "Secretary",
          image: "/images/execom/ryan.png",
        },
      ],
    },
    {
      name: "Robotics and Automation Society",
      members: [
        {
          name: "Siyadh M N",
          email: "siyadhmn.off@ieee.org",
          role: "Chair",
          image: "/images/execom/siyadh.png",
        },
        {
          name: "Donita Lemek",
          email: "donitalemek@ieee.org",
          role: "Secretary",
          image: "/images/execom/donita.png",
        },
      ],
    },
    {
      name: "IE/PELS Joint Chapter",
      members: [

        {
          name: "Devika C",
          email: "devviiiaa@ieeegmail.com",
          role: "Chair",
          image: "/images/execom/devika.png",
        },
        {
          name: "Reese Mathew",
          email: "reesemathew@ieeegmail.com",
          role: "Secretary",
          image: "/images/execom/reese.png",
        },
      ],
    },
    {
      name: "Women in Engineering Affinity Group",
      members: [
        {
          name: "Sneha Susan Biju",
          email: "snehabiju82004@ieee.org",
          role: "Chair",
          image: "/images/execom/snehabiju.png",
        },
        {
          name: "Aksa Elsa Jose",
          email: "aksaelsajose@ieee.org",
          role: "Secretary",
          image: "/images/execom/aksa.png",
        },
      ],
    },
    {
      name: "Signal Processing Society",
      members: [


        {
          name: "Lakshmi Dineshkumar",
          email: "lakshmidineshkumar@ieee.org",
          role: "Chair",
          image: "/images/execom/lakshmi.png",
        },
        {
          name: "Jassim Mohammed Salim",
          email: "jassimmohdsalim@ieee.org",
          role: "Secretary",
          image: "/images/execom/jazz.png",
        },
      ],
    },
    {
      name: "SIGHT AFFINITY Group",
      members: [
        {
          name: "Delna Eldho",
          email: "delnaeldho@ieee.org",
          role: "Chair",
          image: "/images/execom/delna.png",
        },
        {
          name: "Olisa Maria Subin",
          email: "olisasubin@ieee.org",
          role: "Secretary",
          image: "/images/execom/olisa.png",
        },
      ],
    },
    {
      name: "Vehicular Technology Society",
      members: [
        {
          name: "Ameena R",
          email: "ameenarapheeque@ieee.org",
          role: "Chair",
          image: "/images/execom/ameena.png",
        },
        {
          name: "Shifa Usman",
          email: "shifausman198961@ieee.org",
          role: "Secretary",
          image: "/images/execom/shifa.png",
        },
      ],
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
          if (charLength > 18) {
            roleElement.classList.add("fit");
          } else {
            roleElement.classList.remove("fit");
          }
        }
      };
      adjustFontSize();
    }, [member.role]);

    return (
      <div className="execom-card-container" data-aos="zoom-in">
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
      <h1 className="section-heading">Execom</h1>
      <div className="execom-cards">
        {members.map((member, index) => (
          <ExecomCard key={index} member={member} />
        ))}
      </div>
      {societies.map((society, index) => (
        <div key={index} className="society-section">
          <h2 className="society-name">{society.name}</h2>
          <div className="execom-cards">
            {society.members.map((member, memberIndex) => (
              <ExecomCard key={memberIndex} member={member} />
            ))}
          </div>
        </div>
      ))}
      <div className="back-container">
        <Link to="/" className="back-button">
          Back
        </Link>
      </div>
    </div>
  );
};

export default ExecomFull;
