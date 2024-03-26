import React from 'react';

const SingleSellerV1 = ({ seller }) => {
    const { number, thumb, icon, name, items } = seller

    return (
        <>
            <div className="seller-item">
                <span className="number">{number}</span>
                <div className="image">
                    <img src={`/images/sellers/${thumb}`} alt="Seller" />
                    <span className="check"><i className={icon}></i></span>
                </div>
                <h5>{name}</h5>
                <span className="items">{items} items</span>
            </div>
        </>
    );
};

export default SingleSellerV1;