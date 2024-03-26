import React from 'react';
import { Fade } from 'react-reveal';
import stones from '/images/shapes/stones.png'
import dots from '/images/shapes/dots.png'
import { toast } from 'react-toastify';

const SubscribeV2 = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed to Our Newsletter!")
    }

    return (
        <>
            <div className="subscribe-two bgs-cover rel z-1 py-100"
                style={{ backgroundImage: "url(/images/background/subscribe-bg.png)" }}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <Fade className="fadeInUp" delay={300}>
                                <div className="section-title text-white mb-25 rmb-35">
                                    <span className="sub-title">Subscribe Now</span>
                                    <h2>Get more updates to buy in our bulletins</h2>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade className="fadeInUp" delay={500}>
                                <form className="subscribe-form-two mb-15 mr-50" onSubmit={handleEmail}>
                                    <input type="email" placeholder="Email Address" autoComplete='off' required />
                                    <button className="theme-btn" type="submit">Subscribe Now <i
                                        className="fas fa-arrow-right"></i></button>
                                </form>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="shape-stones">
                    <img src={stones} alt="Stones" />
                </div>
                <div className="shape-dots">
                    <img src={dots} alt="Dots" />
                </div>
            </div>
        </>
    );
};

export default SubscribeV2;