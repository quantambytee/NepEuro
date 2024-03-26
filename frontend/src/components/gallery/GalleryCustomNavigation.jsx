import React from 'react';
import { useSwiper } from 'swiper/react';

const GalleryCustomNavigation = () => {
    const swiper = useSwiper();
    
    return (
        <>
            <div className="gallery swiper-nav-buttons">
                <button className='gallery-previous' onClick={() => swiper.slidePrev()}><i className="fas fa-arrow-left"></i></button>
                <button className='gallery-next' onClick={() => swiper.slideNext()}><i className="fas fa-arrow-right"></i></button>
            </div>
        </>
    );
};

export default GalleryCustomNavigation;