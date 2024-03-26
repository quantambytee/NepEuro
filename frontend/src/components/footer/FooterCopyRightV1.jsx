import React from "react";
import SocialShare from "../others/SocialShare";

const FooterCopyRightV1 = (props) => {
  const { copyrightBg } = props;

  return (
    <>
      <div className={`${copyrightBg} copyright-area`}>
        <div className="container">
          <div className="copyright-inner pt-15">
            <div className="social-style-one mb-10">
              {/* <SocialShare /> */}
            </div>
            <p>
              &copy; {new Date().getFullYear()} Nepeuro All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCopyRightV1;
