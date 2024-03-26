import React from "react";
import InnerHeader from "../../components/header/InnerHeader";
import BreadCums from "../../components/breadCums/BreadCums";
import ErrorContent from "./ErrorContent";
import FooterV4 from "../../components/footer/FooterV4";

const Error404 = () => {
  return (
    <>
      <InnerHeader />
      <BreadCums pageTitle="Page Not Found" pageLink="404" />
      <ErrorContent />
      <FooterV4 />
    </>
  );
};

export default Error404;
