import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const InfoWidget = () => {
    return (
        <>
            <div className="widget widget-call-action">
                <div className="call-action-widget">
                    <h2>Work Together</h2>
                    <p>Bur wemust ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore</p>
                    <Link to="/contact#" className="theme-btn style-five btn-circle" >Contact Now <i className="fas fa-angle-double-right"></i></Link>
                </div>
            </div>
        </>
    );
};

export default InfoWidget;