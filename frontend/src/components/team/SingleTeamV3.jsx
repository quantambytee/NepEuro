import React from "react";
import SocialShare from "../others/SocialShare";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";
import consulting1 from "../../assets/images/consulting/consulting1.jpg";
import consulting2 from "../../assets/images/consulting/consulting2.jpeg";
import consulting3 from "../../assets/images/consulting/consulting3.png";

const consultingImgSrc = {
  "consulting1.jpg": consulting1,
  "consulting2.jpeg": consulting2,
  "consulting3.png": consulting3,
};
const SingleTeamV3 = ({ team }) => {
  const { thumb, name, designation, delay } = team;

  return (
    <>
      <Fade className="fadeInUp" delay={delay}>
        <div className="team-member-three">
          <div className="image">
            <img src={consultingImgSrc[thumb]} alt="consulting stratgy" />
          </div>
          <div className="member-designation">
            <h3>
              <Link to="/#">{name}</Link>
            </h3>
            <span>{designation}</span>
            <div className="social-style-one">{/* <SocialShare /> */}</div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default SingleTeamV3;
