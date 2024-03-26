import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SIngleBlogComment = ({ comment }) => {
    const { thumb, name, date, text } = comment

    return (
        <>
            <div className="comment-item">
                <div className="author-image">
                    <img src={`/images/news/${thumb}`} alt="Author" />
                </div>
                <div className="comment-details">
                    <div className="name-date">
                        <h5>{name}</h5>
                        <span className="date">{date}</span>
                    </div>
                    <p>{text}</p>
                    <Link to="#" className="reply">Reply Comments</Link>
                </div>
            </div>
        </>
    );
};

export default SIngleBlogComment;