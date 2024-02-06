import React from 'react'
import './Footer.css'
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
    return (
        <>
            <div className="footer-main">
                <div className="footer-bg">
                    <div className="line-1">
                        <li><a href="">Home</a></li>
                        <li><a href="">Plants</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </div>
                    <div className="box-2">
                        <div className="line-2">
                            <h4>Subscribe to our newsletter</h4>
                        </div>
                        <div className="line-3">
                            <div>
                                <input type="text" placeholder='Your email address...' />
                            </div>
                            <div>
                                <button>Subscribe</button>
                            </div>
                        </div>
                        <div className="line-4">
                            <a href=""><Instagram size={24} color="#ab9b9b" strokeWidth={1.5} /></a>
                            <a href=""><Facebook size={24} color="#ab9b9b" strokeWidth={1.5} /></a>
                            <a href=""><Twitter size={24} color="#ab9b9b" strokeWidth={1.5} /></a>
                        </div>

                        <div className="footer-bottom">
                            <p className='para'>
                                © 2023 Plant Shop. Powered by Niihar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer