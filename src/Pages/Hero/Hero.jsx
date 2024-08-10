import "./Hero.css";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaRocket, FaEye } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="Hero" className="section hero">
      <div className="content">
        <h1 className="heading">
          "Advancing technology for a brighter future: Join IEEE for global
          leadership and community impact."
        </h1>
        <button className="join-us">
          <div className="join-us-div">
            <a href="https://www.ieee.org/ " target="_blank">
              JOIN US
            </a>
          </div>
        </button>
      </div>
      <div className="bottom">
        <div className="hero-card">
          <div className="hero-cards">
            <div className="card">
              <div className="front">
                <BiSolidHelpCircle />
                <p>WHAT IS IEEE ?</p>
              </div>
              <div className="back">
                <p>
                  IEEE is a global organization that develops standards to
                  ensure the consistency, compatibility, and interoperability of
                  technology. Covering areas like electronics,
                  telecommunications, and computing, IEEE enhances product
                  reliability and fosters innovation across various industries.
                </p>
              </div>
            </div>
          </div>
          <div className="hero-cards">
            <div className="card">
              <div className="front">
                <FaRocket />
                <p>MISSION</p>
              </div>
              <div className="back">
                <p>
                  IEEE's core purpose is to foster technological innovation and
                  excellence for the benefit of humanity.
                </p>
              </div>
            </div>
          </div>
          <div className="hero-cards">
            <div className="card">
              <div className="front">
                <FaEye />
                <p>VISION</p>
              </div>
              <div className="back">
                <p>
                  IEEE is essential to the global technical community and
                  to technical professionals everywhere, and is universally
                  recognized for the contributions of technology and of
                  technical professionals in improving global conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-cards-mob">
          <div className="hero-card-mob hero-card-mob-active">
            <h4>
              <FaRocket />
              WHAT IS IEEE ?
            </h4>
            <p>
              IEEE is a global organization that develops standards to ensure
              the consistency, compatibility, and interoperability of
              technology. Covering electronics, telecommunications, and
              computing, IEEE enhances product reliability and fosters
              innovation across industries.
            </p>
          </div>
          <div className="hero-card-mob">
            <h4>
              <BiSolidHelpCircle />
              MISSION
            </h4>
            <p>
              IEEE's core purpose is to foster technological innovation and
              excellence for the benefit of humanity.
            </p>
          </div>
          <div className="hero-card-mob">
            <h4>
              <FaEye />
              VISION
            </h4>
            <p>
              IEEE is essential to the global technical community and to
              technical professionals everywhere, and is universally recognized
              for the contributions of technology and of technical professionals
              in improving global conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
