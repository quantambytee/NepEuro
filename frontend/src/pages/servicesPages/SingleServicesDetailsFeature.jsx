import React from "react";
import { Fade } from "react-reveal";

const SingleServicesDetailsFeature = ({ feature }) => {
  const { icon, title, text, delay } = feature;

  return (
    <>
      <Fade delay={delay}>
        <div className="service-normal style-two feature-details">
          <div className="icon">
            <i className={icon}></i>
          </div>
          <h6>{title}</h6>
          <p>{text}</p>
        </div>
      </Fade>
    </>
  );
};

export default SingleServicesDetailsFeature;
