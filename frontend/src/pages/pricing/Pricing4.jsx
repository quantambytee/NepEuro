import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV4 from '../../components/pricing/PricingPlanV4';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Pricing Four" pageLink="Pricing-4" />
            <PricingPlanV4 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing4;