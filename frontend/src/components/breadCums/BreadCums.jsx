import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import markrtEntry from "../../assets/images/services/marketEntry.png";
import consulting from "../../assets/images/services/Consulting.jpg";
import branding from "../../assets/images/services/branding.png";
import it from "../../assets/images/services/it_training.jpeg";
import recruit from "../../assets/images/services/recruitment.png";
import contact_us from "../../assets/images/contact_us.jpeg";
const backgroundImageUrls = {
  "Market Entry Services": markrtEntry,
  "Consulting Services": consulting,
  "Branding Services": branding,
  "Recruitment Services": recruit,
  "It Training And Placement Services": it,
  "Contact Us": contact_us,
};
const BreadCums = ({ pageTitle, pageLink }) => {
  return (
    <>
      <section
        className="page-banner bgs-cover overlay pt-50"
        style={{
          backgroundImage: `url(${backgroundImageUrls[pageTitle]})`,
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <h1 className="page-title">
              {pageTitle ? pageTitle : "404 Not Found"}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/#">Home</Link>
                </li>
                <li className="breadcrumb-item active">
                  {pageLink ? pageLink : "404 Not Found"}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCums;
