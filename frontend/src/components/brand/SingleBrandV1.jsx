import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBrandV1 = ({ brand }) => {
    const { thumb } = brand;

    return (
        <>
            <div className="logo-item">
                <Link to="#">
                    <img src={`images/client-logo/${thumb}`} alt="Client Logo" />
                </Link>
            </div>
        </>
    );
};

export default SingleBrandV1;