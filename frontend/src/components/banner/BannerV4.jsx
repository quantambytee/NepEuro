import React from "react";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link";
import shape4 from "/images/hero/hero-four-shape.png";
import { toast } from "react-toastify";
import heroImage from "../../assets/images/Business2.png";

const BannerV4 = () => {
  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks For Your Email!");
  };

  return (
    <>
      <section
        className="hero-section-three bgs-cover overlay pt-160 rpt-140 pb-80 rpb-100"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content text-white rmb-65">
                <Fade bottom delay={300}>
                  <span className="sub-title d-block">
                    EMPOWER YOUR BUSINESS
                  </span>
                </Fade>
                <Fade bottom delay={500}>
                  <h1 className="mt-20">
                    Business Development Made Easy With Our Expertise
                  </h1>
                </Fade>
                <Fade bottom delay={800}>
                  <div className="hero-btns mt-35">
                    <Link to="/contact-us#" className="theme-btn mr-15 mb-10">
                      meet with us
                    </Link>
                    <Link to="#about" className="theme-btn style-five mb-10">
                      learn more
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
            <div className="col-lg-5">
              <Fade right delay={500}>
                <div className="hero-section-form bg-white p-50">
                  <div className="section-title">
                    <h2 className="mb-0">Free Consultation</h2>
                  </div>
                  <p>Get Free Consultation For Your Business Solutions</p>
                  <form
                    className="hero-form mt-20"
                    name="hero-form"
                    onSubmit={handleForm}
                  >
                    <div className="form-group">
                      <label htmlFor="name">Your Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Timothy K. Lukas"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="support@gmail.com"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Subject</label>
                      <select id="service" name="service">
                        <option value="default" defaultValue>
                          I Would Like to Discuss
                        </option>
                        <option value="about">About</option>
                        <option value="contact">Contact</option>
                        <option value="team">Team</option>
                      </select>
                    </div>
                    <button type="submit" className="theme-btn">
                      Get Free Consultation
                    </button>
                  </form>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="hero-line-shape">
          <img src={shape4} alt="Hero line shape" />
        </div>
      </section>
    </>
  );
};

export default BannerV4;
