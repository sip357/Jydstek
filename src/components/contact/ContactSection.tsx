import React from "react";

const ContactSection: React.FC = () => {
  return (
    <React.Fragment>
      <div className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-page google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5852654051664!2d3.5379098738639168!3d6.447259324046968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7876d8df69f%3A0xef23838e752d9ac3!2sLekki%20Paradise%201%20estate!5e0!3m2!1sen!2sng!4v1709327768884!5m2!1sen!2sng"
                  width="600"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-form dark-bg">
                <div className="section-title">
                  <h2 className="text-white">Lets talk...</h2>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Your Name*</label>
                      <input type="text" placeholder="Your Full Name" />
                    </div>
                    <div className="col-md-6">
                      <label>Email Address*</label>
                      <input type="email" placeholder="E-mail Address" />
                    </div>
                    <div className="col-12">
                      <label>Subject*</label>
                      <input type="text" placeholder="Website" />
                    </div>
                    <div className="col-12">
                      <label>Message*</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Write Here"
                      ></textarea>
                    </div>
                    <div>
                      <button type="submit" className="bordered-btn">
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactSection;
