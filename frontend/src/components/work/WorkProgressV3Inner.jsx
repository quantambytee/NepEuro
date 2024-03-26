import React from 'react';
import WorkProgressV1Data from '../../jsonData/WorkProgressV1Data.json'
import SingleWorkProgressV3 from './SingleWorkProgressV3';

const WorkProgressV3Inner = () => {
    return (
        <>
            <div className="work-progress-inner-three">
                <div className="row">
                    {WorkProgressV1Data.map(progress =>
                        <div className="col-lg-4 col-sm-6" key={progress.id}>
                            <SingleWorkProgressV3 progress={progress} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default WorkProgressV3Inner;