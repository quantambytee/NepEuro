import React from 'react';
import BlogPageData from '../../jsonData/BlogPageData.json'
import SingleBlogContent from './SingleBlogContent';
import ShopPagination from '../shopPage/ShopPagination';
import BlogSearchWidget from '../../components/widget/SearchWidget';
import BlogNewsWidget from '../../components/widget/NewsWidget';
import BlogTags from '../../components/widget/TagsWidget';
import BlogCategory from '../../components/widget/CategoryWidget';
import WidgetInfo from '../shopPage/InfoWidget';

const BlogPageContent = () => {
    return (
        <>
            <section className="blog-page-area bg-lighter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-standard-content pt-120 rpt-100 pb-110 rpb-90 pr-15 rpr-0">
                                {BlogPageData.map(blog =>
                                    <SingleBlogContent blog={blog} key={blog.id} />
                                )}
                                <ShopPagination />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-9">
                            <div className="blog-sidebar mt-120 rmy-100">
                                <BlogSearchWidget />
                                <BlogNewsWidget />
                                <BlogCategory />
                                <BlogTags />
                                <WidgetInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPageContent;