import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleAction = ({ action }) => {
    const { thumb, date, hours, minute, second, bid, author, name, designation, wish, icon } = action

    return (
        <>
            <div className="action-item">
                <div className="image">
                    <img src={`/images/actions/${thumb}`} alt="Action" />
                    <ul className="count-down" data-date="Jun 30, 2022 00:00:00">
                        <li><span className="days">{date}</span>days</li>
                        <li><span className="hours">{hours}</span>Hrs</li>
                        <li><span className="minutes">{minute}</span>Mins</li>
                        <li><span className="seconds">{second}</span>Sec</li>
                    </ul>
                </div>
                <div className="content">
                    <div className="bid-dots">
                        <div className="bid">Bid : <b>{bid}</b></div>
                        <div className="dots"><span></span><span></span><span></span></div>
                    </div>
                    <h4>Fictional character</h4>
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
        </>
    );
};

export default SingleAction;