import React from "react";
import InnerHeader from "../../components/header/InnerHeader";
import BreadCums from "../../components/breadCums/BreadCums";
import ServicesDetailsContent from "./ServicesDetailsContent";
import FooterV4 from "../../components/footer/FooterV4";

const ServicesDetails = () => {
  return (
    <>
      <InnerHeader />
      <BreadCums pageTitle="Market Entry Services" pageLink="Service-details" />
      <ServicesDetailsContent />
      <FooterV4 />
    </>
  );
};

export default ServicesDetails;
