import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV3 from '../../components/pricing/PricingPlanV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Pricing Three" pageLink="Pricing-3" />
            <PricingPlanV3 pricingClass="pb-200" />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing3;