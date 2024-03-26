import React from "react";
import HeaderMenu4 from "../../components/header/HeaderMenu4";
import BannerV4 from "../../components/banner/BannerV4";
import ServiceV5 from "../../components/service/ServiceV5";
import AboutV4 from "../../components/about/AboutV4";
import AboutTabV1 from "../../components/about/AboutTabV1";
import GalleryV4 from "../../components/gallery/GalleryV4";
import TeamV3 from "../../components/team/TeamV3";
import WorkProgressV4 from "../../components/work/WorkProgressV4";
import PricingPlanV3 from "../../components/pricing/PricingPlanV3";
import BlogV3 from "../../components/blog/BlogV3";
import FooterV4 from "../../components/footer/FooterV4";

const HomeFour = () => {
  return (
    <>
      <HeaderMenu4 />
      <BannerV4 />
      <ServiceV5 />
      <AboutV4 />
      <AboutTabV1 />
      {/* <GalleryV4 /> */}
      <TeamV3 />
      {/* <WorkProgressV4 /> */}
      {/* <PricingPlanV3 pricingClass="has-bg" /> */}
      {/* <BlogV3 /> */}
      <FooterV4 copyrightBg="bg-blue mt-30" logo="footerLogo" />
    </>
  );
};

export default HomeFour;
