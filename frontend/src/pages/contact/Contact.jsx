import React from "react";
import InnerHeader from "../../components/header/InnerHeader";
import BreadCums from "../../components/breadCums/BreadCums";
import ContactContent from "./ContactContent";
import ContactMap from "./ContactMap";
import FooterV4 from "../../components/footer/FooterV4";

const Contact = () => {
  return (
    <>
      <InnerHeader />
      <BreadCums pageTitle="Contact Us" pageLink="Contact" />
      <ContactContent />
      {/* <ContactMap /> */}
      <FooterV4 />
    </>
  );
};

export default Contact;
