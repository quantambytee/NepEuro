import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleGalleryV4 = ({ gallery }) => {
    const { thumb, title, description, delay } = gallery

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="gallery-item style-four">
                    <img src={`/images/gallery/${thumb}`} alt="Gallery" />
                    <div className="gallery-content">
                        <div className="gallery-content-inner">
                            <span className="category">{title}</span>
                            <h5>{description}</h5>
                            <Link to="/portfolio-details#"><i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleGalleryV4;