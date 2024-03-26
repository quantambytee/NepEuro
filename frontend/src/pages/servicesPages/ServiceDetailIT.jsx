import React from "react";
import InnerHeader from "../../components/header/InnerHeader";
import BreadCums from "../../components/breadCums/BreadCums";
import ServiceDetailsItTraining from "./ServiceDetailsItTraining";
import FooterV4 from "../../components/footer/FooterV4";

const ServiceDetailIT = () => {
  return (
    <>
      <InnerHeader />
      <BreadCums
        pageTitle="It Training And Placement Services"
        pageLink="Service-details"
      />
      <ServiceDetailsItTraining />
      <FooterV4 />
    </>
  );
};

export default ServiceDetailIT;
