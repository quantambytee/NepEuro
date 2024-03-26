import React from 'react';
import GalleryV2Data from '../../jsonData/GalleryV2Data.json'
import SingleGalleryV3 from '../../components/gallery/SingleGalleryV3';

const PortfolioRelatedProject = () => {
    return (
        <>
            <section className="portfolio-section py-110 rpy-90">
                <div className="container">
                    <div className="section-title mb-30">
                        <h2>Related Projects</h2>
                    </div>
                    <div className="row">
                        {GalleryV2Data.slice(0, 3).map(gallery =>
                            <div className="col-lg-4 col-sm-6" key={gallery.id}>
                                <SingleGalleryV3 gallery={gallery} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioRelatedProject;