import React from "react";
import useGetData from "../../hooks/useGetData";

interface details {
  id: string;
  img1: string;
  img2: string;
  img3: string;
  engineer: string;
  category: string;
  startDate: string;
  endDate: string;
  address: string;
  tags: string[];
}

interface RequestObject {
  details: details;
}

const Details: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/project-details.json");
  const details = request.details;
  return (
    <React.Fragment>
      <div className="project-single-section section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Solution to your Vertical and Horizontal Transportations</h3>
              <p>
              At Jydstek Elevator & Escalator Solutions, we are committed to elevating urban mobility and enhancing the functionality of buildings with our innovative vertical transportation systems.
              Specializing in the design, installation, maintenance, and modernization of elevators and escalators,
              we deliver state-of-the-art solutions tailored to meet the unique needs of our clients across various industries.
              </p>
              <div className="row">
                <div className="col-lg-8">
                  <div className="project-feature-img mt-40">
                    <img src={details?.img1} alt="" />
                  </div>
                  <div className="project-overview">
                    <h4>Project Overview</h4>
                    <p>
                    The project is a testament to Jydstek Limited's expertise in delivering high-quality vertical transportation solutions.
                    Through innovative design, precise engineering,
                  and unwavering commitment to safety and sustainability, we have successfully met the client’s requirements, ensuring a reliable and efficient system that will serve the building’s occupants for years to come.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="project-info">
                    <h5>Project Info</h5>
                    <p>
                      <b>Engineer:</b>
                      <span>{details?.engineer}</span>
                    </p>
                    <p>
                      <b>Category:</b>
                      <span>{details?.category}</span>
                    </p>
                    <p>
                      <b>Start Date:</b>
                      <span>{details?.startDate}</span>
                    </p>
                    <p>
                      <b>End Date:</b>
                      <span>{details?.endDate}</span>
                    </p>
                    <p>
                      <b>Address:</b>
                      <span>{details?.address}</span>
                    </p>
                    <p>
                      <b>Tags:</b>
                      <span>
                        {details?.tags?.length > 0 &&
                          details?.tags.map((tag, i) =>
                            i === details?.tags?.length - 1 ? tag : tag + ", "
                          )}
                      </span>
                    </p>
                    <div className="main-btn">View Project</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8"></div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img2} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
