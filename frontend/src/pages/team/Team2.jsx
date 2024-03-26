import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamV2 from '../../components/team/TeamV2';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Team2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Team Two" pageLink="Team-2" />
            <TeamV2 teamClass="pb-240" />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Team2;