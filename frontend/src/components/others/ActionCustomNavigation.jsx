import React from 'react';
import { useSwiper } from 'swiper/react';

const ActionCustomNavigation = () => {
    const swiper = useSwiper()

    return (
        <>
            <div className="action action-navigation swiper-nav-buttons">
                <button className='action-previous' onClick={() => swiper.slidePrev()}><i className="fas fa-arrow-left"></i></button>
                <button className='action-next' onClick={() => swiper.slideNext()}><i className="fas fa-arrow-right"></i></button>
            </div>
        </>
    );
};

export default ActionCustomNavigation;