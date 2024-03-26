import React from 'react';

const SingleTestimonialV5 = ({ testimonial }) => {
    const { text, authorThumb, name, designation } = testimonial

    return (
        <>
            <div className="testimonial-five-item">
                <p>{text}</p>
                <div className="author-description">
                    <img src={`/images/testimonials/${authorThumb}`} alt="Author" />
                    <div className="name-designation">
                        <h3>{name}</h3>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV5;