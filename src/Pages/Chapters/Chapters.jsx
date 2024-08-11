import React, { useEffect, useRef, useState } from "react";
import "./Chapters.css";

export default function Chapters() {
  const chaptersData = [
    {
      chapterName: "Computer Society",
      chapterImage: "images/Chapters/Cover/cs.jpeg",
      chapterDescription:
        "The IEEE Computer Society serves as a leading hub for knowledge, innovation, and community among computer science and engineering professionals globally. It supports individuals across all career stages with essential resources for advancing technology and fostering professional growth.",
      chapterLogo: "images/Chapters/Logo/cs_logo.png",
      chapterChair: "Colin Jimmy",
      chapterSecretary: "Ronal Shoey George",
      chapterSite: "https://computer.org",
    },
    {
      chapterName: "Robotics and Automation Society",
      chapterImage: "images/Chapters/Cover/ras.jpeg",
      chapterDescription:
        "The IEEE Robotics and Automation Society (RAS) dedicates itself to advancing robotics and automation through scientific and technological knowledge exchange, upholding high professional standards among members, and promoting benefits to the profession and society.",
      chapterLogo: "images/Chapters/Logo/ras_logo.png",
      chapterChair: "Mathew Vinu Benny",
      chapterSecretary: "Neha Savy",
      chapterSite: "https://ieee-ras.org",
    },
    {
      chapterName: "Signal Processing Society",
      chapterImage: "images/Chapters/Cover/sps.jpeg",
      chapterDescription:
        "The IEEE Signal Processing Society (SPS) leads advancements in signal processing and machine learning. It promotes global research, education, and collaboration among engineers and scientists, catalyzing innovation across sectors such as communications and healthcare.",
      chapterLogo: "images/Chapters/Logo/sps_logo1.png",
      chapterChair: "Oliviya Jain",
      chapterSecretary: "Naveen Prasad",
      chapterSite: "https://signalprocessingsociety.org",
    },
    {
      chapterName: "Communications Society",
      chapterImage: "images/Chapters/Cover/com.jpeg",
      chapterDescription:
        "The IEEE Communications Society facilitates technological innovation and global information exchange among technical professionals. It supports member development through educational resources and forums for technical discourse in academia, industry, and public sectors.",
      chapterLogo: "images/Chapters/Logo/comsoc_logo.png",
      chapterChair: "Silda Sholly",
      chapterSecretary: "Shraddha Sasikumar",
      chapterSite: "https://comsoc.org",
    },
    {
      chapterName: "Industry Applications Society",
      chapterImage: "images/Chapters/Cover/ias.jpeg",
      chapterDescription:
        " The IEEE Industry Applications Society leads in advancing theory and practice for safe, sustainable, reliable, and smart electrical systems worldwide. It supports innovation in designing, developing, manufacturing, and applying cutting-edge technologies and services.",
      chapterLogo: "images/Chapters/Logo/IAS_logo1.png",
      chapterChair: "Amritha M",
      chapterSecretary: "Ameena R",
      chapterSite: "https://ias.ieee.org",
    },
    {
      chapterName: "Power & Energy Society",
      chapterImage: "images/Chapters/Cover/pes.jpeg",
      chapterDescription:
        "The IEEE Power & Energy Society (PES) serves as a premier global platform for advancing technological innovations in the electric power industry. It sets standards, fosters research, and promotes education to ensure safe, sustainable, and efficient energy conversion, transmission, and usage.",
      chapterLogo: "images/Chapters/Logo/PES_Logo1.png",
      chapterChair: "Akhil Sebastian",
      chapterSecretary: "Jes Gigo",
      chapterSite: "https://ieee-pes.org",
    },
    {
      chapterName: "IE/PELS Joint Chapter",
      chapterImage: "images/Chapters/Cover/pels.jpeg",
      chapterDescription:
        "The IEEE Power Electronics Society (PELS) advances power electronics by leveraging electronic components, circuit theory, and analytical tools for efficient power conversion. The Industry Electronics Society (IES) enhances industrial processes through the application of electronics, controls, communications, and computational intelligence.",
      chapterLogo: "images/Chapters/Logo/pels_logo1.png",
      chapterChair: "Anu Anil",
      chapterSecretary: "Jyothika Vinod",
      chapterSite: [
        { url: "https://ieee-pels.org", label: "https://ieee-pels.org," },
        { url: "https://ieee-ies.org", label: "https://ieee-ies.org" }
      ],
    },
    {
      chapterName: "Women in Engineering",
      chapterImage: "images/Chapters/Cover/wie.jpeg",
      chapterDescription:
        "IEEE Women in Engineering (WIE) is a global network committed to promoting women in engineering and science, inspiring girls to pursue technical careers, and fostering a diverse community to innovate for the benefit of humanity.",
      chapterLogo: "images/Chapters/Logo/wie_logo1.png",
      chapterChair: "Nandhana M J",
      chapterSecretary: "Nandana Jolly",
      chapterSite: "https://wie.ieee.org",
    },
    {
      chapterName: "Special Interest Group on Humanitarian Technology",
      chapterImage: "images/Chapters/Cover/sight.jpeg",
      chapterDescription:
        "The IEEE Special Interest Group on Humanitarian Technology (SIGHT) is a global network of IEEE volunteers partnering with underserved communities to leverage technology for sustainable development, identifying and addressing local problems through technical skills and community collaboration.",
      chapterLogo: "images/Chapters/Logo/sight_logo1.png",
      chapterChair: "Siyadh M N",
      chapterSecretary: "Sian Lee",
      chapterSite: "https://sight.ieee.org",
    },
  ];

  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (isScrolling && container) {
        const cardWidth = container.querySelector(".chapter-card").clientWidth;
        scrollAmount += cardWidth;
        if (scrollAmount >= container.scrollWidth) {
          scrollAmount = 0;
        }
        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 1500);

    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  const renderChapterCards = () =>
    chaptersData.map((chapter, index) => (
      <div className="chapter-card" key={index}>
        <img
          src={chapter.chapterImage}
          alt={chapter.chapterName}
          className="chapter-image"
        />
        <div className="chapter-details">
          <div className="chapter-logo_text">
            <img
              src={chapter.chapterLogo}
              alt={chapter.chapterName}
              className="chapter-logo"
            />
            <h2>{chapter.chapterName}</h2>
          </div>
          <p className="chapter-description">{chapter.chapterDescription}</p>
          <div className="chapter-heads">
            <p>
              <span>Chair:</span> {chapter.chapterChair}
            </p>
            <p>
              <span>Secretary:</span> {chapter.chapterSecretary}
            </p>
            <p>
              <span>Visit:</span>{" "}
              {Array.isArray(chapter.chapterSite) ? (
                chapter.chapterSite.map((site, idx) => (
                  <a
                    key={idx}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.label}
                    <br></br>
                  </a>
                ))
              ) : (
                <a
                  href={chapter.chapterSite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chapter.chapterSite}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    ));

  return (
    <section id="Chapters" className="chapters">
      <h1 className="section-heading">Chapters</h1>
      <div
        className="chapter-cards-container"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {renderChapterCards()}
      </div>
    </section>
  );
}
