import React from 'react';
import TestimonialV1Data from '../../jsonData/TestimonialV1Data.json'
import SingleTestimonialV2 from './SingleTestimonialV2';
import testimonialThumb from '/images/testimonials/testimonial-two.jpg'
import { Fade } from 'react-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';

const TestimonialV2 = () => {
    return (
        <>
            <section className="testimonial-section-two py-120 rpy-100">
                <div className="container">
                    <div className="testimonial-two-wrap">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <Fade className="fadeInLeft" delay={200}>
                                    <div className="testimonial-left-image">
                                        <img src={testimonialThumb} alt="Testimonial" />
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-md-6">
                                <Fade className="fadeInRight" delay={200}>
                                    <div className="testimonial-two-content p-55">
                                        <div className="section-title mb-20">
                                            <span className="sub-title">Our Testimonials</span>
                                            <h2>What our clients say about us</h2>
                                        </div>
                                        <div className="testimonial-two-active">
                                            <Swiper
                                                modules={[Keyboard, Autoplay, Pagination]}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                slidesPerView={1}
                                                autoplay={{
                                                    delay: 2500,
                                                    stopOnLastSlide: false,
                                                    disableOnInteraction: false,
                                                }}
                                                loop={true}
                                                keyboard={{
                                                    enabled: true,
                                                }}
                                            >
                                                {TestimonialV1Data.slice(0, 4).map(testimonial =>
                                                    <SwiperSlide key={testimonial.id}>
                                                        <SingleTestimonialV2 testimonial={testimonial} />
                                                    </SwiperSlide>
                                                )}
                                            </Swiper>
                                        </div>
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

export default TestimonialV2;