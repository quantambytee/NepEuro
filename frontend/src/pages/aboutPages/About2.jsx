import React from 'react';
import BreadCums from '../../components/breadCums/BreadCums';
import AboutV1 from '../../components/about/AboutV1';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';
import InnerHeader from '../../components/header/InnerHeader';

const About2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="About Us" pageLink="about" />
            <AboutV1 counter={false} aboutClass="pb-240" />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default About2;