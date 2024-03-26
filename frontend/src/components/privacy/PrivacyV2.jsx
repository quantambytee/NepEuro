import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import protectsThumb from '/images/protects/ready.jpg'

const PrivacyV2 = () => {
    return (
        <>
            <section className="ready-section pt-110 rpt-100 rel z-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="ready-content">
                                    <div className="section-title mb-30">
                                        <span className="sub-title">We are ready</span>
                                        <h2>Protecting your privacy is Our priority</h2>
                                    </div>
                                    <p>Praesent eget ullamcorper elit, vel volutpat tellus. Aliquam auctor, neque quis blandit vestibulum</p>
                                    <ul className="list-style-three pt-15 pb-30">
                                        <li>Use strong passwords</li>
                                        <li>Use security software</li>
                                        <li>Monitor for intrusion</li>
                                        <li>Raise awareness</li>
                                    </ul>
                                    <Link to="/about#" className="theme-btn style-ten hover-two">Discover More <i className="far fa-paper-plane"></i></Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade right delay={300}>
                                <div className="ready-image">
                                    <img src={protectsThumb} alt="Ready" />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyV2;