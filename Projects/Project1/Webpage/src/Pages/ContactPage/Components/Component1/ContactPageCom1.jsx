import React from 'react';
import './ContactPageCom1.css';
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';

export default function ContactPageCom1() {
    return (
        <>
            <div className="contact-page-main">
                <div className="contact-page-pad">
                    <div className="container">
                        <div className="contact-page-flex">
                            <div className="contact-page-leftbox">
                                <div className="leftbox-contents">
                                    <div className="contact-leftbox-line1">
                                        <h1>Get In Touch</h1>
                                    </div>
                                    <div className="contact-leftbox-line2">
                                        <p>Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam mollis ut montes, dui scelerisque ornare.</p>
                                    </div>

                                    <div className="contact-leftbox-line3">
                                        <div className="contact-leftbox-line3-flex">
                                            <div className="logo">
                                                <MapPin color="#44960d" />
                                            </div>
                                            <div className="visit-us">
                                                <div style={{ fontFamily: "emoji" }}>VISIT US</div>
                                                <div style={{ fontWeight: "bold", color: "#646060" }}>123 Demo St, San Francisco, CA 45678, United States</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-leftbox-line4">
                                        <div className="contact-leftbox-line4-flex">
                                            <div className="logo">
                                                <Phone color="#44960d" />
                                            </div>
                                            <div className="call-us">
                                                <div style={{ fontFamily: "emoji" }}>CALL US</div>
                                                <div style={{ fontWeight: "bold", color: "#646060" }}>+1 123-456-7890</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="contact-leftbox-line5">
                                        <div className="contact-leftbox-line5-flex">
                                            <div className="logo">
                                                <Mail color="#44960d" />
                                            </div>
                                            <div className="email-us">
                                                <div style={{ fontFamily: "emoji" }}>EMAIL US</div>
                                                <div style={{ fontWeight: "bold", color: "#646060" }}>mail@example.com</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lin">
                                        <hr />
                                    </div>

                                    <div className="follow-us">
                                        <div style={{ fontFamily: "emoji", paddingTop: "20px" }}>
                                            FOLLOW US
                                        </div>
                                        <div className="social-media-icons">
                                            <div className="insta-logo">
                                                <Instagram color="#000000" />
                                            </div>

                                            <div className="facebook-logo">
                                                <Facebook color="#000000" />
                                            </div>
                                            <div className="youtube-logo">
                                                <Youtube color="#000000" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="contact-page-rightbox">
                                <div className="contact-rightbox-pad">
                                    <div className="rightbox-content">
                                        <div className="right-box-heading">
                                            <h2 style={{ paddingBottom: "10px" }}>
                                                Drop us a line or two
                                            </h2>
                                        </div>
                                        <div className="form-box">
                                            <div className="name-box">
                                                <li><label htmlFor="" style={{ fontWeight: "bold", color: "rgb(74 69 69)" }}>Name </label></li>
                                                <li><input type="text" placeholder='Full name' style={{ width: "500px", height: "30px", padding: "25px 10px 25px 10px", backgroundColor: "rgb(249 243 243)", outline: "none", border: "0.5px solid #e7dada" }} /></li>
                                            </div>
                                            <div className="Email-box">
                                                <li><label htmlFor="" style={{ fontWeight: "bold", color: "rgb(74 69 69)" }}>Email </label></li>
                                                <li><input type="email" placeholder='Email address' style={{ width: "500px", height: "30px", padding: "25px 10px 25px 10px", backgroundColor: "rgb(249 243 243)", outline: "none", border: "0.5px solid #e7dada" }} /></li>
                                            </div>
                                            <div className="Comment-box">
                                                <li><label htmlFor="" style={{ fontWeight: "bold", color: "rgb(74 69 69)" }}>Comment or Message </label></li>
                                                <li><input type="text" placeholder='Your message' style={{ width: "500px", height: "30px", padding: "20px 10px 100px 10px", backgroundColor: "rgb(249 243 243)", outline: "none", border: "0.5px solid #e7dada" }} /></li>
                                            </div>
                                            <div className="contact-rightbox-btn">
                                                <button>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
