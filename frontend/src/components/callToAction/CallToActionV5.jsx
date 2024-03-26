import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ctaThumb from '/images/call-action/call-action-right.png'
import { Fade } from 'react-reveal';

const CallToActionV5 = () => {
    return (
        <>
            <section className="call-action-four-area">
                <div className="container">
                    <Fade className="fadeInUp" delay={300}>
                        <div className="call-action-four rel z-1 p-70 pb-80 rpx-55" style={{ backgroundImage: "url(/images/call-action/call-action-bg.png)" }}>
                            <div className="section-title mb-35">
                                <h2>Truly, Madly, Deeply in love with This NFT collection.</h2>
                            </div>
                            <Link to="/contact#" className="theme-btn style-twelve">Connect NFT</Link>
                            <Fade className="fadeInUp" delay={500}>
                                <div className="right-image">
                                    <img src={ctaThumb} alt="Call To Action" />
                                </div>
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    );
};

export default CallToActionV5;