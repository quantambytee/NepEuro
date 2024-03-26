import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const PortfolioNextPrev = () => {
    return (
        <>
            <div className="next-prev-post">
                <div className="container">
                    <div className="next-prev-wrap">
                        <Link to="/portfolio-details#" className="prev-post">
                            <i className="fas fa-arrow-left"></i>
                            <span>Previous post</span>
                        </Link>
                        <Link to="/portfolio-details#" className="prev-post">
                            <span>Next post</span>
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioNextPrev;