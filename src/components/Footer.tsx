import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-up">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="/" className="logo">
                <img src="/assets/img/logo-white.png" alt="jydstek" />
              </a>
              <p>
              The Peak Our Starting Point !
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5>Office</h5>
              <p>
                Nigeria- <br />
                Lekki Paradise One Estate, Chevron, Lagos State
              </p>
              <div className="company-email">
                <a href="#">info@jydstek.com.ng</a>
              </div>
              <div className="phone-number">
                <p> +234-8166599126</p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/pricing">Pricing</Link>
                  <Link to="/faq"> FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h5>Get in Touch</h5>
              <ul>
                <li>
                  <div className="social-area">
                    <a href="https://www.facebook.com/profile.php?id=61553834637024&mibextid=ZbWKwL">
                      <i className="lab la-facebook-f"></i>Facebook
                    </a>
                    <a href="https://www.instagram.com/jydstek_concepts?igsh=d2I1dnhlNGF3dmJ6">
                      <i className="lab la-instagram"></i>Instagram
                    </a>
                    <a href="https://x.com/jydstek_concept?t=UEhtz7yjY4Rs3eSt7ZbuOg&s=08">
                      <i className="lab la-twitter"></i>X
                    </a>
                    <a href="#">
                      <i className="la la-skype"></i>Skype
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
