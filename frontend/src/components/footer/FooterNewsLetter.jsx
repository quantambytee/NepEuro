import React from 'react';
import { toast } from 'react-toastify';

const FooterNewsLetter = () => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribed to Our Newsletter!")
    }

    return (
        <>
            <div className="footer-sign-up">
                <div className="container">
                    <div className="footer-signup-inner bg-light-black pt-40 pb-25 px-60">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 col-lg-7">
                                <div className="section-title text-white mb-25 rmb-35">
                                    <h2>Sign up for latest IT resources news from Restly</h2>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <form className="sign-in-form mb-15" onSubmit={handleEmail} >
                                    <input type="email" placeholder="Email Address" required />
                                    <button className="theme-btn" type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterNewsLetter;