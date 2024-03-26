import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const MeetBtn = () => {
  return (
    <>
      <div className="menu-btn">
        <Link to="/contact-us#" className="theme-btn">
          meet with us
        </Link>
      </div>
    </>
  );
};

export default MeetBtn;
