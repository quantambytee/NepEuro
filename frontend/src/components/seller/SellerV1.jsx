import React from 'react';
import SellerV1Data from '../../jsonData/SellerV1Data.json'
import SingleSellerV1 from './SingleSellerV1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';

const SellerV1 = () => {
    return (
        <>
            <section className="sellers-section pt-120 rpt-100" id="sellers">
                <div className="container rel z-2 py-80">
                    <div className="section-title text-center mb-65">
                        <span className="sub-title">Creators</span>
                        <h2>Our Top Sellers</h2>
                    </div>
                    <div className="sellers-active">
                        <Swiper
                            modules={[Keyboard, Autoplay, Pagination]}
                            spaceBetween={10}
                            pagination={{ clickable: true }}
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
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    slidesPerView: 5,
                                }
                            }}
                        >
                            {SellerV1Data.map(seller =>
                                <SwiperSlide key={seller.id}>
                                    <SingleSellerV1 seller={seller} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SellerV1;