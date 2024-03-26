import React from 'react';
import CounterV3Data from '../../jsonData/CounterV3Data.json'
import SingleCounterV3 from './SingleCounterV3';

const CounterV3 = () => {
    return (
        <>
            <section className="cournter-section-three home-six bg-lighter text-center pt-115 rpt-95 pb-70 rpb-50">
                <div className="container">
                    <div className="section-title mb-55">
                        <h2>Over 1200+ finished work and <br />Still counting.</h2>
                    </div>
                    <div className="row">
                        {CounterV3Data.map(counter =>
                            <div className="col-lg-3 col-sm-6" key={counter.id}>
                                <SingleCounterV3 counter={counter} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CounterV3;