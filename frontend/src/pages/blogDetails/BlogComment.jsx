import React from 'react';
import BlogCommentData from '../../jsonData/BlogCommentData.json'
import SIngleBlogComment from './SIngleBlogComment';

const BlogComment = () => {
    return (
        <>
            <div className="comments-wrap mt-55">
                <h3 className="comment-title mb-55">Client’s Comments</h3>
                <div className="blog-comments">
                    {BlogCommentData.map(comment =>
                        <SIngleBlogComment comment={comment} key={comment.id} />
                    )}
                </div>
            </div>
        </>
    );
};

export default BlogComment;