import React from 'react';

const SingleTestimonialV7 = ({ testimonial }) => {
    const { authorThumb, text, icon, name, designation } = testimonial

    return (
        <>
            <div className="testimonial-seven-item">
                <div className="image">
                    <img src={`/images/testimonials/${authorThumb}`} alt="Author" />
                </div>
                <p>{text}</p>
                <div className="author">
                    <div className="icon"><i className={icon}></i></div>
                    <div className="title">
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV7;