import React from "react";
import InnerHeader from "../../components/header/InnerHeader";
import BreadCums from "../../components/breadCums/BreadCums";
import ServiceDetailsCounslting from "./ServiceDetailsCounslting";
import FooterV4 from "../../components/footer/FooterV4";

const ServiceDetailCon = () => {
  return (
    <>
      <InnerHeader />
      <BreadCums pageTitle="Consulting Services" pageLink="Service-details" />
      <ServiceDetailsCounslting />
      <FooterV4 />
    </>
  );
};

export default ServiceDetailCon;
