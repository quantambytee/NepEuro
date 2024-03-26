import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';

const SingleCollectionGallery = ({ collection }) => {
    const { thumb, title, bid, author, name, designation, wish, icon } = collection

    return (
        <>
            <Fade>
                <div className="action-item">
                    <div className="image">
                        <img src={`/images/actions/${thumb}`} alt="Collection" />
                    </div>
                    <div className="content">
                        <div className="bid-dots">
                            <div className="bid">Bid : <b>{bid}</b></div>
                            <div className="dots"><span></span><span></span><span></span></div>
                        </div>
                        <h4>{title}</h4>
                        <div className="author-wish">
                            <div className="author">
                                <img src={`/images/actions/${author}`} alt="Author" />
                                <div className="description">
                                    <h6>{name}</h6>
                                    <span>{designation}</span>
                                </div>
                            </div>
                            <Link to="#" className="wish"><i className={icon}></i><span>{wish}k</span></Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleCollectionGallery;