import React from 'react';
import { toast } from 'react-toastify';

const ContactV1Form = () => {

    const handleMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for Your Message")
    }

    return (
        <>
            <form className="contact-form" name="contact-form" onSubmit={handleMessage}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder="Name" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="email">Your email address</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Email" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="number">Your phone number</label>
                            <input type="number" id="number" name="number" className="form-control no-arrows" placeholder="Phone Number" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="service">Service Required</label>
                            <select id="service" name="service">
                                <option value="default" defaultValue>Service</option>
                                <option value="about">About</option>
                                <option value="contact">Contact</option>
                                <option value="team">Team</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <textarea name="comments" id="comments" className="form-control" rows="4" placeholder="Let us know what you need." autoComplete='off' required></textarea>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <button type="submit" className="theme-btn">Send Message</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactV1Form;