import React from "react";

const Comments: React.FC = () => {
  return (
    <React.Fragment>
      <div className="comments-section">
        <h5>Comments (2)</h5>
        <div className="single-comments-section">
          <img src="/assets/img/client-img-2.jpg" alt="" />
          <p>
            <b>Bisola Happiness</b>
            <span>March 29, 2024</span>
          </p>
          <p>
          Our guests have noticed the difference since we switched to Jydstek Elevator. The smooth,
           reliable rides and modern features have greatly enhanced our overall guest experience.
          </p>
          <p>
            <a href="#" className="reply-btn">
              Reply
            </a>
          </p>
        </div>

        <div className="single-comments-section">
          <img src="/assets/img/client-img-3.jpg" alt="" />
          <p>
            <b>Deborah Adio</b>
            <span>February 25, 2024</span>
          </p>
          <p>
          Jydstek Elevator has set a new standard in our building.
          Their innovative designs and consistent performance have not only improved
          our operations but also increased tenant satisfaction
          </p>
          <p>
            <a href="#" className="reply-btn">
              Reply
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comments;
