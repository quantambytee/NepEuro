import React from 'react';
import BlogNewsWidgetData from '../../jsonData/BlogNewsWidgetData.json'
import SingleBlogNewsWidget from '../../pages/blog/SingleBlogNewsWidget';

const NewsWidget = () => {
    return (
        <>
            <div className="widget widget-recent-post">
                <h3 className="widget-title">Recent News</h3>
                <div className="widget-news-wrap">
                    {BlogNewsWidgetData.map(blog =>
                        <SingleBlogNewsWidget blog={blog} key={blog.id} />
                    )}
                </div>
            </div>
        </>
    );
};

export default NewsWidget;