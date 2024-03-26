import React from 'react';
import { Fade } from 'react-reveal';
import { toast } from 'react-toastify';

const SubscribeV1 = (props) => {
    const { subscribeSpace } = props;

    const handleSubscribe = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed to Our Newsletter!")
    }

    return (
        <>
            <section className={`${subscribeSpace} subscribe-section bg-blue pb-90 rpb-85`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade left delay={300}>
                                <div className="section-title text-white mb-25 rmt-35">
                                    <h2>Sign up for latest IT resources news from Restly</h2>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <Fade right delay={300}>
                                <form className="subscribe-form mb-15" onSubmit={handleSubscribe}>
                                    <input type="email" placeholder="Your Email Address" name='email' autoComplete='off' required />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SubscribeV1;