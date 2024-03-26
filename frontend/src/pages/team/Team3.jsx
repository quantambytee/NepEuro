import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamV3 from '../../components/team/TeamV3';
import WorkProgressV3 from '../../components/work/WorkProgressV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ContactV4 from '../../components/contact/ContactV4';
import FooterV2 from '../../components/footer/FooterV2';

const Team3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Team Three" pageLink="Team-3" />
            <TeamV3 teamClass="pt-100 pb-150" teamTitle={false} partial={false} />
            <WorkProgressV3 />
            <TestimonialV1 />
            <ContactV4 />
            <FooterV2 />
        </>
    );
};

export default Team3;