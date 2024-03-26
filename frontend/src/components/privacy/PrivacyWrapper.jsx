import React from 'react';
import PrivacyV1 from './PrivacyV1';
import PrivacyV2 from './PrivacyV2';

const PrivacyWrapper = () => {
    return (
        <>
            <div className="protect-ready-bg home-eight">
                <PrivacyV1 />
                <PrivacyV2 />
            </div>
        </>
    );
};

export default PrivacyWrapper;