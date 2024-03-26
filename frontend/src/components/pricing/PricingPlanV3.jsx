import React from 'react';
import PricingV1Data from '../../jsonData/PricingV1Data.json'
import SinglePricingPlanV3 from './SinglePricingPlanV3';

const PricingPlanV3 = ({ pricingClass }) => {
    return (
        <>
            <section className={`pricing-section-three text-center pt-115 rpt-95 pb-95 rpb-65 ${pricingClass}`}>
                <div className="container rel">
                    <div className="section-title mb-65">
                        <span className="sub-title">Pricing Packages</span>
                        <h2>Choose Your Best Plan</h2>
                    </div>
                    <div className="row">
                        {PricingV1Data.slice(0, 3).map(plan =>
                            <div className="col-lg-4 col-sm-6" key={plan.id}>
                                <SinglePricingPlanV3 plan={plan} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPlanV3;