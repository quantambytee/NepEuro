import React from "react";
import ServiceV1Data from "../../jsonData/ServiceV1Data.json";
import SingleServiceV5 from "./SingleServiceV5";

const ServiceV5 = () => {
  return (
    <>
      <section className="what-we-do bg-lighter pt-115 rpt-95 pb-90 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-65">
            <span className="sub-title">What We Do</span>
            <h2>
              Preparing For Your Business Success <br />
              With Best Solution
            </h2>
          </div>
          <div className="row">
            {ServiceV1Data.map((service) => (
              <div className="col-xl-4 col-md-6" key={service.id}>
                <SingleServiceV5 service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceV5;
