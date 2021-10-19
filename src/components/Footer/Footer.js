import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faSkull, faCalendarCheck, faAddressBook, faCheck } from '@fortawesome/free-solid-svg-icons'



import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Medilab</h3>
                                <p>A108 Adam Street <br />
                                    Gaibandha, NY 535022 <br />
                                    Bangladesh <br />
                                    <strong>Phone:</strong> +88 5589 55488 55 <br />
                                    <strong>Email:</strong> Medilab@example.com <br />
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>


                            <div className="container d-md-flex py-4">
                                <div className="me-md-auto text-center text-md-start">
                                    <div className="copyright">
                                        &copy; Copyright <strong><span>Medilab</span></strong>. All Rights Reserved
                                        </div>
                                    <div className="credits">
                                    </div>
                                </div>
                                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                                    <a href="#" className="twitter"><FontAwesomeIcon icon={faCamera} /></a>
                                    <a href="#" className="facebook"><FontAwesomeIcon icon={faCheck} /></a>
                                    <a href="#" className="instagram"><FontAwesomeIcon icon={faSkull} /></a>
                                    <a href="#" className="google-plus"><FontAwesomeIcon icon={faCalendarCheck} /></a>
                                    <a href="#" className="linkedin"><FontAwesomeIcon icon={faAddressBook} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;