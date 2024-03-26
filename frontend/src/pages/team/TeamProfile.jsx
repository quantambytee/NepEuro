import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import TeamProfileContent from './TeamProfileContent';
import FooterV2 from '../../components/footer/FooterV2';

const TeamProfile = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Team Profile" pageLink="Team-Profile" />
            <TeamProfileContent />
            <FooterV2 />
        </>
    );
};

export default TeamProfile;