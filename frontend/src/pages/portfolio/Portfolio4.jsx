import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import FooterV2 from '../../components/footer/FooterV2';
import GalleryV4 from '../../components/gallery/GalleryV4';

const Portfolio4 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Portfolio Four" pageLink="Portfolio-4" />
            <GalleryV4 />
            <FooterV2 />
        </>
    );
};

export default Portfolio4;