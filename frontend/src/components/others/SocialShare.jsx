import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SocialShare = () => {
    return (
        <>
            <ul className='social-share'>
                <li><Link to="http://facebook.com" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link to="http://twitter.com" target='_blank' ><i className="fab fa-twitter"></i></Link></li>
                <li> <Link to="https://www.instagram.com/" target='_blank' ><i className="fab fa-instagram"></i></Link></li>
                <li><Link to="https://www.pinterest.com/" target='_blank' ><i className="fab fa-pinterest-p"></i></Link></li>
            </ul>
        </>
    );
};

export default SocialShare;