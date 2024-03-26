import React from "react";
import { Fade } from "react-reveal";
import aboutTabThumb from "/images/about/about-tab.png";
import aboutTab1 from "../../assets/images/about/aboutTab1.png";
import aboutTab2 from "../../assets/images/about/aboutTab2.jpeg";
import aboutTab3 from "../../assets/images/about/aboutTab3.jpeg";
import aboutTab4 from "../../assets/images/about/aboutTab4.png";
const AboutTabV1Content = () => {
  return (
    <>
      <ul className="nav nav-tabs about-tab">
        <li className="nav-item about-nav-tab" role="presentation">
          <a
            className="active"
            data-bs-toggle="tab"
            data-bs-target="#tabContent1"
          >
            <i className="flaticon-web-maintenance"></i>
            <h4>Industry-Relevant Curriculum</h4>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a data-bs-toggle="tab" data-bs-target="#tabContent2">
            <i className="flaticon-web-development-4"></i>
            <h4>Experienced Instructors</h4>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a data-bs-toggle="tab" data-bs-target="#tabContent3">
            <i className="flaticon-web-programming"></i>
            <h4>Hands-On Learning </h4>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a data-bs-toggle="tab" data-bs-target="#tabContent4">
            <i className="flaticon-coding-5"></i>
            <h4>Job Placement Success</h4>
          </a>
        </li>
      </ul>
      <div className="tab-content about-tab-content">
        <div
          className="tab-pane fade show active"
          id="tabContent1"
          role="tabpanel"
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade className="fadeInLeft" delay={300}>
                <div className="about-image-shape rmb-70">
                  <img src={aboutTab1} alt="About" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade className="fadeInRight" delay={300}>
                <div className="about-content pr-70 rpr-0">
                  <div className="section-title mb-35">
                    <span className="sub-title">It Supports</span>
                    <h2>
                      Preparing for your success trusted source in IT services.
                    </h2>
                  </div>
                  <p>
                    Our training programs are developed in collaboration with
                    industry experts and updated regularly to reflect the latest
                    trends, technologies, and best practices in the IT industry.
                  </p>
                  <ul className="list-style-one mt-15">
                    <li>Technical Training </li>
                    <li>Certification Preparation</li>
                    <li>IT Consultancy</li>
                    <li>Development Workshops</li>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tabContent2" role="tabpanel">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade className="fadeInLeft" delay={300}>
                <div className="about-image-shape rmb-70">
                  <img src={aboutTab2} alt="About" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade className="fadeInRight" delay={300}>
                <div className="about-content pr-70 rpr-0">
                  <div className="section-title mb-35">
                    <span className="sub-title">It Support For Business</span>
                    <h2>
                      Preparing for your success trusted source in IT services.
                    </h2>
                  </div>
                  <p>
                    Our instructors are seasoned professionals with extensive
                    industry experience and a passion for teaching and
                    mentorship, ensuring high-quality instruction and guidance
                    for our students.
                  </p>
                  <ul className="list-style-one mt-15">
                    <li>Technical Training </li>
                    <li>Certification Preparation</li>
                    <li>IT Consultancy</li>
                    <li>Development Workshops</li>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tabContent3" role="tabpanel">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade className="fadeInLeft" delay={300}>
                <div className="about-image-shape rmb-70">
                  <img src={aboutTab3} alt="About" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade className="fadeInRight" delay={300}>
                <div className="about-content pr-70 rpr-0">
                  <div className="section-title mb-35">
                    <span className="sub-title">It Support</span>
                    <h2>
                      Preparing for your success trusted source in IT services.
                    </h2>
                  </div>
                  <p>
                    We emphasize hands-on learning and practical application,
                    providing labs, projects, and simulations to reinforce
                    theoretical concepts and enhance skill development.
                  </p>
                  <ul className="list-style-one mt-15">
                    <li>Technical Training </li>
                    <li>Certification Preparation</li>
                    <li>IT Consultancy</li>
                    <li>Development Workshops</li>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="tabContent4" role="tabpanel">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Fade className="fadeInLeft" delay={300}>
                <div className="about-image-shape rmb-70">
                  <img src={aboutTab4} alt="About" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6">
              <Fade className="fadeInRight" delay={300}>
                <div className="about-content pr-70 rpr-0">
                  <div className="section-title mb-35">
                    <span className="sub-title">It Support</span>
                    <h2>
                      Preparing for your success trusted source in IT services.
                    </h2>
                  </div>
                  <p>
                    We have a proven track record of successfully placing our
                    graduates in top IT companies and organizations, thanks to
                    our strong industry connections, personalized career
                    support, and comprehensive placement assistance services.
                  </p>
                  <ul className="list-style-one mt-15">
                    <li>Technical Training </li>
                    <li>Certification Preparation</li>
                    <li>IT Consultancy</li>
                    <li>Development Workshops</li>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTabV1Content;
