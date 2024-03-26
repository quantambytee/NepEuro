import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ShopDetailsContent from './ShopDetailsContent';
import FooterV2 from '../../components/footer/FooterV2';

const ShopDetails = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Shop Details" pageLink="Shop-details" />
            <ShopDetailsContent />
            <FooterV2 />
        </>
    );
};

export default ShopDetails;