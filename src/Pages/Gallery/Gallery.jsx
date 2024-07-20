import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const gallery = [
    {
      imagePath: "/images/gallery/a1.JPG",
      paragraph: '"AGM 2024"',
    },
    {
      imagePath: "/images/gallery/a2.jpg",
      paragraph: '"PELS Day"',
    },
    {
      imagePath: "/images/gallery/g5.jpg",
      paragraph: '"Subcommittee Training"',
    },
    {
      imagePath: "/images/gallery/a4.jpg",
      paragraph: '"PES Day"',
    },
    {
      imagePath: "/images/gallery/g4.JPG",
      paragraph: '"Subcommittee Training"',
    },
    {
      imagePath: "/images/gallery/g6.jpg",
      paragraph: '"Arduino Day"',
    },
    {
      imagePath: "/images/gallery/g8.JPG",
      paragraph: '"Arduino Day"',
    },
    {
      imagePath: "/images/gallery/g9.JPG",
      paragraph: '"SPS Day"',
    },
    {
      imagePath: "/images/gallery/g7.jpg",
      paragraph: '"Arduino Day"',
    },
    {
      imagePath: "/images/gallery/g10.jpg",
      paragraph: '"Bootcamp"',
    },
  ];

  return (
    <section id="Gallery" className="gallery">
      <h1 className="section-heading">Gallery</h1>
      <div className="grid-container">
        {gallery.map((item, index) => (
          <div key={index}>
            <img
              className={`grid-item grid-item-${index + 1}`}
              src={item.imagePath}
              alt=""
            />
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
