import React from 'react';

const SingleTestimonialV1 = ({ testimonial }) => {
    const { thumb, name, designation, icon, text } = testimonial;

    return (
        <>
            <div className="testimonial-item wow fadeInLeft delay-0-2s">
                <div className="author-description">
                    <img src={`/images/testimonials/${thumb}`} alt="Author" />
                    <div className="designation">
                        <h5>{name}</h5>
                        <span>{designation}</span>
                    </div>
                    <i className={icon}></i>
                </div>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleTestimonialV1;