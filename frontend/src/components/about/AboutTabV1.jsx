import React from "react";
import CounterV1 from "../counter/CounterV1";
import AboutTabV1Content from "./AboutTabV1Content";

const AboutTabV1 = () => {
  return (
    <>
      <section
        id="about"
        className="about-tab-section bg-light-black text-white pb-120 rpb-100"
      >
        <CounterV1 />
        <div id="about" className="container">
          <div className="section-title text-center mb-55">
            <span className="sub-title">WHO WE ARE</span>
            <h2>
              We deal with the aspects of <br />
              professional Services
            </h2>
          </div>
          <AboutTabV1Content />
        </div>
      </section>
    </>
  );
};

export default AboutTabV1;
