import React from 'react';
import ShopSearch from './ShopSearch';
import ShopNews from './ShopNews';
import ShopInfo from './InfoWidget';
import ShopData from '../../jsonData/ShopData.json'
import SingleShopItem from './SingleShopItem';
import ShopTabContent from './ShopTabContent';
import ShopProductInfo from './ShopProductInfo';
import ShopProductCarousel from './ShopProductCarousel';


const ShopDetailsContent = () => {
    return (
        <>
            <section className="shop-details-area py-120 rpy-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shop-details-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ShopProductCarousel />
                                    </div>
                                    <div className="col-md-6">
                                        <ShopProductInfo />
                                    </div>
                                </div>
                                <ShopTabContent />
                                <div className="section-title mb-45">
                                    <h2>Related products</h2>
                                </div>
                                <div className="row">
                                    {ShopData.slice(0, 3).map(items =>
                                        <div className="col-md-4 col-6 col-small" key={items.id}>
                                            <SingleShopItem items={items} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-9">
                            <div className="shop-sidebar rmt-55">
                                <ShopSearch />
                                <ShopNews />
                                <ShopInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopDetailsContent;