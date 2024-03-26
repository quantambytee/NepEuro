import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import PortfolioDetailsContent from './PortfolioDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const PortfolioDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Portfolio Details" pageLink="Portfolio-Details" />
            <PortfolioDetailsContent />
            <FooterV2 />
        </>
    );
};

export default PortfolioDetails;