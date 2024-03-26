import React from 'react';
import CounterV1Data from '../../jsonData/CounterV1Data.json'
import SingleCounterV1 from './SingleCounterV1';

const CounterV1 = (props) => {
    const { counterSpace } = props

    return (
        <>
            <div className={`counter-one-area ${counterSpace}`}>
                <div className="container">
                    <div className="fact-counter-inner br-5 px-25 pt-80 pb-30 text-white text-center">
                        <div className="row">
                            {CounterV1Data.map(counter =>
                                <div className="col-lg-3 col-sm-6" key={counter.id}>
                                    <SingleCounterV1 counter={counter} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterV1;