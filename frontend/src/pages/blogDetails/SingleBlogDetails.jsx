import React from 'react';
import SocialShare from '../../components/others/SocialShare';
import singleBlogThumb from '/images/news/blog-standard-1.jpg'
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogDetails = () => {
    return (
        <>
            <div className="image">
                <img src={singleBlogThumb} alt="Blog Standard" />
            </div>
            <div className="blog-header">
                <ul className="post-meta-item mr-15">
                    <li>
                        <i className="far fa-user"></i>
                        <Link to="#">Daniel Custer</Link>
                    </li>
                    <li>
                        <i className="fas fa-calendar-alt"></i>
                        <Link to="#">25 Jan 2022</Link>
                    </li>
                </ul>
                <div className="social-style-one d-flex">
                    <span>Share Now</span>
                    <SocialShare />
                </div>
            </div>
            <h3>Monthly Web Development Update Complexity Over HTTPS, And Push Notifications</h3>
            <p>But we ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt labore</p>
            <p>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehendermust explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,
                or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone</p>
            <blockquote>
                Avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter con sequences that are extremely painful again anyone
                <span className="author">Tony R. Francois</span>
            </blockquote>
            <div className="blog-footer mb-40">
                <div className="popular-tags mb-15">
                    <b className='me-1'>Popular Tags:</b>
                    <Link to="#">IT Services</Link>
                    <Link to="#">Technology</Link>
                    <Link to="#">Services</Link>
                </div>
                <div className="social-style-two">
                    <span className='me-2'>Share</span>
                    <SocialShare />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <Link to="/blog-details#" className="next-prev-blog">
                        <h4>Building Pub Sub Service Using Node And Redis</h4>
                    </Link>
                </div>
                <div className="col-sm-6">
                    <Link to="/blog-details#" className="next-prev-blog">
                        <h4>Once Upon Time Use Story For Better Engagement</h4>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogDetails;