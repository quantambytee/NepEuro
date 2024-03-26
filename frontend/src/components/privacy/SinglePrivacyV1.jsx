import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SinglePrivacyV1 = ({ privacy }) => {
    const { icon, title, text } = privacy

    return (
        <>
            <div className="protect-item">
                <div className="icon">
                    <img src={`/images/protects/${icon}`} alt="Icon" />
                </div>
                <div className="content">
                    <h4><Link to="/service-details#">{title}</Link></h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SinglePrivacyV1;