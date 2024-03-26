import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import CounterV2 from '../counter/CounterV2';

const StatisticsV1 = (props) => {
    const { areaSpace } = props

    return (
        <>
            <section className={`fact-counter-section rel z-1 ${areaSpace}`}>
                <div className="container">
                    <div className="fact-counter-inner br-5 text-white" style={{ backgroundImage: "url(/images/counter/counter-bg-section.jpg)" }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Fade left delay={300}>
                                    <div className="counter-left-content px-100 py-70">
                                        <div className="section-title mb-30">
                                            <span className="sub-title">Company Statistics</span>
                                            <h2>We have achieved many world wide awards</h2>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                                        <Link to="/about#" className="theme-btn style-five">Learn More</Link>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-6">
                                <CounterV2 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StatisticsV1;