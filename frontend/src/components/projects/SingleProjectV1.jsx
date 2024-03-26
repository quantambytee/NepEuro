import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleProjectV1 = ({ project }) => {
    const { thumb, title, category, delay } = project

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="project-item">
                    <img src={`/images/gallery/${thumb}`} alt="project" />
                    <div className="project-content">
                        <h3><Link to="/portfolio-details#">{title}</Link></h3>
                        <span className="category"><Link to="/portfolio-details#">{category}</Link></span>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleProjectV1;