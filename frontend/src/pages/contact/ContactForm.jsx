import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {

    const handleMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Message")
    }

    return (
        <>
            <form className="comment-form mt-35" onSubmit={handleMessage}>
                <div className="row clearfix justify-content-center">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="full-name"><i className="far fa-user"></i></label>
                            <input type="text" id="full-name" name="full-name" className="form-control" placeholder="Your Full Name" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="email"><i className="far fa-envelope"></i></label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label htmlFor="comments"><i className="fas fa-pencil-alt"></i></label>
                            <textarea name="comments" id="comments" className="form-control" rows="4" placeholder="Write Message" autoComplete='off' required></textarea>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group mb-0">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;