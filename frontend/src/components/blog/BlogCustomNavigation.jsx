import React from 'react';
import { useSwiper } from 'swiper/react';

const BlogCustomNavigation = () => {
    const swiper = useSwiper();

    return (
        <>
            <div className="blog blog-navigation swiper-nav-buttons">
                <button className='blog-previous' onClick={() => swiper.slidePrev()}><i className="fas fa-long-arrow-alt-left"></i></button>
                <button className='blog-next' onClick={() => swiper.slideNext()}><i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
        </>
    );
};

export default BlogCustomNavigation;