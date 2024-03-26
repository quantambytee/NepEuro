import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleAboutV10 = ({ about }) => {
    const { icon, title } = about

    return (
        <>
            <div className="feature-item-four">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <h6><Link to="/service-details#">{title}</Link></h6>
            </div>
        </>
    );
};

export default SingleAboutV10;