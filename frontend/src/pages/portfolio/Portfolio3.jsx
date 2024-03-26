import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import FooterV2 from '../../components/footer/FooterV2';
import GalleryV2 from '../../components/gallery/GalleryV2';

const Portfolio3 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Portfolio Three" pageLink="Portfolio-3" />
            <GalleryV2 partial={false} />
            <FooterV2 />
        </>
    );
};

export default Portfolio3;