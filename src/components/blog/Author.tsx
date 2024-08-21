import React from "react";

const Author: React.FC = () => {
  return (
    <div className="author-profile">
      <img src="/assets/img/client-img.jpg" alt="" />
      <div className="author-info">
        <h6>Emmanuel Nweke</h6>
        <p>
        Jydstek Elevator is the epitome of innovation and reliability.
        Their attention to detail and commitment to safety are unmatched.
        Our projects have greatly benefited from their expertise and state-of-the-art solutions
        </p>
        <div className="social-icon">
          <ul>
            <li>
              <a href="#" className="">
                <i className="lab la-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <i className="lab la-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <i className="lab la-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <i className="lab la-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Author;
