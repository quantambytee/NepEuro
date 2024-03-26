import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';

const SingleCounterV1 = ({ counter }) => {
    const { start, end, title, delay } = counter;

    return (
        <>
            <Fade delay={delay}>
                <div className="success-item">
                    <span className="count-text plus">
                        <CountUp start={start} end={end} duration={5} />
                    </span>
                    <p>{title}</p>
                </div>
            </Fade>
        </>
    );
};

export default SingleCounterV1;