import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import ShopContent from './ShopContent';
import FooterV2 from '../../components/footer/FooterV2';

const Shop = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Shop" pageLink="Shop" />
            <ShopContent />
            <FooterV2 />
        </>
    );
};

export default Shop;