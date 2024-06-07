import React from "react";
import "./Gallery.css";

export default function Gallery() {
    const gallery = [
        {
            imagePath: "src/assets/gallery/g1.JPG",
            paragraph: '"AGM 2023"',
        },
        {
            imagePath: "src/assets/gallery/g2.JPG",
            paragraph: '"PELS Day"',
        },
        {
            imagePath: "src/assets/gallery/g5.jpg",
            paragraph: '"Subcommittee Training"',
        },
        {
            imagePath: "src/assets/gallery/g3.jpg",
            paragraph: '"PES Day"',
        },
        {
            imagePath: "src/assets/gallery/g4.JPG",
            paragraph: '"Subcommittee Training"',
        },
        {
            imagePath: "src/assets/gallery/g6.jpg",
            paragraph: '"Arduino Day"',
        },
        {
            imagePath: "src/assets/gallery/g8.JPG",
            paragraph: '"Arduino Day"',
        },
        {
            imagePath: "src/assets/gallery/g9.JPG",
            paragraph: '"SPS Day"',
        },
        {
            imagePath: "src/assets/gallery/g7.jpg",
            paragraph: '"Arduino Day"',
        },
        {
            imagePath: "src/assets/gallery/g10.jpg",
            paragraph: '"Bootcamp"',
        },
    ];
    

  return (
    <section className="gallery">
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
