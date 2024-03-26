import React from 'react';
import NewsWidget from '../../components/widget/NewsWidget';
import CategoryWidget from '../../components/widget/CategoryWidget';
import TagsWidget from '../../components/widget/TagsWidget';
import SearchWidget from '../../components/widget/SearchWidget';
import InfoWidget from '../shopPage/InfoWidget';
import BlogDetailsComment from './BlogComment';
import BlogCommentForm from './BlogCommentForm';
import SingleBlogDetails from './SingleBlogDetails';

const BlogDetailsContent = () => {
    return (
        <>
            <section className="blog-details-area bg-lighter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-content pt-120 rpt-100 pb-95 rpb-75 pr-15 rpr-0">
                                <SingleBlogDetails />
                                <BlogDetailsComment />
                                <BlogCommentForm />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-9">
                            <div className="blog-sidebar mt-120 rmy-100">
                                <SearchWidget />
                                <NewsWidget />
                                <CategoryWidget />
                                <TagsWidget />
                                <InfoWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsContent;