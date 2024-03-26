import React from 'react';
import { toast } from 'react-toastify';

const BlogCommentForm = () => {

    const handleMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Comment")
    }

    return (
        <>
            <div className="comment-form-wrap mt-60">
                <h3 className="comment-title mb-55">Submit your Comment</h3>
                <form className="comment-form" onSubmit={handleMessage} >
                    <div className="row clearfix justify-content-center">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="full-name"><i className="far fa-user"></i></label>
                                <input type="text" id="full-name" name="full-name" className="form-control" placeholder="Your Full Name" required autoComplete='off' />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="email"><i className="far fa-envelope"></i></label>
                                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" required autoComplete='off' />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label htmlFor="comments"><i className="fas fa-pencil-alt"></i></label>
                                <textarea name="comments" id="comments" className="form-control" rows="4" placeholder="Write Message" required autoComplete='off'></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group">
                                <button type="submit" className="theme-btn">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BlogCommentForm;