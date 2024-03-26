import React, { useState } from 'react';
import ShopCarouselData from '../../jsonData/ShopCarouselData.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, FreeMode, Pagination, Thumbs } from 'swiper/modules';

const ShopProductCarousel = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="product-gallery">
                <Swiper
                    modules={[Keyboard, FreeMode, Pagination, Thumbs]}
                    loop={true}
                    keyboard={{
                        enabled: true,
                    }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    className="single-product-preview"
                >
                    {ShopCarouselData.map(slides =>
                        <SwiperSlide key={slides.id}>
                            <img src={`/images/shop/${slides.preview}`} alt="preview" />
                        </SwiperSlide>
                    )}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    pagination={{ clickable: true }}
                    modules={[Keyboard, FreeMode, Pagination, Thumbs]}
                    className="multi-product-preview"
                >
                    {ShopCarouselData.map(slides =>
                        <SwiperSlide key={slides.id}>
                            <img src={`/images/shop/${slides.mini}`} alt="mini" />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </>
    );
};

export default ShopProductCarousel;