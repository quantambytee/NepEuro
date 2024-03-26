import React from 'react';
import { Fade } from 'react-reveal';
import ContactV1Form from './ContactV1Form';
import CounterV1Data from '../../jsonData/CounterV1Data.json'
import SingleCounterV1 from '../counter/SingleCounterV1';

const ContactV1 = () => {
    return (
        <>
            <section className="contact-section bg-lighter pb-60 rpb-40">
                <div className="container">
                    <div className="contact-section-inner p-50 br-5 bg-white">
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
                                <Fade className="fadeInRight" delay={300}>
                                    <div className="contact-image-number bgs-cover" style={{ backgroundImage: "url(/images/contact/home-two.jpg)" }}>
                                        <div className="contact-number">
                                            <i className="fas fa-phone-alt"></i>
                                            <a href="tel:+012-345-6789">+012-345-6789</a>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="fact-counter-color text-center">
                        <div className="row">
                            {CounterV1Data.map(counter =>
                                <div className="col-lg-3 col-sm-6" key={counter.id}>
                                    <SingleCounterV1 counter={counter} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactV1;