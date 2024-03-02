import React from "react";

const HeaderTop: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header-top dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="contact-info">
                <i className="las la-envelope"></i> info@jydstek.com.ng |
                <i className="las la-map-marker"></i> 
                Lekki Paradise One Estate, Chevron, Lagos State
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <div className="site-info">
              The Peak Our Starting Point !
                <div className="social-area">
                  <a href="https://www.facebook.com/profile.php?id=61553834637024&mibextid=ZbWKwL">
                    <i className="lab la-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/jydstek_concepts?igsh=d2I1dnhlNGF3dmJ6">
                    <i className="lab la-instagram"></i>
                  </a>
                  <a href="https://x.com/jydstek_concept?t=UEhtz7yjY4Rs3eSt7ZbuOg&s=08">
                    <i className="lab la-twitter"></i>X
                  </a>
                  <a href="">
                    <i className="la la-skype"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderTop;
