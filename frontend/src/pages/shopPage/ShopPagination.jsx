import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ShopPagination = () => {
    return (
        <>
            <ul className="pagination flex-wrap mt-40">
                <li className="page-item disabled">
                    <span className="page-link"><i className="fas fa-chevron-left"></i></span>
                </li>
                <li className="page-item active">
                    <span className="page-link">
                        01
                        <span className="sr-only">(current)</span>
                    </span>
                </li>
                <li className="page-item"><Link to="#" className="page-link">02</Link></li>
                <li className="page-item">
                    <Link to="#" className="page-link"><i className="fas fa-chevron-right"></i></Link>
                </li>
            </ul>
        </>
    );
};

export default ShopPagination;