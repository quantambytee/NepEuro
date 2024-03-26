import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TestimonialV4 from '../../components/testimonial/TestimonialV4';
import AboutV3 from '../../components/about/AboutV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Testimonial4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Testimonial Four" pageLink="testimonial-4" />
            <TestimonialV4 testClass="pt-100" />
            <AboutV3 aboutClass="rpt-100 pb-240 rpb-150" />
            <WorkProgressV3 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Testimonial4;