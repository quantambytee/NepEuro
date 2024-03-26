import React from 'react';
import FeatureV3Data from '../../jsonData/FeatureV3Data.json'
import SingleFeatureV3 from './SingleFeatureV3';

const FeatureV3 = () => {
    return (
        <>
            <section className="feature-section-three pt-120 rpt-100">
                <div className="container">
                    <div className="row">
                        {FeatureV3Data.map(feature =>
                            <div className="col-xl-4 col-md-6" key={feature.id}>
                                <SingleFeatureV3 feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureV3;