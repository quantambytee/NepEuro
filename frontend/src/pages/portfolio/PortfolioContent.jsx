import React, { useEffect, useRef, useState } from 'react';
import SinglePortfolioContent from './SinglePortfolioContent';
import PortfolioData from '../../jsonData/PortfolioData.json'
import Isotope from 'isotope-layout';

const PortfolioContent = () => {

    const galleryRef = useRef(null);
    const [filter, setFilter] = useState('*')

    useEffect(() => {
        const iso = new Isotope(galleryRef.current, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
            filter: filter,
        });

        return () => {
            iso.destroy();
        };
    }, [filter]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    useEffect(() => {
        handleFilterChange('*');
    }, []);

    return (
        <>
            <section className="portfolio-section pt-115 rpt-95 pb-90 rpb-70">
                <div className="container">
                    <ul className="portfolio-filter mb-45">
                        <li onClick={() => handleFilterChange('*')} >Show All</li>
                        <li onClick={() => handleFilterChange('.software')}>Software</li>
                        <li onClick={() => handleFilterChange('.mobile')} >Mobile</li>
                        <li onClick={() => handleFilterChange('.development')} >Development</li>
                        <li onClick={() => handleFilterChange('.marketing, .software')} >Marketing</li>
                        <li onClick={() => handleFilterChange('.engineering')} >Engineering</li>
                    </ul>
                    <div className="row portfolio-wrap" ref={galleryRef}>
                        {PortfolioData.map(portfolio =>
                            <div className={`col-lg-4 col-sm-6 portfolio-item ${portfolio.category}`} key={portfolio.id}>
                                <SinglePortfolioContent portfolio={portfolio} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioContent;