import React from 'react';
import CounterV5Data from '../../jsonData/CounterV5Data.json'
import SingleCounterV5 from './SingleCounterV5';

const CounterV5 = () => {
    return (
        <>
            <div className="cournter-section-five home-eight bg-black text-white pt-95 rpt-75 pb-65 rpb-45">
                <div className="container">
                    <div className="row">
                        {CounterV5Data.map(counter =>
                            <div className="col-lg-4 col-sm-6 text-center" key={counter.id}>
                                <SingleCounterV5 counter={counter} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterV5;