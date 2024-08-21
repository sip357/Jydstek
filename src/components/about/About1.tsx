import React from "react";
import { Link } from "react-router-dom";

const About1: React.FC = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
            data-wow-delay=".6s"
          >
            <div className="about-img">
              <img src="/assets/img/about/about.png" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
            data-wow-delay=".2s"
          >
            <div className="info-content-area">
              <div className="section-title">
                <h6>Welcome to JYDSTEK CONCEPT NIG LTD </h6>
                <h2>Great Experience for vertical, horizontal and inclined transportation </h2>
              </div>
              <p className="highlight">
              JYDSTEK CONCEPT NIG LTD is a company incorporated under the COMPANIES AND ALLIED MATTERS ACT 2020 as a private company limited by shares on the 2nd day of August 2021. 
              We have our offices situated in two(2) major cities in Nigeria, Abuja and Lagos. 
              The Abuja office is located in 2, Major Gen Edi Street, Nigerian Army Housing Estate, Kurudu,  Abuja, 
              while the Lagos office is situated at Lekki Paradise One Estate, Chevron Alternative Route, Lekki, Lagos State. 


              </p>
              <br />
              <p>
              Jydstek Concepts Nigeria Ltd was specifically established to meet the needs of vertical, horizontal and inclined transportation in Nigeria.
               We are into the supply, installation, maintenance and modernization of elevators and escalators.
              </p>
              <div className="about-btn mt-40">
                <Link to="/about" className="main-btn">
                  About More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
