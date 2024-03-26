import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePortfolioContent = ({ portfolio }) => {
    const { thumb, title } = portfolio

    return (
        <>
            <div className="gallery-item style-three">
                <img src={`/images/gallery/${thumb}`} alt="Gallery" />
                <div className="gallery-content">
                    <h5><Link to="/portfolio-details#">{title}</Link></h5>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioContent;