import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePricingPlanV3 = ({ plan }) => {
    const { label, title, price, icon, duration, list2, list3, list4, list5, list6, delay } = plan

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="pricing-item-three">
                    <span className="pricing-type">{label}</span>
                    <div className="pricing-header">
                        <h5 className="pricing-title">{title}</h5>
                        <div className="icon">
                            <i className={icon}></i>
                        </div>
                        <span className="price">{price}</span>
                        <h5 className="pricing-time">{duration}</h5>
                    </div>
                    <ul>
                        <li>{list2}</li>
                        <li>{list3}</li>
                        <li>{list4}</li>
                        <li>{list5}</li>
                        <li>{list6}</li>
                    </ul>
                    <Link to="/pricing-3#" className="theme-btn btn-circle" >Choose Plan</Link>
                </div>
            </Fade>
        </>
    );
};

export default SinglePricingPlanV3;