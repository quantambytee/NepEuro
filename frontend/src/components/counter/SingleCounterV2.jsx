import React from 'react';
import { Fade } from 'react-reveal';
import CountUp from 'react-countup';

const SingleCounterV2 = ({ counter }) => {
    const { start, end, title, delay } = counter;

    return (
        <>
            <Fade delay={delay}>
                <div className="success-item style-three">
                    <span className="count-text plus">
                        <CountUp start={start} end={end} duration={5} />
                    </span>
                    <p>{title}</p>
                </div>
            </Fade>
        </>
    );
};

export default SingleCounterV2;