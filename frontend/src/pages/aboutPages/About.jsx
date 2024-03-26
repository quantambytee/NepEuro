import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import AboutV3 from '../../components/about/AboutV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV3 from '../../components/footer/FooterV3';

const About = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="About Us" pageLink="about" />
            <AboutV3 aboutClass="pt-120 rpt-100 pb-240 rpb-150" />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV3 />
        </>
    );
};

export default About;