import React from "react";
import TeamV3Data from "../../jsonData/TeamV3Data.json";
import SingleTeamV3 from "./SingleTeamV3";
import { HashLink as Link } from "react-router-hash-link";

const TeamV3 = ({ teamTitle = true, partial = true, teamClass }) => {
  return (
    <>
      <section className={`team-section-three pb-50 rpb-30 ${teamClass}`}>
        <div className="container">
          {teamTitle && (
            <div className="section-title-with-btn mb-60 image-section">
              <div className="section-title title-section">
                <span classsName="sub-title"></span>
                <h2>Expert Consulting Services for Your Success</h2>
              </div>
              {/* <Link to="/team-profile#" className="theme-btn style-two mt-15">
                view all member
              </Link> */}
            </div>
          )}
          <div className="row">
            {(partial && (
              <>
                {TeamV3Data.slice(0, 3).map((team) => (
                  <div className="col-lg-4 col-sm-6" key={team.id}>
                    <SingleTeamV3 team={team} />
                  </div>
                ))}
              </>
            )) || (
              <>
                {TeamV3Data.map((team) => (
                  <div className="col-lg-4 col-sm-6" key={team.id}>
                    <SingleTeamV3 team={team} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamV3;
