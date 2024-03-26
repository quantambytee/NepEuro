import React from 'react';

const SingleTestimonialV2 = ({ testimonial }) => {
    const { text2, text3, thumb, name, designation } = testimonial

    return (
        <>
            <div className="testimonial-two-item">
                <p>{text2}</p>
                <i>{text3}</i>
                <div className="author-description">
                    <img src={`/images/testimonials/${thumb}`} alt="Author" />
                    <div className="designation">
                        <h5>{name}</h5>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;