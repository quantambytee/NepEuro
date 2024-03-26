import React from 'react';
import ProjectV1Data from '../../jsonData/ProjectV1Data.json'
import SingleProjectV1 from './SingleProjectV1';

const ProjectV1 = () => {
    return (
        <>
            <section className="project-section pt-115 rpt-95 pb-90 rpb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="section-title text-center mb-70">
                                <span className="sub-title">Our Project</span>
                                <h2>Our Latest Digital Security Projects Solution</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {ProjectV1Data.map(project =>
                            <div className="col-xl-3 col-sm-6" key={project.id}>
                                <SingleProjectV1 project={project} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectV1;