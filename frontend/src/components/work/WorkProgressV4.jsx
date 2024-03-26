import React from 'react';
import WorkProgressV1Data from '../../jsonData/WorkProgressV1Data.json'
import SingleWorkProgressV4 from './SingleWorkProgressV4';

const WorkProgressV4 = () => {
    return (
        <>
            <section className="work-progress-area-four rel z-2">
                <div className="container">
                    <div className="work-progress-inner progress-bg-line bg-blue text-white br-5 py-85 px-75">
                        <div className="section-title text-center">
                            <span className="sub-title">How We Do</span>
                            <h2>Custom IT Solutions <br />for Your Business</h2>
                        </div>
                        <div className="row">
                            {WorkProgressV1Data.map(progress =>
                                <div className="col-lg-4 col-sm-6" key={progress.id}>
                                    <SingleWorkProgressV4 progress={progress} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkProgressV4;