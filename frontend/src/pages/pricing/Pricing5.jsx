import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PricingPlanV6 from '../../components/pricing/PricingPlanV6';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Pricing5 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Pricing Five" pageLink="Pricing-5" />
            <PricingPlanV6 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Pricing5;