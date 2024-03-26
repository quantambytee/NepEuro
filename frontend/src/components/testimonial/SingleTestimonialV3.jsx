import React from 'react';

const SingleTestimonialV3 = ({ testimonial }) => {
    const { text, name, thumb, designation } = testimonial

    return (
        <>
            <div className="testimonial-three-item">
                <p>{text}</p>
                <div className="testimonial-three-thumbs">
                    <img src={`/images/testimonials/${thumb}`} alt="author" />
                </div>
                <div className="designation">
                    <h5>{name}</h5>
                    <span>{designation}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV3;