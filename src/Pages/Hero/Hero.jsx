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
          <div className="join-us-div">JOIN US</div>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum saepe qui beatae. Alias atque ducimus porro harum
                  explicabo non? Sequi quos quod perspiciatis laboriosam maxime
                  debitis modi quaerat iste labore tenetur laudantium suscipit,
                  inventore pariatur architecto, quibusdam aliquam. Voluptas
                  laudantium nobis
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum saepe qui beatae. Alias atque ducimus porro harum
                  explicabo non? Sequi quos quod perspiciatis laboriosam maxime
                  debitis modi quaerat iste labore tenetur laudantium suscipit,
                  inventore pariatur architecto, quibusdam aliquam. Voluptas
                  laudantium nobis
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum saepe qui beatae. Alias atque ducimus porro harum
                  explicabo non? Sequi quos quod perspiciatis laboriosam maxime
                  debitis modi quaerat iste labore tenetur laudantium suscipit,
                  inventore pariatur architecto, quibusdam aliquam. Voluptas
                  laudantium nobis
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-cards-mob">
          <div className="hero-card-mob hero-card-mob-active">
            <h4>
              <BiSolidHelpCircle />
              WHAT IS IEEE ?
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              saepe qui beatae. Alias atque ducimus porro harum explicabo non?
              Sequi quos quod perspiciatis laboriosam maxime debitis modi
              quaerat iste labore tenetur laudantium suscipit, inventore
              pariatur architecto, quibusdam aliquam. Voluptas laudantium nobis
            </p>
          </div>
          <div className="hero-card-mob">
            <h4>
              <BiSolidHelpCircle />
              WHAT IS IEEE ?
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              saepe qui beatae. Alias atque ducimus porro harum explicabo non?
              Sequi quos quod perspiciatis laboriosam maxime debitis modi
              quaerat iste labore tenetur laudantium suscipit, inventore
              pariatur architecto, quibusdam aliquam. Voluptas laudantium nobis
            </p>
          </div>
          <div className="hero-card-mob">
            <h4>
              <BiSolidHelpCircle />
              WHAT IS IEEE ?
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              saepe qui beatae. Alias atque ducimus porro harum explicabo non?
              Sequi quos quod perspiciatis laboriosam maxime debitis modi
              quaerat iste labore tenetur laudantium suscipit, inventore
              pariatur architecto, quibusdam aliquam. Voluptas laudantium nobis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
