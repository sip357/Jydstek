import React from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Author from "./Author";
import Recents from "./Recents";

const BlogArea: React.FC = () => {
  return (
    <React.Fragment>
      <div id="blog-page" className="blog-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-wrap">
                <img src="/assets/img/blog/single-blog.jpg" alt="" />
                <div className="blog-meta">
                  <span>
                    <i className="las la-user"></i>Admin
                  </span>
                  <span>
                    <i className="las la-calendar"></i>May 10, 2024
                  </span>
                  <span>
                    <i className="las la-comments"></i>2 Comments
                  </span>
                </div>
                <h3>
                Welcome to our blog! 
                </h3>
                <p>
                Welcome to the heart of vertical innovation! Our blog is your gateway to the fascinating world of elevator technology,
                where we explore the intersection of engineering excellence and cutting-edge advancements. 
                As industry leaders in elevator technology, we are committed to delivering state-of-the-art solutions that ensure safety,
                 efficiency, and innovation in vertical transportation.
                </p>
                <p>
                Our blog is dedicated to sharing insights, latest trends, 
                and expert advice on everything from elevator design
                and maintenance to cutting-edge advancements in smart technology.
                </p>
                <p>
                Whether you're an architect, building manager, or simply passionate about engineering, 
                join us as we explore the dynamic world of elevators
                and strive to elevate your understanding of this essential industry.
                </p>
                <h5>Step into the core of pioneering vertical advancements.</h5>
                <p>
                Dive into stories of groundbreaking designs, smart technology integrations,
                and the future of urban mobility. From tips on optimizing elevator performance to insights into the latest safety standards,
                our blog is packed with valuable information for architects, building managers,
                and technology enthusiasts alike. Join us on this exciting journey as we elevate not just buildings,
                 but the very standards of the industry, one story at a time.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="blog-inside"
                      src="/assets/img/blog/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="blog-inside"
                      src="/assets/img/blog/4.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <h5>Together, we’re not just elevating buildings</h5>
                <p>
                Our blog is your gateway to the fascinating world of elevator technology,
                where we explore the intersection of engineering excellence and cutting-edge advancements. 
                Dive into stories of groundbreaking designs, smart technology integrations,
                and the future of urban mobility. Discover how our state-of-the-art solutions are redefining safety, efficiency,
                and sustainability in vertical transportation. From expert tips on optimizing elevator performance and 
                maintenance to in-depth analyses of the latest safety standards and regulatory updates, 
                our blog is packed with valuable information for architects, building managers, 
                and technology enthusiasts alike. Join us as we highlight the pioneers of the industry, 
                share success stories from around the globe, and provide insights into the trends that are shaping the future of urban environments.
                </p>
                <hr />
                <Author />
                <hr />

                <Comments />
              </div>
              <CommentForm />
            </div>
            <div className="col-lg-4">
              <div className="blog-search">
                <form action="blog.html">
                  <input type="search" placeholder="Search here" />
                  <button type="submit">
                    <i className="las la-search"></i>
                  </button>
                </form>
              </div>
              <div className="blog-category">
                <h5>Categories</h5>
                <a className="active" href="#">
                  Hotels (10)
                </a>
                <a href="#">Schools (6)</a>
                <a href="#">Construction (4)</a>
                <a href="#">Mechanical (5)</a>
                <a href="#">Oil & Gas Refinery (20)</a>
              </div>
              <Recents />
              <div className="archive">
                <h5>Archive</h5>
                <a className="active" href="#">
                  Industry Renovation (25)
                </a>
                <a href="#">Factory Build (18)</a>
                <a href="#">Electrical (32)</a>
                <a href="#"> Interior (13)</a>
                <a href="#">Petrolieum (04)</a>
              </div>
              <div className="popular-tag">
                <h5>Popular Tags</h5>
                <span className="active">
                  <a href="#">construction</a>
                </span>
                <span>
                  <a href="#">civil</a>
                </span>
                <span>
                  <a href="#">welding</a>
                </span>
                <span>
                  <a href="#">building</a>
                </span>
                <span>
                  <a href="#">pilling</a>
                </span>
                <span>
                  <a href="#">renovation</a>
                </span>
              </div>
              <div className="helpline-section">
                <div className="overlay-2"></div>
                <div className="helpline-content text-center">
                  <h4>
                    Need <br />
                    Consultancy Help
                  </h4>
                  <p>Send us an email</p>
                  <button type="submit">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogArea;
