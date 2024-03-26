import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const CallToActionV1 = () => {
    return (
        <>
            <section className="call-to-action bg-blue pt-40 pb-15">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-11">
                            <div className="section-title-with-btn">
                                <div className="section-title text-white mb-15">
                                    <h2>Ready to get our professional solutions</h2>
                                </div>
                                <Link to="/services#" className="theme-btn style-two mb-25">View All Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CallToActionV1;