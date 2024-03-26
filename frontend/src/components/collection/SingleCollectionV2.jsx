import React from 'react';

const SingleCollectionV2 = ({ collection }) => {
    const { thumb, title, items } = collection

    return (
        <>
            <div className="collection-category-item wow fadeInUp delay-0-2s">
                <div className="category-images">
                    <div className="row">
                        <img src={`/images/categories/${thumb}`} alt="Category" />
                    </div>
                </div>
                <div className="title-dots">
                    <div className="content">
                        <h4>{title}</h4>
                        <span className="items text-light">{items} Items</span>
                    </div>
                    <div className="dots"><span></span><span></span><span></span></div>
                </div>
            </div>
        </>
    );
};

export default SingleCollectionV2;