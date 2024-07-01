import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="feet">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5500639865463!2d76.6193309!3d10.053936999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e6154a2133e5%3A0x2c26b2d532bb30ea!2sMar%20Athanasius%20College%20of%20Engineering%20-%20Kothamangalam!5e0!3m2!1sen!2sin!4v1718273487535!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="links">
          <div className="link-contact">
            <div className="useful-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a className="link-item" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="link-item" href="#about">
                    About us
                  </a>
                </li>
                <li>
                  <a className="link-item" href="https://ieeemace.org/">
                    IEEE MACE SB
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>
                Mar Athanasius College of Engineering,
                <br />
                Kothamangalam, Kerala-686666, India
                <br />
                <br />
                <strong>Phone:</strong> +91 9895235183
                <br />
                <strong>Email:</strong> ieeemace@gmail.com
                <br />
              </p>
            </div>
          </div>
          <div className="container p-4">
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.facebook.com/ieeemace/"
                role="button"
              >
                <FaFacebookF />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://twitter.com/ieeemace"
                role="button"
              >
                <FaXTwitter />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.instagram.com/ieeemace/"
                role="button"
              >
                <FaInstagram />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/company/ieeemace/mycompany/"
                role="button"
              >
                <FaLinkedin />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://youtube.com/@ieeemacesb7201"
                role="button"
              >
                <FaYoutube />
              </a>
            </section>
            {/* <section>
            <form action="">
              <div className="row-d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>JOIN IEEE NOW</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      style={{
                        backgroundColor: "rgba(250,250,250,0.1)",
                        borderRadius: "0px",
                        border: "none",
                        outline: "none",
                        color: "#fff",
                      }}
                      type="email"
                      id="form5Example2"
                      className="form-control"
                      placeholder="Your Email"
                    />
                    {/* <label className="form-label" htmlFor="form5Example2">
                      Email address
                    </label> 
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section> */}
          </div>
        </div>
      </div>
      <div className="claim">
        <p>
          <i className="fa">
            <FaRegCopyright />
          </i>
          &#160;COPYRIGHT{" "}
          <i className="fa">
            <FaRegCopyright />
          </i>
          <script>document.write(new Date().getFullYear())</script> 2024
          <a href="#" className="ieee-footer">
            {" "}
            IEEE MACE
          </a>{" "}
          ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
