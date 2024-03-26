import React from 'react';
import InnerHeader from '../../components/header/InnerHeader';
import BreadCums from '../../components/breadCums/BreadCums';
import GalleryV1 from '../../components/gallery/GalleryV1';
import FooterV2 from '../../components/footer/FooterV2';

const Portfolio2 = () => {
    return (
        <>
            <InnerHeader />
            <BreadCums pageTitle="Portfolio Two" pageLink="Portfolio-2" />
            <GalleryV1 partial={false} />
            <FooterV2 />
        </>
    );
};

export default Portfolio2;