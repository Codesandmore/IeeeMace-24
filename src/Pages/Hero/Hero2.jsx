import "./Hero.css";
export default function Hero2() {
  return (
    <section id="WhyIEEE" className="section hero-2">
      <h1 className="section-heading hero-2-heading">WHY IEEE?</h1>
      <div className="hero-2-cards">
        <div className="hero-2-card1" data-aos="fade-right">
          <div className="hero-2-img"></div>
          <div>
            <h4 className="hero-2-card-heading">
              Travel Grant, Scholarships & Fellowship
            </h4>
            <p className="hero-2-card-para">
              IEEE offers travel grants for student members to attend
              conferences and present research papers, scholarships and
              fellowships for academic excellence.{" "}
              {/* an eLearning Library with
              online courses, and over 1,300 active standards developed through
              an open process. */}
            </p>
          </div>
        </div>
        <div className="hero-2-card2" data-aos="fade-down-left">
          <div>
            <h4 className="hero-2-card-heading">IEEE eLearning Library</h4>
            <p className="hero-2-card-para">
              The eLearning Library provides Online Access for students to
              access a huge collection of resources for learning and research
              for students from various fields.
            </p>
          </div>
          <div className="hero-2-img"></div>
        </div>
        <div className="hero-2-card3" data-aos="fade-up-left">
          <div>
            <h4 className="hero-2-card-heading">IEEE Standards</h4>
            <p className="hero-2-card-para">
              IEEE Standards are globally recognized guidelines ensuring
              consistency, interoperability, and safety across diverse
              technologies. Developed through a consensus process, they enhance
              product reliability, facilitate innovation, and support seamless
              integration in various industries.
            </p>
          </div>
          <div className="hero-2-img"></div>
        </div>
      </div>
    </section>
  );
}
