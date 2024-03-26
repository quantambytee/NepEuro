import React from 'react';
import errorThumb from '/images/404.png'
import { HashLink as Link } from 'react-router-hash-link';

const ErrorContent = () => {
    return (
        <>
            <section className="error-page text-center py-120 rpy-100">
                <div className="container">
                    <div className="error-content">
                        <img src={errorThumb} alt="404 Error" />
                        <h2>Oops! page not found.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <Link to="/#" className="theme-btn mt-30">go back</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorContent;