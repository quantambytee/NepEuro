import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogV3 = ({ blog }) => {
    const { icon, date, tag, title, text } = blog

    return (
        <>
            <div className="news-item style-three">
                <div className="news-content">
                    <ul className="post-meta-item">
                        <li>
                            <i className={icon}></i>
                            <Link to="#">{date}</Link>
                        </li>
                        <li>
                            <i className="fas fa-tag"></i>
                            <Link to="#">{tag}</Link>
                        </li>
                    </ul>
                    <h4><Link to="/blog-details#">{title}</Link></h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleBlogV3;