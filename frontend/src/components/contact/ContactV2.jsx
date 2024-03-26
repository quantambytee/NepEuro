import React from 'react';
import ContactV1Form from './ContactV1Form';
import { Fade } from 'react-reveal';
import ContactV2Thumb from './ContactV2Thumb';

const ContactV2 = () => {
    return (
        <>
            <section className="contact-two">
                <div className="container">
                    <div className="contact-section-inner br-5 bg-white">
                        <div className="row">
                            <div className="col-lg-7">
                                <Fade className="fadeInLeft" delay={300}>
                                    <div className="contact-section-form rmb-50">
                                        <div className="section-title mb-20">
                                            <h2>Get In Touch</h2>
                                        </div>
                                        <ContactV1Form />
                                    </div>
                                </Fade>
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

export default ContactV2;