import React from 'react';
import TestimonialV1Data from '../../jsonData/TestimonialV1Data.json'
import CounterV1Data from '../../jsonData/CounterV1Data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import SingleTestimonialV1 from './SingleTestimonialV1';
import SingleCounterV1 from '../counter/SingleCounterV1';

const TestimonialV1 = () => {
    return (
        <>
            <section className="testimonial-section bg-lighter pt-115 rpt-95 pb-120 rpb-100">
                <div className="container">
                    <div className="section-title text-center mb-65">
                        <span className="sub-title">It Support For Business</span>
                        <h2>Preparing for your success <br />trusted source in IT services.</h2>
                    </div>
                    <div className="fact-counter-color text-center mb-30">
                        <div className="row justify-content-md-center">
                            {CounterV1Data.slice(1, 4).map(counter =>
                                <div className="col-md-3 col-sm-6" key={counter.id}>
                                    <SingleCounterV1 counter={counter} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="testimonial-wrap">
                        <Swiper
                            modules={[Keyboard, Autoplay]}
                            spaceBetween={10}
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
                                767: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                }
                            }}
                        >
                            {TestimonialV1Data.map(testimonial =>
                                <SwiperSlide key={testimonial.id}>
                                    <SingleTestimonialV1 testimonial={testimonial} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialV1;