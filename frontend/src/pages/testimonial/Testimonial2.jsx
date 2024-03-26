import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import AboutV3 from '../../components/about/AboutV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Testimonial2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Testimonial Two" pageLink="testimonial-2" />
            <TestimonialV2 />
            <AboutV3 aboutClass="rpt-100 pb-240 rpb-150" />
            <WorkProgressV3 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Testimonial2;