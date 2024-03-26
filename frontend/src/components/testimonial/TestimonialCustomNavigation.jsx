import React from 'react';
import { useSwiper } from 'swiper/react';

const TestimonialCustomNavigation = () => {
    const swiper = useSwiper();
    
    return (
        <>
            <div className="testimonial testimonial-navigation swiper-nav-buttons">
                <button className='testimonial-previous' onClick={() => swiper.slidePrev()}><i className="fas fa-chevron-left"></i></button>
                <button className='testimonial-next' onClick={() => swiper.slideNext()}><i className="fas fa-chevron-right"></i></button>
            </div>
        </>
    );
};

export default TestimonialCustomNavigation;