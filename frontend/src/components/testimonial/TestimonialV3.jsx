import React from 'react';
import { Fade } from 'react-reveal';
import SingleTestimonialV3 from './SingleTestimonialV3';
import TestimonialV3Data from '../../jsonData/TestimonialV3Data.json'
import testimonialThumb3 from "/images/testimonials/testimonial-three.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';

const TestimonialV3 = () => {
    return (
        <>
            <section className="testimonial-section-three py-120 rpy-100">
                <div className="container">
                    <div className="testimonial-three-wrap bg-lighter">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <Fade className="fadeInLeft" delay={300}>
                                    <div className="testimonial-three-content text-center p-55 ">
                                        <div className="section-title mb-25">
                                            <span className="sub-title">Testimonials</span>
                                            <h2>2356+ client say <br />about us</h2>
                                        </div>
                                        <div className="testimonial-three-active">
                                            <Swiper
                                                modules={[Keyboard, Autoplay]}
                                                slidesPerView={1}
                                                loop={true}
                                                keyboard={{
                                                    enabled: true,
                                                }}
                                                autoplay={{
                                                    delay: 2500,
                                                    stopOnLastSlide: false,
                                                    disableOnInteraction: false,
                                                }}
                                            >
                                                {TestimonialV3Data.map(testimonial =>
                                                    <SwiperSlide key={testimonial.id} >
                                                        <SingleTestimonialV3 testimonial={testimonial} />
                                                    </SwiperSlide>
                                                )}
                                            </Swiper>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-md-6">
                                <Fade className="fadeInRight" delay={300}>
                                    <div className="testimonial-left-image">
                                        <img className="w-100" src={testimonialThumb3} alt="Testimonial" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialV3;