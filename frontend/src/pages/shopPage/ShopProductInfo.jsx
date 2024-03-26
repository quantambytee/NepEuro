import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ShopProductInfo = () => {

    const handleCart = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <div className="descriptions mb-50">
                <h2>Cooler</h2>
                <div className="rating-review d-flex align-items-center mb-10">
                    <div className="rating mr-5">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <Link to="#">(1 customer review)</Link>
                </div>
                <div className="shop-price">
                    <del><span className="price">100</span></del>
                    <b className="current-price">50</b>
                </div>
                <p>Fortunately, two seasoned digital marketers have a plan to make your brand succeed. In Faster, Smarter, Louder, Aaron Agius and Gián Clancey share the secrets that transformed their two-person agency</p>
                <form className="add-to-cart mr-10 mb-25" onChange={handleCart}>
                    <input type="number" defaultValue="1" min="1" max="20" required autoComplete='off' />
                    <button type="submit" className="theme-btn">Add to Cart</button>
                </form>
                <ul className="product-meta">
                    <li>Category: <Link to="#">Cooler</Link></li>
                    <li>Tags: <Link to="#">cooler</Link> <Link to="#">smart</Link></li>
                </ul>
            </div>
        </>
    );
};

export default ShopProductInfo;