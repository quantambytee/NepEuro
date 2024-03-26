import React from 'react';
import ShopReviewForm from './ShopReviewForm';
import reviewer from '/images/shop/reviewer-1.png'
import { HashLink as Link } from 'react-router-hash-link';

const ShopTabContent = () => {
    return (
        <>
            <ul className="nav product-information-tab mb-30">
                <li><a data-bs-toggle="tab" data-bs-target="#details" className="active show">Description</a></li>
                <li><a data-bs-toggle="tab" data-bs-target="#review">Review (1)</a></li>
            </ul>
            <div className="tab-content mb-55">
                <div className="tab-pane active fade show" id="details" role="tabpanel">
                    <h2>Description</h2>
                    <p>Fortunately, two seasoned digital marketers have a plan to make your brand succeed. In Faster, Smarter, Louder, Aaron Arius, and IAN Blanca share the secrets that transformed their two-person agency.</p>
                    <p>In today’s online world, a brand’s success lies in combining technological planning and social strategies to draw customers in–and keep them coming back for more. Without a strong digital platform, time and money are
                        wasted, content sits unnoticed, and prospective clients disappear.</p>
                </div>
                <div className="tab-pane fade" id="review" role="tabpanel">
                    <h2>1 review for Cooler</h2>
                    <div className="review-item mb-55 pt-10">
                        <div className="reviewer-img">
                            <img src={reviewer} alt="Reviewer Image" />
                        </div>
                        <div className="reviewer-review">
                            <div className="reviewer-header">
                                <h6>Robert Down</h6>
                                <span className="date">7 Jan, 2022</span>
                                <div className="ratings">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor purus. Sed vel lacus.</p>
                            <Link to="#" className="reply">Reply</Link>
                        </div>
                    </div>
                    <ShopReviewForm />
                </div>
            </div>
        </>
    );
};

export default ShopTabContent;