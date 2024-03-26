import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import footerAction from '/images/footer/footer-call-action.png'

const CallToActionV3 = () => {
    return (
        <>
            <section className="footer-call-action">
                <div className="container">
                    <div className="footer-call-action-inner bgs-cover" style={{ backgroundImage: "url(/images/background/footer-call-action-bg.png)" }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="footer-call-action-image rpt-60">
                                    <img src={footerAction} alt="CallToAction" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="footer-call-action-content py-70">
                                    <h2>Better data with a better Company</h2>
                                    <Link to="/about#" className="theme-btn style-eight mt-30">Learn click here <i className="fas fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToActionV3;