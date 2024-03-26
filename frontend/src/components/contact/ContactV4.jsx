import React from 'react';
import ContactV2Thumb from './ContactV2Thumb';
import ContactV1Form from './ContactV1Form';

const ContactV4 = () => {
    return (
        <>
            <section className="contact-four py-120 rpy-100">
                <div className="container">
                    <div className="contact-inner-four box-shadow p-35 rpx-25 br-5 bg-white">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="contact-section-form px-15 rpx-0 rmb-50 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-20">
                                        <h2>Get In Touch</h2>
                                    </div>
                                    <ContactV1Form />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <ContactV2Thumb />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactV4;