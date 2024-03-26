import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ContactForm from "./ContactForm";

const ContactContent = () => {
  return (
    <>
      <section className="contact-page py-120 rpy-100">
        <div className="container">
          <div className="contact-info-area mb-80">
            <div className="contact-info-item">
              <i className="far fa-map"></i>
              <p>Schlossstr.30 16909 OT Freyenstein Wittstock/Dosse, Germany</p>
            </div>
            <div className="contact-info-item">
              <i className="far fa-envelope"></i>
              <p>
                <a href="mailto:Ssinha@Nepeuro.Com">Ssinha@Nepeuro.Com</a>{" "}
                <br />
                {/* <Link to="#">www.restly.net</Link> */}
              </p>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-phone-alt"></i>
              <p>
                <a href="tel:+49 17664892368">+49 17664892368</a> <br />
                {/* <a href="tel:+0234(456)9864">+0234 (456) 9864</a> */}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="contact-form-left bgs-cover h-100"
                style={{
                  backgroundImage: "url(/images/contact/contact-page.jpg)",
                }}
              >
                <h2>Leave A Message</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form ml-40 rml-0 rmt-55">
                <h3 className="comment-title mb-35">Send A Message</h3>
                <p>
                  Avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
