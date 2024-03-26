import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamV1 from '../../components/team/TeamV1';
import WorkProgressV6 from '../../components/work/WorkProgressV6';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Team1 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Team One" pageLink="Team-1" />
            <TeamV1 />
            <WorkProgressV6 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Team1;