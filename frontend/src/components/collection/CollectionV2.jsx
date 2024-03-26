import React from 'react';
import CollectionV2Data from '../../jsonData/CollectionV2Data.json'
import SingleCollectionV2 from './SingleCollectionV2';
import { HashLink as Link } from 'react-router-hash-link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import CollectionV2CustomNavigation from './CollectionV2CustomNavigation';

const CollectionV2 = () => {
    return (
        <>
            <section className="collection-category-area rel z-1 pt-115 pb-90 rpt-95 rpb-70">
                <div className="container">
                    <div className="row align-items-end mb-50">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-20">
                                <span className="sub-title">Popular Collection</span>
                                <h2>Collection Category</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="collection-category-btns text-lg-right mb-20">
                                <Link to="/about#" className="theme-btn gradient-btn-one">Explore Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="collection-category-active">
                        <Swiper
                            modules={[Keyboard]}
                            spaceBetween={10}
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
                                }
                            }}
                        >
                            {CollectionV2Data.map(collection =>
                                <SwiperSlide key={collection.id}>
                                    <SingleCollectionV2 collection={collection} />
                                </SwiperSlide>
                            )}
                            <CollectionV2CustomNavigation />
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CollectionV2;