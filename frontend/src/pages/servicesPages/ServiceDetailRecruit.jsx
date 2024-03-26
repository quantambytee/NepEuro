import React from "react";
import InnerHeader from "../../components/header/InnerHeader";
import BreadCums from "../../components/breadCums/BreadCums";
import ServiceDetailsRecuritment from "./ServiceDetailsRecuritment";
import FooterV4 from "../../components/footer/FooterV4";

const ServiceDetailRecruit = () => {
  return (
    <>
      <InnerHeader />
      <BreadCums pageTitle="Recruitment Services" pageLink="Service-details" />
      <ServiceDetailsRecuritment />
      <FooterV4 />
    </>
  );
};

export default ServiceDetailRecruit;
