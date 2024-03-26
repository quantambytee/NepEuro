import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import FeatureV1 from '../../components/feature/FeatureV1';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Services = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Services One" pageLink="Services" />
            <FeatureV1 featureSpace="pt-115" />
            <WorkProgressV6 />
            <PricingPlanV2 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services;