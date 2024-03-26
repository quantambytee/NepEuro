import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleFeatureV3 = ({ feature }) => {
    const { thumb, title, text, delay } = feature

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="feature-item-three">
                    <div className="icon">
                        <img src={`/images/feature/${thumb}`} alt="Icon" />
                    </div>
                    <div className="feature-content">
                        <h3><Link to="/service-details#">{title}</Link></h3>
                        <p>{text}</p>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleFeatureV3;