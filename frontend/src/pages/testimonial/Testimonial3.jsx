import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TestimonialV3 from '../../components/testimonial/TestimonialV3';
import AboutV3 from '../../components/about/AboutV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Testimonial3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Testimonial Three" pageLink="testimonial-3" />
            <TestimonialV3 />
            <AboutV3 aboutClass="rpt-100 pb-240 rpb-150" />
            <WorkProgressV3 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Testimonial3;