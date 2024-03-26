import React from 'react';
import featureThumb from '/images/about/made-easy.png'
import featureShape from '/images/about/made-easy-left.png'
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const FeatureV4 = () => {
    return (
        <>
            <section className="made-easy-way pt-130 rpt-100">
                <div className="container container-1250">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="made-easy-way-images mb-55 images-with-shapes">
                                    <div className="image">
                                        <img src={featureThumb} alt="About" />
                                    </div>
                                    <img className="shape one" src={featureShape} alt="Shape" />
                                    <div className="circle-shapes-wrap">
                                        <div className="circle-shape"></div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <Fade right delay={300}>
                                <div className="made-easy-way-content mb-55">
                                    <div className="section-title mb-25">
                                        <span className="sub-title-two mb-25">Made Easy Way</span>
                                        <h2>We Provide All Solutions In One Application</h2>
                                    </div>
                                    <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam eaque quae ainventore veritatis et quasi architecto beatae vitae dicta sunte</p>
                                    <div className="feature-item-five mt-25">
                                        <div className="icon">
                                            <i className="flaticon flaticon-web-1"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3><Link to="/service-details#">Quality Design & Coding</Link></h3>
                                            <p>Sed perspiciatis unde omnis iste voluptatem accusantium doloremque ntiume</p>
                                        </div>
                                    </div>
                                    <div className="feature-item-five">
                                        <div className="icon">
                                            <i className="flaticon flaticon-cloud-network-1"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3><Link to="/service-details#">High & Big Cloud Stroges</Link></h3>
                                            <p>Sed perspiciatis unde omnis iste voluptatem accusantium doloremque ntiume</p>
                                        </div>
                                    </div>
                                    <Link to="/contact#" className="theme-btn style-six mt-15 rtl-margin">Get 14 Days Free Trial <i className="fas fa-arrow-right"></i></Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureV4;