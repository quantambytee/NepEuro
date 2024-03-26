import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamV4 from '../../components/team/TeamV4';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Team4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Team Four" pageLink="Team-4" />
            <TeamV4 teamClass="pb-200" partial={false} />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Team4;