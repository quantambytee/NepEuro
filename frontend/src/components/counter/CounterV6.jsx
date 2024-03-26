import React from 'react';
import CounterV6Data from '../../jsonData/CounterV6Data.json'
import SingleCounterV6 from './SingleCounterV6';

const CounterV6 = () => {
    return (
        <>
            <div className="row mb-80 no-gutters ">
                {CounterV6Data.map(counter =>
                    <div className="col-lg-4 col-sm-6 mb-4" key={counter.id}>
                        <SingleCounterV6 counter={counter} />
                    </div>
                )}
            </div>
        </>
    );
};

export default CounterV6;