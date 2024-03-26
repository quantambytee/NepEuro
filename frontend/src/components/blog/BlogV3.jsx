import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import blogThumb2 from '/images/news/news-2.jpg'
import newsAuthor2 from '/images/news/news-author-2.jpg'
import BlogV1Data from '../../jsonData/BlogV1Data.json'
import SingleBlogV3 from './SingleBlogV3';

const BlogV3 = () => {
    return (
        <>
            <section className="news-section-two pb-90 rpb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <Fade className="fadeInUp" delay={300}>
                                <div className="news-seciton-content mb-55">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">Recent Articles</span>
                                        <h2>Get News & Blog</h2>
                                    </div>
                                    <p>Lorem ipsum dolor amet consectetur adips elit sed do eiusmod tempor incididunt laboey dolore magna aliqua enim minim</p>
                                    <p>On the other hand, we denounce righteous indignation and dislike men who are beguiled and demoralized by the charms</p>
                                    <Link to="/blog#" className="theme-btn mt-15">view all news</Link>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <Fade className="fadeInUp" delay={300}>
                                <div className="news-item">
                                    <div className="image">
                                        <img src={blogThumb2} alt="News" />
                                    </div>
                                    <div className="news-content">
                                        <ul className="post-meta-item">
                                            <li>
                                                <i className="fas fa-calendar-alt"></i>
                                                <Link to="#" rel="bookmark">22 December 2023</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-tag"></i>
                                                <Link to="#">it service</Link>
                                            </li>
                                        </ul>
                                        <h4><Link to="/blog-details#">Keep Your Business Safe &amp; Ensure High Availability.</Link></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisc ingelit sed do eiusmod </p>
                                    </div>
                                    <div className="news-author">
                                        <img src={newsAuthor2} alt="Author" />
                                        <span className="posted-by">
                                            By <Link to="#">Admin</Link>
                                        </span>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-xl-4">
                            <div className="row">
                                {BlogV1Data.slice(0, 2).map(blog =>
                                    <div className="col-xl-12 col-sm-6" key={blog.id}>
                                        <SingleBlogV3 blog={blog} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogV3;