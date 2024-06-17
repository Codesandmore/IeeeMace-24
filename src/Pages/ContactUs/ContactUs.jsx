import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
            <div className="row">
                <div className="col-md-7 mx-auto">
                    <h1 className="section-heading">Contact Us</h1>
                
                <form id="request" className="main_form">
                    <div className="row">
                    <div className="col-md-12">
                        <input
                        className="contactus"
                        placeholder="Name"
                        type="type"
                        name=" Name"
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                        className="contactus"
                        placeholder="Phone Number"
                        type="type"
                        name="Phone Number"
                        />
                    </div>
                    <div className="col-md-12">
                        <input
                        className="contactus"
                        placeholder="Email"
                        type="type"
                        name="Email"
                        />
                    </div>
                    <div className="col-md-12">
                        <textarea
                        className="textarea"
                        placeholder="Message"
                        type="type"
                        Message="Name"
                        ></textarea>
                    </div>
                    <div className="col-md-12">
                        <button className="send_btn">Send Now</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Contact;
