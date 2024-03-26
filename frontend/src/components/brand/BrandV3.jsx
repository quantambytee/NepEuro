import React from 'react';
import BrandV3Data from '../../jsonData/BrandV3Data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from 'swiper/modules';
import SingleBrandV1 from './SingleBrandV1';

const BrandV3 = () => {
    return (
        <>
            <div className="client-logo-area">
                <div className="container">
                    <div className="logo-carousel-wrap pt-100 pb-90">
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
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                767: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                }
                            }}
                        >
                            {BrandV3Data.map(brand =>
                                <SwiperSlide key={brand.id}>
                                    <SingleBrandV1 brand={brand} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandV3;