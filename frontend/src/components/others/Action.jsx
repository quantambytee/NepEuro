import React from 'react';
import ActionData from '../../jsonData/ActionData.json'
import SingleAction from './SingleAction';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination } from 'swiper/modules';
import ActionCustomNavigation from './ActionCustomNavigation';

const Action = () => {
    return (
        <>
            <section className="actions-section rel z-1 pt-115 rpt-95">
                <div className="container">
                    <div className="row align-items-end mb-40">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-20">
                                <span className="sub-title">Actions</span>
                                <h2>Live Auctions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="actions-active">
                        <Swiper
                            modules={[Keyboard, Pagination]}
                            spaceBetween={10}
                            pagination={{ clickable: true }}
                            loop={true}
                            keyboard={{
                                enabled: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                }
                            }}
                        >
                            {ActionData.map(action =>
                                <SwiperSlide key={action.id}>
                                    <SingleAction action={action} />
                                </SwiperSlide>
                            )}
                            <ActionCustomNavigation />
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Action;