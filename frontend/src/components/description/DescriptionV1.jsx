import React from 'react';
import { Fade } from 'react-reveal';
import customization1 from '/images/about/customization-1.png'
import customization2 from '/images/about/customization-1.png'
import { HashLink as Link } from 'react-router-hash-link';

const DescriptionV1 = () => {
    return (
        <>
            <section className="customization-section py-75 rpy-60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="customization-images">
                                    <img src={customization1} alt="customization" />
                                    <img src={customization2} alt="customization" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade right delay={300}>
                                <div className="customization-content mr-100 rmr-0 pb-35 rpb-40 rpt-50">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">Use & Customization</span>
                                        <h2>Planned in view of the candidate</h2>
                                    </div>
                                    <p>Praesent non viverra elit. Suspendisse sed nulla cursus, gravida diam id, consectetur nisl. Sed fermentum ipsum mollis velit eleifend,</p>
                                    <ul className="list-style-three mt-25 pb-10">
                                        <li>top audience</li>
                                        <li>Web & app development</li>
                                        <li>software analysis</li>
                                        <li>Application design</li>
                                    </ul>
                                    <Link to="/about#" className="theme-btn mt-15">Discover More <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DescriptionV1;