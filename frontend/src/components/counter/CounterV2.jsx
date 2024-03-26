import React from 'react';
import CounterV1Data from '../../jsonData/CounterV1Data.json'
import { Fade } from 'react-reveal';
import SingleCounterV2 from './SingleCounterV2';

const CounterV2 = () => {
    return (
        <>
            <Fade className="fadeInRight" delay={300}>
                <div className="counter-right">
                    <div className="row text-center">
                        {CounterV1Data.map(counter =>
                            <div className="col-sm-6" key={counter.id}>
                                <SingleCounterV2 counter={counter} />
                            </div>
                        )}
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default CounterV2;