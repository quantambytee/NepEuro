import React from 'react';

const SearchWidget = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="widget widget-search">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Search" className="searchbox" autoComplete='off' required />
                    <button type="submit" className="searchbutton fa fa-search"></button>
                </form>
            </div>
        </>
    );
};

export default SearchWidget;