import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import whyChooseThumb from '/images/about/why-choose-mobile.png'
import shape1 from '/images/hero/hero-ten-1.png'
import shape2 from '/images/hero/hero-ten-2.png'
import shape3 from '/images/hero/hero-ten-3.png'
import shape4 from '/images/hero/hero-ten-4.png'

const WhyChooseUsV1 = () => {
    return (
        <>
            <section className="why-choose-us pb-130 rpb-100">
                <div className="container container-1635">
                    <div className="why-choose-inner">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-5 col-lg-6">
                                <Fade left delay={200}>
                                    <div className="why-choose-content rel z-2 mb-55">
                                        <div className="section-title mb-25">
                                            <span className="sub-title-two mb-25">Why Choose Us</span>
                                            <h2>Super Simple Application Are Made For Easily</h2>
                                        </div>
                                        <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam eaque quae ainventore veritatis et quasi architecto beatae vitae dicta sunte</p>
                                        <div className="row pt-20 pb-5">
                                            <div className="col-md-6">
                                                <div className="why-choose-item">
                                                    <div className="icon">
                                                        <i className="flaticon flaticon-3d-printing"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h3>Free Download App</h3>
                                                        <p>Natus error voluptatem accusan doloreue laudantium totam</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="why-choose-item">
                                                    <div className="icon">
                                                        <i className="flaticon flaticon-like-1"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h3>Trusted and Reliable</h3>
                                                        <p>Natus error voluptatem accusan doloreue laudantium totam</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="/contact#" className="theme-btn rtl-margin">Get 14 Days Free Trial <i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <Fade className="fadeInRight" delay={200}>
                                    <div className="why-choose-images mb-55 images-with-shapes">
                                        <Zoom delay={400}>
                                            <img className="mobile" src={whyChooseThumb} alt="Mobile" />
                                        </Zoom>
                                        <img className="shape one" src={shape1} alt="Shape" />
                                        <img className="shape two" src={shape2} alt="Shape" />
                                        <img className="shape three" src={shape3} alt="Shape" />
                                        <img className="shape four" src={shape4} alt="Shape" />
                                        <div className="circle-shapes-wrap">
                                            <div className="circle-shape"></div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsV1;