import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ServiceV4 from '../../components/service/ServiceV4';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import PricingPlanV2 from '../../components/pricing/PricingPlanV2';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Services4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Services Four" pageLink="Services-4" />
            <ServiceV4 serviceSpace="pb-100" />
            <WorkProgressV6 />
            <PricingPlanV2 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Services4;