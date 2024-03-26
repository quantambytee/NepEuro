import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const TagsWidget = () => {
    return (
        <>
            <div className="widget widget-tag-cloud">
                <h3 className="widget-title">Tags</h3>
                <div className="tags">
                    <Link to="#">Cleaning</Link>
                    <Link to="#">Business</Link>
                    <Link to="#">Booking</Link>
                    <Link to="#">car</Link>
                    <Link to="#">House</Link>
                    <Link to="#">Apartment</Link>
                    <Link to="#">Washing</Link>
                    <Link to="#">Agency</Link>
                    <Link to="#">Listing</Link>
                </div>
            </div>
        </>
    );
};

export default TagsWidget;