import React from 'react';
import { Fade } from 'react-reveal';
import { toast } from 'react-toastify';

const ContactV3 = () => {

    const handleConsult = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Message")
    }

    return (
        <>
            <div className="contact-section-three rel z-1">
                <div className="container">
                    <form className="contact-form-three text-white px-90 rpx-35 pt-80 pb-55" name="contact-form-three" style={{ backgroundImage: "url(/images/contact/contact-bg.jpg)" }} onSubmit={handleConsult}>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <Fade className="fadeInUp" delay={200}>
                                    <div className="form-group">
                                        <label htmlFor="name">Your Full Name</label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Timothy K. Lukas" required autoComplete="off" />
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Fade className="fadeInUp" delay={400}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" className="form-control" placeholder="support@gmail.com" required autoComplete="off" />
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Fade className="fadeInUp" delay={600}>
                                    <div className="form-group">
                                        <label htmlFor="service">Subject</label>
                                        <select id="service" name="service">
                                            <option value="default" defaultValue>I Would Like to Discuss</option>
                                            <option value="about">About</option>
                                            <option value="contact">Contact</option>
                                            <option value="team">Team</option>
                                        </select>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Fade className="fadeInUp" delay={800}>
                                    <div className="form-group">
                                        <label htmlFor="number">Phone Number</label>
                                        <input type="number" id="number" name="number" className="form-control no-arrows" placeholder="+012 (345) 67 89" required autoComplete="off" />
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <Fade className="fadeInUp" delay={1000}>
                                    <div className="form-group">
                                        <label htmlFor="website">Website</label>
                                        <input type="text" id="website" name="website" className="form-control" placeholder="www.itsolutions.com" required autoComplete="off" />
                                    </div>
                                </Fade>
                            </div>
                            <Fade className="fadeInUp" delay={1200}>
                                <div className="col-lg-4 col-sm-6">
                                    <button type="submit" className="theme-btn mt-40 mb-25">Get Free Consultation</button>
                                </div>
                            </Fade>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactV3;