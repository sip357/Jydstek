import React from "react";
import { Link } from "react-router-dom";

const About2: React.FC = () => {
  return (
    <React.Fragment>
      <div className="about-area about-two section-padding pb-50">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 col-sm-12 wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <div className="info-img">
                <img src="/assets/img/about/about-1.png" alt="" />
                <div className="founded-year">
                  <i className="flaticon-factory">Founded in 2021</i>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="about-content-area">
                <div className="section-title">
                  <h6>About Us</h6>
                  <h2>
                    We're leading in <b>vertical, horizontal and inclined transportation </b> in Nigeria
                  </h2>
                </div>

                <p>
                JYDSTEK CONCEPT NIG LTD is a company incorporated under the COMPANIES AND ALLIED MATTERS ACT 2020 as a private company limited by shares on the 2nd day of August 2021. 
              We have our offices situated in two(2) major cities in Nigeria, Abuja and Lagos. 
              The Abuja office is located in 2, Major Gen Edi Street, Nigerian Army Housing Estate, Kurudu,  Abuja, 
              while the Lagos office is situated at Lekki Paradise One Estate, Chevron Alternative Route, Lekki, Lagos State. 
                </p>
                <br />

                <p>
                We are proud to say, we are one of the fastest growing elevator companies in Nigeria on a strong foundation of integrity, reliability and multifaceted expertise. 
                We especially supply and install top quality elevators with minimal maintenance requirements. 
                Furthermore, we render consultation services, project designing and modernization.
                </p>

                <ul className="about-key mt-30">
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Installation</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Project Designing </p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Consultation Services</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Supply of Elevators & Escalators</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Maintenance</p>
                  </li>
                  <li>
                    <i className="las la-check-square"></i>
                    <p>Modernization</p>
                  </li>
                </ul>
                <div className="about-contact">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="call-us d-flex mt-30">
                          <div className="icon">
                            <i className="las la-phone"></i>
                          </div>
                          <div className="mobile-number">
                            <h5>Call Us Anytime</h5>
                            <p>+234-8166599126 </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Link to="/about" className="main-btn">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About2;
