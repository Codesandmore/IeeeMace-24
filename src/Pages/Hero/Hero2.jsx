import "./Hero.css";
export default function Hero2() {
  return (
    <section id="WhyIEEE" className="section hero-2">
      <h1 className="section-heading hero-2-heading">WHY IEEE?</h1>
      <div className="hero-2-cards">
        <div className="hero-2-card1">
          <div className="hero-2-img"></div>
          <div>
            <h4 className="hero-2-card-heading">
              Travel Grant, Scholarships & Fellowship
            </h4>
            <p className="hero-2-card-para">
              IEEE offers a number of student travel grants to assist Student
              members in attending conferences and presenting papers. IEEE
              offers a variety of scholarships, grants, and fellowships for IEEE
              Student members
            </p>
          </div>
        </div>
        <div className="hero-2-card2">
          <div>
            <h4 className="hero-2-card-heading">IEEE eLearning Library</h4>
            <p className="hero-2-card-para">
              Online courses enable you to get up to speed quickly on emerging
              technologies and trends.
            </p>
          </div>
          <div className="hero-2-img"></div>
        </div>
        <div className="hero-2-card3">
          <div>
            <h4 className="hero-2-card-heading">IEEE Standards</h4>
            <p className="hero-2-card-para">
              With an active portfolio of nearly 1,300 standards and projects
              under development, IEEE is a leading developer of industry
              standards in a broad range of technologies.
            </p>
          </div>
          <div className="hero-2-img"></div>
        </div>
      </div>
    </section>
  );
}
