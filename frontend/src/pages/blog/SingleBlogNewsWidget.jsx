import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogNewsWidget = ({ blog }) => {
    const { thumb, title, date } = blog

    return (
        <>
            <div className="widget-news-item">
                <img src={`/images/news/${thumb}`} alt="News" />
                <div className="widget-news-content">
                    <h5><Link to="/blog-details#">{title}</Link></h5>
                    <span className="date"><Link to="#">{date}</Link></span>
                </div>
            </div>
        </>
    );
};

export default SingleBlogNewsWidget;