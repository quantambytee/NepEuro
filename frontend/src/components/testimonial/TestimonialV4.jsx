import React from 'react';
import TestimonialV4Data from '../../jsonData/TestimonialV4Data.json'
import SingleTestimonialV4 from './SingleTestimonialV4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';

const TestimonialV4 = ({ testClass }) => {
    return (
        <>
            <section className={`testimonial-four rpt-100 ${testClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-9">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">07 Testimonial</span>
                                <h2>Really take a look at What Say our clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-four-active">
                        <Swiper
                            modules={[Keyboard, Autoplay, Pagination]}
                            spaceBetween={10}
                            slidesPerView={3}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                stopOnLastSlide: false,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            keyboard={{
                                enabled: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                }
                            }}
                        >
                            {TestimonialV4Data.map(testimonial =>
                                <SwiperSlide key={testimonial.id} >
                                    <SingleTestimonialV4 testimonial={testimonial} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialV4;