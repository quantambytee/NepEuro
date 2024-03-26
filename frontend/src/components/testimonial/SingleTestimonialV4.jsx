import React from 'react';

const SingleTestimonialV4 = ({ testimonial }) => {
    const { text, thumb, name, designation } = testimonial

    return (
        <>
            <div className="testimonial-four-item">
                <div className="testimonial-four-content">
                    <p>{text}</p>
                </div>
                <div className="testimonial-four-author">
                    <img src={`/images/testimonials/${thumb}`} alt="Testimonial Author" />
                    <div className="testimonial-four-author-designation">
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV4;