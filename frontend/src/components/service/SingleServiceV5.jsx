import React from "react";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";

const SingleServiceV5 = ({ service }) => {
  const { icon, icon2, title, text, delay } = service;

  return (
    <>
      <Fade className="fadeInUp" delay={delay}>
        <div className="feature-item service-item-card">
          <Link to="/#" className="feature-btn">
            <i className={icon2}></i>
          </Link>
          <div className="icon">
            <i className={icon}></i>
          </div>
          <div className="feature-content">
            <h5>{title}</h5>
            <p>{text}</p>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default SingleServiceV5;
