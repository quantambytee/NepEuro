import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleShopItem = ({ items }) => {
    const { thumb, name, oldPrice, newPrice } = items

    return (
        <>
            <div className="product-item">
                <div className="image">
                    <span className="sale">Sale!</span>
                    <img src={`/images/shop/${thumb}`} alt="Product" />
                    <Link to="/shop-details#" className="theme-btn style-six">Add to cart</Link>
                </div>
                <div className="title-price">
                    <h5><Link to="/shop-details#">{name}</Link></h5>
                    <span className="shop-price">
                        <del><span className="price me-1">{oldPrice}</span></del>
                        <b className="current-price">{newPrice}</b>
                    </span>
                </div>
                <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </>
    );
};

export default SingleShopItem;