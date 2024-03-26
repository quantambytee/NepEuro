import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';

const SingleCounterV5 = ({ counter }) => {
    const { icon, start, end, title, delay } = counter

    return (
        <>
            <Fade className="fadeInUp" delay={delay}>
                <div className="success-item style-five">
                    <div className="icon">
                        <img src={`/images/counter/${icon}`} alt="Icon" />
                    </div>
                    <div className="content">
                        <span className="count-text k">
                            <CountUp start={start} end={end} />
                        </span>
                        <span className="count-text bg-text k">
                            <CountUp start={start} end={end} />
                        </span>
                        <span className='count-title'>{title}</span>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleCounterV5;