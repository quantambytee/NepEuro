import React from 'react';
import GalleryV4Data from '../../jsonData/GalleryV4Data.json'
import SingleGalleryV4 from './SingleGalleryV4';

const GalleryV4 = () => {
    return (
        <>
            <section className="gallery-section px-55 rpx-0 pt-115 rpt-95 pb-85 rpb-65">
                <div className="container-fluid">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title">Our Gallery</span>
                        <h2>Some Of Our Work</h2>
                    </div>
                    <div className="row text-white justify-content-center">
                        {GalleryV4Data.map(gallery =>
                            <div className="col-xl-3 col-lg-4 col-sm-6" key={gallery.id}>
                                <SingleGalleryV4 gallery={gallery} />
                            </div>
                        )}
                    </div>
                </div>

            </section >
        </>
    );
};

export default GalleryV4;