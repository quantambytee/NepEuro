import React from 'react';

import FooterCopyRightV1 from './FooterCopyRightV1';
import FooterV4Content from './FooterV4Content';

const FooterV4 = () => {
    return (
        <>
            <footer className="main-footer footer-three bg-light-black text-white pt-90">
                <FooterV4Content logo="footerLogo" />
                <FooterCopyRightV1 copyrightBg="bg-blue mt-30" />
            </footer>
        </>
    );
};

export default FooterV4;