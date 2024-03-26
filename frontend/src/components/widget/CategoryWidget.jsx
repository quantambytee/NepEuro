import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const CategoryWidget = () => {
    return (
        <>
            <div className="widget widget-category">
                <h3 className="widget-title">Category</h3>
                <ul className="list-style-two">
                    <li><Link to="#">Business Strategy</Link> <span>(20)</span></li>
                    <li><Link to="#">Investment Planning</Link> <span>(05)</span></li>
                    <li><Link to="#">Financial Investment</Link> <span>(03)</span></li>
                    <li><Link to="#">Banking & Insurance</Link> <span>(30)</span></li>
                    <li><Link to="#">Free Consulting</Link> <span>(07)</span></li>
                    <li><Link to="#">Meet Our Team</Link> <span>(09)</span></li>
                </ul>
            </div>
        </>
    );
};

export default CategoryWidget;