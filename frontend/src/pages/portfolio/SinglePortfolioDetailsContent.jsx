import React from 'react';

const SinglePortfolioDetailsContent = ({ details }) => {
    const { title, description } = details

    return (
        <>
            <li>
                <h4>{title}</h4>
                <p>{description}</p>
            </li>
        </>
    );
};

export default SinglePortfolioDetailsContent;