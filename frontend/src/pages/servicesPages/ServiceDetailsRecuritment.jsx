import React from "react";
import { Fade } from "react-reveal";
import ContactV2Thumb from "../../components/contact/ContactV2Thumb";
import serviceDetailsThumb from "/images/services/service-details.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SingleServicesDetailsFeature from "./SingleServicesDetailsFeature";
import RecruitmentData from "../../jsonData/RecruitmentData.json";

const ServicesDetailsRecruitment = () => {
  return (
    <>
      <section className="service-details pt-120 rpt-100 pb-100 rpb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Fade right delay={200}>
                <div className="service-details-content">
                  <h2>Recruitment Services</h2>
                  <p>
                    Finding the right talent is crucial for the success and
                    growth of any organization. At Your Company, we offer
                    comprehensive recruitment services to help businesses
                    identify, attract, and hire top talent across various
                    industries and job functions.
                  </p>
                  <ul className="list-style-three pt-15 pb-30">
                    <li>Industry Expertise</li>
                    <li>Extensive Network</li>
                    <li>Quality Assurance</li>
                    <li>Collaborative Partnership</li>
                  </ul>
                  <h3>Explore our audit & assurance services</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate{" "}
                  </p> */}
                  {/* <div className="row pt-25">
                    {FeatureV1Data.map((feature) => (
                      <div
                        className="col-xl-4 service-details-fe col-lg-6 col-md-4 col-sm-6"
                        key={feature.id}
                      >
                        <SingleServicesDetailsFeature feature={feature} />
                      </div>
                    ))}
                  </div> */}
                </div>
              </Fade>
            </div>
            <div className="row pt-25">
              {RecruitmentData.map((feature) => (
                <div
                  className="col-xl-4 service-details-fe col-lg-6 col-md-4 col-sm-6"
                  key={feature.id}
                >
                  <SingleServicesDetailsFeature feature={feature} />
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <Fade left delay={200}>
                <div className="service-sidebar rmb-55">
                  {/* <div className="widget widget-services">
                    <ul>
                      <li>
                        <Link to="/#">Market Research and Analysis</Link>
                      </li>
                      <li>
                        <Link to="/#">Market Entry Strategy Development</Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Business Planning and Feasibility Studies
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Regulatory Compliance and Legal Support
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">
                          Partner Identification and Due Diligence
                        </Link>
                      </li>
                      <li>
                        <Link to="/#">Go-to-Market Execution</Link>
                      </li>
                    </ul>
                  </div> */}
                  {/* <ContactV2Thumb /> */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetailsRecruitment;
