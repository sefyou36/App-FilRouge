import React from "react";
import "./ContactUs.scss";

function ContactUs() {
  return (
    <section className="contact-us">
      <div className="contactUs__container">
        <div className="contactUs__left">
          <div className="contactUs__left__header">
            <h3>Contact Now</h3>
            <h1>Get In Touch with us</h1>
          </div>
          <form>
            <div className="inputRowOne">
              <div className="name">
                <input type="text" name="name" placeholder="Your Name" />
              </div>

              <div className="email">
                <input type="email" name="email" placeholder="Enter Email" />
              </div>
            </div>
            <div className="inputRowTwo">
              <div className="subject">
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className="phone">
                <input type="text" name="phone" placeholder="Phone" />
              </div>
            </div>
            <div className="message">
              <textarea name="message" placeholder="Your Message" />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contactUs__right">
          <div className="background"></div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
