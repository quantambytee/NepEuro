import React from "react";
import InnerHeader from "../../components/header/InnerHeader";
import BreadCums from "../../components/breadCums/BreadCums";
import ServiceDetailsBranding from "./ServiceDetailsBranding";
import FooterV4 from "../../components/footer/FooterV4";

const ServiceDetailBrand = () => {
  return (
    <>
      <InnerHeader />
      <BreadCums pageTitle="Branding Services" pageLink="Service-details" />
      <ServiceDetailsBranding />
      <FooterV4 />
    </>
  );
};

export default ServiceDetailBrand;
