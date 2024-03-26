import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';

const SingleCounterV3 = ({ counter }) => {
    const { start, end, title, delay } = counter

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="success-item circle-style">
                    <span className="count-text"><CountUp start={start} end={end} /></span>
                    <span>{title}</span>
                </div>
            </Fade>
        </>
    );
};

export default SingleCounterV3;