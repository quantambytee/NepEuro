import React from 'react';
import TestimonialV5Data from '../../jsonData/TestimonialV5Data.json'
import SingleTestimonialV5 from './SingleTestimonialV5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import TestimonialCustomNavigation from './TestimonialCustomNavigation';

const TestimonialV5 = () => {
    return (
        <>
            <section className="testimonial-five pt-120 rpt-100 mb-55" style={{ backgroundImage: "url(/images/testimonials/testimonial-five-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="testimonial-five-wrap p-70 bg-white">
                                <Swiper
                                    modules={[Keyboard]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    loop={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                >
                                    {TestimonialV5Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV5 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                    <TestimonialCustomNavigation />
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialV5;