import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const CallToActionV4 = () => {
    return (
        <>
            <section className="call-action-three bgs-cover pt-55 pb-35 rpb-40" style={{ backgroundImage: "url(/images/background/call-action-three-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="section-title text-white mb-15">
                                <h2>We guarantee 100% protection</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 text-lg-right">
                            <Link to="/about#" className="theme-btn style-nine hover-two mb-20">Discover More <i className="far fa-paper-plane"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToActionV4;