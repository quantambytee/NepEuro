import React from 'react';
import faqTriangle from '/images/shapes/faq-triangle.png'
import { HashLink as Link } from 'react-router-hash-link';

const FaqV1 = () => {
    return (
        <>
            <section className="faq-page rel z-1 pt-150 rpt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-accordion rmb-55" id="faq-accordion">
                                <div className="card">
                                    <Link className="card-header" id="heading0" to="#" data-bs-toggle="collapse" data-bs-target="#collapse0" aria-expanded="true" aria-controls="collapse0">What are the questions for data science?<span className="toggle-btn"></span>
                                    </Link>
                                    <div id="collapse0" className="collapse show" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <Link className="collapsed card-header" id="heading1" to="#" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">Which is better AI or data science?<span className="toggle-btn"></span>
                                    </Link>
                                    <div id="collapse1" className="collapse" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <Link className="collapsed card-header" id="heading2" to="#" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Why data science is the future?<span className="toggle-btn"></span>
                                    </Link>
                                    <div id="collapse2" className="collapse" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="faq-content">
                                <div className="section-title mb-30">
                                    <span className="sub-title">05 FAQ</span>
                                    <h2>Any Questions for Data science</h2>
                                </div>
                                <p>Nam venenatis vehicula orci, at cursus sapien vestibulum et. Donec suscipit porta turpis non malesuada. In sit amet ex eget turpis molestie tincidunt vel a massa.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-triangle">
                    <img src={faqTriangle} alt="Triangle" />
                </div>
                <div className="faq-box-shape"></div>
            </section>
        </>
    );
};

export default FaqV1;