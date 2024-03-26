import React from 'react';
import SocialShare from '../../components/others/SocialShare';
import teamProfileThumb from '/images/team/team-profile.jpg'
import { Fade } from 'react-reveal';

const TeamProfileContent = () => {
    return (
        <>
            <section className="team-profile py-120 rpy-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <Fade left delay={200}>
                                <div className="team-profile-image rmb-45">
                                    <img src={teamProfileThumb} alt="Team Profile" />
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-7">
                            <Fade right delay={200}>
                                <div className="team-profile-content ml-40 rml-0">
                                    <h2 className="name">Lois M. McGinley</h2>
                                    <span className="designation">Software Engineer</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate </p>
                                    <ul className="list-style-three pt-15 pb-30">
                                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                                    </ul>
                                    <h3>Explore Skills</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo</p>
                                    <div className="row my-30">
                                        <div className="col-sm-6">
                                            <div className="service-normal style-two">
                                                <div className="icon">
                                                    <i className="flaticon flaticon-computer"></i>
                                                </div>
                                                <h6>Software Development</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="service-normal style-two">
                                                <div className="icon">
                                                    <i className="flaticon flaticon-design-process"></i>
                                                </div>
                                                <h6>Machine Learning</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Explore Skills</h3>
                                    <div className="social-style-two mt-15">
                                        <SocialShare />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamProfileContent;