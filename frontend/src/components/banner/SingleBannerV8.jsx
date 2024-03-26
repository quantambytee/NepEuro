import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBannerV8 = ({ banner }) => {
    const { thumb, subtitle, title, text, btn1Text, btnIcon, btn2Text } = banner

    return (
        <>
            <div className="main-slider-item">
                <div className="image">
                    <img src={`/images/slider/${thumb}`} alt="Slider" />
                </div>
                <div className="slider-caption">
                    <div className="container">
                        <div className="main-slider-content">
                            <Fade bottom delay={200}>
                                <span className="sub-title">{subtitle}</span>
                            </Fade>
                            <Fade bottom delay={400}>
                                <h1>{title}</h1>
                            </Fade>
                            <Fade bottom delay={600}>
                                <p className="text-white">{text}</p>
                            </Fade>
                            <Fade bottom delay={800}>
                                <div className="slider-btns">
                                    <Link to="/about#" className="theme-btn style-ten">{btn1Text}<i className={btnIcon}></i></Link>
                                    <Link to="/about#" className="theme-btn style-eleven">{btn2Text} <i className={btnIcon}></i></Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV8;