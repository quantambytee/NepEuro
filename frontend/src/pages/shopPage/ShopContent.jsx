import React from 'react';
import ShopData from '../../jsonData/ShopData.json'
import SingleShopItem from './SingleShopItem';
import { HashLink as Link } from 'react-router-hash-link';
import ShopPagination from './ShopPagination';
import ShopSearch from './ShopSearch';
import ShopNews from './ShopNews';
import WidgetInfo from './InfoWidget';

const ShopContent = () => {
    return (
        <>
            <section className="shop-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shop-grid-content pt-120 rpt-100 pb-110 rpb-70">
                                <div className="shop-shorter mb-40">
                                    <ul className="grid-list">
                                        <li><Link to="#" className="active"><i className="fas fa-border-all"></i></Link></li>
                                        <li><Link to="#"><i className="fas fa-list-ul"></i></Link></li>
                                    </ul>
                                    <div className="sort-text">
                                        <span>Showing 1-9 of 11 Result</span>
                                    </div>
                                    <div className="products-dropdown">
                                        <select>
                                            <option value="default">Default Sorting</option>
                                            <option value="new" selected >Short by Latest</option>
                                            <option value="old">Oldest Product</option>
                                            <option value="hight-to-low">High To Low</option>
                                            <option value="low-to-high">Low To High</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    {ShopData.map(items =>
                                        <div className="col-md-4 col-6 col-small" key={items.id}>
                                            <SingleShopItem items={items} />
                                        </div>
                                    )}
                                </div>
                                <ShopPagination />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-9">
                            <div className="shop-sidebar mt-120 rmt-0 rmb-100">
                                <ShopSearch />
                                <ShopNews />
                                <WidgetInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopContent;