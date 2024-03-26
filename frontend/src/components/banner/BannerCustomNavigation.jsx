import React from 'react';
import { useSwiper } from 'swiper/react';

const BannerCustomNavigation = () => {
    const swiper = useSwiper();
    return (
        <>
            <div className="banner banner-navigation swiper-nav-buttons">
                <button className='banner-previous' onClick={() => swiper.slidePrev()}><i className="fas fa-angle-left"></i></button>
                <button className='banner-next' onClick={() => swiper.slideNext()}><i className="fas fa-angle-right"></i></button>
            </div>
        </>
    );
};

export default BannerCustomNavigation;