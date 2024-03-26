import React from 'react';
import MobileUiV1Data from '../../jsonData/MobileUiV1Data.json'
import SingleMobileUiV1 from './SingleMobileUiV1';
import { Gallery } from 'react-photoswipe-gallery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination } from 'swiper/modules';

const MobileUiV1 = () => {
    return (
        <>
            <section className="mobile-screens bg-light-black rel z-1 pt-120 rpt-95 pb-120 rpb-100" style={{ backgroundImage: "url(/images/mobiles/mobile-screens-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="section-title text-center text-white mb-55">
                                <h2>Let’s See Some Beautyful Mobile UI Screens</h2>
                                <p>Learn more about cool options that grow business</p>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-screens-active">
                        <Gallery>
                            <Swiper
                                modules={[Keyboard, Autoplay, Pagination]}
                                spaceBetween={10}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 3000,
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
                                {MobileUiV1Data.map(mobile =>
                                    <SwiperSlide key={mobile.id}>
                                        <SingleMobileUiV1 mobile={mobile} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </Gallery>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MobileUiV1;