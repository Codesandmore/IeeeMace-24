import React from "react";
import "./Chapters.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Chapters() {
  const chaptersData = [
    {
      chapterName: "Chapter Name",
      chapterImage: "https://placehold.co/300x300",
      chapterDescription:
        "Chapter Description: Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
      chapterLogo: "https://placehold.co/100x100",
      chapterChair: "Chair",
      chapterSecretary: "Secratary",
      chapterSite: "www.chapter.com",
    },

    {
      chapterName: "Chapter Name",
      chapterImage: "https://placehold.co/300x300",
      chapterDescription:
        "Chapter Description: Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
      chapterLogo: "https://placehold.co/100x100",
      chapterChair: "Chair",
      chapterSecretary: "Secratary",
      chapterSite: "www.chapter.com",
    },

    {
      chapterName: "Chapter Name",
      chapterImage: "https://placehold.co/300x300",
      chapterDescription:
        "Chapter Description: Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
      chapterLogo: "https://placehold.co/100x100",
      chapterChair: "Chair",
      chapterSecretary: "Secratary",
      chapterSite: "www.chapter.com",
    },

    {
      chapterName: "Chapter Name",
      chapterImage: "https://placehold.co/300x300",
      chapterDescription:
        "Chapter Description: Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
      chapterLogo: "https://placehold.co/100x100",
      chapterChair: "Chair",
      chapterSecretary: "Secratary",
      chapterSite: "www.chapter.com",
    },

    {
      chapterName: "Chapter Name",
      chapterImage: "https://placehold.co/300x300",
      chapterDescription:
        "Chapter Description: Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
      chapterLogo: "https://placehold.co/100x100",
      chapterChair: "Chair",
      chapterSecretary: "Secratary",
      chapterSite: "www.chapter.com",
    },

    {
      chapterName: "Chapter Name",
      chapterImage: "https://placehold.co/300x300",
      chapterDescription:
        "Chapter Description: Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
      chapterLogo: "https://placehold.co/100x100",
      chapterChair: "Chair",
      chapterSecretary: "Secratary",
      chapterSite: "www.chapter.com",
    },
  ];

  const renderChapterCards = () => {
    return chaptersData.map((chapter, index) => (
      <div className="chapter-card" key={index}>
        <img
          src={chapter.chapterImage}
          alt={chapter.chapterName}
          className="chapter-image"
        />
        <div className="chapter-details">
          <img
            src={chapter.chapterLogo}
            alt={chapter.chapterName}
            className="chapter-logo"
          />
          <div className="chapter-text">
            <h2>{chapter.chapterName}</h2>
            <p>{chapter.chapterDescription}</p>
          </div>
          <div className="chapter-heads">
            <p>Chair: {chapter.chapterChair}</p>
            <p>Secretary: {chapter.chapterSecretary}</p>
            <p>
              Visit: <a href="">{chapter.chapterSite}</a>
            </p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="Chapters" className="chapters">
      <h1 className="section-heading">Chapters</h1>
      <div className="chapter-cards-container">{renderChapterCards()}</div>
    </section>
  );
}
