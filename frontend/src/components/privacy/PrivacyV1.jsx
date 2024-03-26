import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import PrivacyV1Data from '../../jsonData/PrivacyV1Data.json'
import { HashLink as Link } from 'react-router-hash-link';
import protectThumb from '/images/protects/left-image.png'
import SinglePrivacyV1 from './SinglePrivacyV1';

const PrivacyV1 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="protect-section pt-115 rpt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="protect-left-part rmb-55">
                                <img src={protectThumb} alt="Protect" />
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="h9we7rUGYq4" onClose={() => setOpen(false)} />
                                <Link className="mfp-iframe video-play" onClick={() => setOpen(true)}>
                                    <i className="fas fa-play"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="protect-content">
                                <div className="section-title mb-30">
                                    <span className="sub-title">Advance Protect</span>
                                    <h2>Protecting your privacy Is our priority</h2>
                                </div>
                                {PrivacyV1Data.map(privacy =>
                                    <SinglePrivacyV1 privacy={privacy} key={privacy.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyV1;