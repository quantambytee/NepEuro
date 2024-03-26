import React from 'react';

const ShopSearch = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="widget widget-search wow fadeInUp delay-0-2s">
                <h3 className="widget-title">Product Search</h3>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Search Products.." className="searchbox" autoComplete='off' required />
                    <button type="submit" className="search-button fa fa-search"></button>
                </form>
            </div>
        </>
    );
};

export default ShopSearch;