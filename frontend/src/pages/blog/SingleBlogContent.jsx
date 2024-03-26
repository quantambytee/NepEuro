import React from 'react';
import SocialShare from '../../components/others/SocialShare';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogContent = ({ blog }) => {
    const { thumb, author, icon, date, icon2, title, text, btn } = blog

    return (
        <>
            <div className="blog-standard-item">
                <div className="image">
                    <img src={`/images/news/${thumb}`} alt="Blog Standard" />
                </div>
                <div className="blog-header">
                    <ul className="post-meta-item mr-15">
                        <li>
                            <i className={icon}></i>
                            <Link to="#" >{author}</Link>
                        </li>
                        <li>
                            <i className={icon2}></i>
                            <Link to="#">{date}</Link>
                        </li>
                    </ul>
                    <div className="social-style-one d-flex">
                        <span>Share Now</span>
                        <SocialShare />
                    </div>
                </div>
                <h3><Link to="/blog-details#">{title}</Link></h3>
                <p>{text}</p>
                <Link to="/blog-details#" className="theme-btn">{btn}</Link>
            </div>
        </>
    );
};

export default SingleBlogContent;