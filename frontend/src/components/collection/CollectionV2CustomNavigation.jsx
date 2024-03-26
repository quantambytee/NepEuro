import React from 'react';
import { useSwiper } from 'swiper/react';

const CollectionV2CustomNavigation = () => {
    const swiper = useSwiper()

    return (
        <>
            <div className="collection collection-navigation swiper-nav-buttons">
                <button className='collection-previous' onClick={() => swiper.slidePrev()}><i className="fas fa-angle-left"></i></button>
                <button className='collection-next' onClick={() => swiper.slideNext()}><i className="fas fa-angle-right"></i></button>
            </div>
        </>
    );
};

export default CollectionV2CustomNavigation;