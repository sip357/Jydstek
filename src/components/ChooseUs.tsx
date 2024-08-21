import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal/Modal";

const ChooseUs: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [getSrc, _] = useState("https://photos.app.goo.gl/Xhp7UPbzQMBb5X678");
  return (
    <React.Fragment>
      <div className="choose-us-area">
        <div className="container-fluid">
          <div className="row gx-0">
            <div className="col-xl-4 col-lg-4">
              <div className="choose-us-content">
                <div className="section-title">
                  <h6>Why Choose Us</h6>
                  <h3>
                    We only provide top <b>industrial</b> services
                  </h3>
                </div>
                <Link to="/about" className="main-btn">
                  Know More
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="choose-us-wrap">
                <img src="/assets/img/choose-us.jpg" alt="" />
                <div className="pop-up-video">
                  <div
                    className="video-play-btn"
                    onClick={() => setShowModal((p) => !p)}
                  >
                    <i className="las la-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showModal ? (
            <Modal setShowModal={setShowModal} src={getSrc} />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChooseUs;
