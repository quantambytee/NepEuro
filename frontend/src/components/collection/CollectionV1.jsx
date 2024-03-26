import React, { useState } from 'react';
import SingleCollectionV1 from './SingleCollectionV1';
import CollectionData from '../../jsonData/CollectionData'

const CollectionV1 = () => {

    const [items, setItems] = useState(CollectionData)
    const [activeCategory, setActiveCategory] = useState('all')

    const filterItem = (categoryItem) => {
        const updatedItems = CollectionData.filter((currentElement) => {
            return currentElement.category === categoryItem
        })

        setItems(updatedItems)
        setActiveCategory(categoryItem);
    }

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
                            <li className={activeCategory === 'all' ? 'active' : ''} onClick={() => { setItems(CollectionData); setActiveCategory('all'); }} >All NFT</li>
                            <li className={activeCategory === 'collectibles' ? 'active' : ''} onClick={() => filterItem('collectibles')} >Collectibles</li>
                            <li className={activeCategory === 'game' ? 'active' : ''} onClick={() => filterItem('game')} >Game Assets</li>
                            <li className={activeCategory === 'virtual' ? 'active' : ''} onClick={() => filterItem('virtual')} >Virtual Land</li>
                            <li className={activeCategory === 'fashion' ? 'active' : ''} onClick={() => filterItem('fashion')} >NFT Fashion</li>
                            <li className={activeCategory === 'artworks' ? 'active' : ''} onClick={() => filterItem('artworks')} >Artworks</li>
                            <li className={activeCategory === 'music' ? 'active' : ''} onClick={() => filterItem('music')} >Music</li>
                            <li className={activeCategory === 'sports' ? 'active' : ''} onClick={() => filterItem('sports')} >Sports</li>
                            <li className={activeCategory === 'cartoon' ? 'active' : ''} onClick={() => filterItem('cartoon')} >Cartoon</li>
                        </ul>
                    </div>

                    <div className="row collection-active">
                        {items.map(collection =>
                            <div className="col-xl-3 col-lg-4 col-sm-6 item" key={collection.id}>
                                <SingleCollectionV1 collection={collection} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CollectionV1;