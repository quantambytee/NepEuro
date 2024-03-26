import React from 'react';
import ShopData from '../../jsonData/ShopData.json'
import SIngleShopNews from './SIngleShopNews';

const ShopNews = () => {
    return (
        <>
            <div className="widget widget-products">
                <h3 className="widget-title">Recent News</h3>
                <div className="widget-products-wrap">
                    {ShopData.slice(0, 5).map(news =>
                        <SIngleShopNews news={news} key={news.id} />
                    )}

                </div>
            </div>
        </>
    );
};

export default ShopNews;