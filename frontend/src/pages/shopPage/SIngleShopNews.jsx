import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SIngleShopNews = ({ news }) => {
    const { thumb2, name, newPrice } = news

    return (
        <>
            <div className="widget-product-item">
                <Link to="/shop-details#"><img src={`/images/shop/${thumb2}`} alt="Product" /></Link>
                <div className="widget-product-content">
                    <h6><Link to="/shop-details#">{name}</Link></h6>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <span className="shop-price">
                        <span className="price">{newPrice}</span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default SIngleShopNews;