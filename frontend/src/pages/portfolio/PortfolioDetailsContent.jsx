import React from 'react';
import portfolioDetails from '/images/gallery/portfolio-details.jpg'
import portfolioThumb1 from '/images/gallery/portfolio-middle-1.jpg'
import portfolioThumb2 from '/images/gallery/portfolio-middle-2.jpg'
import ContactV2Thumb from '../../components/contact/ContactV2Thumb';
import PortfolioDetailsData from '../../jsonData/PortfolioDetailsData.json'
import SinglePortfolioDetailsContent from './SinglePortfolioDetailsContent';
import PortfolioNextPrev from './PortfolioNextPrev';
import PortfolioRelatedProject from './PortfolioRelatedProject';

const PortfolioDetailsContent = () => {
    return (
        <>
            <section className="portfolio-details pt-120 rpt-100 pb-90 rpb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-content rmb-55">
                                <div className="image mb-35">
                                    <img src={portfolioDetails} alt="Portfolio Details" />
                                </div>
                                <h2>Software License Management</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </p>
                                <div className="row mt-45">
                                    <div className="col-sm-6">
                                        <div className="image mb-30">
                                            <img src={portfolioThumb1} alt="Portfolio" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="image mb-30">
                                            <img src={portfolioThumb2} alt="Portfolio" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-sidebar">
                                <div className="widget widget-portfolio-info bg-lighter p-45 wow fadeInUp delay-0-3s">
                                    <h3 className="widget-title">Project Details</h3>
                                    <ul>
                                        {PortfolioDetailsData.map(details =>
                                            <SinglePortfolioDetailsContent details={details} key={details.id} />
                                        )}
                                    </ul>
                                </div>
                                <ContactV2Thumb />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PortfolioNextPrev />
            <PortfolioRelatedProject />
        </>
    );
};

export default PortfolioDetailsContent;