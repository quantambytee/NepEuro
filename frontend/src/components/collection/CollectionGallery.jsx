import Isotope from 'isotope-layout';
import React, { useEffect, useRef, useState } from 'react';
import CollectionData from '../../jsonData/CollectionData'
import SingleCollectionGallery from '../collection/SingleCollectionGallery';

const CollectionGallery = () => {
    const galleryRef = useRef(null);
    const [filter, setFilter] = useState('*')

    useEffect(() => {
        const iso = new Isotope(galleryRef.current, {
            itemSelector: '.gallery-item',
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
            <section className="collection-section rel z-1 pt-115 pb-90 rpt-95 rpb-70">
                <div className="container">
                    <div className="collection-filter-area mb-60">
                        <div className="section-title mb-45">
                            <span className="sub-title">Our Collections</span>
                            <h2>Explore Collections</h2>
                        </div>
                        <ul className="collection-filter">
                            <li onClick={() => handleFilterChange('*')} >All NFT</li>
                            <li onClick={() => handleFilterChange('.collectibles, .virtual, .sports')} >Collectibles</li>
                            <li onClick={() => handleFilterChange('.game, .cartoon')} >Game Assets</li>
                            <li onClick={() => handleFilterChange('.virtual, .music, .artworks')} >Virtual Land</li>
                            <li onClick={() => handleFilterChange('.fashion, .sports ')} >NFT Fashion</li>
                            <li onClick={() => handleFilterChange('.artworks, .cartoon, .game')} >Artworks</li>
                            <li onClick={() => handleFilterChange('.music, .collectibles')} >Music</li>
                            <li onClick={() => handleFilterChange('.sports, .virtual, .game')} >Sports</li>
                            <li onClick={() => handleFilterChange('.cartoon, .collectibles')} >Cartoon</li>
                        </ul>
                    </div>
                    <div className='row' ref={galleryRef}>
                        {CollectionData.map((collection) => (
                            <div className={`col-xl-3 col-lg-4 col-sm-6 gallery-item ${collection.category}`} key={collection.id}>
                                <SingleCollectionGallery collection={collection} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CollectionGallery;