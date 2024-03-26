import React from 'react';
import SingleCounterV4 from './SingleCounterV4';
import CounterV4Data from '../../jsonData/CounterV4Data.json'

const CounterV4 = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="counter-four-inner mb-150 rmb-100">
                        <div className="row">
                            {CounterV4Data.map(counter =>
                                <div className="col-lg-4 col-sm-6" key={counter.id}>
                                    <SingleCounterV4 counter={counter} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterV4;