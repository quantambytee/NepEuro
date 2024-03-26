import React from 'react';
import shape from '/images/shapes/newsletter.png'
import newsletter1 from '/images/shapes/newsletter1.png'
import newsletter2 from '/images/shapes/newsletter2.png'
import { Fade } from 'react-reveal';
import { toast } from 'react-toastify';

const SubscribeV3 = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed to Our Newsletter!")
    }

    return (
        <>
            <section className="newsletter-section pt-100 rpt-70 pb-130 rpb-100">
                <div className="container container-1250">
                    <div className="newsletter-inner">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-7 col-lg-6">
                                <div className="newsletter-images mt-35 images-with-shapes">
                                    <img className="image" src={shape} alt="Mobile" />
                                    <img className="shape one" src={newsletter1} alt="Shape" />
                                    <img className="shape four" src={newsletter2} alt="Shape" />
                                    <div className="circle-shapes-wrap">
                                        <div className="circle-shape"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <Fade left delay={300}>
                                    <div className="newsletter-content rel z-2 my-35">
                                        <div className="section-title mb-15">
                                            <span className="sub-title-two mb-25">Newsletters</span>
                                            <h2>Get Every Single Update Subscribe Newsletter</h2>
                                        </div>
                                        <p>We are available on store download our Apps</p>
                                        <form onSubmit={handleEmail}>
                                            <div className="form-group">
                                                <input type="email" autoComplete='off' placeholder="Email Address" className='px-3' required />
                                                <button type="submit" className="theme-btn rtl-space rtl-margin"><span className='rtl-margin'>Sign Up</span> <i className="fas fa-arrow-right"></i></button>
                                            </div>
                                            <div className="radio">
                                                <input id="daily-update" type="radio" />
                                                <label htmlFor="daily-update" className='rtl-margin'>Get Daily Updates</label>
                                            </div>
                                        </form>
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

export default SubscribeV3;