import React from 'react';
import { toast } from 'react-toastify';

const ShopReviewForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Review")
    }

    return (
        <>
            <form className="review-form" onSubmit={handleSubmit}>
                <h3>Add A Review</h3>
                <div className="row clearfix">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="first_name" className="form-control" placeholder="Full Name" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <textarea name="message" className="form-control" rows="5" placeholder="Write a Comment" required></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="your-rating mb-20 d-flex align-items-center">
                            <h6 className="mb-0 mr-15">Your Rating:</h6>
                            <div className="ratings">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group text-left text-md-right mb-0">
                            <button className="theme-btn br-30" type="submit" >Submit <i className="fas fa-angle-double-right"></i></button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ShopReviewForm;