import React from 'react';
import FeatureV1Data from '../../jsonData/FeatureV1Data.json'
import SingleFeatureV1 from './SingleFeatureV1';
import { HashLink as Link } from 'react-router-hash-link';

const FeatureV1 = (props) => {
    const { featureSpace } = props

    return (
        <>
            <section className={`featured-section bgs-cover rpt-150 pb-120 rpb-100 ${featureSpace}`} style={{ backgroundImage: "url(/images/feature/feature-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-10">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">WHO WE ARE</span>
                                <h2>We deal with the aspects of professional IT Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        {FeatureV1Data.map(feature =>
                            <div className="col-xl-4 col-md-6" key={feature.id}>
                                <SingleFeatureV1 feature={feature} />
                            </div>
                        )}
                    </div>
                    <div className="feature-btn text-center mt-20">
                        <Link to="/services#" className="theme-btn">view all services</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureV1;