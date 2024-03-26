import React from 'react';
import CountUp from 'react-countup';

const SingleCounterV4 = ({ counter }) => {
    const { start, end, text, icon } = counter

    return (
        <>
            <div className="success-item style-four">
                <i className={icon}></i>
                <div className="success-content">
                    <span className="count-text">
                        <CountUp start={start} end={end} />
                    </span>
                    <span className="normal-text">{text}</span>
                </div>
            </div>
        </>
    );
};

export default SingleCounterV4;