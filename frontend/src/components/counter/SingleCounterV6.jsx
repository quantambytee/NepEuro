import React from 'react';
import CountUp from 'react-countup';

const SingleCounterV6 = ({ counter }) => {
    const { icon, start, end, title } = counter

    return (
        <>
            <div className="success-item style-six">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className="content">
                    <span className="count-text plus"><CountUp start={start} end={end} /></span>
                    <span className="counter-title">{title}</span>
                </div>
            </div>
        </>
    );
};

export default SingleCounterV6;